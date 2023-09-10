import styled from 'styled-components';

export const StyledAnchor = styled.a`
  display: flex;
  text-decoration: none;
  width: 100%;
  min-height: 34px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  }
`;
