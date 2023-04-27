import { card } from "../assets";
import styles, { layout } from "../constants/style";

const CardDeal = () => {
  return (
    <section
      className="bg-primary w-full h-full flex flex-col my-16 justify-between items-start 
ss:flex-col sm:flex-row sm:mt-20"
    >
      <aside className="font-poppins  w-full ss:w-[80%] sm:w-[50%]">
        <h1 className={styles.heading2}>
          Find a better card deal in few easy steps.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-blue-gradient rounded-md text-black p-3 font-poppins font-normal mt-10">
          Get Started
        </button>
      </aside>
      <aside className="w-full sm:w-[40%] sm:m-0 text-white ss:w-[80%] ss:self-end ss:mt-10">
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </aside>
    </section>
  );
};

export default CardDeal;
