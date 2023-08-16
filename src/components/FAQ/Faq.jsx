import React, { useState } from "react";
import './Faq.css'
import FaqItem from "./FaqItem";

const App = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index){
      return setOpen(null)
    }
    setOpen(index)
  };

  const accordionData = [
    {
      id: 1,
      question: " What is your return/exchange policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores ipsam, eaque mollitia a veniam pariatur. Ut, ipsum assumenda! Vero, quos quis animi sit iure sequi rerum molestias aperiam quo.",
    },
    {
      id: 2,
      question: "Do you ship internationally?",
      answer:
        "Yeah! We will ship your product to your desired location within 7 - 10 days. ",
    },
    {
      id: 3,
      question: "Do you have gift packaging options?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat aspernatur assumenda quisquam sed quo quis possimus alias repellendus distinctio!You Should learn web development in 2023.You Should learn web development in 2023.",
    },
    {
      id: 4,
      question: "How do I cancel/modify an order?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat aspernatur assumenda quisquam sed quo quis possimus alias repellendus distinctio!You Should learn web development in 2023.You Should learn web development in 2023.",
    },
    {
      id: 5,
      question: "What if my order arrives damaged?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat aspernatur assumenda quisquam sed quo quis possimus alias repellendus distinctio!You Should learn web development in 2023.You Should learn web development in 2023.",
    },
  ];
  return (
    <section className="faq">
    <h1>Frequently Asked Question!</h1>
      <div className="faq-box">
        {accordionData.map((data,index) => {
          return (
            <FaqItem
              key={data.id}
              open ={index === open}
              question={data.question}
              answer={data.answer}
              toggle={() => toggle(index)}
            ></FaqItem>
          );
        })}
      </div>
    </section>
  );
};

export default App;
