'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Moon, Sun, ArrowUp, Briefcase, Code, Users, Award,
  Github, Linkedin, Facebook, Mail,twitter, Phone, MapPin, ExternalLink,
  ChevronDown, ChevronLeft, ChevronRight, Star,
  Calendar, FileText, Download, Send, CheckCircle, Clock,
  TrendingUp, Zap, MessageCircle, Sparkles, Shield, Lightbulb
} from 'lucide-react';

// Advanced Typing Effect Component
// Enhanced Typing Effect Component - shows one character at a time
const TypingEffect = ({ words, speed = 100, delayBetweenWords = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing - add one character at a time
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting - remove one character at a time
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, delayBetweenWords]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-blue-600 ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

// Advanced Counter Component
const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Floating Particle Background
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"
        initial={{
          x: Math.random() * 100 + '%',
          y: Math.random() * 100 + '%',
        }}
        animate={{
          y: Math.random() * -50 + 'px',
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: Math.random() * 3 + 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// Gradient Border Component
const GradientBorder = ({ children, className = '' }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />
    {children}
  </div>
);


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBackToTop, setShowBackToTop] = useState(false); 

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add this AFTER your existing scroll useEffect
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(scrollPercent);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// 👇 ADD THIS NEW useEffect RIGHT HERE
useEffect(() => {
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 500);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
// 👆 ADD THIS NEW useEffect

// Dark mode
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }
}, [darkMode]);

  // Translations (same as before)
  const translations = {
    en: {
      nav: ['Home', 'About', 'Education', 'Skills', 'Experience', 'Services', 'Projects', 'Achievements', 'Testimonials', 'Contact'],
      hero: {
        greeting: 'Welcome to my world',
        name: 'Nada Mohamed',
        roles: ['Conference Interpreter', 'English Trainer', 'Communication Expert', 'Professional Coach'],
        cta1: 'Start Project',
        cta2: 'Learn More',
        description: 'Transforming communication across cultures with expertise, passion, and precision.'
      },
      about: {
        title: 'About Excellence',
        description: 'I specialize in bridging communication gaps through professional interpretation, comprehensive training, and expert guidance. With 7+ years of experience, I\'ve helped organizations achieve their communication goals.',
        stats: [
          { label: 'Years Active', value: 7, icon: '📅' },
          { label: 'Projects Done', value: 150, icon: '✅' },
          { label: 'Happy Clients', value: 200, icon: '😊' },
          { label: 'Languages', value: 2, icon: '🌐' }
        ]
      },
      education: {
        title: 'Education',
        items: [
          {
            year: '2024',
            degree: 'Software Engineering',
            school: 'Information Technology Institute',
            description: 'Advanced development and engineering principles'
          },
          {
            year: '2023',
            degree: 'Professional Diploma - Interpretation',
            school: 'American University in Cairo',
            description: 'Specialized professional interpretation training'
          },
          {
            year: '2017',
            degree: 'Bachelor of Commerce',
            school: 'South Valley University',
            description: 'Financial analysis and business fundamentals'
          }
        ]
      },
      skills: {
        title: 'Core Competencies',
        categories: [
          {
            name: 'Interpretation',
            skills: ['Simultaneous', 'Consecutive', 'Conference', 'Technical'],
            level: 98,
            icon: '🎤'
          },
          {
            name: 'Languages',
            skills: ['English (Fluent)', 'Arabic (Native)', 'Professional Communication'],
            level: 99,
            icon: '🌍'
          },
          {
            name: 'Training',
            skills: ['Public Speaking', 'Communication', 'Soft Skills', 'Leadership'],
            level: 95,
            icon: '📚'
          },
          {
            name: 'Professional',
            skills: ['Team Management', 'Project Coordination', 'Event Organization'],
            level: 92,
            icon: '💼'
          }
        ]
      },
      experience: {
        title: 'Professional Journey',
        items: [
          {
            role: 'International Cooperation Officer',
            company: 'Qena Water & Wastewater',
            period: '2023 - Present',
            description: 'Leading international initiatives and stakeholder engagement',
            highlights: ['Stakeholder Management', 'Government Relations', 'Event Coordination']
          },
          {
            role: 'Senior Soft Skills Instructor',
            company: 'Information Technology Institute',
            period: '2018 - Present',
            description: 'Training 10,000+ graduates in soft skills and communication',
            highlights: ['Communication Training', 'Presentation Skills', 'Leadership']
          },
          {
            role: 'Professional Conference Interpreter',
            company: 'International Organizations',
            period: '2022 - Present',
            description: 'Interpretation for international conferences and meetings',
            highlights: ['Conference Interpretation', 'High-Level Events', 'Technical Sessions']
          }
        ]
      },
      services: {
        title: 'Premium Services',
        items: [
          {
            name: 'Conference Interpretation',
            description: 'Professional simultaneous and consecutive interpretation',
            icon: '🎤',
            features: ['Real-time', 'Accurate', 'Professional']
          },
          {
            name: 'English Training',
            description: 'Comprehensive English courses for all levels',
            icon: '📚',
            features: ['Interactive', 'Effective', 'Certified']
          },
          {
            name: 'Soft Skills Training',
            description: 'Professional development in communication and leadership',
            icon: '✨',
            features: ['Practical', 'Engaging', 'Results-driven']
          },
          {
            name: 'Business Communication',
            description: 'Specialized coaching for professional interactions',
            icon: '💼',
            features: ['Expert', 'Personalized', 'Impactful']
          },
          {
            name: 'Public Speaking',
            description: 'Master the art of confident presentation',
            icon: '🎯',
            features: ['Confidence', 'Technique', 'Impact']
          },
          {
            name: 'Executive Coaching',
            description: 'One-on-one coaching for professionals',
            icon: '👔',
            features: ['Exclusive', 'Premium', 'Transformative']
          }
        ]
      },
      projects: {
        title: 'Featured Projects',
        items: [
          {
            title: 'FAO International Event',
            category: 'Interpretation',
            image: '🌍',
            description: '8-hour simultaneous interpretation for agricultural cooperation',
            tags: ['Interpretation', 'International'],
            demo: '#'
          },
          {
            title: 'Corporate Training Program',
            category: 'Training',
            image: '📚',
            description: 'Comprehensive English training for 500+ employees',
            tags: ['Training', 'Corporate'],
            demo: '#'
          },
          {
            title: 'Leadership Workshop',
            category: 'Training',
            image: '✨',
            description: 'Advanced leadership and soft skills development',
            tags: ['Leadership', 'Workshop'],
            demo: '#'
          },
          {
            title: 'International Conference',
            category: 'Coordination',
            image: '🎯',
            description: 'Coordinated multi-day conference with 200+ participants',
            tags: ['Conference', 'Organization'],
            demo: '#'
          },
          {
            title: 'Sustainability Initiative',
            category: 'Interpretation',
            image: '🌱',
            description: 'Professional interpretation for environmental projects',
            tags: ['Sustainability', 'Interpretation'],
            demo: '#'
          },
          {
            title: 'Women Empowerment',
            category: 'Training',
            image: '💪',
            description: 'Training program empowering women in professional development',
            tags: ['Empowerment', 'Development'],
            demo: '#'
          }
        ]
      },
      testimonials: {
        title: 'Client Testimonials',
        items: [
          {
            name: 'Maged Reda',
            role: 'Deputy Regional Manager',
            company: 'CES Consulting',
            message: 'Exceptional interpretation skills with unmatched professionalism and dedication.',
            rating: 5,
            image: '👨',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          },
          {
            name: 'Ahmed Hassan',
            role: 'Project Director',
            company: 'International Development',
            message: 'Outstanding training that transformed our team\'s communication abilities.',
            rating: 5,
            image: '👨',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          },
          {
            name: 'Fatima Al-Mansouri',
            role: 'HR Manager',
            company: 'Corporate Solutions',
            message: 'Best English trainer we\'ve worked with - professional and highly effective.',
            rating: 5,
            image: '👩',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          },
          {
            name: 'Dr. Karim Mohamed',
            role: 'Conference Organizer',
            company: 'International Institute',
            message: 'Flawless interpretation for our international conference - highly recommended.',
            rating: 5,
            image: '👨',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          }
        ]
      },
      contact: {
        title: 'Let\'s Connect',
        description: 'Ready to elevate your communication? Get in touch today.',
        phone: '+20 100 0912 100',
        email: 'nadaiti2021@gmail.com',
        whatsapp: 'https://wa.me/201000912100',
        location: 'Qena, Egypt',
        formLabels: {
          name: 'Full Name',
          email: 'Email Address',
          message: 'Message',
          send: 'Send Message'
        }
      },
      footer: '© 2024 Nada Mohamed. Crafted with excellence and innovation.'
    },
    ar: {
      nav: ['الرئيسية', 'عني', 'التعليم', 'المهارات', 'الخبرة', 'الخدمات', 'المشاريع', 'الإنجازات', 'التقييمات', 'تواصل'],
      hero: {
        greeting: 'مرحباً بك في عالمي',
        name: 'ندى محمد',
        roles: ['مترجمة فورية', 'معلمة اللغة الإنجليزية', 'خبيرة التواصل', 'مدربة احترافية'],
        cta1: 'ابدأ مشروعك',
        cta2: 'اعرف أكثر',
        description: 'تحويل التواصل بين الثقافات بخبرة وشغف ودقة.'
      },
      about: {
        title: 'عن التميز',
        description: 'أتخصص في جسر الفجوات التواصلية من خلال الترجمة الفورية المحترفة والتدريب الشامل والتوجيه الخبير. مع 7+ سنوات من الخبرة، ساعدت المنظمات في تحقيق أهدافها التواصلية.',
        stats: [
          { label: 'سنوات العمل', value: 7, icon: '📅' },
          { label: 'المشاريع المنجزة', value: 150, icon: '✅' },
          { label: 'العملاء السعداء', value: 200, icon: '😊' },
          { label: 'اللغات', value: 2, icon: '🌐' }
        ]
      },
      education: {
        title: 'التعليم',
        items: [
          {
            year: '2024',
            degree: 'هندسة البرمجيات',
            school: 'معهد تكنولوجيا المعلومات',
            description: 'مبادئ التطوير والهندسة المتقدمة'
          },
          {
            year: '2023',
            degree: 'دبلوم الترجمة الفورية',
            school: 'الجامعة الأمريكية بالقاهرة',
            description: 'تدريب متخصص في الترجمة الفورية المهنية'
          },
          {
            year: '2017',
            degree: 'بكالوريوس تجارة',
            school: 'جامعة جنوب الوادي',
            description: 'التحليل المالي والأساسيات التجارية'
          }
        ]
      },
      skills: {
        title: 'المهارات الأساسية',
        categories: [
          {
            name: 'الترجمة الفورية',
            skills: ['متزامنة', 'متتابعة', 'مؤتمرات', 'تقنية'],
            level: 98,
            icon: '🎤'
          },
          {
            name: 'اللغات',
            skills: ['الإنجليزية (طليقة)', 'العربية (لغة الأم)', 'التواصل المهني'],
            level: 99,
            icon: '🌍'
          },
          {
            name: 'التدريب',
            skills: ['الخطابة العامة', 'التواصل', 'المهارات الناعمة', 'القيادة'],
            level: 95,
            icon: '📚'
          },
          {
            name: 'احترافي',
            skills: ['إدارة الفريق', 'تنسيق المشاريع', 'تنظيم الفعاليات'],
            level: 92,
            icon: '💼'
          }
        ]
      },
      experience: {
        title: 'رحلتي المهنية',
        items: [
          {
            role: 'موظفة التعاون الدولي',
            company: 'شركة قنا لمياه الشرب والصرف',
            period: '2023 - الحالي',
            description: 'قيادة المبادرات الدولية وإشراك أصحاب المصلحة',
            highlights: ['إدارة أصحاب المصلحة', 'العلاقات الحكومية', 'تنسيق الفعاليات']
          },
          {
            role: 'مدربة المهارات الناعمة',
            company: 'معهد تكنولوجيا المعلومات',
            period: '2018 - الحالي',
            description: 'تدريب أكثر من 10000 خريج على المهارات الناعمة',
            highlights: ['تدريب التواصل', 'مهارات العرض', 'تطوير القيادة']
          },
          {
            role: 'مترجمة فورية محترفة',
            company: 'المنظمات الدولية',
            period: '2022 - الحالي',
            description: 'ترجمة فورية للمؤتمرات والاجتماعات الدولية',
            highlights: ['ترجمة المؤتمرات', 'الفعاليات الرفيعة', 'الجلسات التقنية']
          }
        ]
      },
      services: {
        title: 'الخدمات المميزة',
        items: [
          {
            name: 'الترجمة الفورية',
            description: 'ترجمة فورية متخصصة وفعالة',
            icon: '🎤',
            features: ['فوري', 'دقيق', 'احترافي']
          },
          {
            name: 'تدريب اللغة الإنجليزية',
            description: 'دورات شاملة لجميع المستويات',
            icon: '📚',
            features: ['تفاعلي', 'فعال', 'معتمد']
          },
          {
            name: 'تدريب المهارات الناعمة',
            description: 'التطوير المهني في التواصل والقيادة',
            icon: '✨',
            features: ['عملي', 'جذاب', 'نتائج']
          },
          {
            name: 'التواصل التجاري',
            description: 'تدريب متخصص في التفاعلات المهنية',
            icon: '💼',
            features: ['خبير', 'شخصي', 'مؤثر']
          },
          {
            name: 'الخطابة العامة',
            description: 'إتقان فن الخطابة والعروض',
            icon: '🎯',
            features: ['ثقة', 'تقنية', 'تأثير']
          },
          {
            name: 'تدريب التنفيذيين',
            description: 'تدريب فردي للمديرين والمحترفين',
            icon: '👔',
            features: ['حصري', 'مميز', 'تحويلي']
          }
        ]
      },
      projects: {
        title: 'المشاريع المختارة',
        items: [
          {
            title: 'فعالية المنظمة الدولية',
            category: 'Interpretation',
            image: '🌍',
            description: 'ترجمة فورية متزامنة لفعالية التعاون الزراعي',
            tags: ['ترجمة', 'دولي'],
            demo: '#'
          },
          {
            title: 'برنامج تدريب شركات',
            category: 'Training',
            image: '📚',
            description: 'تدريب اللغة الإنجليزية لـ 500+ موظف',
            tags: ['تدريب', 'شركات'],
            demo: '#'
          },
          {
            title: 'ورشة عمل القيادة',
            category: 'Training',
            image: '✨',
            description: 'تطوير متقدم للقيادة والمهارات الناعمة',
            tags: ['قيادة', 'ورشة'],
            demo: '#'
          },
          {
            title: 'مؤتمر دولي',
            category: 'Coordination',
            image: '🎯',
            description: 'تنسيق مؤتمر متعدد الأيام مع 200+ مشارك',
            tags: ['مؤتمر', 'تنظيم'],
            demo: '#'
          },
          {
            title: 'مبادرة الاستدامة',
            category: 'Interpretation',
            image: '🌱',
            description: 'ترجمة فورية للمشاريع البيئية',
            tags: ['استدامة', 'ترجمة'],
            demo: '#'
          },
          {
            title: 'تمكين المرأة',
            category: 'Training',
            image: '💪',
            description: 'برنامج تدريب لتمكين المرأة مهنياً',
            tags: ['تمكين', 'تطوير'],
            demo: '#'
          }
        ]
      },
      testimonials: {
        title: 'شهادات العملاء',
        items: [
          {
            name: 'ماجد رضا',
            role: 'نائب المدير الإقليمي',
            company: 'CES Consulting',
            message: 'مهارات ترجمة استثنائية مع احترافية وتفان لا مثيل لهما.',
            rating: 5,
            image: '👨',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          },
          {
            name: 'أحمد حسن',
            role: 'مدير المشروع',
            company: 'التنمية الدولية',
            message: 'تدريب متميز حول المهارات الناعمة غير مقاييس.',
            rating: 5,
            image: '👨',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          },
          {
            name: 'فاطمة المنصوري',
            role: 'مدير الموارد البشرية',
            company: 'الحلول الشاملة',
            message: 'أفضل معلمة اللغة الإنجليزية - احترافية وفعالة جداً.',
            rating: 5,
            image: '👩',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          },
          {
            name: 'د. كريم محمد',
            role: 'منظم المؤتمرات',
            company: 'المعهد الدولي',
            message: 'ترجمة فورية بلا عيب - موصى بها بشدة.',
            rating: 5,
            image: '👨',
            link: 'https://www.linkedin.com/in/nada-mohamed-4b11a61b2/'
          }
        ]
      },
      contact: {
        title: 'دعونا نتواصل',
        description: 'هل أنت مستعد لتحسين تواصلك؟ تواصل معي اليوم.',
        phone: '+20 100 0912 100',
        email: 'nadaiti2021@gmail.com',
        whatsapp: 'https://wa.me/201000912100',
        location: 'قنا، مصر',
        formLabels: {
          name: 'الاسم الكامل',
          email: 'عنوان البريد الإلكتروني',
          message: 'الرسالة',
          send: 'إرسال الرسالة'
        }
      },
      footer: '© 2024 ندى محمد. صُنع بتميز وابتكار.'
    }
  };

  const t = translations[language];

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [darkMode]);

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Form handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const filteredProjects = filterCategory === 'all' 
    ? t.projects.items 
    : t.projects.items.filter(p => p.category === filterCategory);

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      {/* Animated Background Blur */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.1), transparent 80%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      {/* Header with Vertical Navigation */}
     <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
  className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
    scrolled
      ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl'
      : 'bg-gradient-to-b from-white/50 to-transparent dark:from-slate-900/50'
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6">
    <div className="flex items-center justify-between gap-3">
      
      {/* Logo */}
      <motion.div
        className="relative group flex-shrink-0"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition duration-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, linear: true }}
        />
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-600">
          {language === 'ar' ? 'ندى' : 'Nada'}
        </h1>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
        {t.nav.slice(0, 6).map((item, idx) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(idx === 0 ? 'home' : item.toLowerCase())}
            className="relative text-sm xl:text-base font-bold px-3 xl:px-4 py-2 rounded-xl hover:text-blue-600 dark:hover:text-cyan-400 transition whitespace-nowrap"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900"
          whileHover={{ scale: 1.15, rotate: 20 }}
          whileTap={{ scale: 0.85 }}
        >
          {darkMode ? <Sun size={18} className="text-yellow-500 sm:w-5 sm:h-5" /> : <Moon size={18} className="text-blue-600 sm:w-5 sm:h-5" />}
        </motion.button>

        <motion.button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs sm:text-sm md:text-base font-bold"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          {language === 'en' ? 'AR' : 'EN'}
        </motion.button>

        <motion.button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-2 sm:p-3 rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900"
        >
          {isMenuOpen ? <X size={20} className="text-red-600" /> : <Menu size={20} className="text-blue-600" />}
        </motion.button>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden mt-3 pt-3 border-t border-blue-200 dark:border-slate-700"
        >
          <div className="flex flex-col gap-1 pb-2">
            {t.nav.map((item, idx) => (
              <motion.button
                key={item}
                onClick={() => {
                  scrollToSection(idx === 0 ? 'home' : item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-base sm:text-lg font-semibold px-3 py-2.5 rounded-lg text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</motion.header>

      {/* HERO SECTION - Premium Design */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center relative overflow-hidden"
      >
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Animated Background Blobs */}
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
           
           <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
>
  {/* Greeting - Bouncing */}
  <motion.div
    className="inline-block mb-6"
    animate={{ 
      y: [0, -10, 0, -5, 0],
      scale: [1, 1.05, 1, 1.02, 1]
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <motion.span 
      className="text-blue-600 dark:text-blue-400 font-semibold text-lg inline-block"
      whileHover={{ 
        scale: 1.1,
        textShadow: "0px 0px 8px rgba(37, 99, 235, 0.5)"
      }}
    >
      {t.hero.greeting}
    </motion.span>
  </motion.div>

  {/* Name - Floating with gradient shimmer */}
  <motion.h1
    className="text-6xl md:text-7xl font-black mb-6 leading-tight"
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      y: [0, -8, 0, 8, 0],
      scale: 1
    }}
    transition={{ 
      delay: 0.3, 
      duration: 0.8,
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    whileHover={{ scale: 1.02 }}
  >
    <motion.span
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent inline-block"
      animate={{
        backgroundPosition: ["0%", "100%", "0%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ backgroundSize: "200% 100%" }}
    >
      {t.hero.name}
    </motion.span>
  </motion.h1>

  {/* Role - Pulsing with scale */}
  <motion.div
    className="text-3xl md:text-4xl font-bold mb-6 h-20 text-blue-600 dark:text-blue-400"
    initial={{ opacity: 0, x: -100 }}
    animate={{ 
      opacity: 1, 
      x: 0,
    }}
    transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
  >
    <motion.span
      className="inline-block"
      animate={{ 
        scale: [1, 1.08, 1],
        textShadow: [
          "0px 0px 0px rgba(37, 99, 235, 0)",
          "0px 0px 15px rgba(37, 99, 235, 0.5)",
          "0px 0px 0px rgba(37, 99, 235, 0)"
        ]
      }}
      transition={{ 
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <TypingEffect words={t.hero.roles} speed={50} />
    </motion.span>
  </motion.div>

  {/* Description - Fade with slide */}
  <motion.p
    className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
    initial={{ opacity: 0, y: 30 }}
    animate={{ 
      opacity: 1, 
      y: 0,
    }}
    transition={{ delay: 0.5, duration: 0.6 }}
    whileHover={{ scale: 1.01 }}
  >
    {t.hero.description}
  </motion.p>

  {/* CTA Buttons */}
  <motion.div
    className="flex gap-4 flex-wrap mb-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    <motion.button
      onClick={() => scrollToSection('contact')}
      whileHover={{ 
        scale: 1.08, 
        y: -5,
        boxShadow: "0 20px 40px rgba(37, 99, 235, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0px 0px rgba(37, 99, 235, 0)",
          "0 0px 20px rgba(37, 99, 235, 0.3)",
          "0 0px 0px rgba(37, 99, 235, 0)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-full font-bold hover:shadow-2xl transition text-lg"
    >
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="inline-block"
      >
        {t.hero.cta1}
      </motion.span>
    </motion.button>
    
    <motion.button
      onClick={() => scrollToSection('about')}
      whileHover={{ 
        scale: 1.08, 
        y: -5,
        backgroundColor: "rgba(37, 99, 235, 0.15)"
      }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-bold hover:shadow-2xl transition text-lg"
    >
      <motion.span
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
        className="inline-block"
      >
        {t.hero.cta2}
      </motion.span>
    </motion.button>
  </motion.div>

  {/* Social Icons */}
  <motion.div
    className="flex gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.5 }}
  >
    {[
      { icon: Linkedin, url: 'https://linkedin.com/in/nada-mohamed-4b11a61b2', label: 'LinkedIn' },
      { icon: Facebook, url: 'https://facebook.com/nada.mohammed.98031', label: 'Facebook' },
      { icon: Mail, url: 'mailto:nadaiti2021@gmail.com', label: 'Email' },
      { icon: MessageCircle, url: 'https://wa.me/201000912100', label: 'WhatsApp' }
    ].map((social, idx) => (
      <motion.a
        key={idx}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white hover:shadow-xl transition"
        whileHover={{ 
          scale: 1.2, 
          y: -8,
          rotate: 360,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        title={social.label}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay: 0.7 + idx * 0.1, type: "spring" }
        }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <social.icon size={24} />
        </motion.div>
      </motion.a>
    ))}
  </motion.div>
</motion.div>

            {/* Right - Avatar */}

                        {/* Right - Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-10" />
                <img
                  src="/images/nada-professional.png"
                  alt="Nada Mohamed Professional"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E👩%3C/text%3E%3C/svg%3E";
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>


      

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-blue-600" size={40} />
        </motion.div>
      </motion.section>

      {/* ABOUT SECTION - Premium Cards */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.about.description}
            </p>
          </motion.div>

          {/* Stats with Premium Design */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {t.about.stats.map((stat, idx) => (
              <GradientBorder key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center hover:shadow-2xl transition"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <motion.div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    <Counter end={stat.value} />
                  </motion.div>
                  <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">{stat.label}</p>
                </motion.div>
              </GradientBorder>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EDUCATION SECTION - Enhanced Timeline */}
      <motion.section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.education.title}
          </motion.h2>

          <div className="space-y-8">
            {t.education.items.map((edu, idx) => (
              <GradientBorder key={idx}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-xl hover:shadow-2xl transition relative pl-12"
                >
                  <motion.div
                    className="absolute -left-6 top-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {idx + 1}
                  </motion.div>
                  
                  <p className="text-blue-600 font-bold mb-2 text-lg">{edu.year}</p>
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{edu.school}</p>
                  <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
                </motion.div>
              </GradientBorder>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SKILLS SECTION - Interactive Cards */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.skills.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skills.categories.map((category, idx) => (
              <GradientBorder key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 dark:from-slate-800 to-white dark:to-slate-900 p-8 rounded-xl hover:shadow-2xl transition"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{category.name}</h3>
                  <div className="space-y-3 mb-6">
                    {category.skills.map((skill, sidx) => (
                      <motion.div
                        key={sidx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + sidx * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <Sparkles size={16} className="text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-200 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Proficiency Indicator */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">Proficiency</span>
                      <span className="text-sm font-bold text-blue-600">{category.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.level}%` }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 1.2 }}
                        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
                      />
                    </div>
                  </div>
                </motion.div>
              </GradientBorder>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION - Premium Timeline */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.experience.title}
          </motion.h2>

          <div className="space-y-8">
            {t.experience.items.map((exp, idx) => (
              <GradientBorder key={idx}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-xl hover:shadow-2xl transition"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <motion.span
                      className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 px-4 py-2 rounded-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Clock className="inline mr-2" size={16} />
                      {exp.period}
                    </motion.span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hidx) => (
                      <motion.span
                        key={hidx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + hidx * 0.05 }}
                        className="text-xs bg-blue-100 dark:bg-slate-700 text-blue-900 dark:text-blue-300 px-3 py-1 rounded-full font-semibold"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </GradientBorder>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SERVICES SECTION - Premium Cards Grid */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.services.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => (
              <GradientBorder key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 dark:from-slate-800 to-white dark:to-slate-900 p-8 rounded-xl hover:shadow-2xl transition"
                  whileHover={{ y: -15, scale: 1.05 }}
                >
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{service.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fidx) => (
                      <motion.span
                        key={fidx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + fidx * 0.05 }}
                        className="text-xs bg-blue-100 dark:bg-slate-700 text-blue-900 dark:text-blue-300 px-3 py-1 rounded-full font-semibold"
                      >
                        ✓ {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </GradientBorder>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS SECTION - Gallery */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.projects.title}
          </motion.h2>

          {/* Filter */}
          <div className="flex justify-center gap-3 flex-wrap mb-16">
            {['all', 'Interpretation', 'Training', 'Coordination'].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-100 dark:hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat === 'all' ? (language === 'en' ? 'All Projects' : 'جميع المشاريع') : cat}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <GradientBorder key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition"
                    whileHover={{ y: -15 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-6xl relative overflow-hidden">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="hover:scale-125 transition"
                      >
                        {project.image}
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tidx) => (
                          <span key={tidx} className="text-xs bg-blue-100 dark:bg-slate-700 text-blue-900 dark:text-blue-300 px-3 py-1 rounded-full font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={project.demo}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-cyan-600 font-semibold"
                        whileHover={{ gap: 12 }}
                      >
                        {language === 'en' ? 'View Project' : 'عرض المشروع'} <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                </GradientBorder>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS SECTION - Premium Carousel */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.testimonials.title}
          </motion.h2>

          {/* Carousel */}
          <div className="max-w-5xl mx-auto">
            <GradientBorder>
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-gradient-to-br from-blue-50 dark:from-slate-800 to-white dark:to-slate-900 backdrop-blur-sm border border-blue-200 dark:border-slate-700 p-12 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star key={i} size={24} fill="#3b82f6" className="text-blue-600" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  className="text-2xl text-slate-700 dark:text-slate-200 mb-8 italic leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  "{t.testimonials.items[currentTestimonial].message}"
                </motion.p>

                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div>
                    <motion.a
                      href={t.testimonials.items[currentTestimonial].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 dark:text-white text-lg hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      {t.testimonials.items[currentTestimonial].name}
                      <ExternalLink className="inline ml-2 group-hover:translate-x-1 transition" size={18} />
                    </motion.a>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {t.testimonials.items[currentTestimonial].role} @ {t.testimonials.items[currentTestimonial].company}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setCurrentTestimonial((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length)}
                      className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                      onClick={() => setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length)}
                      className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={24} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </GradientBorder>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {t.testimonials.items.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-4 h-4 rounded-full transition ${
                    idx === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT SECTION - Premium Design */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, linear: true }}
            className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">{t.contact.title}</h2>
            <p className="text-xl text-white/90">{t.contact.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {[
                { icon: Phone, label: t.contact.phone, url: `tel:${t.contact.phone}` },
                { icon: Mail, label: t.contact.email, url: `mailto:${t.contact.email}` },
                { icon: MessageCircle, label: 'WhatsApp', url: t.contact.whatsapp },
                { icon: MapPin, label: t.contact.location, url: '#' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group p-4 rounded-lg hover:bg-white/10 transition"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition"
                    whileHover={{ scale: 1.2 }}
                  >
                    <item.icon size={28} />
                  </motion.div>
                  <span className="text-lg font-semibold">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder={t.contact.formLabels.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/30 focus:border-white outline-none transition font-semibold"
              />
              <input
                type="email"
                placeholder={t.contact.formLabels.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/30 focus:border-white outline-none transition font-semibold"
              />
              <textarea
                placeholder={t.contact.formLabels.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/30 focus:border-white outline-none transition resize-none font-semibold"
              />

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-white text-blue-600 rounded-lg font-bold hover:shadow-2xl transition text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'success' ? '✓ ' + (language === 'en' ? 'Sent Successfully!' : 'تم الإرسال بنجاح!') : t.contact.formLabels.send}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>


        {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-12 right-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-full shadow-2xl z-40 border-3 border-blue-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.3, y: -10, boxShadow: '0 40px 80px rgba(37, 99, 235, 0.7)' }}
            whileTap={{ scale: 0.85 }}
          >
            <ArrowUp className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>

   {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
          <div className="flex gap-3">
            {[Github, Linkedin, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social media link"
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Portfolio;
