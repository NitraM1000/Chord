import { ProfileCard } from '../components/ProfileCard';
import type { Profile } from '../types';

interface Props {
  profile: Profile;
}

export function Review({ profile }: Props) {
  return (
    <>
      <div className="stack">
        <span className="eyebrow">Vérification</span>
        <h2>Voilà ce que les autres verront.</h2>
        <p className="lede">
          Rien d'autre. Pas de parcours, pas d'employeur, pas de photo — la personne est en face de
          vous, elle n'a pas besoin de votre photo.
        </p>
      </div>

      <ProfileCard profile={profile} />

      <div className="notice">
        <strong>Hors périmètre de cette V1&nbsp;:</strong> les réglages de visibilité (US-02), le
        radar des personnes autour (US-01) et la mise en relation (US-03). Voir{' '}
        <code>v1/README.md</code>.
      </div>
    </>
  );
}
