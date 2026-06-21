'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCountryById, getAllCountries } from '@/lib/countries';
import { translations, Language } from '@/lib/translations';
import { useParams } from 'next/navigation';

export default function CountryDetailPage() {
  const params = useParams();
  const countryId = params.id as string;
  const country = getCountryById(countryId);
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'Country not found' : language === 'fa' ? 'کشور یافت نشد' : 'Maata ei löytynyt'}
          </h1>
          <Link href="/countries" className="text-orange-500 hover:text-orange-400">
            {language === 'en' ? 'Back to countries' : language === 'fa' ? 'بازگشت به کشورها' : 'Takaisin maihin'}
          </Link>
        </div>
      </div>
    );
  }

  const allCountries = getAllCountries();
  const currentIndex = allCountries.findIndex(c => c.id === countryId);
  const prevCountry = currentIndex > 0 ? allCountries[currentIndex - 1] : null;
  const nextCountry = currentIndex < allCountries.length - 1 ? allCountries[currentIndex + 1] : null;

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

      {/* Hero Section */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: country.theme.bg }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/countries"
            className="inline-block mb-4 text-orange-600 hover:text-orange-700 font-semibold"
          >
            ← {language === 'en' ? 'Back to countries' : language === 'fa' ? 'بازگشت به کشورها' : 'Takaisin maihin'}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-8xl mb-4">{country.flag}</div>
              <h1 className="text-5xl font-bold mb-2" style={{ color: country.theme.primary }}>
                {country.name[language]}
              </h1>
              <p className="text-2xl font-semibold mb-4" style={{ color: country.theme.secondary }}>
                {country.kebabName[language]}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6" style={{ color: country.theme.primary }}>
              <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Description' : language === 'fa' ? 'توضیح' : 'Kuvaus'}</h2>
              <p className="text-lg leading-relaxed">{country.description[language]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ color: country.theme.primary }}>
            {language === 'en' ? 'History & Culture' : language === 'fa' ? 'تاریخ و فرهنگ' : 'Historia ja kulttuuri'}
          </h2>
          <div className="bg-white rounded-lg p-8">
            <p className="text-lg leading-relaxed" style={{ color: '#000' }}>
              {country.history[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ color: country.theme.primary }}>
            {language === 'en' ? 'Key Ingredients' : language === 'fa' ? 'اجزای اصلی' : 'Pääainesaineet'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {country.ingredients.map((ingredient, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg text-white font-semibold text-center"
                style={{ backgroundColor: country.theme.primary }}
              >
                {ingredient}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevCountry ? (
              <Link
                href={`/country/${prevCountry.id}`}
                className="p-6 rounded-lg bg-gradient-to-r text-white hover:opacity-90 transition"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${prevCountry.theme.primary}, ${prevCountry.theme.secondary})`
                }}
              >
                <p className="text-sm opacity-75">
                  {language === 'en' ? 'Previous Country' : language === 'fa' ? 'کشور قبلی' : 'Edellinen maa'}
                </p>
                <p className="text-2xl font-bold">{prevCountry.flag} {prevCountry.name[language]}</p>
              </Link>
            ) : (
              <div></div>
            )}

            {nextCountry ? (
              <Link
                href={`/country/${nextCountry.id}`}
                className="p-6 rounded-lg bg-gradient-to-r text-white hover:opacity-90 transition text-right"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${nextCountry.theme.primary}, ${nextCountry.theme.secondary})`
                }}
              >
                <p className="text-sm opacity-75">
                  {language === 'en' ? 'Next Country' : language === 'fa' ? 'کشور بعدی' : 'Seuraava maa'}
                </p>
                <p className="text-2xl font-bold">{nextCountry.flag} {nextCountry.name[language]}</p>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center p-6">
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  );
}
