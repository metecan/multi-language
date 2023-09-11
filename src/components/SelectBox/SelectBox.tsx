import type { FC } from 'react';
import React from 'react';
import {
  StyledIconWrapper,
  StyledOptionImage,
  StyledSelectboxDefaultOption,
  StyledSelectboxOption,
  StyledSelectboxOptionsWrapper,
  StyledSelectboxWrapper,
} from './SelectBox.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../stores/language';
import SvgChevron from '../Icons/Chevron';
import { OutsideClick } from '../../utils/utils';
import { RootState } from '../../stores';

type OptionType = {
  label: string;
  value: string;
  icon?: string;
};

interface SelectBoxProps {
  options: OptionType[];
}

const SelectBox: FC<SelectBoxProps> = ({ options }) => {
  const [isSelectboxOpen, setIsSelectboxOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState<OptionType>();
  const selectboxRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const currentLanguageValue = useSelector((state: RootState) => state.language.currentLanguage);

  const handleSelect = (selectedValue: string) => {
    dispatch(setLanguage(selectedValue));
    setIsSelectboxOpen(false);
  };

  React.useEffect(() => {
    OutsideClick(selectboxRef, () => setIsSelectboxOpen(false));
  }, [selectboxRef]);

  React.useEffect(() => {
    const selectedLanguage = options.find(option => option.value === currentLanguageValue);
    setSelectedLanguage(selectedLanguage);
  }, [currentLanguageValue, options]);

  return (
    <StyledSelectboxWrapper ref={selectboxRef} $isOpen={isSelectboxOpen}>
      <StyledSelectboxDefaultOption onClick={() => setIsSelectboxOpen(!isSelectboxOpen)}>
        {selectedLanguage && selectedLanguage.icon && (
          <StyledOptionImage src={selectedLanguage.icon} alt={selectedLanguage.label} />
        )}
        <span>{selectedLanguage && selectedLanguage.label}</span>
        <StyledIconWrapper $isOpen={isSelectboxOpen}>
          <SvgChevron />
        </StyledIconWrapper>
      </StyledSelectboxDefaultOption>
      <StyledSelectboxOptionsWrapper $isOpen={isSelectboxOpen}>
        {options.map(option => (
          <StyledSelectboxOption
            key={option.value}
            onClick={() => handleSelect(option.value)}
            selected={option.value === currentLanguageValue}
          >
            {option.icon && <StyledOptionImage src={option.icon} alt={option.label} />}
            <span>{option.label}</span>
          </StyledSelectboxOption>
        ))}
      </StyledSelectboxOptionsWrapper>
    </StyledSelectboxWrapper>
  );
};
export default SelectBox;
