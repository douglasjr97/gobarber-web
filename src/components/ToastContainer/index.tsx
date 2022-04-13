import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import { Container, Toast } from "./styles";

const ToastContainer: React.FC = () => {
  return (
    <>
      <Container>
        <Toast type="success" hasDescription={true}>
          <FiAlertCircle size={20} />
          <div>
            <strong>Aconteceu um erro</strong>
            <p>Não foi possivel fazer Login na aplicação</p>

            <button type="button">
              <FiXCircle size={18} />
            </button>
          </div>
        </Toast>
        <Toast type="error" hasDescription={true}>
          <FiAlertCircle size={20} />
          <div>
            <strong>Aconteceu um erro</strong>
            <p>Não foi possivel fazer Login na aplicação</p>

            <button type="button">
              <FiXCircle size={18} />
            </button>
          </div>
        </Toast>
        <Toast type="info" hasDescription={true}>
          <FiAlertCircle size={20} />
          <div>
            <strong>Aconteceu um erro</strong>
            <p>Não foi possivel fazer Login na aplicação</p>

            <button type="button">
              <FiXCircle size={18} />
            </button>
          </div>
        </Toast>
      </Container>
    </>
  );
};

export default ToastContainer;
