const styles = {
  boxWidth: "xl:max-w-[1920px] w-full",
  heading1:
    "font-poppins font-semibold xs:text-[50px] text-[45px] text-white xs:leading-[80.8px] leading-[70.8px] w-full",
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  wrapper: "absolute sticky top-0",
  blogtitle:
    "text-[35px] bg-gradient-to-r from-sky-500 to-fuchsia-400 text-transparent bg-clip-text font-bold",
  blogsubtitle:
    "text-[22px] bg-gradient-to-r from-sky-400 to-fuchsia-300 text-transparent bg-clip-text font-semibold",
  blogcontent: "text-[16px] text-zinc-300 max-w-[800px]",
  blogcontenttitle:
    "text-[22px] text-blue-400 max-w-[800px] py-3 font-semibold",
};

export const layout = {
  section: `flex md:flex-row flex-col flex-wrap whitespace-normal ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
