import React from "react";
import AppRouter from "./routes/AppRouter";
import { PortfolioProvider } from "./context/PortfolioContext";

export default function App() {
  return (
    <PortfolioProvider>
      <AppRouter />
    </PortfolioProvider>
  );
}
