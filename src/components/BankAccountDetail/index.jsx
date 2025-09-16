export default function BankAccountDetail({ account, amount, balance }) {
  return (
    <section className="bankAccountDetail">
      <div>
        <h2 className="account">{account}</h2>
        <p className="amount">${amount}</p>
        <p className="balance">{balance}</p>
      </div>
    </section>
  );
}
