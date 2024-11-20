import React from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { BaseRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main>
          <BaseRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
