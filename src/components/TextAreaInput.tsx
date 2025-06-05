// src/components/TextareaInput.tsx
import React from 'react';

interface TextareaInputProps {
  label: string;
  value: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  value,
  readOnly = false,
  onChange,
  className = '',
  disabled = false,
}) => {
  const computedClass = `form-control mb-2 ${readOnly || disabled ? 'bg-light text-muted' : ''} ${className}`;

  return (
    <div className="mb-2">
      <label className="form-label fw-semibold">{label}</label>
      <textarea
        className={computedClass}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
        style={{ width: '100%' }}
        rows={4}
      />
    </div>
  );
};

export default TextareaInput;
