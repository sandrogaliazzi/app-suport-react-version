import { useState, useEffect } from "react";
import { getAllDocumentsByCollection } from "../src/dataBase/firestoreFunctions";
import { sortMessagesByCategory, sliceIntoSections } from "./handleFunctions";

//componetns
import NavBar from "./components/navBar";
import Section from "./components/section";
import RightSideBar from "./components/rightSideBar";
import ModalForm from "./components/modalForm";
import CategoryFormModal from "./components/categoryFormModel";
import QuickMsgModal from "./components/quickMsgModal";

//styles
import "./App.css";

function App() {
  const [sections, setSections] = useState([]);
  const [isSectionVisible, setSectionVisibility] = useState();
  const [visibleSection, setVisibleSection] = useState();
  const [cardId, setCardId] = useState();

  useEffect(() => {
    getAllDocumentsByCollection("messages")
      .then(sortMessagesByCategory)
      .then(sliceIntoSections)
      .then((docs) => setSections((messages) => messages = docs))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="row container-fluid">
          <div className="col-10">
            <div className="pt-2">
              {sections.map((section, index) => {
                return <Section
                  name={section.name}
                  messages={section.messages} key={index}
                  isSectionVisible={setSectionVisibility}
                  setVisibleSection={setVisibleSection}
                  setCardId={setCardId}
                />;
              })}
            </div>
          </div>
          <div className="col-2">
            <RightSideBar
              sections={sections.map(message => message.name)}
              isSectionVisible={isSectionVisible}
              visibleSection={visibleSection}
            />
          </div>
        </div>
        <ModalForm cardId={cardId} setCardId={setCardId} />
        <CategoryFormModal />
        <QuickMsgModal sections={sections} />
      </main>
    </div>
  );
}

export default App;
