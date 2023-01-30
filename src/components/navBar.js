import React, { useRef, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {

  const modalRef = useRef(null)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  function handleKeyUp(event) {
    if (event.shiftKey && event.key.toLocaleLowerCase() === "d") {
      modalRef.current.click();
    }
  }

  return (
    <header className="pb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-subtle fixed-top">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#problemas">
            App suporte
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mais
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#aplicativos">
                      Aplicativos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#pós-suporte">
                      Pós suporte
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#upgrade">
                      Upgrade
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#bloqueio">
                      Bloqueio
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#outros">
                      Outros
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#quickMsgModal"
                  ref={modalRef}
                >
                  <i className="bi bi-lightning-charge-fill"></i>
                </a>
              </li>
            </ul>
            <SearchBar />
            <button
              className="btn btn-outline-success rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#addMessageModal"
            >
              <i className="bi bi-plus"> </i>
              Add Mensagem
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
