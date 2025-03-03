import Beads from "./Bead";
import "./styles.css";

function beadsCol(num: number): boolean[] {
  switch (num) {
    case 1:
      return [false, false, true, true, true];

    case 2:
      return [false, false, false, true, true];

    case 3:
      return [false, false, false, false, true];

    case 4:
      return [false, false, false, false, false];

    case 5:
      return [true, true, true, true, true];

    case 6:
      return [true, false, true, true, true];

    case 7:
      return [true, false, false, true, true];

    case 8:
      return [true, false, false, false, true];

    case 9:
      return [true, false, false, false, false];

    default:
      return [false, true, true, true, true];
  }
}

export default function Soroban({
  data,
  columns = 1,
}: {
  data: number;
  columns?: number;
}) {
  const value = [false, true, true, true, true];
  const beads = Array(columns)
    .fill(null)
    .map(() => [...value]);

  data
    .toString()
    .split("")
    .reverse()
    .forEach((num, i) => {
      beads[i] = beadsCol(parseInt(num));
    });

  return (
    <div className="soroban" data-testid="soroban">
      <div className="soroban__beam">
        <div className="soroban__beam-line"></div>
      </div>

      <div className="soroban__columns" data-testid="soroban-columns">
        {Array.from({ length: columns })
          .map((_, i) => (
            <div
              className="soroban__column"
              key={i}
              data-testid="soroban-column"
            >
              <div className="soroban__column-line"></div>
              <div className="soroban__beads-wrapper">
                <Beads move={beads[i][0]} />
              </div>
              <div className="soroban__beads">
                <Beads move={beads[i][1]} black={i % 3 === 0} />
                <Beads move={beads[i][2]} />
                <Beads move={beads[i][3]} />
                <Beads move={beads[i][4]} />
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}

// i-> 0, 1, 3, 4, 5, 6
//
