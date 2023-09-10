import type { FC } from 'react';

import { StyledAnchor } from './LinkButton.styles';

interface LinkButtonProps {
  label: string;
  href: string;
}

const LinkButton: FC<LinkButtonProps> = ({ label, href }) => {
  return (
    <StyledAnchor href={href} target="_blank">
      {label}
    </StyledAnchor>
  );
};
export default LinkButton;
