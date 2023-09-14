// src/App.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { server } from "./mocks/server";
import App from "./App";

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  });
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("isSolvingSudokuCorrectly", async () => {
  render(<App />);

  // Simula l'inserimento di dati nel sudoku
  const inputs = screen.getAllByRole("textbox");
  fireEvent.change(inputs[0], { target: { value: "9" } });

  // Verifica che i dati siano mostrati
  expect(inputs[0].value).toBe("9");

  // Simula il click sul pulsante "Solve"
  const solveButton = screen.getByText("Solve");
  fireEvent.click(solveButton);

  // Attendi che la soluzione venga mostrata
  await waitFor(() => {
    expect(inputs[0].value).toBe("9"); // Verifica che il primo valore sia ancora '9'
    expect(inputs[1].value).toBe("1"); // Verifica che il secondo valore sia '1' (dalla soluzione mock)
    // Puoi continuare a verificare altri valori se necessario
  });
});
