import { useNavigate } from "react-router-dom";

export default function BankAccount({ account, amount, balance }) {
  const navigate = useNavigate();

  const handleTransaction = () => {
    navigate("/transaction");
  };

  const formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section className="bankAccount">
      <div>
        <h2 className="account">{account}</h2>
        <p className="amount">${formattedAmount}</p>
        <p className="balance">{balance}</p>
      </div>
      <button onClick={handleTransaction}>View transactions</button>
    </section>
  );
}
