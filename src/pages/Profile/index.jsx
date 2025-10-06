import ChangeName from "../../components/ChangeName";
import BankAccount from "../../components/BankAccount";
import { useSelector } from "react-redux";

export default function Profile() {
  const firstName = useSelector((state) => state.user.firstName);

  return (
    <main className="editName">
      <h1>Welcome back {firstName}</h1>
      <ChangeName />
      <section>
        <BankAccount
          account="Argent Bank Checking (x8349)"
          amount={2082.79}
          balance="Available Balance"
        />
        <BankAccount
          account="Argent Bank Saving (x67124)"
          amount={10928.42}
          balance="Available Balance"
        />
        <BankAccount
          account="Argent Bank Credit Card (x5201)"
          amount={184.3}
          balance="Current Balance"
        />
      </section>
    </main>
  );
}
