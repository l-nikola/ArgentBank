export default function BankAccount({ account, amount, balance }) {
  return (
    <section className="bankAccount">
      <div>
        <h2 className="account">{account}</h2>
        <p className="amount">${amount}</p>
        <p className="balance">{balance}</p>
      </div>
      <button>View transactions</button>
    </section>
  );
}
