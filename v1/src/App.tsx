import { useEffect, useState } from 'react';
import { Wordmark } from './components/Wordmark';
import { ProgressBar } from './components/ProgressBar';
import { Welcome } from './screens/Welcome';
import { StepIdentity, isIdentityValid } from './screens/StepIdentity';
import { StepCurrent, isCurrentValid } from './screens/StepCurrent';
import { StepSeeking, isSeekingValid } from './screens/StepSeeking';
import { StepOffering, isOfferingValid } from './screens/StepOffering';
import { Review } from './screens/Review';
import { ProfileScreen } from './screens/ProfileScreen';
import { clearProfile, loadProfile, saveProfile } from './lib/storage';
import { EMPTY_PROFILE, type Profile } from './types';

type Mode = 'welcome' | 'form' | 'profile';

/** Les quatre étapes du formulaire, dans l'ordre. */
const STEPS = [
  { Component: StepIdentity, isValid: isIdentityValid },
  { Component: StepCurrent, isValid: isCurrentValid },
  { Component: StepSeeking, isValid: isSeekingValid },
  { Component: StepOffering, isValid: isOfferingValid },
] as const;

/** Index de l'écran de vérification, placé juste après la dernière étape. */
const REVIEW_INDEX = STEPS.length;

export default function App() {
  const [saved, setSaved] = useState<Profile | null>(() => loadProfile());
  const [mode, setMode] = useState<Mode>(() => (loadProfile() ? 'profile' : 'welcome'));
  const [draft, setDraft] = useState<Profile>(EMPTY_PROFILE);
  const [index, setIndex] = useState(0);

  // Le brouillon est conservé en mémoire pendant la saisie : on n'écrit dans le
  // stockage local qu'à la validation finale, pour ne pas laisser traîner un
  // profil à moitié rempli.
  const update = (patch: Partial<Profile>) => setDraft((p) => ({ ...p, ...patch }));

  useEffect(() => {
    document.title =
      mode === 'form' ? `Chord · profil (${Math.min(index + 1, REVIEW_INDEX + 1)}/5)` : 'Chord · V1';
  }, [mode, index]);

  const startForm = (base: Profile) => {
    setDraft(base);
    setIndex(0);
    setMode('form');
  };

  if (mode === 'welcome') {
    return (
      <div className="app">
        <Welcome
          hasExistingProfile={saved !== null}
          onStart={() => startForm(EMPTY_PROFILE)}
          onOpenProfile={() => setMode('profile')}
        />
      </div>
    );
  }

  if (mode === 'profile' && saved) {
    return (
      <div className="app">
        <ProfileScreen
          profile={saved}
          onEdit={() => startForm(saved)}
          onReset={() => {
            clearProfile();
            setSaved(null);
            setMode('welcome');
          }}
        />
      </div>
    );
  }

  const onReview = index === REVIEW_INDEX;
  const step = onReview ? null : STEPS[index];
  const canContinue = onReview || (step ? step.isValid(draft) : false);

  const back = () => {
    if (index === 0) setMode(saved ? 'profile' : 'welcome');
    else setIndex(index - 1);
  };

  const next = () => {
    if (!onReview) {
      setIndex(index + 1);
      return;
    }
    saveProfile(draft);
    setSaved(draft);
    setMode('profile');
  };

  return (
    <div className="app">
      <div className="frame">
        <div style={{ padding: '18px 22px 0' }}>
          <Wordmark />
        </div>
        <ProgressBar current={Math.min(index, STEPS.length - 1)} total={STEPS.length} />
        <div className="frame__body">
          {onReview ? (
            <Review profile={draft} />
          ) : (
            step && <step.Component profile={draft} update={update} />
          )}
        </div>
        <div className="frame__footer">
          <button type="button" className="btn btn--ghost" onClick={back}>
            Retour
          </button>
          <button type="button" className="btn btn--primary" disabled={!canContinue} onClick={next}>
            {onReview ? 'Enregistrer' : 'Continuer'}
          </button>
        </div>
      </div>
    </div>
  );
}
