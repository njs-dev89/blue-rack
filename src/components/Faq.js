import React from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "What are some tips when choosing a hosting package?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    title: "How do I choose the right server?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    title: "What if I need help choosing the right domain?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    title: "How can i contact your technical team?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    title: "Differences between Cloud Hosting and Shared Hosting?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
];

export default function Faq() {
  return (
    <div className="faq padding-bottom50 padding-top50 gray-bg">
      <div className="custom-width">
        <h3>Frequently Aksed Questions</h3>

        <div className="accordion">
          {data.map(({ title, body }) => {
            return <AccordionItem title={title} body={body} />;
          })}
        </div>
      </div>
    </div>
  );
}
