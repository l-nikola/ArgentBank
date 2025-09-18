import BankAccountDetail from "../../components/BankAccountDetail";
import Collapse from "../../components/Collapse";

export default function Transaction() {
  return (
    <main className="transaction">
      <BankAccountDetail
        account="Argent Bank Checking (x8349)"
        amount={2000}
        balance="Available Balance"
      />
      <section>
        <div className="title">
          <p className="title__date">DATE</p>
          <p className="title__description">DESCRIPTION</p>
          <p className="title__amount">AMOUNT</p>
          <p className="title__balance">BALANCE</p>
        </div>
        <Collapse
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="5.00"
          balance={2082.79}
          transactionType="Electronic"
          category="Food"
          note=""
        />
      </section>
    </main>
  );
}
