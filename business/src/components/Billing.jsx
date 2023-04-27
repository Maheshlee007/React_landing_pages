import { apple, bill, google } from "../assets";
import styles, { layout } from "../constants/style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill-imae" />
      </div>
      <aside className={layout.sectionInfo}>
        <h1 className={styles.heading2}>
          Easily control your billing & invoicing.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="my-6 flex cursor-pointer">
          <img src={apple} alt="apple App store" />
          <img src={google} alt=" google app store" />
        </div>
      </aside>
    </section>
  );
};

export default Billing;
