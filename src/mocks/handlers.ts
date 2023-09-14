import { rest } from "msw";

// Definisci i gestori delle richieste API simulando la risposta della tua API
export const handlers = [
  rest.post("/api/solve", (req, res, ctx) => {
    // Simula la risposta della tua API
    return res(
      ctx.json({
        data: [
          {
            puzzle:
              "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254",
            solution:
              "971536842286974513354812679563421798497658321128793465732145986645289137819367254",
            status: "OK",
            message: null,
          },
        ],
      })
    );
  }),
];
