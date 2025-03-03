export default function Bead({
  move = false,
  black = false,
}: {
  move?: boolean;
  black?: boolean;
}) {
  return (
    <div className={`bead ${move ? "bead--move" : ""}`} data-testid="bead">
      <div
        className={`trapecio bead__trapecio bead__trapecio--top ${
          black ? "bead__trapecio--black" : "bead__trapecio--orange"
        }`}
      ></div>
      <div
        className={`bead__trapecio bead__trapecio--bottom ${
          black ? "bead__trapecio--black-dark" : "bead__trapecio--orange-dark"
        }`}
      ></div>
    </div>
  );
}
