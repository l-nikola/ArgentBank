import { useNavigate } from "react-router-dom";

export default function BankAccount({ account, amount, balance }) {
  const navigate = useNavigate();

  const handleTransaction = () => {
    navigate("/transaction");
  };
  return (
    <section className="bankAccount">
      <div>
        <h2 className="account">{account}</h2>
        <p className="amount">${amount}</p>
        <p className="balance">{balance}</p>
      </div>
      <button onClick={handleTransaction}>View transactions</button>
    </section>
  );
}
