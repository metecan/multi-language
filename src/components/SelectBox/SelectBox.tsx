import type { FC } from 'react';
import React from 'react';
import {
  StyledOptionImage,
  StyledSelectboxDefaultOption,
  StyledSelectboxOption,
  StyledSelectboxOptionsWrapper,
  StyledSelectboxWrapper,
  StyledSvgChevron,
} from './SelectBox.styles';

type OptionType = {
  label: string;
  value: string;
  icon?: string;
};

interface SelectBoxProps {
  options: OptionType[];
  selectedOption: OptionType['value'];
  setSelectedOption: (value: OptionType['value']) => void;
}

const SelectBox: FC<SelectBoxProps> = ({ options, selectedOption, setSelectedOption }) => {
  const selectboxRef = React.useRef<HTMLDivElement>(null);

  const [isSelectboxOpen, setIsSelectboxOpen] = React.useState(false);
  const selectedOptionObject = options.find(option => option.value === selectedOption) || options[0];

  const handleSelect = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    setIsSelectboxOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectboxRef.current && !selectboxRef.current.contains(event.target as Node)) {
        setIsSelectboxOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectboxRef]);

  return (
    <StyledSelectboxWrapper ref={selectboxRef} isOpen={isSelectboxOpen}>
      <StyledSelectboxDefaultOption onClick={() => setIsSelectboxOpen(!isSelectboxOpen)}>
        {selectedOptionObject.icon && (
          <StyledOptionImage src={selectedOptionObject.icon} alt={selectedOptionObject.label} />
        )}
        <span>{selectedOptionObject.label}</span>
        <StyledSvgChevron isOpen={isSelectboxOpen} />
      </StyledSelectboxDefaultOption>
      <StyledSelectboxOptionsWrapper isOpen={isSelectboxOpen}>
        {options.map(option => (
          <StyledSelectboxOption
            key={option.value}
            onClick={() => handleSelect(option.value)}
            selected={option.value === selectedOption}
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
