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

interface PriceCardProps {
  title: string;
  description: string;
  price: number | 'custom';
  features: string[];
  featuresTitle?: string;
  color: string;
  popular?: boolean;
}

const PriceCard: FC<PriceCardProps> = ({ color, title, description, price, featuresTitle, features, popular }) => {
  return (
    <StyledPriceCard color={color}>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDescription>{description}</StyledCardDescription>
      {price !== 'custom' && (
        <StyledPrice>
          <StyledAmount>${price}</StyledAmount> / month
        </StyledPrice>
      )}
      {price === 'custom' && (
        <StyledPrice>
          <StyledAmount>Custom</StyledAmount>
        </StyledPrice>
      )}
      <StyledFeatureListTitle>{featuresTitle}</StyledFeatureListTitle>
      <StyledUList>
        {features.map(feature => (
          <StyledListItem>
            <SvgTick /> <span>{feature}</span>
          </StyledListItem>
        ))}
      </StyledUList>

      <StyledButtonWrapper>
        <LinkButton href="https://github.com/metecan/dataguess-9" label="View Source Code" />
      </StyledButtonWrapper>
      {popular && <StyledBadge>Most Popular</StyledBadge>}
    </StyledPriceCard>
  );
};
export default PriceCard;
