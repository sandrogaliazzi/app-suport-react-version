import React from "react";
import Card from "./card";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


export default function Section({ name, messages, isSectionVisible, setVisibleSection, setCardId }) {

  const { ref, inView, entry } = useInView();

  useEffect(() => {
    isSectionVisible(inView);
    setVisibleSection(entry?.target.id);
  }, [inView])

  return (
    <>
      <h4 className="pt-4 display-4 text-capitalize">{name}#</h4>
      <hr />
      <section className="p-4 row row-cols-1 row-cols-sm-1 row-cols-md-2"
        ref={ref}
        id={name.split(" ").join("-")}
        style={{ scrollMarginTop: "150px" }}
      >
        {messages.map((message) => {
          const { messageContent, messageTitle, id } = message;
          return (
            <div className="col py-3" key={id}>
              <Card messageContent={messageContent} messageTitle={messageTitle} id={id} setCardId={setCardId} />
            </div>
          );
        })}
      </section>
    </>
  );
}
