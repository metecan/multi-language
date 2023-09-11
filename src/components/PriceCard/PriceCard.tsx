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
} from './PriceCard.styles';
import { FormattedMessage } from 'react-intl';

interface PriceCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  price: string | React.ReactNode;
  isCustomPrice?: boolean;
  features: string[] | React.ReactNode[];
  featuresTitle?: string | React.ReactNode;
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
  return (
    <StyledPriceCard color={color}>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDescription>{description}</StyledCardDescription>

      <StyledPrice>
        <StyledAmount>{price}</StyledAmount>
        {!isCustomPrice && (
          <span>
            / <FormattedMessage id="cards.month" />
          </span>
        )}
      </StyledPrice>

      <StyledFeatureListTitle>{featuresTitle}</StyledFeatureListTitle>
      <StyledUList>
        {features.map((feature, index) => (
          <StyledListItem key={index}>
            <SvgTick /> <span>{feature}</span>
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
