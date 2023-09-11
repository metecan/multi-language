import React from 'react';

import type { FC } from 'react';
import LinkButton from '../LinkButton';
import SvgTick from '../Icons/Tick';
import {
  StyledCardTitle,
  StyledPriceCard,
  StyledCardDescription,
  StyledPrice,
  StyledAmount,
  StyledFeatureListTitle,
  StyledUList,
  StyledListItem,
  StyledButtonWrapper,
  StyledBadge,
  StyledMonth,
} from './PriceCard.styles';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';

interface PriceCardProps {
  title: string;
  description: string;
  price: number;
  isCustomPrice?: boolean;
  features: string[];
  featuresTitle?: string;
  color: string;
  isPopular?: boolean;
}

const PriceCard: FC<PriceCardProps> = ({
  color,
  title,
  description,
  price,
  isCustomPrice,
  featuresTitle,
  features,
  isPopular,
}) => {
  const language = useSelector((state: RootState) => state.language.currentLanguage);

  return (
    <StyledPriceCard color={color}>
      <StyledCardTitle>
        <FormattedMessage id={title} />
      </StyledCardTitle>
      <StyledCardDescription>
        <FormattedMessage id={description} />
      </StyledCardDescription>

      <StyledPrice>
        <StyledAmount>
          {isCustomPrice ? (
            <FormattedMessage id="cards.custom" />
          ) : (
            <React.Fragment>
              <FormattedNumber value={price} style="currency" currency={language === 'en' ? 'USD' : 'TRY'} />
              <StyledMonth>
                /
                <FormattedMessage id="cards.month" />
              </StyledMonth>
            </React.Fragment>
          )}
        </StyledAmount>
      </StyledPrice>

      <StyledFeatureListTitle>
        <FormattedMessage id={featuresTitle} />
      </StyledFeatureListTitle>
      <StyledUList>
        {features.map((feature, index) => (
          <StyledListItem key={index}>
            <SvgTick />
            <span>
              <FormattedMessage id={feature} />
            </span>
          </StyledListItem>
        ))}
      </StyledUList>

      <StyledButtonWrapper>
        <LinkButton href="https://github.com/metecan/dataguess-9">
          <FormattedMessage id="app.viewSourceCode" />
        </LinkButton>
      </StyledButtonWrapper>
      {isPopular && (
        <StyledBadge>
          <FormattedMessage id="cards.mostPopular" />
        </StyledBadge>
      )}
    </StyledPriceCard>
  );
};
export default PriceCard;
