import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Microscope, BookOpen, Users, Target, Award, FlaskConical, 
  Leaf, Heart, Dna, ExternalLink, FileSpreadsheet, Camera, Mail, Phone, 
  MapPin, ChevronUp, Moon, Sun, Globe, Send, HelpCircle, Video, FileText, 
  Calendar, Star, TrendingUp, Sparkles, Zap, BookMarked, GraduationCap,
  Lightbulb, Brain, Search, Download, Share2, Facebook, Instagram, Twitter
} from 'lucide-react';

export default function BioQuestWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('ku');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ku' ? 'en' : 'ku');
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(language === 'ku' ? 'سوپاس! پەیامەکەت نێردرا.' : 'Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const sections = language === 'ku' ? {
    home: 'سەرەکی',
    about: 'دەربارە',
    branches: 'لقەکان',
    courses: 'وانەکان',
    gallery: 'گالەری',
    discoveries: 'دۆزینەوەکان',
    blog: 'بلۆگ',
    videos: 'ڤیدیۆ',
    faq: 'پرسیارەکان',
    goals: 'ئامانجەکان',
    success: 'سەرکەوتن',
    team: 'تیمەکەمان',
    contact: 'پەیوەندی'
  } : {
    home: 'Home',
    about: 'About',
    branches: 'Branches',
    courses: 'Courses',
    gallery: 'Gallery',
    discoveries: 'Discoveries',
    blog: 'Blog',
    videos: 'Videos',
    faq: 'FAQ',
    goals: 'Goals',
    success: 'Success',
    team: 'Team',
    contact: 'Contact'
  };

  const branches = language === 'ku' ? [
    { 
      icon: <Dna className="w-8 h-8" />, 
      name: 'زانستی گەردلەیی', 
      desc: 'لێکۆڵینەوە لە DNA، RNA و پرۆتین',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400',
      courses: 12,
      students: 45
    },
    { 
      icon: <FlaskConical className="w-8 h-8" />, 
      name: 'کیمیای زیندەی', 
      desc: 'کردارە کیمیاوییەکانی زیندەوەران',
      image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400',
      courses: 10,
      students: 38
    },
    { 
      icon: <Microscope className="w-8 h-8" />, 
      name: 'خانەزانی', 
      desc: 'پێکهاتە و کارکردنی خانەکان',
      image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=400',
      courses: 8,
      students: 52
    },
    { 
      icon: <Dna className="w-8 h-8" />, 
      name: 'زانستی بۆماوەیی', 
      desc: 'گواستنەوەی تایبەتمەندییەکان',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400',
      courses: 9,
      students: 41
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      name: 'فەرمانزانی', 
      desc: 'کارکردنی ئەندامەکانی لەش',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400',
      courses: 11,
      students: 48
    },
    { 
      icon: <Leaf className="w-8 h-8" />, 
      name: 'ڕووەکزانی', 
      desc: 'لێکۆڵینەوە لە ڕووەکەکان',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400',
      courses: 7,
      students: 35
    }
  ] : [
    { 
      icon: <Dna className="w-8 h-8" />, 
      name: 'Molecular Biology', 
      desc: 'Study of DNA, RNA and proteins',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400',
      courses: 12,
      students: 45
    },
    { 
      icon: <FlaskConical className="w-8 h-8" />, 
      name: 'Biochemistry', 
      desc: 'Chemical processes in living organisms',
      image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400',
      courses: 10,
      students: 38
    },
    { 
      icon: <Microscope className="w-8 h-8" />, 
      name: 'Cell Biology', 
      desc: 'Structure and function of cells',
      image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=400',
      courses: 8,
      students: 52
    },
    { 
      icon: <Dna className="w-8 h-8" />, 
      name: 'Genetics', 
      desc: 'Inheritance of traits',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400',
      courses: 9,
      students: 41
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      name: 'Physiology', 
      desc: 'Function of body organs',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400',
      courses: 11,
      students: 48
    },
    { 
      icon: <Leaf className="w-8 h-8" />, 
      name: 'Botany', 
      desc: 'Study of plants',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400',
      courses: 7,
      students: 35
    }
  ];

  const discoveries = language === 'ku' ? [
    { 
      title: 'تیۆری خانە', 
      year: '1838-1839', 
      desc: 'دۆزینەوەی ئەوەی کە هەموو زیندەوەران لە خانە پێکهاتوون', 
      scientist: 'شلایدن و شڤان',
      impact: 'high'
    },
    { 
      title: 'پەنسلین', 
      year: '1928', 
      desc: 'یەکەم دژە زیندەیی دۆزرایەوە', 
      scientist: 'ئەلیکساندەر فلیمینگ',
      impact: 'revolutionary'
    },
    { 
      title: 'DNA Double Helix', 
      year: '1953', 
      desc: 'دۆزینەوەی پێکهاتەی جیناتی', 
      scientist: 'واتسۆن و کریک',
      impact: 'revolutionary'
    },
    { 
      title: 'CRISPR-Cas9', 
      year: '2012', 
      desc: 'دەستکاریکردنی جینی', 
      scientist: 'دودنا و شارپێنتیێر',
      impact: 'revolutionary'
    },
    { 
      title: 'پڕۆژەی جینۆمی مرۆڤ', 
      year: '2003', 
      desc: 'نەخشەکێشانی جینەکانی مرۆڤ', 
      scientist: 'پرۆژەی نێودەوڵەتی',
      impact: 'high'
    },
    { 
      title: 'کوتان', 
      year: '1796', 
      desc: 'یەکەم ڤاکسینی کۆکە', 
      scientist: 'ئیدوارد جێنەر',
      impact: 'revolutionary'
    }
  ] : [
    { 
      title: 'Cell Theory', 
      year: '1838-1839', 
      desc: 'Discovery that all organisms are made of cells', 
      scientist: 'Schleiden & Schwann',
      impact: 'high'
    },
    { 
      title: 'Penicillin', 
      year: '1928', 
      desc: 'First antibiotic discovered', 
      scientist: 'Alexander Fleming',
      impact: 'revolutionary'
    },
    { 
      title: 'DNA Double Helix', 
      year: '1953', 
      desc: 'Discovery of genetic structure', 
      scientist: 'Watson & Crick',
      impact: 'revolutionary'
    },
    { 
      title: 'CRISPR-Cas9', 
      year: '2012', 
      desc: 'Gene editing technology', 
      scientist: 'Doudna & Charpentier',
      impact: 'revolutionary'
    },
    { 
      title: 'Human Genome Project', 
      year: '2003', 
      desc: 'Mapping human genes', 
      scientist: 'International Project',
      impact: 'high'
    },
    { 
      title: 'Vaccination', 
      year: '1796', 
      desc: 'First smallpox vaccine', 
      scientist: 'Edward Jenner',
      impact: 'revolutionary'
    }
  ];

  const blogPosts = language === 'ku' ? [
    { 
      title: 'چۆن خانەکان وزە دروست دەکەن؟', 
      date: '2024-01-15', 
      excerpt: 'لێکۆڵینەوە لە پرۆسەی میتۆکۆندریا و دروستکردنی ATP...',
      author: 'تیمی BioNova',
      category: 'خانەزانی',
      readTime: '5 خولەک'
    },
    { 
      title: 'نهێنییەکانی DNA', 
      date: '2024-01-10', 
      excerpt: 'بۆماوە چۆن لە نەوەیەکەوە بۆ نەوەیەکی تر دەگوازرێتەوە...',
      author: 'تیمی BioNova',
      category: 'جێنەتیک',
      readTime: '7 خولەک'
    },
    { 
      title: 'گرنگی فۆتۆسێنتێز', 
      date: '2024-01-05', 
      excerpt: 'چۆن ڕووەکەکان تیشکی خۆر دەگۆڕن بۆ خۆراک...',
      author: 'تیمی BioNova',
      category: 'ڕووەکزانی',
      readTime: '6 خولەک'
    }
  ] : [
    { 
      title: 'How Cells Produce Energy', 
      date: 'Jan 15, 2024', 
      excerpt: 'Exploring mitochondria and ATP production process...',
      author: 'BioNova Team',
      category: 'Cell Biology',
      readTime: '5 min'
    },
    { 
      title: 'Secrets of DNA', 
      date: 'Jan 10, 2024', 
      excerpt: 'How heredity passes from generation to generation...',
      author: 'BioNova Team',
      category: 'Genetics',
      readTime: '7 min'
    },
    { 
      title: 'Importance of Photosynthesis', 
      date: 'Jan 5, 2024', 
      excerpt: 'How plants convert sunlight into food...',
      author: 'BioNova Team',
      category: 'Botany',
      readTime: '6 min'
    }
  ];

  const videos = language === 'ku' ? [
    { 
      title: 'بنەمای خانەزانی', 
      link: 'https://youtu.be/LiR0wNi1JHg?si=IIJjwETN9sKtcjdF', 
      duration: '19:10',
      views: '1.2M',
      category: 'خانەزانی'
    },
    { 
      title: 'DNA و RNA', 
      link: 'https://youtu.be/GhABWQC3YDs?si=eNev-Z-9wn58UAZg', 
      duration: '9:17',
      views: '850K',
      category: 'جێنەتیک'
    },
    { 
      title: 'پەرەسەندنی داروین', 
      link: 'https://youtu.be/s64Y8sVYfFY?si=R0MCq3S686CHm5qV', 
      duration: '3:06',
      views: '2.1M',
      category: 'پەرەسەندن'
    }
  ] : [
    { 
      title: 'Basics of Cell Biology', 
      link: 'https://youtu.be/LiR0wNi1JHg?si=IIJjwETN9sKtcjdF', 
      duration: '19:10',
      views: '1.2M',
      category: 'Cell Biology'
    },
    { 
      title: 'DNA and RNA', 
      link: 'https://youtu.be/GhABWQC3YDs?si=eNev-Z-9wn58UAZg', 
      duration: '9:17',
      views: '850K',
      category: 'Genetics'
    },
    { 
      title: 'Darwin\'s Evolution', 
      link: 'https://youtu.be/s64Y8sVYfFY?si=R0MCq3S686CHm5qV', 
      duration: '3:06',
      views: '2.1M',
      category: 'Evolution'
    }
  ];

  const faqs = language === 'ku' ? [
    { 
      q: 'بایۆلۆجی چییە؟', 
      a: 'بایۆلۆجی زانستی خوێندنی ژیان و زیندەوەرانە، لە خانە بچووکەکانەوە تا دەگاتە ئیکۆسیستەمی گەورە.',
      category: 'گشتی'
    },
    { 
      q: 'چەند ساڵە بەشی بایۆلۆجی؟', 
      a: 'بەشی بایۆلۆجی بەکالۆریۆس 4 ساڵە.',
      category: 'خوێندن'
    },
    { 
      q: 'دوای تەواوبوون چ کارێک دەکەم؟', 
      a: 'دەتوانیت لە تاقیگە، نەخۆشخانە، توێژینەوە، وانەوتنەوە، کشتوکاڵ و بوارەکانی تر کار بکەیت.',
      category: 'پیشە'
    }
  ] : [
    { 
      q: 'What is Biology?', 
      a: 'Biology is the science of studying life and living organisms, from tiny cells to large ecosystems.',
      category: 'General'
    },
    { 
      q: 'How long is the Biology program?', 
      a: 'The Biology bachelor\'s program is 4 years.',
      category: 'Studies'
    },
    { 
      q: 'What can I do after graduation?', 
      a: 'You can work in labs, hospitals, research, teaching, agriculture and other fields.',
      category: 'Career'
    }
  ];

  const stats = language === 'ku' ? [
    { icon: <Users className="w-8 h-8" />, value: '250+', label: 'خوێندکار' },
    { icon: <BookOpen className="w-8 h-8" />, value: '60+', label: 'وانە' },
    { icon: <Award className="w-8 h-8" />, value: '15+', label: 'مامۆستا' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '95%', label: 'ڕێژەی سەرکەوتن' }
  ] : [
    { icon: <Users className="w-8 h-8" />, value: '250+', label: 'Students' },
    { icon: <BookOpen className="w-8 h-8" />, value: '60+', label: 'Courses' },
    { icon: <Award className="w-8 h-8" />, value: '15+', label: 'Teachers' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '95%', label: 'Success Rate' }
  ];

  const themeClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-50 via-white to-green-50';
  const cardClass = isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
  const accentClass = isDarkMode ? 'from-green-700 to-green-800' : 'from-green-600 to-green-700';

  return (
    <div className={`min-h-screen ${themeClass} font-sans transition-colors duration-300`} dir={language === 'ku' ? 'rtl' : 'ltr'}>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50 transition-all hover:scale-110 animate-bounce"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className={`${cardClass} p-4 rounded-b-lg`}>
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-green-600">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`bg-gradient-to-r ${accentClass} text-white shadow-lg sticky top-0 z-40 backdrop-blur-md bg-opacity-95`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="bg-white p-2 rounded-full animate-pulse-slow">
                <Microscope className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  BioQuest
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                </h1>
                <p className="text-sm text-green-100">{language === 'ku' ? 'تیمی BioNova' : 'BioNova Team'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-green-500 rounded-lg transition-colors"
                title={language === 'ku' ? 'گەڕان' : 'Search'}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-green-500 rounded-lg transition-colors"
                title={language === 'ku' ? 'گۆڕینی دۆخ' : 'Toggle Theme'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 hover:bg-green-500 rounded-lg transition-colors flex items-center gap-2"
                title={language === 'ku' ? 'گۆڕینی زمان' : 'Change Language'}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-bold">{language === 'ku' ? 'EN' : 'کو'}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-2 flex-wrap">
              {Object.entries(sections).slice(0, 8).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`px-3 py-2 rounded-lg transition-all text-sm ${
                    activeSection === key
                      ? 'bg-white text-green-700 font-semibold shadow-lg transform scale-105'
                      : 'hover:bg-green-500 hover:scale-105'
                  }`}
                >
                  {value}
                </button>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="mt-4 animate-slide-down">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'ku' ? 'گەڕان لە ماڵپەڕەکە...' : 'Search the website...'}
                  className={`w-full px-4 py-3 ${language === 'ku' ? 'pr-12' : 'pl-12'} rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} border-2 border-green-300 focus:border-green-500 outline-none`}
                />
                <Search className={`absolute ${language === 'ku' ? 'right-4' : 'left-4'} top-3.5 w-5 h-5 text-gray-400`} />
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 animate-slide-down">
              {Object.entries(sections).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-${language === 'ku' ? 'right' : 'left'} transition-all ${
                    activeSection === key
                      ? 'bg-white text-green-700 font-semibold'
                      : 'hover:bg-green-500'
                  }`}
                >
                  {value}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            
            {/* Hero Section */}
            <section className="text-center py-12 relative overflow-hidden">
              <div className={`bg-gradient-to-r ${accentClass} text-white rounded-3xl p-12 shadow-2xl relative z-10`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-float"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full filter blur-3xl animate-float-delayed"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 animate-slide-up">
                  {language === 'ku' ? 'بەخێربێن بۆ جیهانی سەرنجڕاکێشی بایۆلۆجی' : 'Welcome to the Fascinating World of Biology'}
                  <Sparkles className="inline-block w-8 h-8 ml-2 text-yellow-300 animate-spin-slow" />
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto relative z-10 animate-slide-up-delayed">
                  {language === 'ku' 
                    ? 'جیهانێک کە هەموو زیندوویەک چیرۆکێک دەگێڕێتەوە، چیرۆکێکی گەشەکردن و مانەوە و پەیوەندی' 
                    : 'A world where every living thing tells a story of growth, survival and connection'}
                </p>
                <div className="mt-8 flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={() => setActiveSection('courses')}
                    className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                  >
                    <GraduationCap className="w-5 h-5" />
                    {language === 'ku' ? 'وانەکان' : 'Courses'}
                  </button>
                  <button
                    onClick={() => setActiveSection('videos')}
                    className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                  >
                    <Video className="w-5 h-5" />
                    {language === 'ku' ? 'ڤیدیۆکان' : 'Videos'}
                  </button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${cardClass} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-green-600 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </section>

            {/* About Biology */}
            <section className={`${cardClass} rounded-2xl shadow-xl p-8 animate-slide-up`}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'زیندەزانی چییە؟' : 'What is Biology?'}</h3>
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                {language === 'ku' 
                  ? 'زیندەزانی یان ژیانزانی یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.' 
                  : 'Biology is one of the most important natural sciences that forms a major part of the College of Science. This science carefully and accurately examines life and living organisms in all their aspects.'}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: language === 'ku' ? 'مرۆڤ' : 'Humans', desc: language === 'ku' ? 'تێگەیشتن لە پێکهاتە و کارکردنی جەستەی مرۆڤ' : 'Understanding human body structure and function', icon: <Brain className="w-6 h-6" /> },
                  { title: language === 'ku' ? 'ئاژەڵ' : 'Animals', desc: language === 'ku' ? 'لێکۆڵینەوە لە جۆراوجۆری ئاژەڵان' : 'Study of animal diversity', icon: <Heart className="w-6 h-6" /> },
                  { title: language === 'ku' ? 'ڕووەک' : 'Plants', desc: language === 'ku' ? 'خوێندنی ژیان و گەشەی ڕووەکەکان' : 'Study of plant life and growth', icon: <Leaf className="w-6 h-6" /> }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} p-6 rounded-xl border-r-4 border-green-600 hover:shadow-lg transition-all hover:-translate-y-1 group`}
                  >
                    <div className="text-green-600 mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="font-bold text-green-700 mb-3 text-lg">{item.title}</h4>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Branches Preview */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold flex items-center gap-2">
                  <Zap className="w-8 h-8 text-green-600" />
                  {language === 'ku' ? 'لقە سەرەکیەکان' : 'Main Branches'}
                </h3>
                <button
                  onClick={() => setActiveSection('branches')}
                  className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
                >
                  {language === 'ku' ? 'هەموویان ببینە' : 'View All'}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {branches.slice(0, 3).map((branch, index) => (
                  <div
                    key={index}
                    className={`${cardClass} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer`}
                    onClick={() => setActiveSection('branches')}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={branch.image} 
                        alt={branch.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-full">
                        {branch.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-xl mb-2 text-green-700">{branch.name}</h4>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{branch.desc}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-green-600">
                          <BookOpen className="w-4 h-4" />
                          {branch.courses} {language === 'ku' ? 'وانە' : 'courses'}
                        </span>
                        <span className="flex items-center gap-1 text-green-600">
                          <Users className="w-4 h-4" />
                          {branch.students} {language === 'ku' ? 'خوێندکار' : 'students'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Latest Blog Posts */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold flex items-center gap-2">
                  <FileText className="w-8 h-8 text-green-600" />
                  {language === 'ku' ? 'تازەترین وتارەکان' : 'Latest Articles'}
                </h3>
                <button
                  onClick={() => setActiveSection('blog')}
                  className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
                >
                  {language === 'ku' ? 'هەموویان ببینە' : 'View All'}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className={`${cardClass} rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group`}
                    onClick={() => setActiveSection('blog')}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 font-semibold">{post.date}</span>
                    </div>
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h4 className="font-bold text-xl mb-2 group-hover:text-green-700 transition-colors">{post.title}</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{post.readTime}</span>
                      <span className="text-green-600 font-semibold flex items-center gap-1">
                        {language === 'ku' ? 'بخوێنەرەوە' : 'Read More'}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* Branches Section */}
        {activeSection === 'branches' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Microscope className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'لقە سەرەکیەکانی زیندەزانی' : 'Main Branches of Biology'}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-green-100 overflow-hidden group`}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={branch.image} 
                        alt={branch.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg">
                        {branch.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-green-700 mb-3 text-lg group-hover:text-green-600 transition-colors">{branch.name}</h4>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{branch.desc}</p>
                      <div className="flex items-center gap-4 text-sm border-t pt-4">
                        <span className="flex items-center gap-1 text-green-600">
                          <BookOpen className="w-4 h-4" />
                          {branch.courses} {language === 'ku' ? 'وانە' : 'courses'}
                        </span>
                        <span className="flex items-center gap-1 text-green-600">
                          <Users className="w-4 h-4" />
                          {branch.students} {language === 'ku' ? 'خوێندکار' : 'students'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Branches */}
            <section className={`bg-gradient-to-r ${accentClass} text-white rounded-2xl shadow-xl p-8`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                {language === 'ku' ? 'لقەکانی تر' : 'Other Branches'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: language === 'ku' ? 'پەرەسەندن (Evolution)' : 'Evolution', desc: language === 'ku' ? 'گۆڕانی زیندەوەران بەدرێژایی کات' : 'Changes in organisms over time' },
                  { title: language === 'ku' ? 'گەشەزانی' : 'Development', desc: language === 'ku' ? 'گەشەکردنی تاکەکان لە قۆناغی سەرەتاییەوە' : 'Individual development from early stages' },
                  { title: language === 'ku' ? 'ژینگەییزانی (Ecology)' : 'Ecology', desc: language === 'ku' ? 'پەیوەندی زیندەوەران و ژینگەکەیان' : 'Relationship between organisms and environment' },
                  { title: language === 'ku' ? 'پۆلێنزانی (Taxonomy)' : 'Taxonomy', desc: language === 'ku' ? 'پۆلێنکردن و ناولێنانی زیندەوەران' : 'Classification and naming of organisms' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-green-50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Courses Section */}
        {activeSection === 'courses' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <FileSpreadsheet className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'وانەکانی بەشی بایۆلۆجی' : 'Biology Department Courses'}</h3>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} p-8 rounded-xl border-2 border-green-200 shadow-lg`}>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-12 h-12 text-green-600" />
                  <div>
                    <h4 className="text-2xl font-bold text-green-700">
                      {language === 'ku' ? 'وانەکانی کۆلێژی زانست - زانکۆی ڕاپەڕین' : 'College of Science Courses - Raparin University'}
                    </h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                      {language === 'ku' 
                        ? 'لێرە دەتوانیت هەموو وانەکانی بەشی بایۆلۆجی ببینیت کە لە کۆلێژی زانستی زانکۆی ڕاپەڕین دەخوێندرێن.' 
                        : 'Here you can view all Biology department courses taught at the College of Science, Raparin University.'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1YptJs97s-7urCq-N62UoHHfwhigwOGv5xTkPczCZZnc/edit?gid=0#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
                  >
                    <FileSpreadsheet className="w-6 h-6" />
                    <span>{language === 'ku' ? 'بینینی وانەکان' : 'View Courses'}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button className="inline-flex items-center justify-center gap-3 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
                    <Download className="w-6 h-6" />
                    <span>{language === 'ku' ? 'داگرتن' : 'Download'}</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Gallery Section */}
        {activeSection === 'gallery' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Camera className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'گالەری وێنە' : 'Image Gallery'}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: language === 'ku' ? 'تاقیگەی بایۆلۆجی' : 'Biology Lab', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600', category: language === 'ku' ? 'تاقیگە' : 'Laboratory' },
                  { title: language === 'ku' ? 'میکرۆسکۆپ' : 'Microscope', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600', category: language === 'ku' ? 'ئامێر' : 'Equipment' },
                  { title: language === 'ku' ? 'خانەی زیندوو' : 'Living Cell', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600', category: language === 'ku' ? 'خانەزانی' : 'Cell Biology' },
                  { title: 'DNA', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600', category: language === 'ku' ? 'جێنەتیک' : 'Genetics' },
                  { title: language === 'ku' ? 'ڕووەکزانی' : 'Botany', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600', category: language === 'ku' ? 'ڕووەک' : 'Plants' },
                  { title: language === 'ku' ? 'تاقیکردنەوە' : 'Experiment', image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600', category: language === 'ku' ? 'تاقیگە' : 'Laboratory' }
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(item)}
                    className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-green-300 text-sm">{item.category}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Discoveries Section */}
        {activeSection === 'discoveries' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'دۆزینەوە گرنگەکان' : 'Important Discoveries'}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {discoveries.map((discovery, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 group`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {discovery.year}
                      </div>
                      {discovery.impact === 'revolutionary' && (
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    <h4 className="font-bold text-green-700 text-lg mb-2 group-hover:text-green-600 transition-colors">
                      {discovery.title}
                    </h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                      {discovery.desc}
                    </p>
                    <p className="text-green-600 font-semibold text-sm flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      {discovery.scientist}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Blog Section */}
        {activeSection === 'blog' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'وتارەکان' : 'Blog Posts'}</h3>
              </div>
              
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer group`}
                  >
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-600 font-semibold">{post.date}</span>
                      </div>
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="font-bold text-2xl mb-2 text-green-700 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {language === 'ku' ? 'نووسەر' : 'Author'}: {post.author}
                      </span>
                      <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2">
                        {language === 'ku' ? 'زیاتر بخوێنەرەوە' : 'Read More'}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Videos Section */}
        {activeSection === 'videos' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Video className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'ڤیدیۆی پەروەردەیی' : 'Educational Videos'}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group`}
                  >
                    <div className="relative bg-gradient-to-br from-green-600 to-green-700 h-48 flex items-center justify-center">
                      <Video className="w-20 h-20 text-white opacity-50" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Video className="w-8 h-8 text-green-600" />
                        </div>
                      </div>
                      <span className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {video.category}
                      </span>
                      <h4 className="font-bold text-lg mb-2">{video.title}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4 flex items-center gap-2`}>
                        <TrendingUp className="w-4 h-4" />
                        {video.views} {language === 'ku' ? 'بینین' : 'views'}
                      </p>
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
                      >
                        {language === 'ku' ? 'سەیر بکە' : 'Watch Now'}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* FAQ Section */}
        {activeSection === 'faq' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'پرسیارە باوەکان' : 'Frequently Asked Questions'}</h3>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {faq.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-green-700 flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      {faq.q}
                    </h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${language === 'ku' ? 'pr-7' : 'pl-7'}`}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Goals Section */}
        {activeSection === 'goals' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'ئامانجەکانی ماڵپەڕەکەمان' : 'Our Website Goals'}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {(language === 'ku' ? [
                  'روونکردنەوەی بایۆلۆجی بە ئاسانی بۆ هەموو چینەکان',
                  'ئیلهامبەخشین بە خوێندکاران بۆ خوێندنی بایۆلۆجی',
                  'هاندانی فێربوونی زیاتری زانستی بایۆلۆجی',
                  'بەرەوپێشبردنی هۆشیاری دەربارەی زانستی بایۆلۆجی',
                  'ڕوونکردنەوەی پەیوەندی بایۆلۆجی بە ژیانی ڕۆژانە',
                  'ڕەخساندنی ئەزموونێکی فێرکاری خۆش و سەرنجڕاکێش'
                ] : [
                  'Simplify biology for all audiences',
                  'Inspire students to study biology',
                  'Encourage further scientific learning',
                  'Promote awareness about biological sciences',
                  'Explain biology\'s connection to daily life',
                  'Provide an enjoyable and engaging learning experience'
                ]).map((goal, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group`}
                  >
                    <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>{goal}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Biology in Daily Life */}
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-100 to-green-50'} rounded-2xl shadow-xl p-8`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-green-600" />
                {language === 'ku' ? 'ڕۆڵی بایۆلۆجی لە ژیانی ڕۆژانەدا' : 'Role of Biology in Daily Life'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: language === 'ku' ? 'خۆراک و خۆراکزانی' : 'Food & Nutrition', desc: language === 'ku' ? 'تێگەیشتن لە گەشەکردنی ڕووەکەکان و دابینکردنی خۆراک' : 'Understanding plant growth and food production' },
                  { title: language === 'ku' ? 'تەندروستی و پزیشکی' : 'Health & Medicine', desc: language === 'ku' ? 'لێکۆڵینەوە لە نەخۆشییەکان و دۆزینەوەی چارەسەرەکان' : 'Studying diseases and discovering treatments' },
                  { title: language === 'ku' ? 'ژینگە و ژینگەزانی' : 'Environment & Ecology', desc: language === 'ku' ? 'پاراستنی دارستان و ڕووبار و گیانلەبەرە کێوییەکان' : 'Protecting forests, rivers and wildlife' },
                  { title: language === 'ku' ? 'بایۆتەکنەلۆژیا' : 'Biotechnology', desc: language === 'ku' ? 'دروستکردنی ڤاکسین و دەرمان و بەروبوومی باشترکراوی' : 'Creating vaccines, medicines and improved products' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${cardClass} p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1`}
                  >
                    <h4 className="font-bold text-green-700 mb-2">{item.title}</h4>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Success Section */}
        {activeSection === 'success' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'چۆن سەرکەوتوو بین لە بایۆلۆجی؟' : 'How to Succeed in Biology?'}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {(language === 'ku' ? [
                  'تێگەیشتن لە بابەتە بنچینەییەکان',
                  'بە بەردەوامی بخوێنە',
                  'شیوازی سەردەمی بۆ خوێندن بەکاربهێنە',
                  'تێبینییەکانت بنووسە',
                  'مەشقکردن بە بابەتەکانی ڕابردوو',
                  'بەردەوام بپرسە',
                  'سەرچاوەی زیادە بەکاربهێنە',
                  'ئەوانی تر فێر بکە'
                ] : [
                  'Understand fundamental concepts',
                  'Study consistently',
                  'Use modern study methods',
                  'Take notes',
                  'Practice with past material',
                  'Ask questions continuously',
                  'Use additional resources',
                  'Teach others'
                ]).map((tip, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group`}
                  >
                    <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg group-hover:rotate-12 transition-transform">
                      ✓
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Tips */}
            <section className={`bg-gradient-to-r ${accentClass} text-white rounded-2xl shadow-xl p-8`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                {language === 'ku' ? 'ئامۆژگاری زیادە' : 'Additional Advice'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: language === 'ku' ? 'تەندروست بمێنەرەوە' : 'Stay Healthy', desc: language === 'ku' ? 'خواردنی باش، خەوی پێویست، پشوودان لە کاتی خوێندن' : 'Good food, enough sleep, breaks while studying', icon: <Heart className="w-6 h-6" /> },
                  { title: language === 'ku' ? 'چێژ لە بابەتەکان وەربگرە' : 'Enjoy the Topics', desc: language === 'ku' ? 'بایۆلۆجی وەک لێکۆڵینەوە لە خودی ژیان سەیر بکە' : 'View biology as exploring life itself', icon: <Sparkles className="w-6 h-6" /> },
                  { title: language === 'ku' ? 'بە سەبر و بەردەوام بە' : 'Be Patient & Persistent', desc: language === 'ku' ? 'بایۆلۆجی پێویستی بە کات و مەشقی بەردەوام هەیە' : 'Biology needs time and continuous practice', icon: <Target className="w-6 h-6" /> }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition-all backdrop-blur-sm"
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="font-bold mb-3 text-xl">{item.title}</h4>
                    <p className="text-green-50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'دەربارەی تیمەکەمان' : 'About Our Team'}</h3>
              </div>
              <div className={`prose prose-lg max-w-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-6`}>
                <p className="text-xl">
                  {language === 'ku' 
                    ? 'ئێمە شەش خوێندکاری بەشی بایۆلۆجی زانکۆین، کە بەهۆی خۆشەویستییەکی هاوبەشەوە بۆ زانست و زانیارییەوە کۆکراوینەتەوە. ئەم ماڵپەڕە پڕۆژەی ئێمەیە، بە ئامانجی ئەوەی کە بایۆلۆجی ئاسانتربێ بۆ تێگەیشتن و چێژبەخشتربێ بۆ هەمووان دروستکراوە.' 
                    : 'We are six biology students united by our shared love for science and knowledge. This website is our project, created with the aim of making biology easier to understand and more enjoyable for everyone.'}
                </p>
                <p className="text-lg">
                  {language === 'ku'
                    ? 'هەریەکەمان ئارەزووی جیاوازمان هەیە، هەندێکمان ڕووەکمان خۆشدەوێت، هەندێکی تر سەرسامین بە ئاژەڵ، وە هەندێکی تر مرۆڤ، یان ژینگە، بەڵام بەیەکەوە زانیاری و داهێنان و هەوڵەکانمان تێکەڵ کرد بۆ بنیاتنانی ئەم ماڵپەڕە.'
                    : 'Each of us has different interests - some love plants, others are fascinated by animals, and others by humans or the environment - but together we combined our knowledge, creativity and efforts to build this website.'}
                </p>
              </div>
            </section>

            {/* Team Values */}
            <section className={`bg-gradient-to-br ${accentClass} text-white rounded-2xl shadow-xl p-8 text-center`}>
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
                {language === 'ku' ? 'تیمی BioNova' : 'BioNova Team'}
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </h3>
              <p className="text-xl mb-8 text-green-50">
                {language === 'ku' 
                  ? 'دیدگاکەمان سادەیە: جوانی بایۆلۆجی بە شێوەیەک هاوبەش بکەین کە هەست بە سەرنجڕاکێشی و ڕوونی و ئیلهامبەخشین بکەیت' 
                  : 'Our vision is simple: to share the beauty of biology in a way that feels fascinating, clear, and inspiring'}
              </p>
              <div className="flex justify-center gap-8 flex-wrap">
                {[
                  { icon: <Microscope className="w-16 h-16" />, title: language === 'ku' ? 'توێژینەوە' : 'Research' },
                  { icon: <Leaf className="w-16 h-16" />, title: language === 'ku' ? 'زانست' : 'Science' },
                  { icon: <Heart className="w-16 h-16" />, title: language === 'ku' ? 'خۆشەویستی' : 'Passion' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition-all hover:scale-105 backdrop-blur-sm"
                  >
                    <div className="mx-auto mb-4">{item.icon}</div>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* University Info */}
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-100 to-green-50'} rounded-2xl shadow-xl p-8`}>
              <h3 className="text-2xl font-bold mb-6 text-center">
                {language === 'ku' ? 'بەشی بایۆلۆجی - زانکۆی ڕاپەڕین' : 'Biology Department - Raparin University'}
              </h3>
              <div className={`${cardClass} p-6 rounded-xl shadow-md`}>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg text-center mb-4`}>
                  {language === 'ku'
                    ? 'ئەم ماڵپەڕە تایبەتە بە خوێندکاران و ئارەزوومەندانی بەشی بایۆلۆجی لە کۆلێژی زانستی زانکۆی ڕاپەڕین'
                    : 'This website is dedicated to students and enthusiasts of the Biology Department at the College of Science, Raparin University'}
                </p>
                <div className="flex justify-center gap-6 flex-wrap mt-6">
                  {[
                    language === 'ku' ? 'زانکۆی ڕاپەڕین' : 'Raparin University',
                    language === 'ku' ? 'کۆلێژی زانست' : 'College of Science',
                    language === 'ku' ? 'بەشی بایۆلۆجی' : 'Biology Department'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-600 hover:bg-green-100 transition-colors"
                    >
                      <span className="font-bold text-green-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <Mail className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'پەیوەندی بکە' : 'Contact Us'}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block font-semibold mb-2">{language === 'ku' ? 'ناو' : 'Name'}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-600 outline-none transition-colors ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">{language === 'ku' ? 'ئیمەیڵ' : 'Email'}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-600 outline-none transition-colors ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">{language === 'ku' ? 'پەیام' : 'Message'}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        rows="5"
                        className={`w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-600 outline-none transition-colors ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 hover:scale-105 transform"
                    >
                      <Send className="w-5 h-5" />
                      {language === 'ku' ? 'ناردنی پەیام' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  {[
                    { 
                      icon: <MapPin className="w-6 h-6 text-green-600" />, 
                      title: language === 'ku' ? 'ناونیشان' : 'Address', 
                      content: language === 'ku' ? 'زانکۆی ڕاپەڕین - کۆلێژی زانست - بەشی بایۆلۆجی' : 'Raparin University - College of Science - Biology Department' 
                    },
                    { 
                      icon: <Mail className="w-6 h-6 text-green-600" />, 
                      title: language === 'ku' ? 'ئیمەیڵ' : 'Email', 
                      content: 'biology@raparin.edu.krd' 
                    },
                    { 
                      icon: <Phone className="w-6 h-6 text-green-600" />, 
                      title: language === 'ku' ? 'تەلەفۆن' : 'Phone', 
                      content: '+964 750 123 4567' 
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl hover:shadow-lg transition-all`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {item.icon}
                        <h4 className="font-bold text-lg">{item.title}</h4>
                      </div>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} break-words`}>
                        {item.content}
                      </p>
                    </div>
                  ))}

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl text-center`}>
                    <h4 className="font-bold text-lg mb-3">
                      {language === 'ku' ? 'کاتژمێری کارکردن' : 'Working Hours'}
                    </h4>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {language === 'ku' ? 'یەکشەممە - پێنجشەممە' : 'Sunday - Thursday'}<br />
                      8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Media */}
            <section className={`${cardClass} rounded-2xl shadow-xl p-8 text-center`}>
              <h3 className="text-2xl font-bold mb-6">
                {language === 'ku' ? 'پەیوەندی کۆمەڵایەتی' : 'Social Media'}
              </h3>
              <div className="flex justify-center gap-6 flex-wrap">
                {[
                  { icon: <Facebook className="w-8 h-8" />, label: 'Facebook', color: 'hover:bg-blue-600' },
                  { icon: <Instagram className="w-8 h-8" />, label: 'Instagram', color: 'hover:bg-pink-600' },
                  { icon: <Twitter className="w-8 h-8" />, label: 'Twitter', color: 'hover:bg-sky-500' },
                  { icon: <Mail className="w-8 h-8" />, label: 'Email', color: 'hover:bg-green-600' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`bg-gray-200 ${isDarkMode ? 'bg-gray-700' : ''} text-gray-700 ${isDarkMode ? 'text-white' : ''} p-4 rounded-full ${social.color} hover:text-white transition-all hover:scale-110`}
                    title={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-8 animate-fade-in">
            <section className={`${cardClass} rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold">{language === 'ku' ? 'دەربارەی زیندەزانی' : 'About Biology'}</h3>
              </div>
              <div className={`prose prose-lg max-w-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-4`}>
                <p>
                  {language === 'ku' 
                    ? 'زیندەزانی یان ژیانزانی (Biology) یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.' 
                    : 'Biology is one of the most important natural sciences of our time, forming a major part of the College of Science. This science carefully and accurately examines life and living organisms in all their aspects.'}
                </p>
                <p>
                  {language === 'ku'
                    ? 'زیندەزانی پەیوەستە بە خوێندنی تایبەتمەندی و سیفاتی هەموو جۆرەکانی زیندەوەران، لەوانە مرۆڤ، ئاژەڵ، ڕووەک، ڤایرۆس، بەکتریا و هەموو زیندەوەرە میکرۆسکۆپییەکان.'
                    : 'Biology involves studying the characteristics and properties of all types of living organisms, including humans, animals, plants, viruses, bacteria and all microscopic organisms.'}
                </p>
              </div>
            </section>

            {/* Historical Timeline */}
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-100 to-green-50'} rounded-2xl shadow-xl p-8`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookMarked className="w-6 h-6 text-green-600" />
                {language === 'ku' ? 'مێژووی گرنگ' : 'Important History'}
              </h3>
              <div className="space-y-4">
                {[
                  { 
                    title: language === 'ku' ? 'ئارستۆ (384-322 پ.ز)' : 'Aristotle (384-322 BC)', 
                    desc: language === 'ku' ? 'یەکەم پۆلێنکردنی زانستی زیندەوەران' : 'First scientific classification of organisms',
                    year: '384-322 BC'
                  },
                  { 
                    title: language === 'ku' ? 'تیۆری خانە (1838-1839)' : 'Cell Theory (1838-1839)', 
                    desc: language === 'ku' ? 'دامەزراندنی بنەمای خانە وەک یەکەی بنەڕەتی ژیان' : 'Establishing the cell as the basic unit of life',
                    year: '1838-1839'
                  },
                  { 
                    title: language === 'ku' ? 'چارڵز داروین (1859)' : 'Charles Darwin (1859)', 
                    desc: language === 'ku' ? 'تیۆری پەرەسەندن بە هەڵبژاردنی سروشتی' : 'Theory of evolution by natural selection',
                    year: '1859'
                  },
                  { 
                    title: language === 'ku' ? 'واتسۆن و کریک (1953)' : 'Watson & Crick (1953)', 
                    desc: language === 'ku' ? 'دۆزینەوەی پێکهاتەی DNA Double Helix' : 'Discovery of DNA Double Helix structure',
                    year: '1953'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${cardClass} p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-x-2 group`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm group-hover:scale-110 transition-transform">
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-green-700 mb-2">{item.title}</h4>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className={`bg-gradient-to-r ${accentClass} text-white mt-16`}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-8 h-8" />
                <h4 className="text-xl font-bold">BioQuest</h4>
              </div>
              <p className="text-green-100">
                {language === 'ku' ? 'ماڵپەڕەیەکی تایبەت بە بایۆلۆجی و زانستی ژیان' : 'A website dedicated to biology and life sciences'}
              </p>
              <div className="flex gap-4 mt-4">
                {[<Facebook />, <Instagram />, <Twitter />].map((icon, index) => (
                  <button
                    key={index}
                    className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all hover:scale-110"
                  >
                    {React.cloneElement(icon, { className: 'w-5 h-5' })}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">{language === 'ku' ? 'بەستەرە خێراکان' : 'Quick Links'}</h4>
              <ul className="space-y-2 text-green-100">
                {Object.entries(sections).slice(0, 6).map(([key, value]) => (
                  <li
                    key={key}
                    className="hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform"
                    onClick={() => {
                      setActiveSection(key);
                      scrollToTop();
                    }}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">{language === 'ku' ? 'زانیاری پەیوەندی' : 'Contact Info'}</h4>
              <p className="text-green-100 mb-2">{language === 'ku' ? 'زانکۆی ڕاپەڕین' : 'Raparin University'}</p>
              <p className="text-green-100 mb-2">{language === 'ku' ? 'کۆلێژی زانست' : 'College of Science'}</p>
              <p className="text-green-100">{language === 'ku' ? 'بەشی بایۆلۆجی' : 'Biology Department'}</p>
            </div>
          </div>

          <div className="border-t border-green-600 pt-6 text-center">
            <p className="text-green-100 flex items-center justify-center gap-2 flex-wrap">
              © 2025 BioQuest - {language === 'ku' ? 'تیمی BioNova | هەموو مافێک پارێزراوە' : 'BioNova Team | All Rights Reserved'}
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-slide-up-delayed { animation: slide-up-delayed 0.8s ease-out; }
        .animate-slide-down { animation: slide-down 0.4s ease-out; }
        .animate-scale-in { animation: scale-in 0.5s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
      `}</style>
    </div>
  );
}
