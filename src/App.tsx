import React from "react";
import GlobalStyle from "./styles/global";
import Rotas from "./routes";
import { AuthProvider } from "./hooks/AuthContext";
import ToastContainer from "./components/ToastContainer";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Rotas />
    </AuthProvider>
    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
