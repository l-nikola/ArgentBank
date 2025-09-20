export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <section>
          <h2>Promoted Content</h2>
          <p>No fees.</p>
          <p>No minimum deposit.</p>
          <p>High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2>Features</h2>
        <div>
          <img src="/icons/icon-chat.png" alt="Chat Icon" />
          <h3>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div>
          <img src="/icons/icon-money.png" alt="Chat Icon" />
          <h3>More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div>
          <img src="/icons/icon-security.png" alt="Chat Icon" />
          <h3>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  );
}
