import os
import re
import shutil
import subprocess
import base64

SRC_DIR = 'src/assets/images'
DEST_DIR = 'public/images'
PUB_DIR = 'public'

os.makedirs(DEST_DIR, exist_ok=True)

def optimize_jpeg(src_path, dest_path):
    orig_size = os.path.getsize(src_path)
    tmp_path = dest_path + '.tmp.jpg'
    
    # Try with quality 80 and max dimensions 1600
    cmd = [
        'convert', src_path,
        '-strip',
        '-resize', '1600x1600>',
        '-quality', '80',
        '-sampling-factor', '4:2:0',
        '-interlace', 'Plane',
        tmp_path
    ]
    subprocess.run(cmd, check=True)
    new_size = os.path.getsize(tmp_path)
    
    # If not smaller, try quality 75
    if new_size >= orig_size:
        cmd_fallback = [
            'convert', src_path,
            '-strip',
            '-resize', '1600x1600>',
            '-quality', '75',
            '-sampling-factor', '4:2:0',
            '-interlace', 'Plane',
            tmp_path
        ]
        subprocess.run(cmd_fallback, check=True)
        new_size = os.path.getsize(tmp_path)
    
    # If still not smaller, just copy original with metadata stripped
    if new_size >= orig_size:
        cmd_strip_only = ['convert', src_path, '-strip', tmp_path]
        subprocess.run(cmd_strip_only, check=True)
        new_size = os.path.getsize(tmp_path)
        if new_size >= orig_size:
            shutil.copy2(src_path, dest_path)
            if os.path.exists(tmp_path):
                os.remove(tmp_path)
            return orig_size, orig_size
            
    os.replace(tmp_path, dest_path)
    return orig_size, os.path.getsize(dest_path)

def optimize_webp(src_path, dest_path):
    orig_size = os.path.getsize(src_path)
    tmp_path = dest_path + '.tmp.webp'
    
    cmd = [
        'convert', src_path,
        '-strip',
        '-resize', '1600x1600>',
        '-quality', '80',
        '-define', 'webp:method=6',
        tmp_path
    ]
    subprocess.run(cmd, check=True)
    new_size = os.path.getsize(tmp_path)
    if new_size < orig_size:
        os.replace(tmp_path, dest_path)
        return orig_size, new_size
    else:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        shutil.copy2(src_path, dest_path)
        return orig_size, orig_size

def optimize_svg(src_path, dest_path):
    orig_size = os.path.getsize(src_path)
    with open(src_path, 'r', encoding='utf-8') as f:
        svg_text = f.read()

    matches = list(re.finditer(r'xlink:href="data:image/png;base64,([^"]+)"', svg_text))
    new_svg = svg_text
    for i, match in enumerate(matches):
        raw = base64.b64decode(match.group(1))
        in_png = f'/tmp/svg_in_{i}.png'
        out_png = f'/tmp/svg_opt_{i}.png'
        with open(in_png, 'wb') as f:
            f.write(raw)
        
        subprocess.run(['convert', in_png, '-resize', '1600x>', '-strip', out_png], check=True)
        with open(out_png, 'rb') as f:
            opt_b64 = base64.b64encode(f.read()).decode('ascii')
        new_svg = new_svg.replace(match.group(1), opt_b64)

    # Strip excess spaces between tags
    new_svg = re.sub(r'>\s+<', '><', new_svg).strip()
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(new_svg)
    
    new_size = os.path.getsize(dest_path)
    if new_size >= orig_size:
        shutil.copy2(src_path, dest_path)
        return orig_size, orig_size
    return orig_size, new_size

def main():
    files = sorted(os.listdir(SRC_DIR))
    print(f"Processing {len(files)} assets from {SRC_DIR} into {DEST_DIR}...")
    
    results = []
    
    for filename in files:
        src_path = os.path.join(SRC_DIR, filename)
        if os.path.isdir(src_path):
            continue
            
        dest_path = os.path.join(DEST_DIR, filename)
        ext = os.path.splitext(filename)[1].lower()
        
        if ext in ['.jpg', '.jpeg']:
            orig, new = optimize_jpeg(src_path, dest_path)
        elif ext == '.webp':
            orig, new = optimize_webp(src_path, dest_path)
        elif ext == '.svg':
            orig, new = optimize_svg(src_path, dest_path)
        else:
            shutil.copy2(src_path, dest_path)
            orig = os.path.getsize(src_path)
            new = os.path.getsize(dest_path)
            
        saved_pct = (1 - new / orig) * 100 if orig > 0 else 0
        results.append((filename, orig, new, saved_pct))
        print(f"✓ {filename:<38} | {orig/1024:>6.1f} KB -> {new/1024:>6.1f} KB ({saved_pct:>5.1f}% saved)")

    # Also sync the optimized versions back to src/assets/images and public/ root
    print("\nSynchronizing optimized files across src/assets/images and public/...")
    for filename in os.listdir(DEST_DIR):
        opt_path = os.path.join(DEST_DIR, filename)
        if not os.path.isfile(opt_path):
            continue
            
        src_target = os.path.join(SRC_DIR, filename)
        if os.path.exists(src_target):
            shutil.copy2(opt_path, src_target)
            
        pub_target = os.path.join(PUB_DIR, filename)
        if os.path.exists(pub_target):
            shutil.copy2(opt_path, pub_target)

    # Also place optimized logo in public/branding
    branding_dir = os.path.join(PUB_DIR, 'branding')
    os.makedirs(branding_dir, exist_ok=True)
    if os.path.exists(os.path.join(DEST_DIR, 'eureka-logo.svg')):
        shutil.copy2(os.path.join(DEST_DIR, 'eureka-logo.svg'), os.path.join(branding_dir, 'eureka-logo.svg'))

    total_orig = sum(r[1] for r in results)
    total_new = sum(r[2] for r in results)
    total_saved = (1 - total_new / total_orig) * 100
    print("=" * 70)
    print(f"Total size before : {total_orig / 1024 / 1024:.2f} MB")
    print(f"Total size after  : {total_new / 1024 / 1024:.2f} MB")
    print(f"Total reduction   : {total_saved:.1f}% ({ (total_orig - total_new) / 1024 / 1024:.2f} MB saved)")
    print("=" * 70)

if __name__ == '__main__':
    main()
