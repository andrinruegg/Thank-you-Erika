export type Language = 'en' | 'ro';

export interface TranslationContent {
  heroTitle: string;
  heroSubtitle: string;
  heroButton: string;
  
  gratitudeTitle: string;
  gratitude1Title: string;
  gratitude1Desc: string;
  gratitude2Title: string;
  gratitude2Desc: string;
  gratitude3Title: string;
  gratitude3Desc: string;

  familyTitle: string;
  alexiaTitle: string;
  alexiaDesc: string;
  didiTitle: string;
  didiDesc: string;

  letterTitle: string;
  letterBody: string;
  letterSign: string;

  footerText: string;
}

export interface Translations {
  en: TranslationContent;
  ro: TranslationContent;
}