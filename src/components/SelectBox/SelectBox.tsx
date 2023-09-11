import type { FC } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../stores';
import { setLanguage } from '../../stores/language';
import { OutsideClick } from '../../utils/utils';
import SvgChevron from '../Icons/Chevron';
import {
  StyledIconWrapper,
  StyledOptionImage,
  StyledSelectboxDefaultOption,
  StyledSelectboxOption,
  StyledSelectboxOptionsWrapper,
  StyledSelectboxWrapper,
} from './SelectBox.styles';

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

  //? Redux
  const dispatch = useDispatch();
  const currentLanguageValue = useSelector((state: RootState) => state.language.currentLanguage);

  //? When the user selects a language, it will dispatch the action to change the language
  const handleSelect = (selectedValue: string) => {
    dispatch(setLanguage(selectedValue));
    setIsSelectboxOpen(false);
  };

  //? When the user clicks outside the selectbox, it will close
  React.useEffect(() => {
    OutsideClick(selectboxRef, () => setIsSelectboxOpen(false));
  }, [selectboxRef]);

  //? When the language changes, the selectbox will update
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
