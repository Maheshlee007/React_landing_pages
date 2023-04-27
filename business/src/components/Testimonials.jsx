import { feedback } from "../constants";
import styles from "../constants/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className="font-poppins m-10 ">
      <div className="flex justify-evenly ss:flex-col sm:flex-row">
        <h1 className={`${styles.heading2} w-[570px]`}>
          What people are saying about us
        </h1>
        <p className={`${styles.paragraph}  w-[400px] self-center`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <section className="flex sm:justify-between mt-16  justify-center flex-wrap md:flex-nowrap">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
