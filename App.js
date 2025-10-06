import React, { useState } from 'react';
import { Menu, X, Microscope, BookOpen, Users, Target, Award, FlaskConical, Leaf, Heart, Dna } from 'lucide-react';

export default function BioQuestWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: 'سەرەکی',
    about: 'دەربارە',
    branches: 'لقەکان',
    goals: 'ئامانجەکان',
    success: 'سەرکەوتن',
    team: 'تیمەکەمان'
  };

  const branches = [
    { icon: <Dna className="w-8 h-8" />, name: 'زانستی گەردلەیی', desc: 'لێکۆڵینەوە لە DNA، RNA و پرۆتین' },
    { icon: <FlaskConical className="w-8 h-8" />, name: 'کیمیای زیندەی', desc: 'کردارە کیمیاوییەکانی زیندەوەران' },
    { icon: <Microscope className="w-8 h-8" />, name: 'خانەزانی', desc: 'پێکهاتە و کارکردنی خانەکان' },
    { icon: <Dna className="w-8 h-8" />, name: 'زانستی بۆماوەیی', desc: 'گواستنەوەی تایبەتمەندییەکان' },
    { icon: <Heart className="w-8 h-8" />, name: 'فەرمانزانی', desc: 'کارکردنی ئەندامەکانی لەش' },
    { icon: <Leaf className="w-8 h-8" />, name: 'ڕووەکزانی', desc: 'لێکۆڵینەوە لە ڕووەکەکان' }
  ];

  const goals = [
    'روونکردنەوەی بایۆلۆجی بە ئاسانی بۆ هەموو چینەکان',
    'ئیلهامبەخشین بە خوێندکاران بۆ خوێندنی بایۆلۆجی',
    'هاندانی فێربوونی زیاتری زانستی بایۆلۆجی',
    'بەرەوپێشبردنی هۆشیاری دەربارەی زانستی بایۆلۆجی',
    'ڕوونکردنەوەی پەیوەندی بایۆلۆجی بە ژیانی ڕۆژانە',
    'ڕەخساندنی ئەزموونێکی فێرکاری خۆش و سەرنجڕاکێش'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full">
                <Microscope className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">BioQuest</h1>
                <p className="text-sm text-green-100">تیمی BioNova</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6">
              {Object.entries(sections).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === key
                      ? 'bg-white text-green-700 font-semibold'
                      : 'hover:bg-green-500'
                  }`}
                >
                  {value}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2">
              {Object.entries(sections).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-right transition-all ${
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
            {/* Hero */}
            <section className="text-center py-12">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  بەخێربێن بۆ جیهانی سەرنجڕاکێشی بایۆلۆجی
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                  جیهانێک کە هەموو زیندوویەک چیرۆکێک دەگێڕێتەوە، چیرۆکێکی گەشەکردن و مانەوە و پەیوەندی
                </p>
              </div>
            </section>

            {/* About Biology */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-800">زیندەزانی چییە؟</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                زیندەزانی یان ژیانزانی یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600">
                  <h4 className="font-bold text-green-700 mb-3 text-lg">مرۆڤ</h4>
                  <p className="text-gray-600">تێگەیشتن لە پێکهاتە و کارکردنی جەستەی مرۆڤ</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600">
                  <h4 className="font-bold text-green-700 mb-3 text-lg">ئاژەڵ</h4>
                  <p className="text-gray-600">لێکۆڵینەوە لە جۆراوجۆری ئاژەڵان</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600">
                  <h4 className="font-bold text-green-700 mb-3 text-lg">ڕووەک</h4>
                  <p className="text-gray-600">خوێندنی ژیان و گەشەی ڕووەکەکان</p>
                </div>
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-800">بوارەکانی کارکردن</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-green-700 mb-3 text-xl">کارکردن لە تاقیگەکان</h4>
                  <p className="text-gray-600">لە کارگەکانی پیشەسازی، دەرمان، نەخۆشخانە و شیکاری پزیشکی</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-green-700 mb-3 text-xl">توێژینەوەی زانستی</h4>
                  <p className="text-gray-600">بەشداری لە پرۆژە توێژینەوەییەکان و لێکۆڵینەوە زانستییەکان</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-green-700 mb-3 text-xl">وانەوتنەوە و پەروەردە</h4>
                  <p className="text-gray-600">مامۆستای زیندەزانی لە پەیمانگا و زانکۆکان</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-green-700 mb-3 text-xl">کشتوکاڵ و ژینگە</h4>
                  <p className="text-gray-600">کارکردن لە بواری کشتوکاڵ و پارێزگاری ژینگە</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-800">دەربارەی زیندەزانی</h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  زیندەزانی یان ژیانزانی (Biology) یەکێکە لە گرنگترین زانستە سروشتییەکانی سەردەم کە بەشێکی سەرەکی لە کۆلێژی زانست پێک دەهێنێت. ئەم زانستە بە شێوەیەکی وورد و دروست لە ژیان و زیندەوەران دەکۆڵێتەوە و هەموو لایەنەکانی لەخۆ دەگرێت.
                </p>
                <p>
                  زیندەزانی پەیوەستە بە خوێندنی تایبەتمەندی و سیفاتی هەموو جۆرەکانی زیندەوەران، لەوانە مرۆڤ، ئاژەڵ، ڕووەک، ڤایرۆس، بەکتریا و هەموو زیندەوەرە میکرۆسکۆپییەکان.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">مێژووی گرنگ</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">ئارستۆ (384-322 پ.ز)</h4>
                  <p className="text-gray-600">یەکەم پۆلێنکردنی زانستی زیندەوەران</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">تیۆری خانە (1838-1839)</h4>
                  <p className="text-gray-600">دامەزراندنی بنەمای خانە وەک یەکەی بنەڕەتی ژیان</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">چارڵز داروین (1859)</h4>
                  <p className="text-gray-600">تیۆری پەرەسەندن بە هەڵبژاردنی سروشتی</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">واتسۆن و کریک (1953)</h4>
                  <p className="text-gray-600">دۆزینەوەی پێکهاتەی DNA Double Helix</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Branches Section */}
        {activeSection === 'branches' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <Microscope className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-800">لقە سەرەکیەکانی زیندەزانی</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-green-100"
                  >
                    <div className="text-green-600 mb-4">{branch.icon}</div>
                    <h4 className="font-bold text-green-700 mb-3 text-lg">{branch.name}</h4>
                    <p className="text-gray-600">{branch.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">لقەکانی تر</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">پەرەسەندن (Evolution)</h4>
                  <p className="text-green-50">گۆڕانی زیندەوەران بەدرێژایی کات</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">گەشەزانی</h4>
                  <p className="text-green-50">گەشەکردنی تاکەکان لە قۆناغی سەرەتاییەوە</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">ژینگەییزانی (Ecology)</h4>
                  <p className="text-green-50">پەیوەندی زیندەوەران و ژینگەکەیان</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">پۆلێنزانی (Taxonomy)</h4>
                  <p className="text-green-50">پۆلێنکردن و ناولێنانی زیندەوەران</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Goals Section */}
        {activeSection === 'goals' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-800">ئامانجەکانی ماڵپەڕەکەمان</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg">{goal}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">ڕۆڵی بایۆلۆجی لە ژیانی ڕۆژانەدا</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">خۆراک و خۆراکزانی</h4>
                  <p className="text-gray-600">تێگەیشتن لە گەشەکردنی ڕووەکەکان و دابینکردنی خۆراک</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">تەندروستی و پزیشکی</h4>
                  <p className="text-gray-600">لێکۆڵینەوە لە نەخۆشییەکان و دۆزینەوەی چارەسەرەکان</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">ژینگە و ژینگەزانی</h4>
                  <p className="text-gray-600">پاراستنی دارستان و ڕووبار و گیانلەبەرە کێوییەکان</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-green-700 mb-2">بایۆتەکنەلۆژیا</h4>
                  <p className="text-gray-600">دروستکردنی ڤاکسین و دەرمان و بەروبوومی باشترکراوی</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Success Section */}
        {activeSection === 'success' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-800">چۆن سەرکەوتوو بین لە بایۆلۆجی؟</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {successTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      ✓
                    </div>
                    <p className="text-gray-700 text-lg">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">ئامۆژگاری زیادە</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <h4 className="font-bold mb-3 text-xl">تەندروست بمێنەرەوە</h4>
                  <p className="text-green-50">خواردنی باش، خەوی پێویست، پشوودان لە کاتی خوێندن</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <h4 className="font-bold mb-3 text-xl">چێژ لە بابەتەکان وەربگرە</h4>
                  <p className="text-green-50">بایۆلۆجی وەک لێکۆڵینەوە لە خودی ژیان سەیر بکە</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <h4 className="font-bold mb-3 text-xl">بە سەبر و بەردەوام بە</h4>
                  <p className="text-green-50">بایۆلۆجی پێویستی بە کات و مەشقی بەردەوام هەیە</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-800">دەربارەی تیمەکەمان</h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl">
                  ئێمە شەش خوێندکاری بەشی بایۆلۆجی زانکۆین، کە بەهۆی خۆشەویستییەکی هاوبەشەوە بۆ زانست و زانیارییەوە کۆکراوینەتەوە. ئەم ماڵپەڕە پڕۆژەی ئێمەیە، بە ئامانجی ئەوەی کە بایۆلۆجی ئاسانتربێ بۆ تێگەیشتن و چێژبەخشتربێ بۆ هەمووان دروستکراوە.
                </p>
                <p className="text-lg">
                  هەریەکەمان ئارەزووی جیاوازمان هەیە، هەندێکمان ڕووەکمان خۆشدەوێت، هەندێکی تر سەرسامین بە ئاژەڵ، وە هەندێکی تر مرۆڤ، یان ژینگە، بەڵام بەیەکەوە زانیاری و داهێنان و هەوڵەکانمان تێکەڵ کرد بۆ بنیاتنانی ئەم ماڵپەڕە.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-6">تیمی BioNova</h3>
              <p className="text-xl mb-8 text-green-50">
                دیدگاکەمان سادەیە: جوانی بایۆلۆجی بە شێوەیەک هاوبەش بکەین کە هەست بە سەرنجڕاکێشی و ڕوونی و ئیلهامبەخشین بکەیت
              </p>
              <div className="flex justify-center gap-8 flex-wrap">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Microscope className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="font-bold text-xl">توێژینەوە</h4>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Leaf className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="font-bold text-xl">زانست</h4>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Heart className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="font-bold text-xl">خۆشەویستی</h4>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">بەشی بایۆلۆجی - زانکۆی ڕاپەڕین</h3>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700 text-lg text-center mb-4">
                  ئەم ماڵپەڕە تایبەتە بە خوێندکاران و ئارەزوومەندانی بەشی بایۆلۆجی لە کۆلێژی زانستی زانکۆی ڕاپەڕین
                </p>
                <div className="flex justify-center gap-6 flex-wrap mt-6">
                  <div className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-600">
                    <span className="font-bold text-green-700">زانکۆی ڕاپەڕین</span>
                  </div>
                  <div className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-600">
                    <span className="font-bold text-green-700">کۆلێژی زانست</span>
                  </div>
                  <div className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-600">
                    <span className="font-bold text-green-700">بەشی بایۆلۆجی</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-700 to-green-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-8 h-8" />
                <h4 className="text-xl font-bold">BioQuest</h4>
              </div>
              <p className="text-green-100">
                ماڵپەڕەیەکی تایبەت بە بایۆلۆجی و زانستی ژیان
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">بەستەرە خێراکان</h4>
              <ul className="space-y-2 text-green-100">
                <li className="hover:text-white cursor-pointer transition-colors">سەرەکی</li>
                <li className="hover:text-white cursor-pointer transition-colors">دەربارە</li>
                <li className="hover:text-white cursor-pointer transition-colors">لقەکان</li>
                <li className="hover:text-white cursor-pointer transition-colors">تیمەکەمان</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">زانیاری پەیوەندی</h4>
              <p className="text-green-100 mb-2">زانکۆی ڕاپەڕین</p>
              <p className="text-green-100 mb-2">کۆلێژی زانست</p>
              <p className="text-green-100">بەشی بایۆلۆجی</p>
            </div>
          </div>
          
          <div className="border-t border-green-600 pt-6 text-center">
            <p className="text-green-100">
              © 2024 BioQuest - تیمی BioNova | هەموو مافێک پارێزراوە
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
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
      `}</style>
    </div>
  );
}
