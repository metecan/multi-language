import { FormattedMessage, FormattedNumber } from 'react-intl';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { RootState } from '../stores';

export const PricesData = () => {
  const theme = useTheme();

  const language = useSelector((state: RootState) => state.language.currentLanguage);
  const multiplier = language === 'en' ? 1 : 27;

  return [
    {
      color: theme.colors.CARDS.GRAY,
      title: <FormattedMessage id="cards.title.free" />,
      description: <FormattedMessage id="cards.desc.free" />,
      price: <FormattedNumber value={0 * multiplier} style="currency" currency={language === 'en' ? 'USD' : 'TRY'} />,
      featuresTitle: <FormattedMessage id="cards.feat-title.free" />,
      features: [
        <FormattedMessage id="cards.feat.free.1" />,
        <FormattedMessage id="cards.feat.free.2" />,
        <FormattedMessage id="cards.feat.free.3" />,
        <FormattedMessage id="cards.feat.free.4" />,
        <FormattedMessage id="cards.feat.free.5" />,
      ],
    },
    {
      color: theme.colors.CARDS.ORANGE,
      title: <FormattedMessage id="cards.title.starter" />,
      description: <FormattedMessage id="cards.desc.starter" />,
      price: <FormattedNumber value={8 * multiplier} style="currency" currency={language === 'en' ? 'USD' : 'TRY'} />,
      featuresTitle: <FormattedMessage id="cards.feat-title.starter" />,
      features: [
        <FormattedMessage id="cards.feat.starter.1" />,
        <FormattedMessage id="cards.feat.starter.2" />,
        <FormattedMessage id="cards.feat.starter.3" />,
        <FormattedMessage id="cards.feat.starter.4" />,
        <FormattedMessage id="cards.feat.starter.5" />,
      ],
    },
    {
      color: theme.colors.CARDS.GREEN,
      title: <FormattedMessage id="cards.title.business" />,
      description: <FormattedMessage id="cards.desc.business" />,
      price: <FormattedNumber value={16 * multiplier} style="currency" currency={language === 'en' ? 'USD' : 'TRY'} />,
      featuresTitle: <FormattedMessage id="cards.feat-title.business" />,
      features: [
        <FormattedMessage id="cards.feat.business.1" />,
        <FormattedMessage id="cards.feat.business.2" />,
        <FormattedMessage id="cards.feat.business.3" />,
        <FormattedMessage id="cards.feat.business.4" />,
        <FormattedMessage id="cards.feat.business.5" />,
      ],
      isPopular: true,
    },
    {
      color: theme.colors.CARDS.PURPLE,
      title: <FormattedMessage id="cards.title.enterprise" />,
      description: <FormattedMessage id="cards.desc.enterprise" />,
      price: <FormattedMessage id="cards.custom" />,
      isCustomPrice: true,
      featuresTitle: <FormattedMessage id="cards.feat-title.enterprise" />,
      features: [
        <FormattedMessage id="cards.feat.enterprise.1" />,
        <FormattedMessage id="cards.feat.enterprise.2" />,
        <FormattedMessage id="cards.feat.enterprise.3" />,
        <FormattedMessage id="cards.feat.enterprise.4" />,
        <FormattedMessage id="cards.feat.enterprise.5" />,
      ],
    },
  ];
};
