/** Marque textuelle. Le carré de gauche est un placeholder, pas un logo. */
export function Wordmark() {
  return (
    <div className="wordmark">
      <span className="wordmark__mark" aria-hidden="true" />
      <span>Chord</span>
    </div>
  );
}
