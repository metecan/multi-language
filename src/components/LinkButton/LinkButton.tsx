import type { FC } from 'react';

import { StyledAnchor } from './LinkButton.styles';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

const LinkButton: FC<LinkButtonProps> = ({ children, href }) => {
  return (
    <StyledAnchor href={href} target="_blank">
      {children}
    </StyledAnchor>
  );
};
export default LinkButton;
