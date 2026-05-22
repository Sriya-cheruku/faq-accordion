import { useState } from "react";
import "./index.css";

function App() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges.",
    },
    {
      question:
        "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use completed projects in your portfolio.",
    },
    {
      question:
        "How can I get help if I'm stuck on a challenge?",
      answer:
        "You can get help from the Frontend Mentor Discord community.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="page">
      <img
        src="/images/background-pattern-desktop.svg"
        alt=""
        className="background-pattern"
      />

      <div className="card">
        <h1 className="title">
          <img
            src="/images/icon-star.svg"
            alt="Star Icon"
            className="star-icon"
          />
          FAQs
        </h1>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>

                <img
                  src={
                    openIndex === index
                      ? "/images/icon-minus.svg"
                      : "/images/icon-plus.svg"
                  }
                  alt=""
                  className="faq-icon"
                />
              </button>

              {openIndex === index && (
                <p className="faq-answer">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;