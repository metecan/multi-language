import type { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';

import PriceCard from '../components/PriceCard';
import SelectBox from '../components/SelectBox';
import { LanguageOptions } from '../data/languageOptions';
import { PricesData } from '../data/pricesData';

const StyledPricingPageContainer = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SelectedInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const StyledHero = styled.h1`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.2;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledDescription = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  gap: 16px;
  flex-wrap: wrap;
`;

const Pricing: FC = () => {
  //? Getting dummy data from data/pricesData.tsx
  const pricesData = PricesData();

  return (
    <StyledPricingPageContainer>
      <SelectBox options={LanguageOptions} />
      <SelectedInformationWrapper>
        <StyledHero>
          <FormattedMessage id="app.headLine" />
        </StyledHero>
        <StyledDescription>
          <FormattedMessage id="app.subHeadLine" />
        </StyledDescription>
      </SelectedInformationWrapper>
      <StyledCardsWrapper>
        {pricesData.map((item, index) => (
          <PriceCard
            key={index}
            color={item.color}
            title={item.title}
            description={item.description}
            price={item.price}
            featuresTitle={item.featuresTitle}
            features={item.features}
            isPopular={item.isPopular}
            isCustomPrice={item.isCustomPrice}
          />
        ))}
      </StyledCardsWrapper>
    </StyledPricingPageContainer>
  );
};
export default Pricing;
