'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllCountries } from '@/lib/countries';
import { translations, Language } from '@/lib/translations';

export default function CountriesPage() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];
  const countries = getAllCountries();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000' }}>
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:opacity-80">
            🍢 Kebab Explorer
          </Link>
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

      {/* Header */}
      <section className="py-12 text-center text-white" style={{ backgroundColor: '#1a1a1a' }}>
        <h1 className="text-4xl font-bold mb-2">{t.countries.title}</h1>
        <p className="text-gray-300">{t.countries.description}</p>
      </section>

      {/* Countries Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/country/${country.id}`}
                className="group cursor-pointer transform transition hover:scale-105"
              >
                <div
                  className="p-6 rounded-lg h-full text-white shadow-lg hover:shadow-2xl"
                  style={{ backgroundColor: country.theme.bg, color: '#000' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold">{country.flag}</h2>
                    <h3 className="text-2xl font-bold text-right" style={{ color: country.theme.primary }}>
                      {country.name[language]}
                    </h3>
                  </div>

                  <div className="mb-4 pb-4 border-b-2" style={{ borderColor: country.theme.accent }}>
                    <p className="font-semibold text-lg" style={{ color: country.theme.primary }}>
                      {country.kebabName[language]}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#333' }}>
                    {country.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {country.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: country.theme.primary }}
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-4 inline-block px-4 py-2 rounded font-semibold text-white group-hover:opacity-80 transition"
                    style={{ backgroundColor: country.theme.primary }}
                  >
                    {language === 'en' ? 'Learn More' : language === 'fa' ? 'بیشتر بدانید' : 'Lue lisää'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center p-6 mt-16">
        <p>{translations[language].footer.copyright}</p>
      </footer>
    </div>
  );
}
