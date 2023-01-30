import React from "react";
import { useState } from "react";
import { deleteDocByColletion } from "../dataBase/firestoreFunctions";

export default function Card({ messageContent, messageTitle, id, setCardId }) {

  const [isCopied, setCopied] = useState(false)

  function copyTextToClipBoard(text) {
    navigator.clipboard.writeText(text);
    toggleBtnClass();
    setTimeout(() => toggleBtnClass(), 2000);
  }

  function toggleBtnClass() {
    setCopied(isCopied => isCopied = !isCopied);
  }

  function deleteCard(id) {
    if (window.confirm("Deseja excluir este card?")) {
      deleteDocByColletion(id, "messages");
    }
  }

  function editCard(id) {
    setCardId(id);
  }

  return (
    <div className="card my-card bg-dark-subtle" style={{
      height: "40vh"
    }}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title d-block text-muted text-capitalize fst-italic">{messageTitle}#</h5>
        <div className="d-flex">
          <div className="dropdown">
            <button className="btn dropdown-toggle d-flex" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            </button>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" role="button" onClick={() => deleteCard(id)}>Excluir</a></li>
              <li><a className="dropdown-item"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#addMessageModal"
                onClick={() => editCard(id)}
              >
                Editar
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body d-flex flex-column justify-content-between overflow-auto">
        <div>
          <p className="card-text" style={{ whiteSpace: "pre-line" }}>
            {messageContent}
          </p>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          onClick={() => copyTextToClipBoard(messageContent)}
          className={`btn btn-${isCopied ? "success" : "primary"} btn-copy align-self-start`}
        >
          {isCopied ? "copiado" : "copiar"}
        </button>
      </div>
    </div >
  );
}
