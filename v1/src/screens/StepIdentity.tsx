import { TextField } from '../components/TextField';
import type { Profile } from '../types';

interface Props {
  profile: Profile;
  update: (patch: Partial<Profile>) => void;
}

export function StepIdentity({ profile, update }: Props) {
  return (
    <>
      <div className="stack">
        <span className="eyebrow">Étape 1 sur 4</span>
        <h2>Qui vous croise&nbsp;?</h2>
        <p className="lede">
          Prénom seul. Le nom complet n'apporte rien tant que la rencontre n'a pas eu lieu.
        </p>
      </div>

      <TextField
        label="Prénom"
        value={profile.firstName}
        onChange={(firstName) => update({ firstName })}
        placeholder="Antoine"
        autoFocus
      />

      <TextField
        label="Ce que vous faites"
        hint="En une ligne, comme vous le diriez à voix haute. Pas un intitulé de poste."
        value={profile.role}
        onChange={(role) => update({ role })}
        placeholder="Je conçois des marques pour des jeunes boîtes"
        maxLength={70}
      />

      <TextField
        label="Ville"
        value={profile.city}
        onChange={(city) => update({ city })}
        placeholder="Paris"
      />
    </>
  );
}

export function isIdentityValid(p: Profile): boolean {
  return p.firstName.trim().length > 0 && p.role.trim().length > 0 && p.role.length <= 70;
}
