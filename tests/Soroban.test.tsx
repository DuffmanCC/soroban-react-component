import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Soroban from "../src/Soroban"; // Ajusta la ruta si es necesario

describe("Soroban component", () => {
  it("should render without crashing", () => {
    render(<Soroban data={1472} columns={7} />);
    expect(screen.getByTestId("soroban")).toBeDefined();
  });

  it("should render the correct number of columns 7", () => {
    render(<Soroban data={1472} columns={7} />);
    expect(screen.getAllByTestId("soroban-column")).toHaveLength(7);
  });

  it("should render the correct number of columns 2", () => {
    render(<Soroban data={1472} columns={2} />);
    expect(screen.getAllByTestId("soroban-column")).toHaveLength(2);
  });

  it("should render the correct number of columns default", () => {
    render(<Soroban data={1472} />);
    expect(screen.getAllByTestId("soroban-column")).toHaveLength(1);
  });

  it("should render black bead on the right column with 7 columns", () => {
    render(<Soroban data={1472} columns={7} />);
    const lastColumn = screen.getAllByTestId("soroban-column").at(-1);
    const beadsInLastColumn = lastColumn
      ? lastColumn?.querySelectorAll('[data-testid="bead"]')
      : [];
    const secondBead = beadsInLastColumn[1];
    const secondHalfTop = secondBead.querySelector(".bead__trapecio--top");
    expect(secondHalfTop?.classList.contains("bead__trapecio--black")).toBe(
      true
    );
  });

  it("should render black bead on the right column with 2 columns", () => {
    render(<Soroban data={1472} columns={2} />);
    const lastColumn = screen.getAllByTestId("soroban-column").at(-1);
    const beadsInLastColumn = lastColumn
      ? lastColumn?.querySelectorAll('[data-testid="bead"]')
      : [];
    const secondBead = beadsInLastColumn[1];
    const secondHalfTop = secondBead.querySelector(".bead__trapecio--top");
    expect(secondHalfTop?.classList.contains("bead__trapecio--black")).toBe(
      true
    );
  });

  it("should render black bead on the right column with 6 columns", () => {
    render(<Soroban data={1472} columns={6} />);
    const lastColumn = screen.getAllByTestId("soroban-column").at(-1);
    const beadsInLastColumn = lastColumn
      ? lastColumn?.querySelectorAll('[data-testid="bead"]')
      : [];
    const secondBead = beadsInLastColumn[1];
    const secondHalfTop = secondBead.querySelector(".bead__trapecio--top");
    expect(secondHalfTop?.classList.contains("bead__trapecio--black")).toBe(
      true
    );
  });

  it("should render a black bead on the third column with 6 columns", () => {
    render(<Soroban data={1472} columns={6} />);
    const lastColumn = screen.getAllByTestId("soroban-column").at(-4);
    const beadsInLastColumn = lastColumn
      ? lastColumn?.querySelectorAll('[data-testid="bead"]')
      : [];
    const secondBead = beadsInLastColumn[1];
    const secondHalfTop = secondBead.querySelector(".bead__trapecio--top");
    expect(secondHalfTop?.classList.contains("bead__trapecio--black")).toBe(
      true
    );
  });

  it("should correctly represent the number 1457 in a 7-column soroban", () => {
    render(<Soroban data={1457} columns={7} />);

    const columns = screen.getAllByTestId("soroban-column");

    const expectedNumber = [
      [false, true, true, true, true],
      [false, true, true, true, true],
      [false, true, true, true, true],
      [false, false, true, true, true],
      [false, false, false, false, false],
      [true, true, true, true, true],
      [true, false, false, true, true],
    ];

    columns.forEach((column, colIndex) => {
      const beads = column.querySelectorAll('[data-testid="bead"]');
      beads.forEach((bead, rowIndex) => {
        const isMoved = bead.classList.contains("bead--move");
        expect(isMoved).toBe(expectedNumber[colIndex][rowIndex]);
      });
    });
  });

  it("should correctly represent the number 1234567890 in a 10-column soroban", () => {
    render(<Soroban data={1234567890} columns={10} />);

    const columns = screen.getAllByTestId("soroban-column");

    const expectedNumber = [
      [false, false, true, true, true], // 1
      [false, false, false, true, true], // 2
      [false, false, false, false, true], // 3
      [false, false, false, false, false], // 4
      [true, true, true, true, true], // 5
      [true, false, true, true, true], // 6
      [true, false, false, true, true], // 7
      [true, false, false, false, true], // 8
      [true, false, false, false, false], // 9
      [false, true, true, true, true], //0
    ];

    columns.forEach((column, colIndex) => {
      const beads = column.querySelectorAll('[data-testid="bead"]');
      beads.forEach((bead, rowIndex) => {
        const isMoved = bead.classList.contains("bead--move");
        expect(isMoved).toBe(expectedNumber[colIndex][rowIndex]);
      });
    });
  });

  it("should correctly represent the number 3 in a 1-column soroban", () => {
    render(<Soroban data={3} columns={1} />);

    const columns = screen.getAllByTestId("soroban-column");

    const expectedNumber = [
      [false, false, false, false, true], // 3
    ];

    columns.forEach((column, colIndex) => {
      const beads = column.querySelectorAll('[data-testid="bead"]');
      beads.forEach((bead, rowIndex) => {
        const isMoved = bead.classList.contains("bead--move");
        expect(isMoved).toBe(expectedNumber[colIndex][rowIndex]);
      });
    });
  });

  it("should correctly represent the number 453 (only the last number) in a 1-column soroban", () => {
    render(<Soroban data={453} columns={1} />);

    const columns = screen.getAllByTestId("soroban-column");

    const expectedNumber = [
      [false, false, false, false, true], // 3
    ];

    columns.forEach((column, colIndex) => {
      const beads = column.querySelectorAll('[data-testid="bead"]');
      beads.forEach((bead, rowIndex) => {
        const isMoved = bead.classList.contains("bead--move");
        expect(isMoved).toBe(expectedNumber[colIndex][rowIndex]);
      });
    });
  });
});
