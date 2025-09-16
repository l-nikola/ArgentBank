import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ChangeName from "../../components/ChangeName";
import BankAccount from "../../components/BankAccount";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Welcome back</h1>
      {/* <ChangeName /> */}
      <BankAccount
        account="Argent Bank Checking (x8349)"
        amount={2000}
        balance="Available Balance"
      />
      <Footer />
    </>
  );
}
