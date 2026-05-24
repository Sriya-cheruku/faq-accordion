import { useState } from "react";

const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside the Frontend Mentor community. You can ask questions, share your code, and learn from how other developers approach the same challenge.",
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <main className="app">
      <section className="faq-card" aria-labelledby="faq-title">
        <div className="faq-header">
          <img
            src="/images/icon-star.svg"
            alt=""
            aria-hidden="true"
            className="star-icon"
          />
          <h1 id="faq-title">FAQs</h1>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article className="faq-item" key={faq.question}>
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <img
                    src={
                      isOpen
                        ? "/images/icon-minus.svg"
                        : "/images/icon-plus.svg"
                    }
                    alt=""
                    aria-hidden="true"
                    className="faq-icon"
                  />
                </button>

                {isOpen && (
                  <div
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;