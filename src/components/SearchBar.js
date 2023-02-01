import React, { useEffect, useState } from 'react'
import { getAllDocumentsByCollection } from "../dataBase/firestoreFunctions";

export default function SearchBar() {
  const [messages, setMessages] = useState([]);
  const [filterMessages, setFilterMessages] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    getAllDocumentsByCollection("messages")
      .then(docs => setMessages(docs))
      .catch(error => alert(`ocorreu um erro ${error.message}`));
  }, []);

  function searchMessages(query) {
    const results = messages.filter(message => {
      return message.messageTitle.toLowerCase().indexOf(query) > - 1 && query;
    });

    setShowSearchResults(results.length > 0);

    return results;
  }

  function renderSearchResults(result) {
    return (
      <li className="list-group-item dropdown-item d-flex justify-content-between align-items-start" key={result.id}>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{result.messageTitle}</div>
          <p style={{ whiteSpace: "pre-line", userSelect: "all" }}>{result.messageContent}</p>
        </div>
      </li>
    );
  }

  return (
    <div className="d-flex position-relative w-50 mb-sm-3 mb-lg-0" role="search">
      <input
        className="form-control me-2 dropdown-toggle"
        type="search"
        data-bs-theme="light"
        placeholder="Pesquisar"
        aria-label="Search"
        onChange={(e) => setFilterMessages(searchMessages(e.target.value))}
      />
      <div className={`card w-100 position-absolute top-100 start-0 d-${showSearchResults ? "block" : "none"}`}>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {
              filterMessages.length > 0
                ? filterMessages.map(message => renderSearchResults(message))
                : null
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
