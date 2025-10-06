export default function BankAccountDetail({ account, amount, balance }) {
  const formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section className="bankAccountDetail">
      <div>
        <h2 className="account">{account}</h2>
        <p className="amount">${formattedAmount}</p>
        <p className="balance">{balance}</p>
      </div>
    </section>
  );
}
