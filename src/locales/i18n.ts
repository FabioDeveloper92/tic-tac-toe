import { createI18n } from 'vue-i18n';
import en from './en';
import it from './it';

// Definizione dei tipi per i messaggi di traduzione
type MessageSchema = typeof en;

const messages = {
  en,
  it,
};

const i18n = createI18n<{
  messages: MessageSchema;
  locale: string;
  fallbackLocale: string;
}>({
  locale: 'en', // Lingua di default
  fallbackLocale: 'en', // Lingua di fallback
  messages,
});

export default i18n;
