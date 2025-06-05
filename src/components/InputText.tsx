import React from 'react';

interface Props {
  label: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  suffix?: string;
  disabled?:boolean
}

const InputText: React.FC<Props> = ({ label, value, onChange, readOnly, suffix, disabled }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}</label>
    <div className="input-group">
      <input
        type="text"
        className="form-control "
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
      />
      {suffix && <span className="input-group-text">{suffix}</span>}
    </div>
  </div>
);

export default InputText;
