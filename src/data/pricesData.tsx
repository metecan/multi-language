import { useSelector } from 'react-redux';

import { useTheme } from 'styled-components';

import { RootState } from '../stores';

type PriceCardType = {
  color: string;
  title: string;
  description: string;
  price: number;
  isCustomPrice?: boolean;
  features: string[];
  featuresTitle?: string;
  isPopular?: boolean;
};

export const PricesData = () => {
  //? Getting theme from styled-components
  const theme = useTheme();

  //? Redux
  const language = useSelector((state: RootState) => state.language.currentLanguage);

  //? dummy currency multiplier for Turkish Lira
  const multiplier = language === 'en' ? 1 : 27;

  return [
    {
      color: theme.colors.CARDS.GRAY,
      title: 'cards.title.free',
      description: 'cards.desc.free',
      price: 0 * multiplier,
      featuresTitle: 'cards.feat-title.free',
      features: [
        'cards.feat.free.1',
        'cards.feat.free.2',
        'cards.feat.free.3',
        'cards.feat.free.4',
        'cards.feat.free.5',
      ],
    },
    {
      color: theme.colors.CARDS.ORANGE,
      title: 'cards.title.starter',
      description: 'cards.desc.starter',
      price: 8 * multiplier,
      featuresTitle: 'cards.feat-title.starter',
      features: [
        'cards.feat.starter.1',
        'cards.feat.starter.2',
        'cards.feat.starter.3',
        'cards.feat.starter.4',
        'cards.feat.starter.5',
      ],
    },
    {
      color: theme.colors.CARDS.GREEN,
      title: 'cards.title.business',
      description: 'cards.desc.business',
      price: 16 * multiplier,
      featuresTitle: 'cards.feat-title.business',
      features: [
        'cards.feat.business.1',
        'cards.feat.business.2',
        'cards.feat.business.3',
        'cards.feat.business.4',
        'cards.feat.business.5',
      ],
      isPopular: true,
    },
    {
      color: theme.colors.CARDS.PURPLE,
      title: 'cards.title.enterprise',
      description: 'cards.desc.enterprise',
      price: 0 * multiplier,
      isCustomPrice: true,
      featuresTitle: 'cards.feat-title.enterprise',
      features: [
        'cards.feat.enterprise.1',
        'cards.feat.enterprise.2',
        'cards.feat.enterprise.3',
        'cards.feat.enterprise.4',
        'cards.feat.enterprise.5',
      ],
    },
  ] as PriceCardType[];
};
