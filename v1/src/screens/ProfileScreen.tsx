import { Wordmark } from '../components/Wordmark';
import { ProfileCard } from '../components/ProfileCard';
import type { Profile } from '../types';

interface Props {
  profile: Profile;
  onEdit: () => void;
  onReset: () => void;
}

export function ProfileScreen({ profile, onEdit, onReset }: Props) {
  return (
    <div className="frame">
      <div className="frame__body">
        <Wordmark />
        <div className="stack">
          <span className="eyebrow">Mon profil</span>
          <h2>Vous êtes visible comme ceci.</h2>
        </div>

        <ProfileCard profile={profile} />

        <div className="notice">
          Ce profil n'est envoyé nulle part. Il vit dans le stockage local de ce navigateur et
          disparaît si vous le videz.
        </div>

        <div className="spacer" />
        <button type="button" className="btn btn--link" onClick={onReset}>
          Effacer ce profil
        </button>
      </div>
      <div className="frame__footer">
        <button type="button" className="btn btn--primary" onClick={onEdit}>
          Modifier
        </button>
      </div>
    </div>
  );
}
