import React from 'react';
import Select from 'react-select';

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  label: string;
  value: string | number;
  options: Option[];
  onChange: (value: Option | null) => void;
  disabled?: boolean; 
}

const SelectInput: React.FC<Props> = ({ label, value, options, onChange, disabled }) => {
  const selectedOption = options.find((opt) => opt.value === value) || null;

  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <Select
        value={selectedOption}
        onChange={onChange}
        options={options}
        isClearable
        isDisabled={disabled}
      />
    </div>
  );
};

export default SelectInput;
