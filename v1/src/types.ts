/**
 * Modèle de données du profil Chord V1.
 *
 * Ce modèle est une PROPOSITION, pas une décision. Il découle des stories
 * US-01 (découvrir qui est là) et US-03 (franchir le premier pas) de
 * `product/user-stories.md`, qui sont elles-mêmes hypothétiques.
 *
 * Principe retenu : un profil Chord n'est pas un CV. Il répond à trois
 * questions qu'un inconnu assis à trois tables se poserait :
 *   - qui es-tu,
 *   - sur quoi tu es en ce moment,
 *   - qu'est-ce qu'on pourrait se dire d'utile.
 */

export interface Profile {
  /** Prénom seul : le nom complet n'apporte rien avant la rencontre. */
  firstName: string;
  /** Une ligne, pas un intitulé de poste : « je conçois des marques » plutôt que « Brand Designer Senior ». */
  role: string;
  city: string;
  /**
   * Le signal du moment. C'est le champ qui distingue Chord d'un annuaire :
   * il est censé changer souvent, et c'est lui qui rend une proximité pertinente
   * aujourd'hui et pas la semaine prochaine.
   */
  currentFocus: string;
  /** Depuis quand ce signal est vrai — sert à marquer un profil comme périmé. */
  focusFreshness: Freshness;
  seeking: string[];
  seekingDetail: string;
  offering: string[];
  offeringDetail: string;
}

export type Freshness = 'today' | 'this-week' | 'this-month' | 'longer';

export const EMPTY_PROFILE: Profile = {
  firstName: '',
  role: '',
  city: '',
  currentFocus: '',
  focusFreshness: 'this-week',
  seeking: [],
  seekingDetail: '',
  offering: [],
  offeringDetail: '',
};
