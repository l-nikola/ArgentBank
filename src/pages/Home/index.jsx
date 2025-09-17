import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ChangeName from "../../components/ChangeName";
import BankAccount from "../../components/BankAccount";
import BankAccountDetail from "../../components/BankAccountDetail";
import Collapse from "../../components/Collapse";

export default function Home() {
  return (
    <>
      <Header />
      {/* Home page */}
      {/* <h1>Welcome back</h1>
      <ChangeName />
      <BankAccount
        account="Argent Bank Checking (x8349)"
        amount={2000}
        balance="Available Balance"
      /> */}
      {/* Account Detail */}
      <BankAccountDetail
        account="Argent Bank Checking (x8349)"
        amount={2000}
        balance="Available Balance"
      />
      <Collapse
        date="June 20th, 2020"
        description="Golden Sun Bakery"
        amount={5.0}
        balance={2082.79}
        transactionType="Electronic"
        category="Food"
        note=""
      />
      <Footer />
    </>
  );
}
