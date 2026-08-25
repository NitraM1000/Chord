interface Props {
  /** Index de l'étape courante, base 0. */
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: Props) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current + 1}
      aria-label={`Étape ${current + 1} sur ${total}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`progress__seg${i <= current ? ' progress__seg--done' : ''}`} />
      ))}
    </div>
  );
}
