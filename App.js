import React, { useState, useEffect } from 'react';
import { Menu, X, Microscope, BookOpen, Users, Target, Award, FlaskConical, Leaf, Heart, Dna, ArrowRight, Sparkles, Globe, GraduationCap, TrendingUp } from 'lucide-react';

export default function BioQuestWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = {
    home: 'سەرەکی',
    about: 'دەربارە',
    branches: 'لقەکان',
    goals: 'ئامانجەکان',
    success: 'سەرکەوتن',
    team: 'تیمەکەمان'
  };

  const branches = [
    { 
      icon: <Dna className="w-8 h-8" />, 
      name: 'زانستی گەردلەیی', 
      desc: 'لێکۆڵینەوە لە DNA، RNA و پرۆتین',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: <FlaskConical className="w-8 h-8" />, 
      name: 'کیمیای زیندەی', 
      desc: 'کردارە کیمیاوییەکانی زیندەوەران',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: <Microscope className="w-8 h-8" />, 
      name: 'خانەزانی', 
      desc: 'پێکهاتە و کارکردنی خانەکان',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      icon: <Dna className="w-8 h-8" />, 
      name: 'زانستی بۆماوەیی', 
      desc: 'گواستنەوەی تایبەتمەندییەکان',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      name: 'فەرمانزانی', 
      desc: 'کارکردنی ئەندامەکانی لەش',
      color: 'from-red-500 to-red-600'
    },
    { 
      icon: <Leaf className="w-8 h-8" />, 
      name: 'ڕووەکزانی', 
      desc: 'لێکۆڵینەوە لە ڕووەکەکان',
      color: 'from-green-500 to-green-600'
    }
  ];

  const goals = [
    { text: 'روونکردنەوەی بایۆلۆجی بە ئاسانی بۆ هەموو چینەکان', icon: <BookOpen className="w-6 h-6" /> },
    { text: 'ئیلهامبەخشین بە خوێندکاران بۆ خوێندنی بایۆلۆجی', icon: <Sparkles className="w-6 h-6" /> },
    { text: 'هاندانی فێربوونی زیاتری زانستی بایۆلۆجی', icon: <TrendingUp className="w-6 h-6" /> },
    { text: 'بەرەوپێشبردنی هۆشیاری دەربارەی زانستی بایۆلۆجی', icon: <Globe className="w-6 h-6" /> },
    { text: 'ڕوونکردنەوەی پەیوەندی بایۆلۆجی بە ژیانی ڕۆژانە', icon: <Heart className="w-6 h-6" /> },
    { text: 'ڕەخساندنی ئەزموونێکی فێرکاری خۆش و سەرنجڕاکێش', icon: <GraduationCap className="w-6 h-6" /> }
  ];

  const successTips = [
    'تێگەیشتن لە بابەتە بنچینەییەکان',
    'بە بەردەوامی بخوێنە',
    'شیوازی سەردەمی بۆ خوێندن بەکاربهێنە',
    'تێبینییەکانت بنووسە',
    'مەشقکردن بە بابەتەکانی ڕابردوو',
    'بەردەوام بپرسە',
    'سەرچاوەی زیادە بەکاربهێنە',
    'ئەوانی تر فێر بکە'
  ];

  const stats = [
    { number: '6', label: 'ئەندامی تیم', icon: <Users className="w-8 h-8" /> },
    { number: '12+', label: 'لقی جیاواز', icon: <Microscope className="w-8 h-8" /> },
    { number: '100+', label: 'بابەتی بایۆلۆجی', icon: <BookOpen className="w-8 h-8" /> },
    { number: '∞', label: 'چێژ لە فێربوون', icon: <Heart className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50" dir="rtl">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-gradient-to-r from-green-600 to-emerald-600'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className={`p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-green-600' : 'bg-white'
              } group-hover:scale-110 group-hover:rotate-12`}>
                <Microscope className={`w-8 h-8 transition-colors ${
                  scrolled ? 'text-white' : 'text-green-600'
                }`} />
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}>BioQuest</h1>
                <p className={`text-sm transition-colors ${
                  scrolled ? 'text-green-600' : 'text-green-100'
                }`}>تیمی BioNova</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-2">
              {Object.entries(sections).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold ${
                    activeSection === key
                      ? scrolled
                        ? 'bg-green-600 text-white shadow-lg scale-105'
                        : 'bg-white text-green-700 shadow-lg scale-105'
                      : scrolled
                        ? 'hover:bg-green-50 text-gray-700'
                        : 'hover:bg-white/20 text-white'
                  }`}
                >
                  {value}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-800 hover:bg-green-50' : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 animate-slideDown">
              {Object.entries(sections).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-right transition-all ${
                    activeSection === key
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white/90 text-gray-700 hover:bg-green-50'
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
      <main className="container mx-auto px-4 pt-28 pb-12 relative">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            {/* Hero */}
            <section className="relative">
              <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <Sparkles className="w-10 h-10 animate-pulse" />
                    <h2 className="text-4xl md:text-6xl font-bold">
                      بەخێربێن بۆ جیهانی بایۆلۆجی
                    </h2>
                    <Sparkles className="w-10 h-10 animate-pulse" />
                  </div>
                  <p className="text-xl md:text-3xl leading-relaxed max-w-5xl mx-auto text-center font-medium">
                    جیهانێک کە هەموو زیندوویەک چیرۆکێک دەگێڕێتەوە، چیرۆکێکی گەشەکردن و مانەوە و پەیوەندی
                  </p>
                  <div className="flex justify-center gap-4 mt-8">
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                      <Microscope className="w-5 h-5" />
                      <span>زانست</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span>خۆشەویستی</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                      <Leaf className="w-5 h-5" />
                      <span>ژیان</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`text-green-600 mb-4 transition-transform duration-300 ${
                    hoveredCard === index ? 'scale-110 rotate-12' : ''
                  }`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </section>

            {/* About Biology */}
            <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-2xl shadow-lg">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    زیندەزانی چییە؟
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  زیندەزانی یان ژیانزانی یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'مرۆڤ', desc: 'تێگەیشتن لە پێکهاتە و کارکردنی جەستەی مرۆڤ', color: 'blue' },
                    { title: 'ئاژەڵ', desc: 'لێکۆڵینەوە لە جۆراوجۆری ئاژەڵان', color: 'purple' },
                    { title: 'ڕووەک', desc: 'خوێندنی ژیان و گەشەی ڕووەکەکان', color: 'green' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-2xl border-r-4 border-${item.color}-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer`}
                    >
                      <h4 className={`font-bold text-${item.color}-700 mb-3 text-xl group-hover:scale-105 transition-transform`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="relative">
              <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-2xl shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    بوارەکانی کارکردن
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'کارکردن لە تاقیگەکان', desc: 'لە کارگەکانی پیشەسازی، دەرمان، نەخۆشخانە و شیکاری پزیشکی', icon: <FlaskConical className="w-8 h-8" /> },
                    { title: 'توێژینەوەی زانستی', desc: 'بەشداری لە پرۆژە توێژینەوەییەکان و لێکۆڵینەوە زانستییەکان', icon: <Microscope className="w-8 h-8" /> },
                    { title: 'وانەوتنەوە و پەروەردە', desc: 'مامۆستای زیندەزانی لە پەیمانگا و زانکۆکان', icon: <GraduationCap className="w-8 h-8" /> },
                    { title: 'کشتوکاڵ و ژینگە', desc: 'کارکردن لە بواری کشتوکاڵ و پارێزگاری ژینگە', icon: <Leaf className="w-8 h-8" /> }
                  ].map((career, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-emerald-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                      <div className="flex items-start gap-4">
                        <div className="text-green-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                          {career.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-green-700 mb-3 text-xl">{career.title}</h4>
                          <p className="text-gray-600">{career.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  دەربارەی زیندەزانی
                </h3>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="border-r-4 border-blue-500 pr-6 py-2">
                  زیندەزانی یان ژیانزانی (Biology) یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.
                </p>
                <p className="border-r-4 border-indigo-500 pr-6 py-2">
                  زیندەزانی پەیوەستە بە خوێندنی تایبەتمەندی و سیفاتی هەموو جۆرەکانی زیندەوەران، لەوانە مرۆڤ، ئاژەڵ، ڕووەک، ڤایرۆس، بەکتریا و هەموو زیندەوەرە میکرۆسکۆپییەکان.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                مێژووی گرنگ
              </h3>
              <div className="space-y-6">
                {[
                  { year: 'ئارستۆ (384-322 پ.ز)', desc: 'یەکەم پۆلێنکردنی زانستی زیندەوەران', color: 'purple' },
                  { year: 'تیۆری خانە (1838-1839)', desc: 'دامەزراندنی بنەمای خانە وەک یەکەی بنەڕەتی ژیان', color: 'indigo' },
                  { year: 'چارڵز داروین (1859)', desc: 'تیۆری پەرەسەندن بە هەڵبژاردنی سروشتی', color: 'blue' },
                  { year: 'واتسۆن و کریک (1953)', desc: 'دۆزینەوەی پێکهاتەی DNA Double Helix', color: 'cyan' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-x-2 group cursor-pointer relative overflow-hidden`}
                  >
                    <div className={`absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-${item.color}-400 to-${item.color}-600`}></div>
                    <div className="flex items-start gap-4 pr-4">
                      <div className={`text-4xl font-bold text-${item.color}-200 group-hover:text-${item.color}-300 transition-colors`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-${item.color}-700 mb-2 text-lg`}>{item.year}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Branches Section */}
        {activeSection === 'branches' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-2xl shadow-lg">
                  <Microscope className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  لقە سەرەکیەکانی زیندەزانی
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch, index) => (
                  <div
                    key={index}
                    className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden border-2 border-transparent hover:border-green-200"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${branch.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${branch.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {branch.icon}
                      </div>
                      <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-green-700 transition-colors">
                        {branch.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{branch.desc}</p>
                      <div className="mt-4 flex items-center text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold">زیاتر بزانە</span>
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">لقەکانی تر</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'پەرەسەندن (Evolution)', desc: 'گۆڕانی زیندەوەران بەدرێژایی کات' },
                    { title: 'گەشەزانی', desc: 'گەشەکردنی تاکەکان لە قۆناغی سەرەتاییەوە' },
                    { title: 'ژینگەییزانی (Ecology)', desc: 'پەیوەندی زیندەوەران و ژینگەکەیان' },
                    { title: 'پۆلێنزانی (Taxonomy)', desc: 'پۆلێنکردن و ناولێنانی زیندەوەران' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20"
                    >
                      <h4 className="font-bold mb-3 text-xl">{item.title}</h4>
                      <p className="text-green-50">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Goals Section */}
        {activeSection === 'goals' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-2xl shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ئامانجەکانی ماڵپەڕەکەمان
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-orange-200"
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-3 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      {goal.icon}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-2">{goal.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                ڕۆڵی بایۆلۆجی لە ژیانی ڕۆژانەدا
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'خۆراک و خۆراکزانی', desc: 'تێگەیشتن لە گەشەکردنی ڕووەکەکان و دابینکردنی خۆراک', icon: <Leaf className="w-6 h-6" /> },
                  { title: 'تەندروستی و پزیشکی', desc: 'لێکۆڵینەوە لە نەخۆشییەکان و دۆزینەوەی چارەسەرەکان', icon: <Heart className="w-6 h-6" /> },
                  { title: 'ژینگە و ژینگەزانی', desc: 'پاراستنی دارستان و ڕووبار و گیانلەبەرە کێوییەکان', icon: <Globe className="w-6 h-6" /> },
                  { title: 'بایۆتەکنەلۆژیا', desc: 'دروستکردنی ڤاکسین و دەرمان و بەروبوومی باشترکراوی', icon: <FlaskConical className="w-6 h-6" /> }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-teal-600 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-teal-700 text-lg">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Success Section */}
        {activeSection === 'success' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-gradient-to-br from-yellow-500 to-amber-500 p-3 rounded-2xl shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  چۆن سەرکەوتوو بین لە بایۆلۆجی؟
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {successTips.map((tip, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-yellow-200"
                  >
                    <div className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      ✓
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-2">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">ئامۆژگاری زیادە</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'تەندروست بمێنەرەوە', desc: 'خواردنی باش، خەوی پێویست، پشوودان لە کاتی خوێندن', icon: <Heart className="w-8 h-8" /> },
                    { title: 'چێژ لە بابەتەکان وەربگرە', desc: 'بایۆلۆجی وەک لێکۆڵینەوە لە خودی ژیان سەیر بکە', icon: <Sparkles className="w-8 h-8" /> },
                    { title: 'بە سەبر و بەردەوام بە', desc: 'بایۆلۆجی پێویستی بە کات و مەشقی بەردەوام هەیە', icon: <Target className="w-8 h-8" /> }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20"
                    >
                      <div className="mb-4 opacity-80">{item.icon}</div>
                      <h4 className="font-bold mb-3 text-xl">{item.title}</h4>
                      <p className="text-green-50 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  دەربارەی تیمەکەمان
                </h3>
              </div>
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p className="text-xl border-r-4 border-purple-500 pr-6 py-2">
                  ئێمە شەش خوێندکاری بەشی بایۆلۆجی زانکۆین، کە بەهۆی خۆشەویستییەکی هاوبەشەوە بۆ زانست و زانیارییەوە کۆکراوینەتەوە. ئەم ماڵپەڕە پڕۆژەی ئێمەیە، بە ئامانجی ئەوەی کە بایۆلۆجی ئاسانتربێ بۆ تێگەیشتن و چێژبەخشتربێ بۆ هەمووان دروستکراوە.
                </p>
                <p className="text-lg border-r-4 border-pink-500 pr-6 py-2">
                  هەریەکەمان ئارەزووی جیاوازمان هەیە، هەندێکمان ڕووەکمان خۆشدەوێت، هەندێکی تر سەرسامین بە ئاژەڵ، وە هەندێکی تر مرۆڤ، یان ژینگە، بەڵام بەیەکەوە زانیاری و داهێنان و هەوڵەکانمان تێکەڵ کرد بۆ بنیاتنانی ئەم ماڵپەڕە.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">تیمی BioNova</h3>
                <p className="text-2xl mb-12 leading-relaxed max-w-4xl mx-auto">
                  دیدگاکەمان سادەیە: جوانی بایۆلۆجی بە شێوەیەک هاوبەش بکەین کە هەست بە سەرنجڕاکێشی و ڕوونی و ئیلهامبەخشین بکەیت
                </p>
                <div className="flex justify-center gap-8 flex-wrap">
                  {[
                    { icon: <Microscope className="w-16 h-16" />, label: 'توێژینەوە' },
                    { icon: <Leaf className="w-16 h-16" />, label: 'زانست' },
                    { icon: <Heart className="w-16 h-16" />, label: 'خۆشەویستی' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 group"
                    >
                      <div className="mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-xl">{item.label}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 rounded-3xl shadow-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">بەشی بایۆلۆجی - زانکۆی ڕاپەڕین</h3>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <p className="text-gray-700 text-xl text-center mb-8 leading-relaxed">
                  ئەم ماڵپەڕە تایبەتە بە خوێندکاران و ئارەزوومەندانی بەشی بایۆلۆجی لە کۆلێژی زانستی زانکۆی ڕاپەڕین
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                  {[
                    { label: 'زانکۆی ڕاپەڕین', color: 'green' },
                    { label: 'کۆلێژی زانست', color: 'emerald' },
                    { label: 'بەشی بایۆلۆجی', color: 'teal' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 px-8 py-4 rounded-full border-2 border-${item.color}-500 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}
                    >
                      <span className={`font-bold text-${item.color}-700 text-lg group-hover:text-${item.color}-800`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="bg-white p-3 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Microscope className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold">BioQuest</h4>
              </div>
              <p className="text-green-100 leading-relaxed">
                ماڵپەڕەیەکی تایبەت بە بایۆلۆجی و زانستی ژیان
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                بەستەرە خێراکان
              </h4>
              <ul className="space-y-3 text-green-100">
                {Object.values(sections).map((section, index) => (
                  <li
                    key={index}
                    className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                زانیاری پەیوەندی
              </h4>
              <div className="space-y-3 text-green-100">
                <p className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  زانکۆی ڕاپەڕین
                </p>
                <p className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  کۆلێژی زانست
                </p>
                <p className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  بەشی بایۆلۆجی
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 pt-8 text-center">
            <p className="text-green-100 text-lg">
              © 2024 BioQuest - تیمی BioNova | هەموو مافێک پارێزراوە
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
