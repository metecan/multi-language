import type { FC } from 'react';
import styled from 'styled-components';

interface LinkButtonProps {
  label: string;
  href: string;
}

const StyledAnchor = styled.a`
  display: inline-block;
  text-decoration: none;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  }
`;

const LinkButton: FC<LinkButtonProps> = ({ label, href }) => {
  return (
    <StyledAnchor href={href} target="_blank">
      {label}
    </StyledAnchor>
  );
};
export default LinkButton;
