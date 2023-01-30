import React from "react";
import "./rightSideBar.css";

export default function RightSideBar({ sections, isSectionVisible, visibleSection }) {

  return (
    <div className="side-content pt-5 d-none d-sm-none d-md-block">
      <ul className="section-list list-group list-group-flush">
        {sections.map(section => {
          const sectionLink = section.split(" ").join("-");
          return (
            <li className={`list-group-item ${isSectionVisible && visibleSection === sectionLink ? "item-active" : ""}`} key={section}>
              <a href={`#${sectionLink}`}>{section}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}