import styled from 'styled-components';
import SvgChevron from '../Icons/Chevron';

export const StyledSelectboxWrapper = styled.div<{ isOpen?: boolean }>`
  position: relative;
  width: 160px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER};
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '0px' : '20px')};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '0px' : '20px')};
`;

export const StyledSelectboxDefaultOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.BLACK};

  & > span {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export const StyledSvgChevron = styled(SvgChevron)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`;

export const StyledSelectboxOptionsWrapper = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 100%;
  left: -1px;
  width: 160px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '20px' : '0px')};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '20px' : '0px')};
`;

export const StyledSelectboxOption = styled.div<{ selected?: boolean }>`
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ selected, theme }) => (selected ? theme.colors.WHITE : theme.colors.BLACK)};
  background-color: ${({ selected, theme }) => (selected ? theme.colors.CARDS.GRAY : theme.colors.WHITE)};

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export const StyledOptionImage = styled.img`
  width: 40px;
  height: 24px;
  object-fit: contain;
  border-radius: 10px;
`;
