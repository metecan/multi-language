import React from 'react';
import type { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { LanguageOptions } from '../data/languageOptions';
import SelectBox from '../components/SelectBox';
import PriceCard from '../components/PriceCard';

interface PricingProps {}

const StyledPricingPageContainer = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Pricing: FC<PricingProps> = () => {
  const theme = useTheme();
  const [selectedLanguage, setSelectedLanguage] = React.useState(LanguageOptions[0].value);

  return (
    <StyledPricingPageContainer>
      <SelectBox options={LanguageOptions} selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} />
      <SelectedInformationWrapper>
        <StyledHero>Streamline your teamwork. Start free.</StyledHero>
        <StyledDescription>Choose the perfect plan for your business needs</StyledDescription>
      </SelectedInformationWrapper>
      <StyledCardsWrapper>
        <PriceCard
          color={theme.colors.CARDS.GRAY}
          title="Free"
          description="For small teams or office"
          price={0}
          featuresTitle="What you get:"
          features={[
            'Task Management',
            'Project Planning',
            'Team Collaboration',
            'Notifications and Reminders',
            'What you get',
          ]}
        />
        <PriceCard
          color={theme.colors.CARDS.ORANGE}
          title="Starter"
          description="Best for personal use"
          price={8}
          featuresTitle="All free features, plus:"
          features={[
            'Task Management',
            'Project Planning',
            'Team Collaboration',
            'Notifications and Reminders',
            'What you get',
          ]}
        />
        <PriceCard
          color={theme.colors.CARDS.GREEN}
          title="Business"
          description="Best for business use"
          price={16}
          featuresTitle="All Starter features, plus:"
          features={[
            'Task Management',
            'Project Planning',
            'Team Collaboration',
            'Notifications and Reminders',
            'What you get',
          ]}
          popular
        />
        <PriceCard
          color={theme.colors.CARDS.PURPLE}
          title="Enterprise"
          description="Best for enterprise use"
          price="custom"
          featuresTitle="All Business features, plus:"
          features={[
            'Task Management',
            'Project Planning',
            'Team Collaboration',
            'Notifications and Reminders',
            'What you get',
          ]}
        />
      </StyledCardsWrapper>
    </StyledPricingPageContainer>
  );
};
export default Pricing;
