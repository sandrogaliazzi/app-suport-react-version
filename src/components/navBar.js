import React, { useRef, useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {

  const [name, setName] = useState("");
  const [pppoe, setPppoe] = useState("");
  const [parksNameFormat, setParksNameFormat] = useState("");

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

  function handleForm(event) {
    event.preventDefault();

    const splittedName = name.split(" ");

    const firstName = splittedName[0];
    const lastName = splittedName[splittedName.length -1];
    const pppoeFormat = `${firstName}${lastName}fibra`.toLocaleLowerCase();

    setPppoe(
      prev => prev = pppoeFormat
    )

    setParksNameFormat(
      prev => prev = name.split(" ").join("-").toUpperCase()
    )
    
  }

  return (
    <header className="pb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary-subtle fixed-top">
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
                <form className="dropdown-menu p-3" style={{minWidth:"300px"}}>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Nome" value={name} 
                      onChange={event => setName(event.target.value)} 
                      onKeyUp={handleForm}
                    />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="pppoe" value={pppoe} placeholder="PPPOE" readOnly/>
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="parksName" value={parksNameFormat} placeholder="Formato Parks" readOnly/>
                  </div>
                </form>
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
              className="btn rounded-pill"
              style={{backgroundColor: 'rgb(255,95,31)', color:'#ffff'}}
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
