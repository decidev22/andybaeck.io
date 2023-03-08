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
          className="w-[65px] h-[65px] mt-7 mr-2"
        />
        <div className="font-poppins font-bold text-white text-[65px]">
          <Title_Array />
        </div>
      </div>
      <div className="flex flex-col text-white ">
        {" "}
        <div className="flex justify-center">
          Hover over my blog title while you wait
        </div>
        <div className="flex justify-center">Loading . . .</div>
      </div>
    </motion.div>
  );
};

export default Loading_Screen;
