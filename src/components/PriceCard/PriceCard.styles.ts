import styled from 'styled-components';

export const StyledPriceCard = styled.div<{ color: string }>`
  width: 300px;
  height: 496px;
  background: ${({ theme }) => theme.colors.WHITE};
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  padding: 32px 24px 16px 32px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER};
  border-top: 4px solid ${({ color }) => color};
  position: relative;

  @media (max-width: 1359px) {
    width: 32%;
  }

  @media (max-width: 1300px) {
    width: 49%;
  }

  @media (max-width: 975px) {
    width: 100%;
    height: 100%;
    margin-bottom: 16px;
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.2;
`;

export const StyledCardDescription = styled.p`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const StyledPrice = styled.p`
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const StyledAmount = styled.span`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.2;
  margin-right: 8px;
`;

export const StyledFeatureListTitle = styled.h4`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.2;
  margin-bottom: 16px;
`;

export const StyledUList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  gap: 8px;
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  height: 42px;
`;

export const StyledBadge = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: ${({ theme }) => theme.colors.GREEN};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  padding: 6px 12px;
  border-radius: 50px;
`;
