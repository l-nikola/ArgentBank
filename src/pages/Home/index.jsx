import ChangeName from "../../components/ChangeName";
import BankAccount from "../../components/BankAccount";

export default function Home() {
  return (
    <main className="home">
      <h1>Welcome back</h1>
      <ChangeName />
      <section>
        <BankAccount
          account="Argent Bank Checking (x8349)"
          amount={2000}
          balance="Available Balance"
        />
      </section>
    </main>
  );
}
