import React, { useState, useEffect } from 'react';
import { Menu, X, Microscope, BookOpen, Users, Target, Award, FlaskConical, Leaf, Heart, Dna, ExternalLink, FileSpreadsheet, Camera, Mail, Phone, MapPin, ChevronUp, Moon, Sun, Globe, Send, HelpCircle, Video, FileText, Calendar } from 'lucide-react';

export default function BioQuestWebsite() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [selectedImage, setSelectedImage] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('ku'); // ku or en
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
        setFormData({...formData, [e.target.name]: e.target.value });
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
        { icon: < Dna className = "w-8 h-8" / > , name: 'زانستی گەردلەیی', desc: 'لێکۆڵینەوە لە DNA، RNA و پرۆتین', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400' },
        { icon: < FlaskConical className = "w-8 h-8" / > , name: 'کیمیای زیندەی', desc: 'کردارە کیمیاوییەکانی زیندەوەران', image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400' },
        { icon: < Microscope className = "w-8 h-8" / > , name: 'خانەزانی', desc: 'پێکهاتە و کارکردنی خانەکان', image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=400' },
        { icon: < Dna className = "w-8 h-8" / > , name: 'زانستی بۆماوەیی', desc: 'گواستنەوەی تایبەتمەندییەکان', image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400' },
        { icon: < Heart className = "w-8 h-8" / > , name: 'فەرمانزانی', desc: 'کارکردنی ئەندامەکانی لەش', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400' },
        { icon: < Leaf className = "w-8 h-8" / > , name: 'ڕووەکزانی', desc: 'لێکۆڵینەوە لە ڕووەکەکان', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400' }
    ] : [
        { icon: < Dna className = "w-8 h-8" / > , name: 'Molecular Biology', desc: 'Study of DNA, RNA and proteins', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400' },
        { icon: < FlaskConical className = "w-8 h-8" / > , name: 'Biochemistry', desc: 'Chemical processes in living organisms', image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400' },
        { icon: < Microscope className = "w-8 h-8" / > , name: 'Cell Biology', desc: 'Structure and function of cells', image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=400' },
        { icon: < Dna className = "w-8 h-8" / > , name: 'Genetics', desc: 'Inheritance of traits', image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400' },
        { icon: < Heart className = "w-8 h-8" / > , name: 'Physiology', desc: 'Function of body organs', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400' },
        { icon: < Leaf className = "w-8 h-8" / > , name: 'Botany', desc: 'Study of plants', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400' }
    ];

    const discoveries = language === 'ku' ? [
        { title: 'تیۆری خانە', year: '1838-1839', desc: 'دۆزینەوەی ئەوەی کە هەموو زیندەوەران لە خانە پێکهاتوون', scientist: 'شلایدن و شڤان' },
        { title: 'پەنسلین', year: '1928', desc: 'یەکەم دژە زیندەیی دۆزرایەوە', scientist: 'ئەلیکساندەر فلیمینگ' },
        { title: 'DNA Double Helix', year: '1953', desc: 'دۆزینەوەی پێکهاتەی جیناتی', scientist: 'واتسۆن و کریک' },
        { title: 'CRISPR-Cas9', year: '2012', desc: 'دەستکاریکردنی جینی', scientist: 'دودنا و شارپێنتیێر' },
        { title: 'پڕۆژەی جینۆمی مرۆڤ', year: '2003', desc: 'نەخشەکێشانی جینەکانی مرۆڤ', scientist: 'پرۆژەی نێودەوڵەتی' },
        { title: 'کوتان', year: '1796', desc: 'یەکەم ڤاکسینی کۆکە', scientist: 'ئیدوارد جێنەر' }
    ] : [
        { title: 'Cell Theory', year: '1838-1839', desc: 'Discovery that all organisms are made of cells', scientist: 'Schleiden & Schwann' },
        { title: 'Penicillin', year: '1928', desc: 'First antibiotic discovered', scientist: 'Alexander Fleming' },
        { title: 'DNA Double Helix', year: '1953', desc: 'Discovery of genetic structure', scientist: 'Watson & Crick' },
        { title: 'CRISPR-Cas9', year: '2012', desc: 'Gene editing technology', scientist: 'Doudna & Charpentier' },
        { title: 'Human Genome Project', year: '2003', desc: 'Mapping human genes', scientist: 'International Project' },
        { title: 'Vaccination', year: '1796', desc: 'First smallpox vaccine', scientist: 'Edward Jenner' }
    ];

    const blogPosts = language === 'ku' ? [
        { title: 'چۆن خانەکان وزە دروست دەکەن؟', date: '2024-01-15', excerpt: 'لێکۆڵینەوە لە پرۆسەی میتۆکۆندریا و دروستکردنی ATP...' },
        { title: 'نهێنییەکانی DNA', date: '2024-01-10', excerpt: 'بۆماوە چۆن لە نەوەیەکەوە بۆ نەوەیەکی تر دەگوازرێتەوە...' },
        { title: 'گرنگی فۆتۆسێنتێز', date: '2024-01-05', excerpt: 'چۆن ڕووەکەکان تیشکی خۆر دەگۆڕن بۆ خۆراک...' }
    ] : [
        { title: 'How Cells Produce Energy', date: 'Jan 15, 2024', excerpt: 'Exploring mitochondria and ATP production process...' },
        { title: 'Secrets of DNA', date: 'Jan 10, 2024', excerpt: 'How heredity passes from generation to generation...' },
        { title: 'Importance of Photosynthesis', date: 'Jan 5, 2024', excerpt: 'How plants convert sunlight into food...' }
    ];

    const videos = language === 'ku' ? [
        { title: 'بنەمای خانەزانی', link: 'https://youtu.be/LiR0wNi1JHg?si=IIJjwETN9sKtcjdF', duration: '19:10' },
        { title: 'DNA و RNA', link: 'https://youtu.be/GhABWQC3YDs?si=eNev-Z-9wn58UAZg', duration: '9:17' },
        { title: 'پەرەسەندنی داروین', link: 'https://youtu.be/s64Y8sVYfFY?si=R0MCq3S686CHm5qV', duration: '3:06' }
    ] : [
        { title: 'Basics of Cell Biology', link: 'https://youtu.be/LiR0wNi1JHg?si=IIJjwETN9sKtcjdF', duration: '19:10' },
        { title: 'DNA and RNA', link: 'https://youtu.be/GhABWQC3YDs?si=eNev-Z-9wn58UAZg', duration: '9:17' },
        { title: 'Darwin\'s Evolution', link: 'https://youtu.be/s64Y8sVYfFY?si=R0MCq3S686CHm5qV', duration: '3:06' }
    ];

    const faqs = language === 'ku' ? [
        { q: 'بایۆلۆجی چییە؟', a: 'بایۆلۆجی زانستی خوێندنی ژیان و زیندەوەرانە، لە خانە بچووکەکانەوە تا دەگاتە ئیکۆسیستەمی گەورە.' },
        { q: 'چەند ساڵە بەشی بایۆلۆجی؟', a: 'بەشی بایۆلۆجی بەکالۆریۆس 4 ساڵە.' },
        { q: 'دوای تەواوبوون چ کارێک دەکەم؟', a: 'دەتوانیت لە تاقیگە، نەخۆشخانە، توێژینەوە، وانەوتنەوە، کشتوکاڵ و بوارەکانی تر کار بکەیت.' }
    ] : [
        { q: 'What is Biology?', a: 'Biology is the science of studying life and living organisms, from tiny cells to large ecosystems.' },
        { q: 'How long is the Biology program?', a: 'The Biology bachelor\'s program is 4 years.' },
        { q: 'What can I do after graduation?', a: 'You can work in labs, hospitals, research, teaching, agriculture and other fields.' }
    ];

    const themeClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-50 via-white to-green-50';
    const cardClass = isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
    const accentClass = isDarkMode ? 'from-green-700 to-green-800' : 'from-green-600 to-green-700';

    return ( <
        div className = { `min-h-screen ${themeClass} font-sans transition-colors duration-300` }
        dir = { language === 'ku' ? 'rtl' : 'ltr' } > { /* Scroll to Top Button */ } {
            showScrollTop && ( <
                button onClick = { scrollToTop }
                className = "fixed bottom-8 left-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50 transition-all hover:scale-110" >
                <
                ChevronUp className = "w-6 h-6" / >
                <
                /button>
            )
        }

        { /* Image Modal */ } {
            selectedImage && ( <
                div className = "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick = {
                    () => setSelectedImage(null)
                } >
                <
                div className = "relative max-w-4xl w-full" >
                <
                button onClick = {
                    () => setSelectedImage(null)
                }
                className = "absolute -top-12 right-0 text-white hover:text-green-400 transition-colors" >
                <
                X className = "w-8 h-8" / >
                <
                /button> <
                img src = { selectedImage.image }
                alt = { selectedImage.title }
                className = "w-full h-auto rounded-lg shadow-2xl" /
                >
                <
                div className = { `${cardClass} p-4 rounded-b-lg` } >
                <
                h3 className = "text-xl font-bold" > { selectedImage.title } < /h3> <
                p className = "text-green-600" > { selectedImage.category } < /p> < /
                div > <
                /div> < /
                div >
            )
        }

        { /* Header */ } <
        header className = { `bg-gradient-to-r ${accentClass} text-white shadow-lg sticky top-0 z-40` } >
        <
        div className = "container mx-auto px-4 py-4" >
        <
        div className = "flex items-center justify-between" >
        <
        div className = "flex items-center gap-3" >
        <
        div className = "bg-white p-2 rounded-full" >
        <
        Microscope className = "w-8 h-8 text-green-600" / >
        <
        /div> <
        div >
        <
        h1 className = "text-2xl font-bold" > BioQuest < /h1> <
        p className = "text-sm text-green-100" > { language === 'ku' ? 'تیمی BioNova' : 'BioNova Team' } < /p> < /
        div > <
        /div>

        <
        div className = "flex items-center gap-4" > { /* Dark Mode Toggle */ } <
        button onClick = { toggleDarkMode }
        className = "p-2 hover:bg-green-500 rounded-lg transition-colors"
        title = { language === 'ku' ? 'گۆڕینی دۆخ' : 'Toggle Theme' } > { isDarkMode ? < Sun className = "w-5 h-5" / > : < Moon className = "w-5 h-5" / > } <
        /button>

        { /* Language Toggle */ } <
        button onClick = { toggleLanguage }
        className = "p-2 hover:bg-green-500 rounded-lg transition-colors flex items-center gap-2"
        title = { language === 'ku' ? 'گۆڕینی زمان' : 'Change Language' } >
        <
        Globe className = "w-5 h-5" / >
        <
        span className = "text-sm font-bold" > { language === 'ku' ? 'EN' : 'کو' } < /span> < /
        button >

        { /* Mobile Menu Button */ } <
        button className = "md:hidden"
        onClick = {
            () => setIsMenuOpen(!isMenuOpen)
        } > { isMenuOpen ? < X className = "w-6 h-6" / > : < Menu className = "w-6 h-6" / > } <
        /button> < /
        div >

        { /* Desktop Menu */ } <
        nav className = "hidden md:flex gap-2 flex-wrap" > {
            Object.entries(sections).slice(0, 8).map(([key, value]) => ( <
                button key = { key }
                onClick = {
                    () => setActiveSection(key)
                }
                className = { `px-3 py-2 rounded-lg transition-all text-sm ${
                    activeSection === key
                      ? 'bg-white text-green-700 font-semibold'
                      : 'hover:bg-green-500'
                  }` } > { value } <
                /button>
            ))
        } <
        /nav> < /
        div >

        { /* Mobile Menu */ } {
            isMenuOpen && ( <
                nav className = "md:hidden mt-4 flex flex-col gap-2" > {
                    Object.entries(sections).map(([key, value]) => ( <
                        button key = { key }
                        onClick = {
                            () => {
                                setActiveSection(key);
                                setIsMenuOpen(false);
                            }
                        }
                        className = { `px-4 py-2 rounded-lg text-${language === 'ku' ? 'right' : 'left'} transition-all ${
                    activeSection === key
                      ? 'bg-white text-green-700 font-semibold'
                      : 'hover:bg-green-500'
                  }` } > { value } <
                        /button>
                    ))
                } <
                /nav>
            )
        } <
        /div> < /
        header >

        { /* Main Content */ } <
        main className = "container mx-auto px-4 py-8" > { /* Home Section */ } {
            activeSection === 'home' && ( <
                div className = "space-y-12 animate-fade-in" >
                <
                section className = "text-center py-12" >
                <
                div className = { `bg-gradient-to-r ${accentClass} text-white rounded-3xl p-12 shadow-2xl` } >
                <
                h2 className = "text-4xl md:text-5xl font-bold mb-6" > { language === 'ku' ? 'بەخێربێن بۆ جیهانی سەرنجڕاکێشی بایۆلۆجی' : 'Welcome to the Fascinating World of Biology' } <
                /h2> <
                p className = "text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto" > {
                    language === 'ku' ?
                    'جیهانێک کە هەموو زیندوویەک چیرۆکێک دەگێڕێتەوە، چیرۆکێکی گەشەکردن و مانەوە و پەیوەندی' : 'A world where every living thing tells a story of growth, survival and connection'
                } <
                /p> < /
                div > <
                /section>

                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-6" >
                <
                BookOpen className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'زیندەزانی چییە؟' : 'What is Biology?' } < /h3> < /
                div > <
                p className = { `text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6` } > {
                    language === 'ku' ?
                    'زیندەزانی یان ژیانزانی یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.' : 'Biology is one of the most important natural sciences that forms a major part of the College of Science. This science carefully and accurately examines life and living organisms in all their aspects.'
                } <
                /p> <
                div className = "grid md:grid-cols-3 gap-6 mt-8" >
                <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl border-r-4 border-green-600` } >
                <
                h4 className = "font-bold text-green-600 mb-3 text-lg" > { language === 'ku' ? 'مرۆڤ' : 'Humans' } < /h4> <
                p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { language === 'ku' ? 'تێگەیشتن لە پێکهاتە و کارکردنی جەستەی مرۆڤ' : 'Understanding human body structure and function' } <
                /p> < /
                div > <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl border-r-4 border-green-600` } >
                <
                h4 className = "font-bold text-green-600 mb-3 text-lg" > { language === 'ku' ? 'ئاژەڵ' : 'Animals' } < /h4> <
                p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { language === 'ku' ? 'لێکۆڵینەوە لە جۆراوجۆری ئاژەڵان' : 'Study of animal diversity' } <
                /p> < /
                div > <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl border-r-4 border-green-600` } >
                <
                h4 className = "font-bold text-green-600 mb-3 text-lg" > { language === 'ku' ? 'ڕووەک' : 'Plants' } < /h4> <
                p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { language === 'ku' ? 'خوێندنی ژیان و گەشەی ڕووەکەکان' : 'Study of plant life and growth' } <
                /p> < /
                div > <
                /div> < /
                section > <
                /div>
            )
        }

        { /* Discoveries Section */ } {
            activeSection === 'discoveries' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Award className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'دۆزینەوە گرنگەکان' : 'Important Discoveries' } < /h3> < /
                div > <
                div className = "grid md:grid-cols-2 gap-6" > {
                    discoveries.map((discovery, index) => ( <
                        div key = { index }
                        className = { `${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-lg transition-all` } >
                        <
                        div className = "flex items-center gap-3 mb-3" >
                        <
                        div className = "bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold" > { discovery.year } <
                        /div> <
                        h4 className = "font-bold text-green-700 text-lg" > { discovery.title } < /h4> < /
                        div > <
                        p className = { `${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2` } > { discovery.desc } < /p> <
                        p className = "text-green-600 font-semibold text-sm" > { discovery.scientist } < /p> < /
                        div >
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        { /* Blog Section */ } {
            activeSection === 'blog' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                FileText className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'وتارەکان' : 'Blog Posts' } < /h3> < /
                div > <
                div className = "space-y-6" > {
                    blogPosts.map((post, index) => ( <
                        div key = { index }
                        className = { `${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer` } >
                        <
                        div className = "flex items-center gap-3 mb-3" >
                        <
                        Calendar className = "w-5 h-5 text-green-600" / >
                        <
                        span className = "text-sm text-green-600 font-semibold" > { post.date } < /span> < /
                        div > <
                        h4 className = "font-bold text-xl mb-2 text-green-700" > { post.title } < /h4> <
                        p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { post.excerpt } < /p> <
                        button className = "mt-4 text-green-600 hover:text-green-700 font-semibold flex items-center gap-2" > { language === 'ku' ? 'زیاتر بخوێنەرەوە' : 'Read More' } < ExternalLink className = "w-4 h-4" / >
                        <
                        /button> < /
                        div >
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        { /* Videos Section */ } {
            activeSection === 'videos' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Video className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'ڤیدیۆی پەروەردەیی' : 'Educational Videos' } < /h3> < /
                div > <
                div className = "grid md:grid-cols-3 gap-6" > {
                    videos.map((video, index) => ( <
                        div key = { index }
                        className = { `${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all` } >
                        <
                        div className = "bg-green-600 h-48 flex items-center justify-center" >
                        <
                        Video className = "w-16 h-16 text-white" / >
                        <
                        /div> <
                        div className = "p-6" >
                        <
                        h4 className = "font-bold text-lg mb-2" > { video.title } < /h4> <
                        p className = "text-green-600 text-sm mb-4" > { language === 'ku' ? 'ماوە' : 'Duration' }: { video.duration } < /p> <
                        button className = "w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors" > { language === 'ku' ? 'سەیر بکە' : 'Watch Now' } <
                        /button> < /
                        div > <
                        /div>
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        { /* FAQ Section */ } {
            activeSection === 'faq' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                HelpCircle className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'پرسیارە باوەکان' : 'Frequently Asked Questions' } < /h3> < /
                div > <
                div className = "space-y-6" > {
                    faqs.map((faq, index) => ( <
                        div key = { index }
                        className = { `${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md` } >
                        <
                        h4 className = "font-bold text-lg mb-3 text-green-700 flex items-start gap-2" >
                        <
                        HelpCircle className = "w-5 h-5 flex-shrink-0 mt-1" / > { faq.q } <
                        /h4> <
                        p className = { `${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${language === 'ku' ? 'pr-7' : 'pl-7'}` } > { faq.a } < /p> < /
                        div >
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        { /* Contact Section */ } {
            activeSection === 'contact' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Mail className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'پەیوەندی بکە' : 'Contact Us' } < /h3> < /
                div >

                <
                div className = "grid md:grid-cols-2 gap-8" > { /* Contact Form */ } <
                div >
                <
                form onSubmit = { handleFormSubmit }
                className = "space-y-4" >
                <
                div >
                <
                label className = "block font-semibold mb-2" > { language === 'ku' ? 'ناو' : 'Name' } < /label> <
                input type = "text"
                name = "name"
                value = { formData.name }
                onChange = { handleFormChange }
                required className = { `w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-600 outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}` }
                /> < /
                div > <
                div >
                <
                label className = "block font-semibold mb-2" > { language === 'ku' ? 'ئیمەیڵ' : 'Email' } < /label> <
                input type = "email"
                name = "email"
                value = { formData.email }
                onChange = { handleFormChange }
                required className = { `w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-600 outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}` }
                /> < /
                div > <
                div >
                <
                label className = "block font-semibold mb-2" > { language === 'ku' ? 'پەیام' : 'Message' } < /label> <
                textarea name = "message"
                value = { formData.message }
                onChange = { handleFormChange }
                required rows = "5"
                className = { `w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-600 outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}` } >
                <
                /textarea> < /
                div > <
                button type = "submit"
                className = "w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2" >
                <
                Send className = "w-5 h-5" / > { language === 'ku' ? 'ناردنی پەیام' : 'Send Message' } <
                /button> < /
                form > <
                /div>

                { /* Contact Info */ } <
                div className = "space-y-6" >
                <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl` } >
                <
                div className = "flex items-center gap-3 mb-3" >
                <
                MapPin className = "w-6 h-6 text-green-600" / >
                <
                h4 className = "font-bold text-lg" > { language === 'ku' ? 'ناونیشان' : 'Address' } < /h4> < /
                div > <
                p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { language === 'ku' ? 'زانکۆی ڕاپەڕین - کۆلێژی زانست - بەشی بایۆلۆجی' : 'Raparin University - College of Science - Biology Department' } <
                /p> < /
                div >

                <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl` } >
                <
                div className = "flex items-center gap-3 mb-3" >
                <
                Mail className = "w-6 h-6 text-green-600" / >
                <
                h4 className = "font-bold text-lg" > { language === 'ku' ? 'ئیمەیڵ' : 'Email' } < /h4> < /
                div > <
                p className = { `${isDarkMode ? 'text-gray-300' : 'text-gray-600'} break-words` } >
                biology @raparin.edu.krd <
                /p> < /
                div >

                <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl` } >
                <
                div className = "flex items-center gap-3 mb-3" >
                <
                Phone className = "w-6 h-6 text-green-600" / >
                <
                h4 className = "font-bold text-lg" > { language === 'ku' ? 'تەلەفۆن' : 'Phone' } < /h4> < /
                div > <
                p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } >
                +964 750 123 4567 <
                /p> < /
                div >

                <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} p-6 rounded-xl text-center` } >
                <
                h4 className = "font-bold text-lg mb-3" > { language === 'ku' ? 'کاتژمێری کارکردن' : 'Working Hours' } < /h4> <
                p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { language === 'ku' ? 'یەکشەممە - پێنجشەممە' : 'Sunday - Thursday' } < br / >
                8: 00 AM - 4: 00 PM <
                /p> < /
                div > <
                /div> < /
                div > <
                /section> < /
                div >
            )
        }

        { /* Other existing sections (branches, courses, gallery, etc.) - keeping them as before */ } {
            activeSection === 'branches' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Microscope className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'لقە سەرەکیەکانی زیندەزانی' : 'Main Branches of Biology' } < /h3> < /
                div > <
                div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6" > {
                    branches.map((branch, index) => ( <
                        div key = { index }
                        className = { `${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-green-100 overflow-hidden` } >
                        <
                        img src = { branch.image }
                        alt = { branch.name }
                        className = "w-full h-48 object-cover" /
                        >
                        <
                        div className = "p-6" >
                        <
                        div className = "text-green-600 mb-4" > { branch.icon } < /div> <
                        h4 className = "font-bold text-green-700 mb-3 text-lg" > { branch.name } < /h4> <
                        p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { branch.desc } < /p> < /
                        div > <
                        /div>
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        {
            activeSection === 'courses' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                FileSpreadsheet className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'وانەکانی بەشی بایۆلۆجی' : 'Biology Department Courses' } < /h3> < /
                div >

                <
                div className = { `${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-50 to-white'} p-8 rounded-xl border-2 border-green-200` } >
                <
                h4 className = "text-2xl font-bold text-green-700 mb-4" > { language === 'ku' ? 'وانەکانی کۆلێژی زانست - زانکۆی ڕاپەڕین' : 'College of Science Courses - Raparin University' } <
                /h4> <
                p className = { `${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg mb-6` } > {
                    language === 'ku' ?
                    'لێرە دەتوانیت هەموو وانەکانی بەشی بایۆلۆجی ببینیت کە لە کۆلێژی زانستی زانکۆی ڕاپەڕین دەخوێندرێن.' : 'Here you can view all Biology department courses taught at the College of Science, Raparin University.'
                } <
                /p>

                <
                a href = "https://docs.google.com/spreadsheets/d/1YptJs97s-7urCq-N62UoHHfwhigwOGv5xTkPczCZZnc/edit?gid=0#gid=0"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg" >
                <
                FileSpreadsheet className = "w-6 h-6" / >
                <
                span > { language === 'ku' ? 'بینینی وانەکان' : 'View Courses' } < /span> <
                ExternalLink className = "w-5 h-5" / >
                <
                /a> < /
                div > <
                /section> < /
                div >
            )
        }

        {
            activeSection === 'gallery' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Camera className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'گالەری وێنە' : 'Image Gallery' } < /h3> < /
                div >

                <
                div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6" > {
                    [
                        { title: language === 'ku' ? 'تاقیگەی بایۆلۆجی' : 'Biology Lab', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600', category: language === 'ku' ? 'تاقیگە' : 'Laboratory' },
                        { title: language === 'ku' ? 'میکرۆسکۆپ' : 'Microscope', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600', category: language === 'ku' ? 'ئامێر' : 'Equipment' },
                        { title: language === 'ku' ? 'خانەی زیندوو' : 'Living Cell', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600', category: language === 'ku' ? 'خانەزانی' : 'Cell Biology' },
                        { title: 'DNA', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600', category: language === 'ku' ? 'جێنەتیک' : 'Genetics' },
                        { title: language === 'ku' ? 'ڕووەکزانی' : 'Botany', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600', category: language === 'ku' ? 'ڕووەک' : 'Plants' },
                        { title: language === 'ku' ? 'تاقیکردنەوە' : 'Experiment', image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600', category: language === 'ku' ? 'تاقیگە' : 'Laboratory' }
                    ].map((item, index) => ( <
                        div key = { index }
                        onClick = {
                            () => setSelectedImage(item)
                        }
                        className = "relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2" >
                        <
                        img src = { item.image }
                        alt = { item.title }
                        className = "w-full h-64 object-cover transition-transform group-hover:scale-110" /
                        >
                        <
                        div className = "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" >
                        <
                        div className = "absolute bottom-0 left-0 right-0 p-4 text-white" >
                        <
                        h4 className = "font-bold text-lg mb-1" > { item.title } < /h4> <
                        p className = "text-green-300 text-sm" > { item.category } < /p> < /
                        div > <
                        /div> < /
                        div >
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        {
            activeSection === 'goals' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Target className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'ئامانجەکانی ماڵپەڕەکەمان' : 'Our Website Goals' } < /h3> < /
                div > <
                div className = "grid md:grid-cols-2 gap-6" > {
                    (language === 'ku' ? [
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
                    ]).map((goal, index) => ( <
                        div key = { index }
                        className = { `flex items-start gap-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow` } >
                        <
                        div className = "bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold" > { index + 1 } <
                        /div> <
                        p className = { `${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg` } > { goal } < /p> < /
                        div >
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        {
            activeSection === 'success' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Award className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'چۆن سەرکەوتوو بین لە بایۆلۆجی؟' : 'How to Succeed in Biology?' } < /h3> < /
                div > <
                div className = "grid md:grid-cols-2 gap-6" > {
                    (language === 'ku' ? [
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
                    ]).map((tip, index) => ( <
                        div key = { index }
                        className = { `flex items-start gap-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-white'} p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1` } >
                        <
                        div className = "bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" > ✓
                        <
                        /div> <
                        p className = { `${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg` } > { tip } < /p> < /
                        div >
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        }

        {
            activeSection === 'team' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-8" >
                <
                Users className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'دەربارەی تیمەکەمان' : 'About Our Team' } < /h3> < /
                div > <
                div className = { `prose prose-lg max-w-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-6` } >
                <
                p className = "text-xl" > {
                    language === 'ku' ?
                    'ئێمە شەش خوێندکاری بەشی بایۆلۆجی زانکۆین، کە بەهۆی خۆشەویستییەکی هاوبەشەوە بۆ زانست و زانیارییەوە کۆکراوینەتەوە. ئەم ماڵپەڕە پڕۆژەی ئێمەیە، بە ئامانجی ئەوەی کە بایۆلۆجی ئاسانتربێ بۆ تێگەیشتن و چێژبەخشتربێ بۆ هەمووان دروستکراوە.' : 'We are six biology students united by our shared love for science and knowledge. This website is our project, created with the aim of making biology easier to understand and more enjoyable for everyone.'
                } <
                /p> < /
                div > <
                /section>

                <
                section className = { `bg-gradient-to-br ${accentClass} text-white rounded-2xl shadow-xl p-8 text-center` } >
                <
                h3 className = "text-3xl font-bold mb-6" > { language === 'ku' ? 'تیمی BioNova' : 'BioNova Team' } < /h3> <
                p className = "text-xl mb-8 text-green-50" > {
                    language === 'ku' ?
                    'دیدگاکەمان سادەیە: جوانی بایۆلۆجی بە شێوەیەک هاوبەش بکەین کە هەست بە سەرنجڕاکێشی و ڕوونی و ئیلهامبەخشین بکەیت' : 'Our vision is simple: to share the beauty of biology in a way that feels fascinating, clear, and inspiring'
                } <
                /p> <
                div className = "flex justify-center gap-8 flex-wrap" >
                <
                div className = "bg-white bg-opacity-20 p-6 rounded-xl" >
                <
                Microscope className = "w-16 h-16 mx-auto mb-4" / >
                <
                h4 className = "font-bold text-xl" > { language === 'ku' ? 'توێژینەوە' : 'Research' } < /h4> < /
                div > <
                div className = "bg-white bg-opacity-20 p-6 rounded-xl" >
                <
                Leaf className = "w-16 h-16 mx-auto mb-4" / >
                <
                h4 className = "font-bold text-xl" > { language === 'ku' ? 'زانست' : 'Science' } < /h4> < /
                div > <
                div className = "bg-white bg-opacity-20 p-6 rounded-xl" >
                <
                Heart className = "w-16 h-16 mx-auto mb-4" / >
                <
                h4 className = "font-bold text-xl" > { language === 'ku' ? 'خۆشەویستی' : 'Passion' } < /h4> < /
                div > <
                /div> < /
                section > <
                /div>
            )
        }

        {
            activeSection === 'about' && ( <
                div className = "space-y-8 animate-fade-in" >
                <
                section className = { `${cardClass} rounded-2xl shadow-xl p-8` } >
                <
                div className = "flex items-center gap-3 mb-6" >
                <
                BookOpen className = "w-10 h-10 text-green-600" / >
                <
                h3 className = "text-3xl font-bold" > { language === 'ku' ? 'دەربارەی زیندەزانی' : 'About Biology' } < /h3> < /
                div > <
                div className = { `prose prose-lg max-w-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-4` } >
                <
                p > {
                    language === 'ku' ?
                    'زیندەزانی یان ژیانزانی (Biology) یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.' : 'Biology is one of the most important natural sciences of our time, forming a major part of the College of Science. This science carefully and accurately examines life and living organisms in all their aspects.'
                } <
                /p> < /
                div > <
                /section>

                <
                section className = { `${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-100 to-green-50'} rounded-2xl shadow-xl p-8` } >
                <
                h3 className = "text-2xl font-bold mb-6" > { language === 'ku' ? 'مێژووی گرنگ' : 'Important History' } < /h3> <
                div className = "space-y-4" > {
                    [
                        { title: language === 'ku' ? 'ئارستۆ (384-322 پ.ز)' : 'Aristotle (384-322 BC)', desc: language === 'ku' ? 'یەکەم پۆلێنکردنی زانستی زیندەوەران' : 'First scientific classification of organisms' },
                        { title: language === 'ku' ? 'تیۆری خانە (1838-1839)' : 'Cell Theory (1838-1839)', desc: language === 'ku' ? 'دامەزراندنی بنەمای خانە وەک یەکەی بنەڕەتی ژیان' : 'Establishing the cell as the basic unit of life' },
                        { title: language === 'ku' ? 'چارڵز داروین (1859)' : 'Charles Darwin (1859)', desc: language === 'ku' ? 'تیۆری پەرەسەندن بە هەڵبژاردنی سروشتی' : 'Theory of evolution by natural selection' },
                        { title: language === 'ku' ? 'واتسۆن و کریک (1953)' : 'Watson & Crick (1953)', desc: language === 'ku' ? 'دۆزینەوەی پێکهاتەی DNA Double Helix' : 'Discovery of DNA Double Helix structure' }
                    ].map((item, index) => ( <
                        div key = { index }
                        className = { `${cardClass} p-6 rounded-xl shadow-md` } >
                        <
                        h4 className = "font-bold text-green-700 mb-2" > { item.title } < /h4> <
                        p className = { isDarkMode ? 'text-gray-300' : 'text-gray-600' } > { item.desc } < /p> < /
                        div >
                    ))
                } <
                /div> < /
                section > <
                /div>
            )
        } <
        /main>

        { /* Footer */ } <
        footer className = { `bg-gradient-to-r ${accentClass} text-white mt-16` } >
        <
        div className = "container mx-auto px-4 py-8" >
        <
        div className = "grid md:grid-cols-3 gap-8 mb-8" >
        <
        div >
        <
        div className = "flex items-center gap-3 mb-4" >
        <
        Microscope className = "w-8 h-8" / >
        <
        h4 className = "text-xl font-bold" > BioQuest < /h4> < /
        div > <
        p className = "text-green-100" > { language === 'ku' ? 'ماڵپەڕەیەکی تایبەت بە بایۆلۆجی و زانستی ژیان' : 'A website dedicated to biology and life sciences' } <
        /p> < /
        div >

        <
        div >
        <
        h4 className = "text-xl font-bold mb-4" > { language === 'ku' ? 'بەستەرە خێراکان' : 'Quick Links' } < /h4> <
        ul className = "space-y-2 text-green-100" > {
            Object.entries(sections).slice(0, 6).map(([key, value]) => ( <
                li key = { key }
                className = "hover:text-white cursor-pointer transition-colors"
                onClick = {
                    () => {
                        setActiveSection(key);
                        scrollToTop();
                    }
                } > { value } <
                /li>
            ))
        } <
        /ul> < /
        div >

        <
        div >
        <
        h4 className = "text-xl font-bold mb-4" > { language === 'ku' ? 'زانیاری پەیوەندی' : 'Contact Info' } < /h4> <
        p className = "text-green-100 mb-2" > { language === 'ku' ? 'زانکۆی ڕاپەڕین' : 'Raparin University' } < /p> <
        p className = "text-green-100 mb-2" > { language === 'ku' ? 'کۆلێژی زانست' : 'College of Science' } < /p> <
        p className = "text-green-100" > { language === 'ku' ? 'بەشی بایۆلۆجی' : 'Biology Department' } < /p> < /
        div > <
        /div>

        <
        div className = "border-t border-green-600 pt-6 text-center" >
        <
        p className = "text-green-100" > ©2025 BioQuest - { language === 'ku' ? 'تیمی BioNova | هەموو مافێک پارێزراوە' : 'BioNova Team | All Rights Reserved' } <
        /p> < /
        div > <
        /div> < /
        footer >

        <
        style jsx > { `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      ` } < /style> < /
        div >
    );
}