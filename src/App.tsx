import React from "react";
import GlobalStyle from "./styles/global";
import Rotas from "./routes";
import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Rotas />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
