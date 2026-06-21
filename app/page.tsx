'use client';

import { useState } from 'react';
import Link from 'next/link';
import { translations, Language } from '@/lib/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000' }}>
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🍢 Kebab Explorer</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-white text-red-600' : ''}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('fa')}
              className={`px-3 py-1 rounded ${language === 'fa' ? 'bg-white text-red-600' : ''}`}
            >
              فارسی
            </button>
            <button
              onClick={() => setLanguage('fi')}
              className={`px-3 py-1 rounded ${language === 'fi' ? 'bg-white text-red-600' : ''}`}
            >
              Suomi
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center text-white" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">{t.home.title}</h2>
          <p className="text-xl mb-8 text-gray-300">{t.home.subtitle}</p>
          <Link
            href="/countries"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            {t.home.explore}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#000' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">🌍 {language === 'en' ? 'Global Discovery' : language === 'fa' ? 'اکتشاف جهانی' : 'Maailmanlaajuinen'}</h3>
              <p>{language === 'en' ? 'Explore kebab traditions from 11 countries' : language === 'fa' ? 'سنت‌های کباب از 11 کشور را کاوش کنید' : 'Tutustu kebabeista 11 maassa'}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">📖 {language === 'en' ? 'Rich History' : language === 'fa' ? 'تاریخ غنی' : 'Rikas Historia'}</h3>
              <p>{language === 'en' ? 'Learn the cultural heritage of each kebab' : language === 'fa' ? 'میراث فرهنگی هر کباب را بیاموزید' : 'Opi kunkin kebabin kulttuurinen perintö'}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">🎨 {language === 'en' ? 'Vibrant Design' : language === 'fa' ? 'طراحی رنگارنگ' : 'Elävä Suunnittelu'}</h3>
              <p>{language === 'en' ? 'Each country has its unique color theme' : language === 'fa' ? 'هر کشور دارای رنگ‌های منحصربه‌فرد است' : 'Jokaisella maalla oma värimaailma'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center p-6 mt-16">
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  );
}
