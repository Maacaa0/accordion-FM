import { useRef, useState } from "react";
import { data } from "../accordionData";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) {
  const contentHeight = useRef<HTMLInputElement>(null);

  return (
    <div className="wrapper">
      <button className="question" onClick={onClick}>
        <p>{question}</p>
        <span>
          <img
            src={isOpen ? "images/icon-minus.svg" : "images/icon-plus.svg"}
            alt=""
          />
        </span>
      </button>
      <div
        className="answer"
        ref={contentHeight}
        style={
          isOpen
            ? { height: contentHeight.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setActiveIndex((prevState) => (prevState === index ? null : index));
    console.log(index);
  }

  return (
    <div className="container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
