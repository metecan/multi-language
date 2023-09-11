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
import { FormattedMessage } from 'react-intl';

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <StyledMenu>
        <StyledLogo>Dataguess</StyledLogo>
        <StyledUList>
          <StyledListItem>
            <FormattedMessage id="app.caseNumber" />: 9
          </StyledListItem>
          <StyledListItem>
            <FormattedMessage id="app.caseTitle" />
          </StyledListItem>
        </StyledUList>
      </StyledMenu>
      <StyledButtonWrapper>
        <LinkButton href="https://github.com/metecan/dataguess-9">
          <FormattedMessage id="app.viewSourceCode" />
        </LinkButton>
      </StyledButtonWrapper>
    </StyledNavbar>
  );
};
export default Navbar;
