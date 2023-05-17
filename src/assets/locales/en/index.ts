import { translationsPages } from './pages';
import { translationsComponents } from './components';
import { translationsConstants } from './constants';
import { translationsHelpers } from './helpers';

export const translationEn = {
  en: {
    translation: {
      ...translationsPages,
      ...translationsComponents,
      ...translationsConstants,
      ...translationsHelpers,
    },
  },
};
