import styles from "../constants/style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`w-[140px] h-[140px] absolute top-2 right-0 rounded-full
      bg-blue-gradient ${styles.flexCenter}`}
    >
      <div
        className={`w-[130px] h-[130px] rounded-full bg-primary ${styles.flexCenter}`}
      >
        <div className="text-gradient ">
          <div>
            Get
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain inline ml-1"
            />
          </div>
          Started
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
