// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { setupServer } from "msw/node"; // Importa setupServer da msw/node
import { handlers } from "./src/mocks/handlers";

// Crea un server msw
const server = setupServer(...handlers);

export default defineConfig({
  plugins: [react()],
  server: {
    // ...

    // Avvia il server msw durante lo sviluppo
    before: () => {
      server.listen();
    },
  },
});
