import { EMPTY_PROFILE, type Profile } from '../types';

const KEY = 'chord.v1.profile';

/**
 * Persistance locale du profil.
 *
 * Aucun backend dans cette V1 : le profil ne quitte jamais le navigateur.
 * C'est volontaire — le prototype sert à tester un parcours, pas à stocker
 * des données de personnes réelles (voir la règle 1 de `CONTRIBUTING.md`).
 */

export function loadProfile(): Profile | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Profile>;
    return { ...EMPTY_PROFILE, ...parsed };
  } catch {
    return null;
  }
}

export function saveProfile(profile: Profile): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(profile));
  } catch {
    // Navigation privée, stockage désactivé : le prototype reste utilisable,
    // le profil est simplement perdu au rechargement.
  }
}

export function clearProfile(): void {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* idem */
  }
}
