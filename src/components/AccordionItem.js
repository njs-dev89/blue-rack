import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

function AccordionHeader({ children, isOpen, setOpen }) {
  return (
    <div className="accordion-head" onClick={() => setOpen(!isOpen)}>
      <a className={isOpen ? "active" : ""}>{children}</a>
      {!isOpen ? (
        <FaPlus style={{ color: "#14d468" }} />
      ) : (
        <FaTimes style={{ color: "#4270E4" }} />
      )}
    </div>
  );
}

function AccordionBody({ children, isOpen }) {
  return (
    <div className={`content ${isOpen ? "active" : ""}`}>
      <p>{children}</p>
    </div>
  );
}
export default function AccordionItem({ title, body }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <AccordionHeader isOpen={isOpen} setOpen={setOpen}>
        {title}
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>{body}</AccordionBody>
    </div>
  );
}
