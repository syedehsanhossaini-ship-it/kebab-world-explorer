export interface Country {
  id: string;
  name: {
    en: string;
    fa: string;
    fi: string;
  };
  kebabName: {
    en: string;
    fa: string;
    fi: string;
  };
  description: {
    en: string;
    fa: string;
    fi: string;
  };
  history: {
    en: string;
    fa: string;
    fi: string;
  };
  ingredients: string[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  flag: string;
}

export const countries: Country[] = [
  {
    id: 'iran',
    name: {
      en: 'Iran',
      fa: 'ایران',
      fi: 'Iran',
    },
    kebabName: {
      en: 'Kebab Koobideh',
      fa: 'کباب کوبیده',
      fi: 'Kebab Koobideh',
    },
    description: {
      en: 'Minced meat kebab, one of the most famous Persian kebabs, grilled on charcoal',
      fa: 'کباب از گوشت چرخ‌شده، یکی از معروف‌ترین کباب‌های پارسی، شامل‌پزی بر روی زغال',
      fi: 'Jauhelihakebabia, yksi tunnetuimmista Persialaisen kebabeista, hiilellä grillattuna',
    },
    history: {
      en: 'Kebab Koobideh originates from Persian cuisine dating back centuries. It became popular during the Safavid dynasty and is now the most iconic Persian kebab worldwide.',
      fa: 'کباب کوبیده ریشه در آشپزی ایرانی دارد که به قرن‌های پیش برمی‌گردد. در دوران صفویه محبوب شد و اکنون معروف‌ترین کباب ایرانی در جهان است.',
      fi: 'Kebab Koobideh on peräisin Persialaisen ruokakulttuurista, joka ulottuu takaisin vuosisadoille. Se nousi suosituoksi Safavid-dynastian aikana ja on nyt maailman ikonisimpia Persialaisia kebabeja.',
    },
    ingredients: ['Ground lamb', 'Ground beef', 'Onion', 'Spices', 'Salt', 'Black pepper'],
    theme: {
      primary: '#C60C30',
      secondary: '#FFD700',
      accent: '#003875',
      bg: '#FFF8DC',
    },
    flag: '🇮🇷',
  },
  {
    id: 'turkey',
    name: {
      en: 'Turkey',
      fa: 'ترکیه',
      fi: 'Turkki',
    },
    kebabName: {
      en: 'Döner Kebab',
      fa: 'دونر کباب',
      fi: 'Döner Kebab',
    },
    description: {
      en: 'Meat stacked on a rotating spit, sliced and served in bread or pita',
      fa: 'گوشت روی آسیاب چرخان انباشته، برش‌خورده و درون نان یا پیتا سرو شده',
      fi: 'Lihaa pinotettu pyörivällä lihahammasta, viipaloituna ja palvellaan leivässä tai pitassa',
    },
    history: {
      en: 'Döner originated in Ottoman Empire, evolving from military cooking practices. It became popular in Turkey and spread worldwide during the 20th century.',
      fa: 'دونر از امپراتوری عثمانی ریشه گرفت و از روش‌های پخت نظامی تکامل یافت. در ترکیه محبوب شد و در قرن بیستم به سراسر جهان پخش شد.',
      fi: 'Döner sai alkunsa Ottomaanien valtakunnasta, kehittyen sotilaallisista ruoanlaiton käytännöistä. Se nousi suosituoksi Turkissa ja levisi maailmanlaajuisesti 1900-luvulla.',
    },
    ingredients: ['Lamb', 'Beef', 'Spices', 'Tomato', 'Onion', 'Yogurt', 'Lettuce'],
    theme: {
      primary: '#E4003B',
      secondary: '#FFFFFF',
      accent: '#FFD700',
      bg: '#FFF5EE',
    },
    flag: '🇹🇷',
  },
  {
    id: 'lebanon',
    name: {
      en: 'Lebanon',
      fa: 'لبنان',
      fi: 'Libanon',
    },
    kebabName: {
      en: 'Shish Kebab',
      fa: 'شیش کباب',
      fi: 'Shish Kebab',
    },
    description: {
      en: 'Meat marinated in spices and grilled on skewers',
      fa: 'گوشت ترشی‌شده در ادویه و شامل‌پزی بر روی چوب کباب',
      fi: 'Lihaa marinoidaan mausteiden kanssa ja grillataan vartaalla',
    },
    history: {
      en: 'Shish Kebab has roots in Levantine cuisine. It represents the Mediterranean blend of flavors and cooking techniques from Lebanon, Syria, and the broader Middle East.',
      fa: 'شیش کباب ریشه در آشپزی لونتی دارد. نمایندگی از ترکیب طعم‌های مدیترانه‌ای و تکنیک‌های پخت لبنان، سوریه و خاورمیانه وسیع‌تر است.',
      fi: 'Shish Kebabilla on juuret Levanttilaisen ruoakulttuurissa. Se edustaa Välimeren makujen ja ruoanlaittotekniikan sekoitusta Libanonista, Syriasta ja laajemmasta Lähi-idästä.',
    },
    ingredients: ['Lamb chunks', 'Bell peppers', 'Onions', 'Tomatoes', 'Garlic', 'Olive oil', 'Lemon'],
    theme: {
      primary: '#C60C30',
      secondary: '#FFFFFF',
      accent: '#006400',
      bg: '#FFFAF0',
    },
    flag: '🇱🇧',
  },
  {
    id: 'egypt',
    name: {
      en: 'Egypt',
      fa: 'مصر',
      fi: 'Egypti',
    },
    kebabName: {
      en: 'Kofta',
      fa: 'کفتہ',
      fi: 'Kofta',
    },
    description: {
      en: 'Ground meat mixed with spices and herbs, formed into cylinders and grilled',
      fa: 'گوشت چرخ‌شده ترکیب شده با ادویه و گیاهان معطر، شکل‌دادی به استوانه و شامل‌پزی شده',
      fi: 'Jauhelihaa sekoitettuna mausteiden ja yrtteien kanssa, muodostettu sylintereiksi ja grillattu',
    },
    history: {
      en: 'Kofta is a staple in Egyptian cuisine, dating back to ancient times. It represents the rich culinary heritage of the Nile Valley and Pharaonic traditions.',
      fa: 'کفتہ از معمول‌های آشپزی مصری است که به زمان‌های باستان برمی‌گردد. نمایندگی از میراث فرهنگی غنی دره نیل و سنت‌های فرعونی است.',
      fi: 'Kofta on Egyptiläisen ruoakulttuurin perusaine, joka ulottuu muinaisiin aikoihin. Se edustaa Niilin laakson rikkasta kulinaarista perintöä ja faraonisten perinteiden perintöä.',
    },
    ingredients: ['Ground beef', 'Onions', 'Parsley', 'Mint', 'Cumin', 'Coriander', 'Salt'],
    theme: {
      primary: '#FFD700',
      secondary: '#000000',
      accent: '#C60C30',
      bg: '#FFFEF9',
    },
    flag: '🇪🇬',
  },
  {
    id: 'pakistan',
    name: {
      en: 'Pakistan',
      fa: 'پاکستان',
      fi: 'Pakistan',
    },
    kebabName: {
      en: 'Seekh Kebab',
      fa: 'سیخ کباب',
      fi: 'Seekh Kebab',
    },
    description: {
      en: 'Ground meat with aromatic spices molded onto skewers and grilled over charcoal',
      fa: 'گوشت چرخ‌شده با ادویه معطر شکل‌دادی بر روی سیخ و شامل‌پزی بر روی زغال',
      fi: 'Jauhelihaa aromatisilla maustilla muotoiltu vartaalle ja grillattu hiilellä',
    },
    history: {
      en: 'Seekh Kebab originates from Mughal cuisine in the Indian subcontinent. It became deeply integrated into Pakistani food culture and is a favorite at celebrations and street food stalls.',
      fa: 'سیخ کباب از آشپزی مغولی در قاره‌ی هند ریشه گرفت. در فرهنگ غذایی پاکستان عمیقاً ادغام شد و در جشن‌ها و غرفه‌های غذای خیابانی محبوب است.',
      fi: 'Seekh Kebab on peräisin Mughal-ruoakulttuurista Intian alatasolla. Se tuli syvällisesti integroiduksi Pakistanin ruokakulttuuriin ja on suosittu juhlia ja katuperän ruokapaikoissa.',
    },
    ingredients: ['Ground mutton', 'Ginger-garlic paste', 'Green chili', 'Coriander', 'Cumin', 'Egg', 'Breadcrumbs'],
    theme: {
      primary: '#00411F',
      secondary: '#FFFFFF',
      accent: '#FFD700',
      bg: '#F5F5F5',
    },
    flag: '🇵🇰',
  },
  {
    id: 'greece',
    name: {
      en: 'Greece',
      fa: 'یونان',
      fi: 'Kreikka',
    },
    kebabName: {
      en: 'Souvlaki',
      fa: 'سوولاکی',
      fi: 'Souvlaki',
    },
    description: {
      en: 'Marinated meat grilled on skewers, served with pita and tzatziki sauce',
      fa: 'گوشت ترشی‌شده شامل‌پزی شده بر روی سیخ، سرو شده با پیتا و سس تزاتزیکی',
      fi: 'Marinoiduttua lihaa grillattu vartaalla, palvellaan pitan ja tzatziki-kastikkeen kanssa',
    },
    history: {
      en: 'Souvlaki is a traditional Greek dish with ancient roots. It represents the Mediterranean culture and Greek hospitality, popular in both casual and fine dining settings.',
      fa: 'سوولاکی یک غذای سنتی یونانی با ریشه‌های باستانی است. نمایندگی از فرهنگ مدیترانه‌ای و پذیرایی یونانی، محبوب در سطح‌های معمول و رستوران‌های درجه‌یک است.',
      fi: 'Souvlaki on perinteinen Kreikkalainen ruoka, jolla on muinaiset juuret. Se edustaa Välimeren kulttuuria ja kreikkalaista vieraanvaraisuutta, suosittua sekä rennossa että hienostuneissa ravintolaympäristöissä.',
    },
    ingredients: ['Pork or chicken', 'Olive oil', 'Lemon juice', 'Oregano', 'Garlic', 'Bell peppers', 'Onions'],
    theme: {
      primary: '#003875',
      secondary: '#FFFFFF',
      accent: '#FFD700',
      bg: '#F0F8FF',
    },
    flag: '🇬🇷',
  },
  {
    id: 'india',
    name: {
      en: 'India',
      fa: 'هند',
      fi: 'Intia',
    },
    kebabName: {
      en: 'Tandoori Kebab',
      fa: 'کباب تندوری',
      fi: 'Tandoori Kebab',
    },
    description: {
      en: 'Meat marinated in yogurt and spices, cooked in a traditional clay oven (tandoor)',
      fa: 'گوشت ترشی‌شده در ماست و ادویه، پخت شده در آتش‌دان خاکی سنتی',
      fi: 'Lihaa marinoidaan jogurtin ja mausteiden kanssa, kypsytetään perinteisessä saviuunissa (tandoor)',
    },
    history: {
      en: 'Tandoori cooking is a centuries-old Indian culinary tradition, particularly from Punjab. The tandoor clay oven method was perfected over generations and represents the essence of Indian spice mastery.',
      fa: 'پخت تندوری یک سنت آشپزی ایندی سده‌های قدیم است، بخصوص از پنجاب. روش آتش‌دان خاکی تندوری در طول نسل‌ها کامل شد و ماهیت تسلط ادویه‌ای هندی را نمایندگی می‌کند.',
      fi: 'Tandoori-ruoanlaitto on vuosisatoja vanha intialaiseen ruokakulttuuriin, erityisesti Punjabista. Tandoor-saviuuni-menetelmä täydennettiin useiden sukupolvien aikana ja edustaa intialaiselta mausteenhallinnan olemusta.',
    },
    ingredients: ['Chicken or mutton', 'Yogurt', 'Ginger-garlic paste', 'Red chili', 'Turmeric', 'Garam masala', 'Lemon'],
    theme: {
      primary: '#FF9900',
      secondary: '#FFFFFF',
      accent: '#138808',
      bg: '#FFFACD',
    },
    flag: '🇮🇳',
  },
  {
    id: 'argentina',
    name: {
      en: 'Argentina',
      fa: 'آرژانتین',
      fi: 'Argentiina',
    },
    kebabName: {
      en: 'Asado',
      fa: 'آسادو',
      fi: 'Asado',
    },
    description: {
      en: 'Grilled meat cooked over open flame, a beloved South American barbecue tradition',
      fa: 'گوشت شامل‌پزی شده بر روی شعله باز، یک سنت باربکیو محبوب آمریکای جنوبی',
      fi: 'Lihaa grillattu avoimella liekilläa, rakkain Etelä-Amerikan grillausperinne',
    },
    history: {
      en: 'Asado is a social and cultural centerpiece of Argentine life, dating back to the Gaucho culture of the Pampas. It represents the rich beef heritage and communal traditions of Argentina.',
      fa: 'آسادو یک مرکز اجتماعی و فرهنگی زندگی آرژانتینی است، که به فرهنگ گاوچو پمپاس برمی‌گردد. نمایندگی از میراث گوشت غنی و سنت‌های مشترک آرژانتین است.',
      fi: 'Asado on Argentiinalaisen elämän sosiaalinen ja kulttuurinen keskipiste, joka ulottuu Gauchos-kulttuuriin Pampasissa. Se edustaa Argentiinaa rikkasta naudanliha perintöä ja yhteisöllisiä perinteitä.',
    },
    ingredients: ['Beef ribs', 'Beef steaks', 'Sausage', 'Salt', 'Black pepper', 'Chimichurri sauce'],
    theme: {
      primary: '#87CEEB',
      secondary: '#FFFFFF',
      accent: '#FFD700',
      bg: '#F0FFFF',
    },
    flag: '🇦🇷',
  },
  {
    id: 'morocco',
    name: {
      en: 'Morocco',
      fa: 'مراکش',
      fi: 'Marokko',
    },
    kebabName: {
      en: 'Kofta Kebab',
      fa: 'کفتہ کباب',
      fi: 'Kofta Kebab',
    },
    description: {
      en: 'Spiced ground meat formed into cylindrical shapes and grilled, served with harissa',
      fa: 'گوشت چرخ‌شده ادویه‌دار شکل‌دادی به شکل استوانه‌ای و شامل‌پزی شده، سرو شده با هریسا',
      fi: 'Maustetun jauhelihaa muotoiltu sylinterimuotoisiksi ja grillattu, palvellaan harissalla',
    },
    history: {
      en: 'Moroccan Kofta reflects the rich Berber and Arab culinary traditions. It combines North African spice blends and cooking techniques passed down through generations.',
      fa: 'کفتہ مراکشی سنت‌های آشپزی امازیغ و عرب غنی را بازتاب می‌دهد. ترکیبی از ادویه‌های شمال آفریقا و تکنیک‌های پخت انتقال‌یافته در طول نسل‌ها است.',
      fi: 'Marokkolainen Kofta heijastaa Berber- ja arabiruokakulttuurin rikkaita perinteitä. Se yhdistää Pohjois-Afrikan mausteseokset ja ruoanlaittotekniikan, joita on siirretty sukupolvien yli.',
    },
    ingredients: ['Ground beef', 'Onions', 'Cilantro', 'Parsley', 'Cumin', 'Paprika', 'Chili powder'],
    theme: {
      primary: '#C60C30',
      secondary: '#006400',
      accent: '#FFD700',
      bg: '#FFFEF9',
    },
    flag: '🇲🇦',
  },
  {
    id: 'brazil',
    name: {
      en: 'Brazil',
      fa: 'برزیل',
      fi: 'Brasilia',
    },
    kebabName: {
      en: 'Churrasco',
      fa: 'چوراسکو',
      fi: 'Churrasco',
    },
    description: {
      en: 'Grilled meat skewers, a Brazilian barbecue tradition with various cuts of meat',
      fa: 'سیخ گوشت شامل‌پزی شده، سنت باربکیو برزیلی با برش‌های مختلف گوشت',
      fi: 'Grillatut lihavartaat, Brasilialainen grillausperinne eri lihaleikkeillä',
    },
    history: {
      en: 'Churrasco originated from Portuguese and Spanish influences mixed with Brazilian cattle ranching culture. It evolved into a distinctive Brazilian social and cultural tradition.',
      fa: 'چوراسکو از تأثیرات پرتغالی و اسپانیایی با فرهنگ دام‌پروری برزیلی ریشه گرفت. به یک سنت اجتماعی و فرهنگی برزیلی متمایز تکامل یافت.',
      fi: 'Churrasco sai alkunsa Portugalilaisten ja Espanjalaisten vaikutuksista sekoitettuna Brasilian karjanhoitokulttuuriin. Se kehittyi erillisissä Brasilialaisen sosiaaliseksi ja kulttuuriseksi perinteeksi.',
    },
    ingredients: ['Various beef cuts', 'Coarse salt', 'Garlic', 'Chimichurri sauce', 'Lime'],
    theme: {
      primary: '#FFD700',
      secondary: '#00C60C',
      accent: '#003875',
      bg: '#FFFAF0',
    },
    flag: '🇧🇷',
  },
  {
    id: 'indonesia',
    name: {
      en: 'Indonesia',
      fa: 'اندونزی',
      fi: 'Indonesia',
    },
    kebabName: {
      en: 'Sate Ayam',
      fa: 'ستیِ مرغ',
      fi: 'Sate Ayam',
    },
    description: {
      en: 'Grilled chicken skewers served with spicy peanut sauce',
      fa: 'سیخ مرغ شامل‌پزی شده سرو شده با سس بادام‌زمینی تند',
      fi: 'Grillatut kanavarrat, joita palvellaan mausteisella maapähkinäkastikkeella',
    },
    history: {
      en: 'Sate is an iconic Indonesian and Southeast Asian dish with rich history. It represents the blend of local ingredients and spice traditions across the Indonesian archipelago.',
      fa: 'ستیِ یک غذای نمادین اندونزیایی و جنوب شرقی آسیایی با تاریخ غنی است. نمایندگی از ترکیب اجزای محلی و سنت‌های ادویه‌ای در سراسر جزایر اندونزی است.',
      fi: 'Sate on kuvakuvavus Indonesian ja Kaakkois-Aasian ruoan ikoninen ruoka rikkaan historian kanssa. Se edustaa paikallisten ainesosien ja mausteperinteiden sekoitusta Indonesian saariin.',
    },
    ingredients: ['Chicken', 'Peanut sauce', 'Turmeric', 'Garlic', 'Shallots', 'Chili', 'Lime'],
    theme: {
      primary: '#C60C30',
      secondary: '#FFFFFF',
      accent: '#FFD700',
      bg: '#FFF5EE',
    },
    flag: '🇮🇩',
  },
];

export const getCountryById = (id: string): Country | undefined => {
  return countries.find(country => country.id === id);
};

export const getAllCountries = (): Country[] => {
  return countries;
};
