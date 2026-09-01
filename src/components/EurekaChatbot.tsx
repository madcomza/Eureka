import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Building2,
  HardHat,
  Scale,
  ExternalLink,
  ShieldCheck,
  Zap,
  CornerDownRight
} from 'lucide-react';
import { ActivePage } from '../App';

interface Message {
  id: string;
  sender: 'bot' | 'user' | 'system';
  text: string;
  timestamp: string;
  suggestions?: string[];
  actionLink?: {
    label: string;
    page: ActivePage;
    subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy';
  };
  isEscalationCard?: boolean;
}

interface EurekaChatbotProps {
  onNavigate?: (page: ActivePage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
  currentPage?: ActivePage;
}

interface FAQItem {
  id: string;
  keywords: string[];
  question: string;
  category: 'facilities' | 'construction' | 'consultancy' | 'company' | 'pricing' | 'contact';
  answer: string;
  actionPage?: ActivePage;
  actionSubcategory?: 'all' | 'facilities' | 'construction' | 'consultancy';
  actionLabel?: string;
}

// Comprehensive Eureka Facilities Management Solutions Knowledge Base
const KNOWLEDGE_BASE: FAQItem[] = [
  // 1. Company & Leadership
  {
    id: 'about-company',
    keywords: ['about', 'who is eureka', 'efms', 'company', 'history', 'who are you', 'what is eureka', 'profile'],
    question: 'What is Eureka Facilities Management Solutions (EFMS)?',
    category: 'company',
    answer: 'Eureka Facilities Management Solutions (Pty) Ltd (EFMS) is a premier South African professional advisory and technical facilities management firm with over 13+ years of proven delivery across Southern Africa.\n\nWe provide integrated solutions across 3 core pillars:\n1. Facilities & Property Solutions (Hard & Soft FM, Cleaning, Pest Control, Soil Treatment, Relocations)\n2. Construction Delivery Solutions (Turnkey Project Management, Principal Agency, Freelance PM)\n3. Construction Consultancy (Contract Advisory, Quantity Surveying, Delay Analysis, Claims Resolution)',
    actionPage: 'about',
    actionLabel: 'Read Full Company Profile'
  },
  {
    id: 'monwabisi-makinana',
    keywords: ['monwabisi', 'makinana', 'director', 'founder', 'credentials', 'sacpcmp', 'pmp', 'leadership', 'owner', 'who runs'],
    question: 'Who leads EFMS and what are their qualifications?',
    category: 'company',
    answer: 'EFMS is led by Monwabisi Makinana, Managing Director and Principal Consultant.\n\nKey Professional Credentials:\n• Pr. CPM (Registered Professional Construction Project Manager with SACPCMP)\n• PMP® (Project Management Professional - Project Management Institute)\n• 13+ years of multi-million Rand infrastructure and commercial project management\n• Specialist in JBCC, NEC3/NEC4, FIDIC, and GCC contracts dispute resolution & quantum evaluation.',
    actionPage: 'about',
    actionLabel: 'View Leadership Profile'
  },
  {
    id: 'contact-details',
    keywords: ['contact', 'phone', 'number', 'email', 'address', 'where are you', 'location', 'call', 'office', 'head office'],
    question: 'How can I contact EFMS directly?',
    category: 'contact',
    answer: 'You can reach EFMS through our direct communication channels:\n\n📞 Phone / WhatsApp: +27 74 518 7012\n✉️ General Inquiries: info@eurekasolutions.co.za\n📍 Head Office: Gauteng, South Africa (serving Johannesburg, Pretoria, Centurion, Midrand & nationwide/SADC)\n⏰ Operating Hours: Mon – Fri: 07:30 – 17:30 (with 24/7 emergency response protocols for SLA clients).',
    actionPage: 'contact',
    actionLabel: 'Go to Contact Page'
  },

  // 2. Facilities & Property Solutions
  {
    id: 'facilities-management',
    keywords: ['facilities management', 'fm', 'hard fm', 'soft fm', 'hvac', 'plumbing', 'electrical', 'building maintenance', 'preventative maintenance', 'sla'],
    question: 'What Integrated Facilities Management services do you provide?',
    category: 'facilities',
    answer: 'EFMS provides comprehensive Hard & Soft Facilities Management:\n\n• Planned Preventative Maintenance (PPM) & 24/7 reactive repairs\n• HVAC, mechanical ventilation & air quality maintenance\n• Electrical reticulation, backup power (generators/UPS) & lighting\n• Plumbing, water hygiene, booster pumps & backflow testing\n• Statutory OHS, fire compliance inspections & building audits\n• Custom monthly SLA retainers tailored to corporate portfolios.',
    actionPage: 'facilities-management',
    actionLabel: 'Explore Facilities Management'
  },
  {
    id: 'commercial-cleaning',
    keywords: ['cleaning', 'commercial cleaning', 'deep clean', 'office cleaning', 'hygiene', 'carpet cleaning', 'post-construction cleaning', 'sanitization'],
    question: 'What commercial cleaning solutions do you offer?',
    category: 'facilities',
    answer: 'Our commercial cleaning division delivers spotless hygiene standards:\n\n• Daily & contract office cleaning\n• Industrial warehouse & factory scrub downs\n• Post-construction builder deep cleans & handover sparkle cleans\n• High-traffic carpet extraction & upholstery sanitation\n• High-rise exterior & interior window cleaning\n• Eco-friendly, SABS-approved non-toxic cleaning chemicals.',
    actionPage: 'commercial-cleaning',
    actionLabel: 'View Commercial Cleaning Services'
  },
  {
    id: 'pest-control',
    keywords: ['pest control', 'pest', 'rodent', 'rats', 'cockroach', 'insects', 'fumigation', 'haccp', 'termites', 'infestation'],
    question: 'What commercial pest control services do you deliver?',
    category: 'facilities',
    answer: 'EFMS delivers discreet, certified pest eradication and IPM (Integrated Pest Management):\n\n• Commercial rodent, cockroach, ant, and flying insect control\n• HACCP-compliant food preparation & hospitality treatments\n• Warehouse fumigation & perimeter rodent baiting stations\n• Department of Agriculture (Act 36 of 1947) registered PCO specialists\n• Safe, odorless, low-toxicity chemical applications with compliance audit certificates.',
    actionPage: 'pest-control',
    actionLabel: 'View Pest Control Solutions'
  },
  {
    id: 'soil-treatment',
    keywords: ['soil treatment', 'soil poisoning', 'termite treatment', 'pre construction', 'subterranean termites', 'sans 10124', 'termite guarantee', 'poisoning'],
    question: 'What is Pre-Construction Soil Poisoning and Termite Treatment?',
    category: 'facilities',
    answer: 'Pre-construction soil poisoning is a mandatory chemical barrier applied beneath foundations, slabs, and footings prior to pouring concrete, compliant with SANS 10124 & National Building Regulations.\n\n• Prevents devastating subterranean termite damage to timber and structural elements\n• Certified 5-Year Termite Warranty Certificate issued upon completion\n• Rapid site deployment for developers, builders, and civil contractors.',
    actionPage: 'pre-soil-treatment',
    actionLabel: 'View Soil Treatment Protocols'
  },
  {
    id: 'office-relocation',
    keywords: ['relocation', 'office move', 'business move', 'churn management', 'fitout move', 'moving office', 'it relocation', 'dilapidation'],
    question: 'How does EFMS assist with corporate office relocations?',
    category: 'facilities',
    answer: 'EFMS manages zero-downtime turnkey corporate relocations:\n\n• Phased weekend and after-hours business moves to prevent operational downtime\n• Crate supply, secure document packing & specialized IT disconnect/reconnect\n• Dilapidation reinstatement (returning old premises to original lease condition)\n• Space planning, move-in handover, and post-move snagging support.',
    actionPage: 'office-relocation',
    actionLabel: 'Explore Office Relocations'
  },

  // 3. Construction Delivery Solutions
  {
    id: 'construction-pm',
    keywords: ['construction project management', 'construction pm', 'pm services', 'turnkey construction', 'principal agent', 'employers agent', 'site supervision'],
    question: 'What does your Construction Project Management service entail?',
    category: 'construction',
    answer: 'Our Construction PM services provide end-to-end governance under SACPCMP Pr. CPM standards:\n\n• Feasibility, design coordination, and procurement packaging\n• Contract administration & Principal Agent (JBCC / NEC / FIDIC / GCC)\n• Strict cost, schedule, and quality quality gates\n• Risk mitigation, site inspections, contractor management & statutory sign-offs.',
    actionPage: 'construction-management',
    actionLabel: 'Explore Construction PM'
  },
  {
    id: 'freelance-pm',
    keywords: ['freelance pm', 'freelance project manager', 'on demand pm', 'interim pm', 'contract pm', 'flexible pm', 'part time pm'],
    question: 'Can I hire a Freelance / On-Demand Construction Project Manager?',
    category: 'construction',
    answer: 'Yes! EFMS offers flexible Freelance & On-Demand Pr. CPM Project Managers:\n\n• High-calibre senior leadership without the overhead of a full-time executive salary\n• Available on hourly rates, weekly blocks, or project-milestone retainers\n• Ideal for property developers, busy contractors, or businesses executing a major capital upgrade.',
    actionPage: 'freelance-pm',
    actionLabel: 'View Freelance PM Options'
  },

  // 4. Construction Consultancy & Claims
  {
    id: 'construction-claims',
    keywords: ['claims', 'construction claims', 'dispute', 'contract dispute', 'delay claim', 'disruption claim', 'extension of time', 'eot', 'loss and expense', 'quantum'],
    question: 'How do you formulate and resolve Construction Claims & Disputes?',
    category: 'consultancy',
    answer: 'EFMS specializes in forensic claims preparation and contract defense:\n\n• Extension of Time (EOT) delay claims & Disruption quantum formulation\n• Evaluation of contractor variations, compensation events, and loss/expense\n• Support for Dispute Adjudication Boards (DAB), mediation, and arbitration\n• Deep expertise across JBCC Principle Building Agreement, NEC3/NEC4 PSC/ECC, FIDIC Red/Yellow, and GCC 2015.',
    actionPage: 'construction-claims',
    actionLabel: 'Learn About Claims Resolution'
  },
  {
    id: 'delay-analysis',
    keywords: ['delay analysis', 'forensic delay', 'time impact analysis', 'window analysis', 'as-built', 'critical path', 'cpm', 'schedule delay'],
    question: 'What is Forensic Delay Analysis and which methodologies do you use?',
    category: 'consultancy',
    answer: 'Forensic Delay Analysis evaluates what caused project delays, who is contractually liable, and what time/cost extensions apply.\n\nWe utilize internationally recognized SCL (Society of Construction Law) methodologies:\n• Time Impact Analysis (TIA)\n• Windows Delay Analysis\n• As-Planned vs As-Built Analysis\n• Collapsed As-Built / But-For schedules\n• Critical Path Method (CPM) forensic validation in Primavera P6 & MS Project.',
    actionPage: 'delay-analysis',
    actionLabel: 'View Delay Analysis Methodologies'
  },
  {
    id: 'quantity-surveying',
    keywords: ['quantity surveying', 'qs', 'cost management', 'bills of quantities', 'boq', 'cost estimates', 'valuation', 'final account', 'budgeting'],
    question: 'What Quantity Surveying and Cost Management services do you offer?',
    category: 'consultancy',
    answer: 'EFMS provides comprehensive commercial and quantity surveying solutions:\n\n• Pre-contract cost planning, order-of-magnitude estimates, and elemental budgeting\n• Preparation of detailed Bills of Quantities (BOQ) and tender documentation\n• Monthly interim payment certificates and valuation of variations\n• Final account reconciliation and cost-to-complete forecasting.',
    actionPage: 'quantity-surveying',
    actionLabel: 'View Quantity Surveying Services'
  },

  // 5. Pricing & Retainers
  {
    id: 'pricing-retainers',
    keywords: ['pricing', 'cost', 'quote', 'quotation', 'rates', 'how much', 'fees', 'packages', 'retainer', 'consulting fee'],
    question: 'How does EFMS structure its pricing and quotation packages?',
    category: 'pricing',
    answer: 'We provide clear, transparent pricing structured around project complexity:\n\n• Facilities Management: Monthly customized SLA retainers based on square meterage and asset count\n• Cleaning & Pest Control: Fixed monthly contracts or one-off project rates\n• Soil Poisoning: Tiered m² rates with 5-year guarantee certificate included\n• Construction PM & Consultancy: Fixed milestone fees, SACPCMP guideline percentages, or flexible hourly rates\n• Claims & Dispute Advisory: Phased diagnostic assessment followed by structured advisory milestones.',
    actionPage: 'pricing',
    actionLabel: 'Check Pricing & Packages'
  },
  {
    id: 'service-areas',
    keywords: ['areas', 'service areas', 'where do you operate', 'gauteng', 'johannesburg', 'pretoria', 'midrand', 'centurion', 'cape town', 'durban', 'national'],
    question: 'Where does EFMS operate geographically?',
    category: 'company',
    answer: 'Our core primary operations are based in Gauteng (Johannesburg, Pretoria, Midrand, Centurion, Ekurhuleni, and surrounds).\n\nFor major capital projects, forensic claims advisory, and multi-site facilities programs, we support clients nationwide across all 9 South African provinces as well as neighboring SADC countries.',
    actionPage: 'contact',
    actionLabel: 'Check Service Areas on Contact Page'
  }
];

// Initial starter quick suggestions
const DEFAULT_SUGGESTIONS = [
  'What services does EFMS offer?',
  'How do you handle construction claims?',
  'Tell me about Monwabisi Makinana',
  'What is pre-construction soil poisoning?',
  'How can I get a quotation?',
  'Escalate to a Specialist via Email'
];

export const EurekaChatbot: React.FC<EurekaChatbotProps> = ({
  onNavigate,
  currentPage = 'home'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [consecutiveUnmatched, setConsecutiveUnmatched] = useState(0);
  const [showEscalationModal, setShowEscalationModal] = useState(false);

  // Escalation Form State
  const [escName, setEscName] = useState('');
  const [escEmail, setEscEmail] = useState('');
  const [escPhone, setEscPhone] = useState('');
  const [escMessage, setEscMessage] = useState('');
  const [escSubmitted, setEscSubmitted] = useState(false);
  const [escCategory, setEscCategory] = useState<'general' | 'facilities' | 'construction' | 'claims'>('general');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial Welcome Message
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: '👋 **Hello! Welcome to Eureka Facilities Management Solutions (EFMS).**\n\nI am your **Consultant**. I can answer all your questions regarding our **Facilities Management**, **Commercial Cleaning**, **Pest & Soil Treatments**, **Construction Project Management**, **Quantity Surveying**, and **Claims Advisory**.\n\nHow can I assist your business today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        'What services does EFMS offer?',
        'How do you handle construction claims & EOT?',
        'Pre-construction soil poisoning info',
        'Request a Quote / Pricing'
      ]
    }
  ]);

  // Auto-scroll when messages update
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
      setUnreadCount(0);
      setHasOpenedBefore(true);
    }
  }, [isOpen, isMinimized]);

  // Handle Quick Open / Toggle
  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      setUnreadCount(0);
    } else {
      setIsOpen(false);
    }
  };

  // Smart Knowledge Matching Engine
  const findBestAnswer = (query: string): { match: FAQItem | null; isEscalateIntent: boolean } => {
    const clean = query.toLowerCase().trim();

    // Direct Escalation Intent detection
    const escalationKeywords = [
      'human',
      'agent',
      'escalate',
      'speak to a person',
      'talk to someone',
      'real person',
      'email someone',
      'support team',
      'monwabisi directly',
      'send email',
      'representative',
      'advisor',
      'call me back',
      'callback'
    ];

    if (escalationKeywords.some((kw) => clean.includes(kw))) {
      return { match: null, isEscalateIntent: true };
    }

    // Tokenize query words
    const queryWords = clean
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2);

    let bestScore = 0;
    let bestMatch: FAQItem | null = null;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;

      // Exact keyword match
      for (const kw of item.keywords) {
        if (clean.includes(kw.toLowerCase())) {
          score += 15 + kw.length;
        }
      }

      // Individual word overlap
      for (const word of queryWords) {
        if (item.keywords.some((kw) => kw.toLowerCase().includes(word))) {
          score += 6;
        }
        if (item.question.toLowerCase().includes(word)) {
          score += 4;
        }
        if (item.answer.toLowerCase().includes(word)) {
          score += 1;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }

    // Threshold score for match confidence
    if (bestScore >= 8 && bestMatch) {
      return { match: bestMatch, isEscalateIntent: false };
    }

    return { match: null, isEscalateIntent: false };
  };

  // Send Message Handler
  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Process Response with natural delay
    setTimeout(() => {
      const { match, isEscalateIntent } = findBestAnswer(text);

      if (isEscalateIntent) {
        // Direct Escalation Triggered
        setConsecutiveUnmatched(0);
        const botResponse: Message = {
          id: `bot-esc-${Date.now()}`,
          sender: 'bot',
          text: `🤝 **I am ready to escalate your inquiry directly to our senior leadership team.**\n\nYou can submit your details right here in the chat, or reach out to Managing Director **Monwabisi Makinana** directly via email or telephone.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isEscalationCard: true,
          suggestions: [
            'Request a Quote',
            'View Services Overview',
            'What is Monwabisi’s Phone Number?'
          ]
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
        return;
      }

      if (match) {
        // Found matching answer
        setConsecutiveUnmatched(0);

        // Generate related suggestions
        const relatedSuggestions = KNOWLEDGE_BASE.filter(
          (k) => k.id !== match.id && (k.category === match.category || Math.random() > 0.6)
        )
          .slice(0, 3)
          .map((k) => k.question);

        relatedSuggestions.push('Escalate to a Specialist via Email');

        const botResponse: Message = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: match.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actionLink: match.actionPage
            ? {
                label: match.actionLabel || 'View Related Page',
                page: match.actionPage,
                subcategory: match.actionSubcategory
              }
            : undefined,
          suggestions: relatedSuggestions
        };

        setMessages((prev) => [...prev, botResponse]);
      } else {
        // No direct match found -> increment counter
        const nextUnmatchedCount = consecutiveUnmatched + 1;
        setConsecutiveUnmatched(nextUnmatchedCount);

        if (nextUnmatchedCount >= 2) {
          // Automatic Escalation when no relevant answers remain
          const botResponse: Message = {
            id: `bot-auto-esc-${Date.now()}`,
            sender: 'bot',
            text: `⚠️ **I do not have enough specific information in my automated database to answer that in full detail.**\n\nTo ensure you receive an accurate, authoritative response, I have opened an **Email Escalation Request** below. Our Principal Consultant **Monwabisi Makinana (Pr. CPM, PMP®)** and technical specialists will review your query promptly.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isEscalationCard: true,
            suggestions: [
              'Call +27 74 518 7012 Now',
              'Back to Main Services',
              'Check Pricing Guide'
            ]
          };
          setMessages((prev) => [...prev, botResponse]);
        } else {
          // First friendly fallback with suggestions
          const botResponse: Message = {
            id: `bot-fallback-${Date.now()}`,
            sender: 'bot',
            text: `I want to make sure I get you the exact information you need. While I could not find an exact match for "${text}", here are some areas I can provide complete details on:\n\n• **Facilities & Property Services** (Hard & Soft FM, Cleaning, Pest Control, Soil Treatment, Relocations)\n• **Construction Delivery** (Project Management, Principal Agency, Freelance PM)\n• **Advisory & Dispute Resolution** (Contract Advisory, Quantity Surveying, Delay Analysis, Claims)\n\nAlternatively, you can escalate this query directly to our team via email.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            suggestions: [
              'Tell me about Facilities Management',
              'How does EFMS resolve delay claims?',
              'Escalate to a Specialist via Email',
              'What are your contact numbers?'
            ]
          };
          setMessages((prev) => [...prev, botResponse]);
        }
      }

      setIsTyping(false);
    }, 450);
  };

  // Handle Direct Escalation Form Submission
  const handleEscalationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!escEmail && !escPhone) return;

    setEscSubmitted(true);

    const ticketRef = `EFMS-ESC-${Math.floor(100000 + Math.random() * 900000)}`;

    // Prepare mailto fallback string
    const subject = encodeURIComponent(`[${ticketRef}] Technical Query Escalation from ${escName || 'Client'}`);
    const body = encodeURIComponent(
      `Hello Monwabisi & EFMS Team,\n\nI am escalating a query from the website chatbot assistant:\n\nName: ${escName || 'N/A'}\nEmail: ${escEmail || 'N/A'}\nPhone: ${escPhone || 'N/A'}\nCategory: ${escCategory.toUpperCase()}\n\nQuery / Project Details:\n${escMessage || 'Please review my request and contact me regarding EFMS solutions.'}\n\nTicket Reference: ${ticketRef}\nTimestamp: ${new Date().toISOString()}`
    );

    const mailtoUrl = `mailto:info@eurekasolutions.co.za?subject=${subject}&body=${body}`;

    // Add confirmation message to chat
    const confirmMsg: Message = {
      id: `bot-esc-confirm-${Date.now()}`,
      sender: 'bot',
      text: `✅ **Email Escalation Recorded Successfully!**\n\n• **Reference Number:** \`${ticketRef}\`\n• **Name:** ${escName || 'Client'}\n• **Contact:** ${escEmail || escPhone}\n• **Status:** Dispatched to \`info@eurekasolutions.co.za\`\n\nOur engineering and management team typically responds within **2 to 4 business hours**. For emergency building facilities or critical claims, feel free to call directly at **+27 74 518 7012**.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        'Open Pre-filled Email Client ↗',
        'Back to Home Page',
        'Explore All Solutions'
      ]
    };

    setMessages((prev) => [...prev, confirmMsg]);

    // Reset escalation fields
    setTimeout(() => {
      setEscName('');
      setEscEmail('');
      setEscPhone('');
      setEscMessage('');
      setEscSubmitted(false);
      setConsecutiveUnmatched(0);
    }, 2000);
  };

  // Reset conversation
  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: '✨ **Chat reset.** How can EFMS assist you today with Facilities Management, Construction Delivery, or Consultancy?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          'What services does EFMS offer?',
          'How do you handle construction claims?',
          'Pre-construction soil poisoning info',
          'Request a Quote / Pricing'
        ]
      }
    ]);
    setConsecutiveUnmatched(0);
  };

  return (
    <>
      {/* Floating Launcher Trigger */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end print:hidden">
        {/* Unopened Teaser Pill (shown only if never opened and closed) */}
        {!isOpen && !hasOpenedBefore && (
          <div
            onClick={toggleChat}
            className="mb-2.5 px-3.5 py-2 bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium rounded-full shadow-xl border border-slate-700/80 cursor-pointer flex items-center gap-2.5 animate-bounce hover:bg-slate-800 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Have questions? Ask EFMS Consultant</span>
            <X
              className="w-3.5 h-3.5 text-slate-400 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setHasOpenedBefore(true);
              }}
            />
          </div>
        )}

        {/* Main Floating Button */}
        <button
          id="eureka-chatbot-launcher-button"
          onClick={toggleChat}
          aria-label="Open EFMS Consultant Chatbot"
          className="relative group p-3.5 sm:p-4 bg-gradient-to-br from-[#0b3582] via-[#092a68] to-slate-900 text-white rounded-full shadow-2xl hover:shadow-blue-900/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-amber-400/40 flex items-center justify-center"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-200" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-amber-300" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-md animate-pulse">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          id="eureka-chatbot-panel"
          className={`fixed z-50 transition-all duration-300 print:hidden ${
            isMinimized
              ? 'bottom-20 right-5 w-80 h-14 bg-[#0b3582] text-white rounded-2xl shadow-2xl border border-blue-800 flex items-center px-4 justify-between cursor-pointer'
              : 'bottom-4 sm:bottom-20 right-2 sm:right-5 w-[calc(100vw-16px)] sm:w-[420px] max-w-[95vw] h-[85vh] sm:h-[620px] max-h-[700px] bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden backdrop-blur-xl'
          }`}
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#0b3582] via-[#092a68] to-slate-900 p-3.5 sm:p-4 border-b border-slate-700/80 flex items-center justify-between select-none">
            <div
              className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
              onClick={() => isMinimized && setIsMinimized(false)}
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md border border-white/20">
                  <Bot className="w-5 h-5 text-slate-950" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white truncate">EFMS Consultant</h3>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 font-semibold px-1.5 py-0.5 rounded border border-amber-400/30">
                    Smart FAQ
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 truncate">
                  Instant answers &amp; Email escalation
                </p>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <button
                id="chatbot-reset-btn"
                onClick={handleResetChat}
                title="Reset Conversation"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                id="chatbot-minimize-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? 'Expand' : 'Minimize'}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
              </button>
              <button
                id="chatbot-close-btn"
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body when not minimized */}
          {!isMinimized && (
            <>
              {/* Quick Info / Escalation Banner */}
              <div className="bg-slate-800/80 px-3.5 py-2 border-b border-slate-700/60 flex items-center justify-between text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pr. CPM &amp; PMP® Verified Knowledge</span>
                </div>
                <button
                  onClick={() => {
                    handleSendMessage('Escalate to a Specialist via Email');
                  }}
                  className="text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>Escalate via Email</span>
                </button>
              </div>

              {/* Messages Container */}
              <div
                id="chatbot-messages-container"
                className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-4 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-700"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-start gap-2 max-w-[88%]">
                      {msg.sender === 'bot' && (
                        <div className="w-6 h-6 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div
                        className={`rounded-2xl px-3.5 py-2.5 shadow-md leading-relaxed whitespace-pre-line ${
                          msg.sender === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-tl-none'
                        }`}
                      >
                        {msg.text}

                        {/* Direct Page Action Link Button */}
                        {msg.actionLink && onNavigate && (
                          <div className="mt-3 pt-2.5 border-t border-slate-700/60">
                            <button
                              onClick={() => {
                                if (msg.actionLink) {
                                  onNavigate(msg.actionLink.page, msg.actionLink.subcategory);
                                  setIsOpen(false);
                                }
                              }}
                              className="w-full inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg text-xs shadow transition-all"
                            >
                              <span>{msg.actionLink.label}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        {/* Inline Escalation Card */}
                        {msg.isEscalationCard && (
                          <div className="mt-3 pt-3 border-t border-slate-700/80">
                            <form
                              onSubmit={handleEscalationSubmit}
                              className="bg-slate-900/90 p-3 rounded-xl border border-amber-400/30 space-y-2 text-xs"
                            >
                              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                                <Mail className="w-3.5 h-3.5" />
                                <span>Direct Email Escalation Form</span>
                              </div>

                              <div>
                                <label className="block text-[10px] text-slate-400 mb-0.5">Your Name</label>
                                <input
                                  type="text"
                                  placeholder="e.g. Sipho Dlamini"
                                  value={escName}
                                  onChange={(e) => setEscName(e.target.value)}
                                  className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="block text-[10px] text-slate-400 mb-0.5">Email *</label>
                                  <input
                                    type="email"
                                    required
                                    placeholder="name@company.co.za"
                                    value={escEmail}
                                    onChange={(e) => setEscEmail(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] text-slate-400 mb-0.5">Phone / WhatsApp</label>
                                  <input
                                    type="tel"
                                    placeholder="+27 74 000 0000"
                                    value={escPhone}
                                    onChange={(e) => setEscPhone(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-[10px] text-slate-400 mb-0.5">Inquiry Details</label>
                                <textarea
                                  rows={2}
                                  placeholder="Describe your project, facility, or contractual inquiry..."
                                  value={escMessage}
                                  onChange={(e) => setEscMessage(e.target.value)}
                                  className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow transition-all"
                              >
                                <Send className="w-3 h-3" />
                                <span>Submit Escalation to info@eurekasolutions.co.za</span>
                              </button>

                              <div className="text-center pt-1">
                                <a
                                  href={`mailto:info@eurekasolutions.co.za?subject=${encodeURIComponent(
                                    'Direct Escalation Inquiry'
                                  )}`}
                                  className="text-[10px] text-slate-400 hover:text-amber-300 underline"
                                >
                                  Or launch your email client directly ↗
                                </a>
                              </div>
                            </form>
                          </div>
                        )}
                      </div>

                      {msg.sender === 'user' && (
                        <div className="w-6 h-6 rounded-lg bg-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    {/* Timestamp */}
                    <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>

                    {/* Suggestions list underneath message */}
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                        {msg.suggestions.map((sug, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              if (sug.includes('Open Pre-filled Email')) {
                                window.location.href = `mailto:info@eurekasolutions.co.za?subject=${encodeURIComponent(
                                  'EFMS Technical & Commercial Inquiry'
                                )}`;
                              } else if (sug.includes('Call +27 74 518 7012')) {
                                window.location.href = 'tel:+27745187012';
                              } else if (sug.includes('Back to Home') && onNavigate) {
                                onNavigate('home');
                                setIsOpen(false);
                              } else if (sug.includes('Explore All Solutions') && onNavigate) {
                                onNavigate('solutions');
                                setIsOpen(false);
                              } else {
                                handleSendMessage(sug);
                              }
                            }}
                            className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 px-2.5 py-1 rounded-full border border-slate-700 hover:border-amber-400/40 transition-colors flex items-center gap-1 text-left"
                          >
                            <CornerDownRight className="w-2.5 h-2.5 text-slate-500 shrink-0" />
                            <span>{sug}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                    <div className="w-6 h-6 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-300 flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-1 bg-slate-800 px-3 py-2 rounded-2xl rounded-tl-none border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></span>
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                        style={{ animationDelay: '0.4s' }}
                      ></span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 bg-slate-900 border-t border-slate-700/80">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    id="chatbot-input-field"
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask about FM, claims, cleaning, quotes..."
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                  <button
                    id="chatbot-send-btn"
                    type="submit"
                    disabled={!inputVal.trim()}
                    className="p-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl shadow transition-all flex items-center justify-center shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Footer Quick Links & Contact */}
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 px-1">
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+27745187012"
                      className="hover:text-amber-300 flex items-center gap-1 transition-colors"
                    >
                      <Phone className="w-2.5 h-2.5" />
                      <span>+27 74 518 7012</span>
                    </a>
                    <span>•</span>
                    <a
                      href="mailto:info@eurekasolutions.co.za"
                      className="hover:text-amber-300 flex items-center gap-1 transition-colors"
                    >
                      <Mail className="w-2.5 h-2.5" />
                      <span>info@eurekasolutions.co.za</span>
                    </a>
                  </div>
                  <span className="text-slate-500">EFMS v2.4</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
