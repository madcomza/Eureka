export interface ProjectItem {
  id: string;
  name: string;
  value: string;
  valueColor: 'blue' | 'red';
  image: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  isRed?: boolean;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}
