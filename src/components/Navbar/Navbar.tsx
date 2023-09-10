import type { FC } from 'react';
import styled from 'styled-components';
import LinkButton from '../LinkButton/LinkButton';

const StyledNavbar = styled.nav`
  height: 64px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.TEXT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER};
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const StyledLogo = styled.h1`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.TEXT};
`;

const StyledUList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledListItem = styled.li`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.TEXT};
`;

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <StyledMenu>
        <StyledLogo>Dataguess</StyledLogo>
        <StyledUList>
          <StyledListItem>Case Number: 9</StyledListItem>
          <StyledListItem>Multi-language Support with Redux Intl</StyledListItem>
        </StyledUList>
      </StyledMenu>
      <LinkButton href="https://github.com/metecan/dataguess-9" label="View Source Code" />
    </StyledNavbar>
  );
};
export default Navbar;
