import type { FC } from 'react';
import LinkButton from '../LinkButton';

import {
  StyledButtonWrapper,
  StyledListItem,
  StyledLogo,
  StyledMenu,
  StyledNavbar,
  StyledUList,
} from './Navbar.styles';

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
      <StyledButtonWrapper>
        <LinkButton href="https://github.com/metecan/dataguess-9" label="View Source Code" />
      </StyledButtonWrapper>
    </StyledNavbar>
  );
};
export default Navbar;
