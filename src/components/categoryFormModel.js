import React from "react";
import Modal from "./modal";

export default function CategoryFormModal() {
  return (
    <Modal
      modalTitle="Adicionar categoria"
      id="addCategoryModal"
      isCentered={true}
      size="md"
      icon="bi bi-plus-circle"
    >
      <form className="row row-cols-lg-1 g-3 align-items-center justify-content-center">
        <div className="col-12">
          <label className="visually-hidden" htmlFor="categoryName">Nome</label>
          <input type="text" className="form-control" id="categoryName" placeholder="Nome" />
        </div>

        <div className="col-12">
          <label className="visually-hidden" htmlFor="priority">Prioridade</label>
          <input type="number" className="form-control" id="priority" placeholder="prioridade" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </Modal>
  )
}