import type { Option } from '../data/options';

interface Props {
  options: Option[];
  selected: string[];
  onToggle: (id: string) => void;
  /** Au-delà de cette limite, les options non sélectionnées sont désactivées. */
  max?: number;
}

/**
 * Sélection multiple bornée. La borne est délibérée : un profil qui déclare
 * chercher sept choses ne déclare rien. TODO: vérifier que 3 est le bon
 * plafond — c'est une intuition, pas un résultat de test.
 */
export function ChipSelect({ options, selected, onToggle, max }: Props) {
  const full = max !== undefined && selected.length >= max;

  return (
    <div className="chips">
      {options.map((opt) => {
        const on = selected.includes(opt.id);
        const disabled = full && !on;
        return (
          <button
            key={opt.id}
            type="button"
            className={`chip${on ? ' chip--on' : ''}`}
            aria-pressed={on}
            disabled={disabled}
            style={disabled ? { opacity: 0.35, cursor: 'not-allowed' } : undefined}
            onClick={() => onToggle(opt.id)}
          >
            {opt.label}
            {opt.hint && <span className="chip__hint">{opt.hint}</span>}
          </button>
        );
      })}
    </div>
  );
}
