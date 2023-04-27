import { useState } from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

// import "./App.css";
import "./index.css";
import styles from "./constants/style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-primary w-full overflow-hidden snap-y">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} snap-start`}>
          <Navbar />
        </div>
      </div>
      <div
        className={`bg-primary ${styles.flexStart} w-full h-full relative top-10 snap-start`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
