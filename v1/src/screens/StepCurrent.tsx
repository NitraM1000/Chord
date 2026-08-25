import { useMemo } from 'react';
import { TextField } from '../components/TextField';
import { FOCUS_EXAMPLES, FRESHNESS_OPTIONS } from '../data/options';
import type { Profile } from '../types';

interface Props {
  profile: Profile;
  update: (patch: Partial<Profile>) => void;
}

/**
 * L'écran central du parcours. Si un seul champ devait survivre à une coupe,
 * ce serait celui-là : c'est le seul qui distingue un profil Chord d'un profil
 * LinkedIn.
 */
export function StepCurrent({ profile, update }: Props) {
  const placeholder = useMemo(
    () => FOCUS_EXAMPLES[Math.floor(Math.random() * FOCUS_EXAMPLES.length)],
    [],
  );

  return (
    <>
      <div className="stack">
        <span className="eyebrow">Étape 2 sur 4</span>
        <h2>Sur quoi vous êtes en ce moment&nbsp;?</h2>
        <p className="lede">
          Le champ le plus important. C'est lui qui donne à quelqu'un une raison de vous aborder
          aujourd'hui plutôt que jamais.
        </p>
      </div>

      <TextField
        label="En ce moment"
        value={profile.currentFocus}
        onChange={(currentFocus) => update({ currentFocus })}
        placeholder={placeholder}
        multiline
        maxLength={160}
        autoFocus
      />

      <div className="field">
        <span className="field__label">Depuis quand&nbsp;?</span>
        <span className="hint">
          Un profil qui n'a pas bougé depuis un mois sera marqué comme périmé plutôt que masqué.
        </span>
        <div className="chips">
          {FRESHNESS_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`chip${profile.focusFreshness === opt.id ? ' chip--on' : ''}`}
              aria-pressed={profile.focusFreshness === opt.id}
              onClick={() => update({ focusFreshness: opt.id })}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export function isCurrentValid(p: Profile): boolean {
  const t = p.currentFocus.trim();
  return t.length >= 15 && t.length <= 160;
}
