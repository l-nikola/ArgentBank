import { useState } from "react";

export default function Collapse({
  date,
  description,
  amount,
  balance,
  transactionType,
  category,
  note,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="collapse">
      <div className="collapse__header">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i
            className={`fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </button>
        <div className="collapse__infos">
          <p>{date}</p>
          <p>{description}</p>
          <p>${amount}</p>
          <p>${balance}</p>
        </div>
      </div>

      {isOpen && (
        <div className="collapse__details">
          <p>Transaction Type : {transactionType}</p>
          <div>
            <p>Category : {category}</p>
            <button onClick={() => console.log("edit")}>
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
          <div>
            <p>Notes : {note}</p>
            <button onClick={() => console.log("edit")}>
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
