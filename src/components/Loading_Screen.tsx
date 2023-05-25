import { motion } from "framer-motion";
import { logo } from "../assets";
import Title_Array from "./Title_Array";
interface Props {}

const Loading_Screen: React.FC<Props> = () => {
  return (
    <motion.div className="w-full h-screen bg-primary grid content-center">
      <div className="flex justify-center">
        {" "}
        <motion.img
          src={logo}
          alt="logo"
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[30px] h-[30px] mt-4 mr-2 xs:w-[65px] xs:h-[65px] md:w-[100px] md:h-[100px] md:mr-5 lg:w-[120px] lg:h-[120px] lg:mr-5"
        />
        <div className="font-poppins font-bold text-white text-[23px] xs:text-[45px] md:text-[90px] lg:text-[120px]">
          <Title_Array />
        </div>
      </div>
      <div className="flex flex-col text-white ">
        {" "}
        <div className="flex justify-center">
          Hover/Click over my blog title while you wait
        </div>
        <div className="flex justify-center">Loading . . .</div>
      </div>
    </motion.div>
  );
};

export default Loading_Screen;
