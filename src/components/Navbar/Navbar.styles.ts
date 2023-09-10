import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  height: 64px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.TEXT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER};
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const StyledLogo = styled.h1`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const StyledUList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const StyledListItem = styled.li`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const StyledButtonWrapper = styled.div`
  width: 200px;
`;
