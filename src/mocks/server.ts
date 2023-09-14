// src/mocks/server.js
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.post("http://localhost:3001/api/sudoku", (req, res, ctx) => {
    // Simula la risposta dell'API con una soluzione mock
    return res(
      ctx.json({
        data: [
          {
            puzzle: req.json(),
            solution:
              "123456789456789123789123456234567891567891234891234567345678912912345678678912345",
            status: "OK",
            message: null,
          },
        ],
      })
    );
  })
);

export { server };
