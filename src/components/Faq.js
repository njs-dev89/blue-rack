import React from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    Question: "What are some tips when choosing a hosting package?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    Question: "How do I choose the right server?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    Question: "What if I need help choosing the right domain?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    Question: "How can i contact your technical team?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    Question: "Differences between Cloud Hosting and Shared Hosting?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
];

export default function Faq() {
  return (
    <div className="faq padding-bottom50 padding-top50 gray-bg">
      <div className="custom-width">
        <h3>Frequently Aksed Questions</h3>

        <div className="accordion">
          {data.map(({ Question, Answer }) => {
            return <AccordionItem title={Question} body={Answer} />;
          })}
        </div>
      </div>
    </div>
  );
}
