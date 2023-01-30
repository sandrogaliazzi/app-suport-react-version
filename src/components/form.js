import React from "react";
import { useState, useEffect, useRef } from "react";
import { getAllDocumentsByCollection, saveDocByCollection, getDocByCollection } from "../dataBase/firestoreFunctions";

export default function Form({ cardId, setCardId }) {

  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [isInvalidForm, setIsInvalidForm] = useState(true);

  const closeBtnRef = useRef();

  useEffect(() => {
    getAllDocumentsByCollection("category")
      .then(docs => setCategories(docs))
      .catch(console.error)
  }, []);

  useEffect(() => {
    if (cardId) {
      getDocByCollection(cardId, "messages")
        .then(doc => {
          setMessageContent(doc.messageContent);
          setMessageTitle(doc.messageTitle);
          setCategory(`${doc.category.name}-${doc.category.id}`);
        })
        .catch(error => alert(`ocorreu um erro ${error.message}`))
    }
  }, [cardId]);

  useEffect(() => {
    const condition = (messageTitle !== "" && messageContent !== "" && category !== "");

    setIsInvalidForm(!condition);

  }, [messageTitle, messageContent, category]);

  function handleInputChange(event) {
    switch (event.target.name) {
      case "messageTitle": setMessageTitle(event.target.value);
        break;

      case "messageContent": setMessageContent(event.target.value);
        break;

      case "category": setCategory(event.target.value);
        break;

    }
  };

  function resetForm() {
    setMessageContent("");
    setMessageTitle("");
    setCategory("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const [name, id] = category.split("-");

    const message = {
      messageTitle,
      messageContent,
      category: {
        name,
        id: parseInt(id)
      }
    }

    saveDocByCollection(message, "messages", cardId);

    closeBtnRef.current.click();
    setCardId("");
    resetForm();

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="form-group">
              <input
                type="text"
                value={messageTitle}
                onChange={handleInputChange}
                className="form-control"
                id="messageTitle"
                name="messageTitle"
                placeholder="Titulo da mensagem"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="input-group">
              <button type="button" className="btn btn-primary btn-addon1" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                <i className="bi bi-pencil-square"></i>
              </button>
              <select
                className="form-control"
                id="category"
                name="category"
                value={category}
                disabled={!categories.length}
                onChange={handleInputChange}
              >
                {
                  categories.length > 0 ? categories.map(category => {
                    const { name, priority, id } = category;
                    return <option value={`${name}-${priority}`} key={id}>{name}</option>
                  }) : <option value="sem categoria">Sem categorias</option>
                }
              </select>
              <button type="button" className="btn btn-primary btn-addon1" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <label htmlFor="messageContent" className="text-muted pb-2">Mensagem:</label>
            <textarea
              className="form-control mb-3"
              id="messageContent"
              name="messageContent"
              rows="6"
              value={messageContent}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" id="submitBtn" className="btn btn-success" disabled={isInvalidForm}>
            Salvar
          </button>
          <button className="d-none" data-bs-dismiss="modal" data-bs-target="#addMessageModal" ref={closeBtnRef}></button>
        </div>
      </div>
    </form>
  )
}