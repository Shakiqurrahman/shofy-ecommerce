import React from "react";
import './Faq.css'
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = ({open, question, answer, toggle }) => {
  return (
    <div className="faq-item">
      <div className="faq-title" onClick={toggle}>
        <p>{question}</p>
        <div className="icon">
            {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
            
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="answer">
            {answer}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
