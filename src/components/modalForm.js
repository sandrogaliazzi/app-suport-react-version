import React from "react";
import Modal from "./modal";
import Form from "./form";

export default function ModalForm({ cardId, setCardId }) {

  return (
    <Modal
      modalTitle="Adicionar Mensagem"
      isCentered={true}
      id="addMessageModal"
      icon="bi bi-plus-circle"
      size="lg"
    >
      <Form cardId={cardId} setCardId={setCardId} />
    </Modal>
  )
}