import { motion } from "framer-motion";
interface Props {}
const Loading_Screen: React.FC<Props> = () => {
  return (
    <div className="w-full h-screen bg-primary grid place-items-center">
      <motion.span className="font-poppin text-white">
        Andy Baeck's Tech Blog Intro
      </motion.span>
    </div>
  );
};

export default Loading_Screen;
