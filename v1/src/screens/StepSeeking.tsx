import { ChipSelect } from '../components/ChipSelect';
import { TextField } from '../components/TextField';
import { SEEKING_OPTIONS } from '../data/options';
import type { Profile } from '../types';

const MAX = 3;

interface Props {
  profile: Profile;
  update: (patch: Partial<Profile>) => void;
}

export function StepSeeking({ profile, update }: Props) {
  const toggle = (id: string) => {
    const on = profile.seeking.includes(id);
    update({
      seeking: on ? profile.seeking.filter((x) => x !== id) : [...profile.seeking, id],
    });
  };

  return (
    <>
      <div className="stack">
        <span className="eyebrow">Étape 3 sur 4</span>
        <h2>Qu'est-ce que vous cherchez&nbsp;?</h2>
        <p className="lede">Trois réponses au maximum. Chercher sept choses, c'est n'en chercher aucune.</p>
      </div>

      <ChipSelect
        options={SEEKING_OPTIONS}
        selected={profile.seeking}
        onToggle={toggle}
        max={MAX}
      />

      <TextField
        label="Une précision (facultatif)"
        value={profile.seekingDetail}
        onChange={(seekingDetail) => update({ seekingDetail })}
        placeholder="Plutôt quelqu'un de technique, dispo quelques heures par semaine."
        maxLength={120}
      />
    </>
  );
}

export function isSeekingValid(p: Profile): boolean {
  return p.seeking.length > 0 && p.seeking.length <= MAX;
}
