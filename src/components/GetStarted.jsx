import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] p-[2px] cursor-pointer rounded-full bg-blue-gradient`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]  rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23x] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrowup"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23x]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
