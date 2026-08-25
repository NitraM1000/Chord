import type { Freshness } from '../types';

/**
 * Listes de choix proposées pendant l'onboarding.
 *
 * TODO: ces listes sont inventées. Elles ne viennent d'aucun entretien
 * (`research/interviews/synthesis.md` : zéro entretien exploitable). Elles
 * devront être remplacées par les formulations réellement employées par les
 * personnes interrogées, pas par les nôtres.
 */

export interface Option {
  id: string;
  label: string;
  /** Précision affichée en petit sous le libellé, quand le libellé seul est ambigu. */
  hint?: string;
}

export const SEEKING_OPTIONS: Option[] = [
  { id: 'cofounder', label: 'Un associé', hint: 'quelqu’un qui prend le risque avec moi' },
  { id: 'clients', label: 'Des clients' },
  { id: 'skill', label: 'Une compétence qui me manque', hint: 'dev, design, juridique, commercial…' },
  { id: 'funding', label: 'Du financement' },
  { id: 'peers', label: 'Des pairs', hint: 'des gens au même stade que moi' },
  { id: 'mentor', label: 'Un avis plus expérimenté' },
  { id: 'feedback', label: 'Un retour sur ce que je fais' },
  { id: 'nothing', label: 'Rien de précis', hint: 'je suis ouvert, sans objectif' },
];

export const OFFERING_OPTIONS: Option[] = [
  { id: 'expertise', label: 'Mon expertise métier' },
  { id: 'intros', label: 'Des mises en relation' },
  { id: 'feedback', label: 'Un regard critique' },
  { id: 'hands', label: 'Un coup de main concret' },
  { id: 'experience', label: 'Un retour d’expérience', hint: 'je suis passé par là' },
  { id: 'client', label: 'Je peux être client' },
  { id: 'nothing', label: 'Je ne sais pas encore' },
];

export const FRESHNESS_OPTIONS: { id: Freshness; label: string }[] = [
  { id: 'today', label: "Aujourd'hui" },
  { id: 'this-week', label: 'Cette semaine' },
  { id: 'this-month', label: 'Ce mois-ci' },
  { id: 'longer', label: 'Depuis plus longtemps' },
];

/**
 * Exemples affichés en placeholder. Volontairement peu polis : l'objectif est
 * de montrer qu'une réponse courte et concrète suffit, et de décourager le
 * remplissage façon LinkedIn.
 */
export const FOCUS_EXAMPLES = [
  'Je cherche un dev pour finir un MVP avant octobre.',
  'Je lance une marque de café de spécialité, je bloque sur la distribution.',
  'Je passe de salariée à freelance et je cherche mes trois premiers clients.',
];
