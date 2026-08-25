import { ChipSelect } from '../components/ChipSelect';
import { TextField } from '../components/TextField';
import { OFFERING_OPTIONS } from '../data/options';
import type { Profile } from '../types';

const MAX = 3;

interface Props {
  profile: Profile;
  update: (patch: Partial<Profile>) => void;
}

/**
 * Étape symétrique de la précédente. Elle existe pour une raison précise :
 * une application où tout le monde demande et personne ne donne se vide.
 * TODO: vérifier en entretien si cette question est vécue comme légitime ou
 * comme une corvée — c'est l'étape la plus susceptible d'être abandonnée.
 */
export function StepOffering({ profile, update }: Props) {
  const toggle = (id: string) => {
    const on = profile.offering.includes(id);
    update({
      offering: on ? profile.offering.filter((x) => x !== id) : [...profile.offering, id],
    });
  };

  return (
    <>
      <div className="stack">
        <span className="eyebrow">Étape 4 sur 4</span>
        <h2>Et vous, sur quoi pouvez-vous aider&nbsp;?</h2>
        <p className="lede">
          Sans cette réponse, Chord n'est qu'une file d'attente de gens qui demandent.
        </p>
      </div>

      <ChipSelect
        options={OFFERING_OPTIONS}
        selected={profile.offering}
        onToggle={toggle}
        max={MAX}
      />

      <TextField
        label="Une précision (facultatif)"
        value={profile.offeringDetail}
        onChange={(offeringDetail) => update({ offeringDetail })}
        placeholder="J'ai monté deux boîtes, je peux parler des six premiers mois."
        maxLength={120}
      />
    </>
  );
}

export function isOfferingValid(p: Profile): boolean {
  return p.offering.length > 0 && p.offering.length <= MAX;
}
