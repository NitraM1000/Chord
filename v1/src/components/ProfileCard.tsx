import { OFFERING_OPTIONS, SEEKING_OPTIONS, FRESHNESS_OPTIONS } from '../data/options';
import type { Profile } from '../types';

function labelsFor(ids: string[], source: { id: string; label: string }[]): string[] {
  return ids
    .map((id) => source.find((o) => o.id === id)?.label)
    .filter((l): l is string => Boolean(l));
}

interface Props {
  profile: Profile;
}

/**
 * La carte telle qu'un inconnu la verrait.
 *
 * Ordre volontaire : le signal du moment passe AVANT le métier. C'est le pari
 * de Chord — ce qui déclenche une conversation, c'est ce sur quoi la personne
 * est en ce moment, pas son intitulé de poste.
 */
export function ProfileCard({ profile }: Props) {
  const seeking = labelsFor(profile.seeking, SEEKING_OPTIONS);
  const offering = labelsFor(profile.offering, OFFERING_OPTIONS);
  const freshness = FRESHNESS_OPTIONS.find((f) => f.id === profile.focusFreshness)?.label ?? '';
  const initial = profile.firstName.trim().charAt(0).toUpperCase() || '?';

  return (
    <div className="card">
      <div className="card__head">
        <div className="avatar" aria-hidden="true">
          {initial}
        </div>
        <div>
          <div className="card__name">{profile.firstName || 'Sans prénom'}</div>
          <div className="card__role">
            {profile.role || 'Rôle non renseigné'}
            {profile.city ? ` · ${profile.city}` : ''}
          </div>
        </div>
      </div>

      <div className="card__block">
        <div className="card__label">En ce moment</div>
        <p className="card__focus">{profile.currentFocus || 'Rien de renseigné.'}</p>
        {freshness && (
          <span className="badge">
            <span className="badge__dot" aria-hidden="true" />
            {freshness}
          </span>
        )}
      </div>

      {seeking.length > 0 && (
        <div className="card__block">
          <div className="card__label">Cherche</div>
          <div className="chips">
            {seeking.map((l) => (
              <span key={l} className="tag tag--seek">
                {l}
              </span>
            ))}
          </div>
          {profile.seekingDetail && <p className="hint">{profile.seekingDetail}</p>}
        </div>
      )}

      {offering.length > 0 && (
        <div className="card__block">
          <div className="card__label">Peut aider sur</div>
          <div className="chips">
            {offering.map((l) => (
              <span key={l} className="tag tag--offer">
                {l}
              </span>
            ))}
          </div>
          {profile.offeringDetail && <p className="hint">{profile.offeringDetail}</p>}
        </div>
      )}
    </div>
  );
}
