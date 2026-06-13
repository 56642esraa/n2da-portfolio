'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Moon, Sun, ArrowUp, Briefcase, Code, Users, Award,
  Github, Linkedin, Facebook, Mail, Phone, MapPin, ExternalLink,
  ChevronDown, Play, Pause, ChevronLeft, ChevronRight, Star,
  Calendar, FileText, Download, Send, CheckCircle, Clock,
  TrendingUp, Zap, MessageCircle, Send as SendIcon
} from 'lucide-react';

// Typing Effect Component
const TypingEffect = ({ words, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (charIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else {
          setWordIndex((wordIndex + 1) % words.length);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words, speed]);

  return <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">{displayText}</span>;
};

// Counter Component
const Counter = ({ end, duration = 2000 }) => {
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

  return <span>{count}</span>;
};

const PortfolioPremium = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Translations
  const translations = {
    en: {
      nav: ['Home', 'About', 'Education', 'Skills', 'Experience', 'Services', 'Projects', 'Achievements', 'Testimonials', 'Contact'],
      hero: {
        greeting: 'Welcome to my portfolio',
        name: 'Nada Mohamed',
        roles: ['Conference Interpreter', 'English Trainer', 'Soft Skills Expert', 'Communication Coach'],
        cta1: 'Hire Me',
        cta2: 'View Portfolio',
      },
      about: {
        title: 'About Me',
        description: 'I am a professional bilingual interpreter with 7+ years of experience in bridging communication gaps across cultures. Specialized in conference interpretation, business communication, and professional training.',
        stats: [
          { label: 'Years Experience', value: 7 },
          { label: 'Projects Completed', value: 50 },
          { label: 'Happy Clients', value: 100 },
          { label: 'Certifications', value: 5 }
        ]
      },
      education: {
        title: 'Education',
        items: [
          {
            year: '2024',
            degree: 'Software Engineering',
            school: 'Information Technology Institute (ITI)',
            description: 'Advanced development and engineering principles'
          },
          {
            year: '2023',
            degree: 'Professional Diploma - Translation & Simultaneous Interpreting',
            school: 'American University in Cairo (AUC)',
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
        title: 'Professional Skills',
        categories: [
          {
            name: 'Interpretation',
            skills: ['Simultaneous', 'Consecutive', 'Whispered', 'Conference'],
            level: 95
          },
          {
            name: 'Languages',
            skills: ['English (Fluent)', 'Arabic (Native)', 'Professional Communication'],
            level: 98
          },
          {
            name: 'Training',
            skills: ['Public Speaking', 'Communication Skills', 'Soft Skills', 'Professional Development'],
            level: 90
          },
          {
            name: 'Leadership',
            skills: ['Team Management', 'Project Coordination', 'Event Coordination', 'Stakeholder Relations'],
            level: 88
          }
        ]
      },
      experience: {
        title: 'Professional Experience',
        items: [
          {
            role: 'International Cooperation Officer',
            company: 'Qena Company for Water & Wastewater',
            period: '2023 - Present',
            description: 'Leading international cooperation initiatives and stakeholder engagement',
            highlights: ['Stakeholder Management', 'Government Relations', 'Event Coordination']
          },
          {
            role: 'External Soft Skills Instructor',
            company: 'Information Technology Institute',
            period: '2018 - Present',
            description: 'Training 10,000+ graduates in soft skills and professional communication',
            highlights: ['Communication Training', 'Presentation Skills', 'Leadership Development']
          },
          {
            role: 'Freelance Conference Interpreter',
            company: 'International Organizations',
            period: '2022 - Present',
            description: 'Professional interpretation for international conferences and meetings',
            highlights: ['Conference Interpretation', 'High-Level Events', 'Technical Sessions']
          }
        ]
      },
      services: {
        title: 'My Services',
        items: [
          {
            name: 'Conference Interpretation',
            description: 'Professional simultaneous and consecutive interpretation for international conferences',
            icon: '🎤'
          },
          {
            name: 'English Language Training',
            description: 'Comprehensive English courses for professionals and learners of all levels',
            icon: '📚'
          },
          {
            name: 'Soft Skills Training',
            description: 'Professional development in communication, presentation, and leadership skills',
            icon: '✨'
          },
          {
            name: 'Business Communication',
            description: 'Specialized coaching for business communication and professional interactions',
            icon: '💼'
          },
          {
            name: 'Public Speaking',
            description: 'Professional training to master public speaking and presentation skills',
            icon: '🎯'
          },
          {
            name: 'Executive Coaching',
            description: 'One-on-one coaching for executives and professionals aiming for excellence',
            icon: '👔'
          }
        ]
      },
      projects: {
        title: 'Featured Projects',
        items: [
          {
            title: 'FAO International Cooperation Event',
            category: 'Interpretation',
            image: '🌍',
            description: '8-hour simultaneous interpretation for international agricultural cooperation',
            tags: ['Interpretation', 'International', 'Agriculture'],
            demo: '#'
          },
          {
            title: 'Corporate English Training Program',
            category: 'Training',
            image: '📚',
            description: 'Designed and delivered comprehensive English training for 500+ employees',
            tags: ['Training', 'Corporate', 'English'],
            demo: '#'
          },
          {
            title: 'Leadership Development Workshop',
            category: 'Training',
            image: '✨',
            description: 'Created and facilitated advanced leadership and soft skills workshop',
            tags: ['Leadership', 'Workshop', 'Development'],
            demo: '#'
          },
          {
            title: 'International Conference Coordination',
            category: 'Coordination',
            image: '🎯',
            description: 'Coordinated multi-day international conference with 200+ participants',
            tags: ['Conference', 'Coordination', 'International'],
            demo: '#'
          },
          {
            title: 'Sustainability Project Interpretation',
            category: 'Interpretation',
            image: '🌱',
            description: 'Professional interpretation for sustainability and environmental initiatives',
            tags: ['Interpretation', 'Environment', 'Sustainability'],
            demo: '#'
          },
          {
            title: 'Women Empowerment Initiative',
            category: 'Training',
            image: '💪',
            description: 'Led training program empowering women in professional development',
            tags: ['Training', 'Empowerment', 'Development'],
            demo: '#'
          }
        ]
      },
      achievements: {
        title: 'Achievements & Awards',
        awards: [
          { title: 'Professional Interpreter Certification', issuer: 'AUC', year: '2023' },
          { title: 'Top Trainer Award', issuer: 'ITI', year: '2022' },
          { title: 'Excellence in Communication', issuer: 'Professional Association', year: '2021' },
          { title: 'International Cooperation Excellence', issuer: 'Government', year: '2024' }
        ]
      },
      testimonials: {
        title: 'Client Testimonials',
        items: [
          {
            name: 'Maged Reda',
            role: 'Deputy Regional Manager',
            company: 'CES Consulting',
            message: 'Nada\'s interpretation skills are exceptional. Her professionalism and dedication ensure clear communication in all technical discussions.',
            rating: 5,
            image: '👨'
          },
          {
            name: 'Ahmed Hassan',
            role: 'Project Director',
            company: 'International Development',
            message: 'Outstanding soft skills training. Nada transformed our team\'s communication abilities with her expert guidance.',
            rating: 5,
            image: '👨'
          },
          {
            name: 'Fatima Al-Mansouri',
            role: 'HR Manager',
            company: 'Corporate Solutions',
            message: 'The best English trainer we\'ve worked with. Professional, engaging, and truly effective in her teaching approach.',
            rating: 5,
            image: '👩'
          },
          {
            name: 'Dr. Karim Mohamed',
            role: 'Conference Organizer',
            company: 'International Institute',
            message: 'Nada provided flawless interpretation for our international conference. Highly recommended for any professional event.',
            rating: 5,
            image: '👨'
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        description: 'Ready to work together? Let\'s discuss how I can help you achieve your communication goals.',
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
      footer: '© 2024 Nada Mohamed. All rights reserved. | Crafted with excellence and passion.'
    },
    ar: {
      nav: ['الرئيسية', 'عني', 'التعليم', 'المهارات', 'الخبرة', 'الخدمات', 'المشاريع', 'الإنجازات', 'التقييمات', 'تواصل'],
      hero: {
        greeting: 'مرحباً بك في ملفي الشخصي',
        name: 'ندى محمد',
        roles: ['مترجمة فورية', 'معلمة اللغة الإنجليزية', 'خبيرة المهارات الناعمة', 'مدربة تواصل'],
        cta1: 'اطلب خدماتي',
        cta2: 'عرض المشاريع',
      },
      about: {
        title: 'عني',
        description: 'أنا مترجمة فورية محترفة ثنائية اللغة بخبرة 7+ سنوات في جسر الفجوات التواصلية بين الثقافات. متخصصة في الترجمة الفورية والتواصل التجاري والتدريب المهني.',
        stats: [
          { label: 'سنوات الخبرة', value: 7 },
          { label: 'المشاريع المنجزة', value: 50 },
          { label: 'العملاء السعداء', value: 100 },
          { label: 'الشهادات', value: 5 }
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
            degree: 'دبلوم الترجمة والترجمة الفورية المتزامنة',
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
        title: 'المهارات المهنية',
        categories: [
          {
            name: 'الترجمة الفورية',
            skills: ['متزامنة', 'متتابعة', 'همسة', 'مؤتمرات'],
            level: 95
          },
          {
            name: 'اللغات',
            skills: ['الإنجليزية (طليقة)', 'العربية (لغة الأم)', 'التواصل المهني'],
            level: 98
          },
          {
            name: 'التدريب',
            skills: ['الخطابة العامة', 'مهارات التواصل', 'المهارات الناعمة', 'التطوير المهني'],
            level: 90
          },
          {
            name: 'القيادة',
            skills: ['إدارة الفريق', 'تنسيق المشاريع', 'تنسيق الفعاليات', 'علاقات أصحاب المصلحة'],
            level: 88
          }
        ]
      },
      experience: {
        title: 'الخبرة المهنية',
        items: [
          {
            role: 'موظفة التعاون الدولي',
            company: 'شركة قنا لمياه الشرب والصرف',
            period: '2023 - الحالي',
            description: 'قيادة المبادرات الدولية وإشراك أصحاب المصلحة',
            highlights: ['إدارة أصحاب المصلحة', 'العلاقات الحكومية', 'تنسيق الفعاليات']
          },
          {
            role: 'مدربة المهارات الناعمة الخارجية',
            company: 'معهد تكنولوجيا المعلومات',
            period: '2018 - الحالي',
            description: 'تدريب أكثر من 10000 خريج على المهارات الناعمة والتواصل المهني',
            highlights: ['تدريب التواصل', 'مهارات العرض', 'تطوير القيادة']
          },
          {
            role: 'مترجمة فورية مستقلة',
            company: 'المنظمات الدولية',
            period: '2022 - الحالي',
            description: 'ترجمة فورية مهنية للمؤتمرات الدولية والاجتماعات',
            highlights: ['ترجمة المؤتمرات', 'الفعاليات الرفيعة المستوى', 'الجلسات التقنية']
          }
        ]
      },
      services: {
        title: 'خدماتي',
        items: [
          {
            name: 'الترجمة الفورية للمؤتمرات',
            description: 'ترجمة فورية متخصصة وفوراً متتابعة للمؤتمرات الدولية',
            icon: '🎤'
          },
          {
            name: 'تدريب اللغة الإنجليزية',
            description: 'دورات اللغة الإنجليزية الشاملة للمحترفين والمتعلمين',
            icon: '📚'
          },
          {
            name: 'تدريب المهارات الناعمة',
            description: 'التطوير المهني في مهارات التواصل والقيادة',
            icon: '✨'
          },
          {
            name: 'التواصل التجاري',
            description: 'تدريب متخصص في التواصل التجاري والتفاعلات المهنية',
            icon: '💼'
          },
          {
            name: 'الخطابة العامة',
            description: 'تدريب احترافي لإتقان الخطابة العامة والعروض',
            icon: '🎯'
          },
          {
            name: 'تدريب التنفيذيين',
            description: 'تدريب فردي للمديرين والمحترفين الطامحين للتميز',
            icon: '👔'
          }
        ]
      },
      projects: {
        title: 'المشاريع المميزة',
        items: [
          {
            title: 'فعالية منظمة الأغذية والزراعة الدولية',
            category: 'Interpretation',
            image: '🌍',
            description: 'ترجمة فورية متزامنة لمدة 8 ساعات للتعاون الزراعي الدولي',
            tags: ['ترجمة', 'دولي', 'زراعة'],
            demo: '#'
          },
          {
            title: 'برنامج تدريب اللغة الإنجليزية للشركات',
            category: 'Training',
            image: '📚',
            description: 'تصميم وتنفيذ تدريب اللغة الإنجليزية لأكثر من 500 موظف',
            tags: ['تدريب', 'شركات', 'إنجليزية'],
            demo: '#'
          },
          {
            title: 'ورشة عمل تطوير القيادة',
            category: 'Training',
            image: '✨',
            description: 'إنشاء وتيسير ورشة عمل متقدمة في القيادة والمهارات الناعمة',
            tags: ['قيادة', 'ورشة', 'تطوير'],
            demo: '#'
          }
        ]
      },
      achievements: {
        title: 'الإنجازات والجوائز',
        awards: [
          { title: 'شهادة مترجم محترف', issuer: 'الجامعة الأمريكية', year: '2023' },
          { title: 'جائزة أفضل مدرب', issuer: 'معهد تكنولوجيا المعلومات', year: '2022' },
          { title: 'التميز في التواصل', issuer: 'الرابطة المهنية', year: '2021' },
          { title: 'التميز في التعاون الدولي', issuer: 'الحكومة', year: '2024' }
        ]
      },
      testimonials: {
        title: 'تقييمات العملاء',
        items: [
          {
            name: 'ماجد رضا',
            role: 'نائب المدير الإقليمي',
            company: 'CES Consulting',
            message: 'مهارات الترجمة الفورية لندى استثنائية. احترافيتها وتفانيها يضمنان تواصلاً واضحاً في جميع النقاشات التقنية.',
            rating: 5,
            image: '👨'
          },
          {
            name: 'أحمد حسن',
            role: 'مدير المشروع',
            company: 'التنمية الدولية',
            message: 'تدريب متميز على المهارات الناعمة. حولت ندى قدرات فريقنا التواصلية بإرشادها الخبير.',
            rating: 5,
            image: '👨'
          },
          {
            name: 'فاطمة المنصوري',
            role: 'مدير الموارد البشرية',
            company: 'الحلول الشاملة',
            message: 'أفضل معلمة اللغة الإنجليزية التي عملنا معها. احترافية وجذابة وفعالة جداً في التدريس.',
            rating: 5,
            image: '👩'
          },
          {
            name: 'د. كريم محمد',
            role: 'منظم المؤتمرات',
            company: 'المعهد الدولي',
            message: 'قدمت ندى ترجمة فورية بلا عيب لمؤتمرنا الدولي. موصى بها بشدة لأي فعالية احترافية.',
            rating: 5,
            image: '👨'
          }
        ]
      },
      contact: {
        title: 'تواصل معي',
        description: 'هل أنت مستعد للعمل معي؟ دعنا نناقش كيف يمكنني مساعدتك في تحقيق أهدافك التواصلية.',
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
      footer: '© 2024 ندى محمد. جميع الحقوق محفوظة. | صُنع بتميز وشغف.'
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

  // Dark mode toggle
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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      {/* Header */}
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
        {/* Animated background gradient line */}
        {scrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          {/* Animated Logo with glow effect */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Glow background */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition duration-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, linear: true }}
            />
            
            {/* Logo text */}
            <motion.div
              className="relative text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              {language === 'ar' ?   'Nada' : 'Nada'}
            </motion.div>

            {/* Badge */}
            <motion.div
              className="absolute -top-2 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              
            </motion.div>
          </motion.div>

          {/* Desktop Navigation with creative underlines */}
          <nav className="hidden md:flex items-center gap-1">
            {['home', 'about', 'education', 'skills', 'experience', 'services', 'projects', 'achievements', 'testimonials', 'contact'].map((item, idx) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-base font-semibold px-4 py-2 rounded-xl group overflow-hidden"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Text */}
                <span className="relative text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition duration-300">
                  {t.nav[idx]}
                </span>

                {/* Bottom underline animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle with animation */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="relative p-3 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-lg transition overflow-hidden group"
              whileHover={{ scale: 1.15, rotate: 20 }}
              whileTap={{ scale: 0.85 }}
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, linear: true }}
              />

              {/* Icon animation */}
              <motion.div
                className="relative"
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-blue-600" />}
              </motion.div>
            </motion.button>

            {/* Language Switcher with creative animation */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="relative px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold hover:shadow-2xl transition overflow-hidden group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Rotating glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-75 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, linear: true }}
              />

              {/* Text with animation */}
              <motion.span 
                className="relative flex items-center gap-1"
                animate={{ letterSpacing: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {language === 'en' ? 'AR' : 'EN'}
              </motion.span>
            </motion.button>

            {/* Mobile Menu Button with creative animation */}
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-3 rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-lg transition"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={28} className="text-red-600" /> : <Menu size={28} className="text-blue-600" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="md:hidden bg-gradient-to-b from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-900/70 backdrop-blur-xl border-t border-blue-200 dark:border-slate-700"
            >
              <div className="px-4 py-6 flex flex-col gap-3">
                {['home', 'about', 'education', 'skills', 'experience', 'services', 'projects', 'achievements', 'testimonials', 'contact'].map((item, idx) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-base font-semibold px-6 py-3 rounded-lg text-left hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 transition group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition">
                      {t.nav[idx]}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.p
                className="text-blue-600 font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {t.hero.greeting}
              </motion.p>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {t.hero.name}
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TypingEffect words={t.hero.roles} speed={50} />
              </motion.div>

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Bridging cultures through professional interpretation, communication training, and soft skills development.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-4 flex-wrap mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  {t.hero.cta1}
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600/10 transition"
                >
                  {t.hero.cta2}
                </motion.button>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { icon: Linkedin, url: 'https://linkedin.com/in/nada-mohamed-4b11a61b2' },
                  { icon: Facebook, url: 'https://facebook.com/nada.mohammed.98031' },
                  { icon: Mail, url: 'mailto:nadaiti2021@gmail.com' },
                  { icon: MessageCircle, url: 'https://wa.me/201000912100' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white hover:shadow-lg transition"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-10 dark:opacity-20" />
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍💼</div>
                    <p className="text-slate-600 dark:text-slate-300">Professional Profile</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-blue-600" size={32} />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.about.description}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {t.about.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center hover:shadow-lg transition"
                whileHover={{ y: -5 }}
              >
                <motion.div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  <Counter end={stat.value} />+
                </motion.div>
                <p className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.education.title}
          </motion.h2>

          <div className="space-y-8">
            {t.education.items.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-8 border-l-4 border-gradient-to-b from-blue-600 to-cyan-600"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transform -translate-x-2.5" />
                <motion.div
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-blue-600 font-bold mb-2">{edu.year}</p>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{edu.school}</p>
                  <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.skills.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.skills.categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 dark:from-slate-800 to-white dark:to-slate-900 p-8 rounded-2xl hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">{category.name}</h3>
                <div className="space-y-4 mb-6">
                  {category.skills.map((skill, sidx) => (
                    <motion.div
                      key={sidx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + sidx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Zap size={16} className="text-blue-600" />
                      <span className="text-slate-700 dark:text-slate-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">{language === 'en' ? 'Proficiency' : 'مستوى الكفاءة'}</span>
                    <span className="text-sm font-bold text-blue-600">{category.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      transition={{ delay: 0.5 + idx * 0.2, duration: 1 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.experience.title}
          </motion.h2>

          <div className="space-y-8">
            {t.experience.items.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl hover:shadow-lg transition border-l-4 border-gradient-to-b from-blue-600 to-cyan-600"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-blue-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hidx) => (
                    <span key={hidx} className="text-xs bg-blue-100 dark:bg-slate-700 text-blue-900 dark:text-blue-300 px-3 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.services.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 dark:from-slate-800 to-white dark:to-slate-900 p-8 rounded-2xl border-2 border-blue-100 dark:border-slate-700 hover:shadow-xl transition"
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.name}</h3>
                <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.projects.title}
          </motion.h2>

          {/* Filter */}
          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {['all', 'Interpretation', 'Training', 'Coordination'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? (language === 'en' ? 'All Projects' : 'جميع المشاريع') : cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition group"
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-6xl relative overflow-hidden">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="group-hover:scale-110 transition"
                    >
                      {project.image}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tidx) => (
                        <span key={tidx} className="text-xs bg-blue-100 dark:bg-slate-700 text-blue-900 dark:text-blue-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-cyan-600 font-semibold"
                      whileHover={{ gap: 8 }}
                    >
                      {language === 'en' ? 'View Project' : 'عرض المشروع'} <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {t.testimonials.title}
          </motion.h2>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-gradient-to-br from-blue-50 dark:from-slate-800 to-white dark:to-slate-900 backdrop-blur-sm border border-blue-200 dark:border-slate-700 p-12 rounded-3xl shadow-lg"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#3b82f6" className="text-blue-600" />
                ))}
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-200 mb-8 italic">
                "{t.testimonials.items[currentTestimonial].message}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{t.testimonials.items[currentTestimonial].name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t.testimonials.items[currentTestimonial].role} @ {t.testimonials.items[currentTestimonial].company}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length)}
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length)}
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {t.testimonials.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    idx === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 dark:from-slate-900 to-cyan-600 dark:to-slate-800 text-white relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, linear: true }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
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
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
                    <item.icon size={24} />
                  </div>
                  <span className="text-lg font-medium">{item.label}</span>
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
                className="w-full px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/30 focus:border-white outline-none transition"
              />
              <input
                type="email"
                placeholder={t.contact.formLabels.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/30 focus:border-white outline-none transition"
              />
              <textarea
                placeholder={t.contact.formLabels.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/30 focus:border-white outline-none transition resize-none"
              />

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'success' ? '✓ ' + (language === 'en' ? 'Sent!' : 'تم الإرسال!') : t.contact.formLabels.send}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="text-slate-400">{t.footer}</p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-blue-600 hover:bg-cyan-600 transition"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPremium;
