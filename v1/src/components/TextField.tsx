interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  multiline?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  hint,
  multiline,
  maxLength,
  autoFocus,
}: Props) {
  const over = maxLength !== undefined && value.length > maxLength;

  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {hint && <span className="hint">{hint}</span>}
      {multiline ? (
        <textarea
          className="field__textarea"
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="field__input"
          type="text"
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {maxLength !== undefined && (
        <span className={`field__count${over ? ' field__count--over' : ''}`}>
          {value.length} / {maxLength}
        </span>
      )}
    </label>
  );
}
