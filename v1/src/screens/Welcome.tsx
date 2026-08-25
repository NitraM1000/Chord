import { Wordmark } from '../components/Wordmark';

interface Props {
  onStart: () => void;
  hasExistingProfile: boolean;
  onOpenProfile: () => void;
}

export function Welcome({ onStart, hasExistingProfile, onOpenProfile }: Props) {
  return (
    <div className="frame">
      <div className="frame__body">
        <Wordmark />
        <div className="spacer" />
        <div className="stack">
          <h1>Le réseau qui est déjà autour de vous.</h1>
          <p className="lede">
            Chord montre qui, dans le lieu où vous êtes, travaille sur quelque chose qui croise ce
            que vous faites. Pas un annuaire : ce qui se passe maintenant.
          </p>
        </div>
        <div className="spacer" />
        <div className="notice">
          <strong>Prototype.</strong> Aucun compte, aucun serveur, aucune géolocalisation. Le profil
          reste dans ce navigateur. Il sert à tester une seule chose : est-ce que ces quatre
          questions produisent un profil qu'un inconnu aurait envie d'aborder&nbsp;?
        </div>
      </div>
      <div className="frame__footer">
        {hasExistingProfile && (
          <button type="button" className="btn btn--ghost" onClick={onOpenProfile}>
            Mon profil
          </button>
        )}
        <button type="button" className="btn btn--primary" onClick={onStart}>
          {hasExistingProfile ? 'Recommencer' : 'Créer mon profil'}
        </button>
      </div>
    </div>
  );
}
