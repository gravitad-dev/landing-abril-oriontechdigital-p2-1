import data from "../../data.json";
import Layout from "../ui/Layout";
import { MdContactMail } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

function Say() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <section id="say">
      <Layout>
        <div
          className="my-12  bg-center"
          style={{
            backgroundImage: `url(${data["section-say"].bg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex w-full h-[68vw] max-h-[985px] flex-col mx-auto text-center justify-around gap-8 break_custom:gap-16 sm:gap-36 2xl:gap-40">
            <div className="flex flex-col items-center justify-center w-[46%] md:w-[55%] mx-auto">
              <p className="text-white font-semibold text-[0.6rem] mini:text-[0.8rem] break_custom:text-[1rem] sm:text-[1.6rem] md:text-[2rem] xl:text-[2.4rem] leading-tight mt-4 sm:mt-0">
                {data["section-say"].title}
                <span className="text-red-custom inline ml-[2%]">
                  {data["section-say"].title2}
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto text-white mini:mt-2 sm:gap-4 lg:gap-8">
              <p className="hidden mini:block mb-2 text-[10px] sm:text-[12px] md:text-[14px] xl:text-2xl">
                {data["section-say"].subtitle}
              </p>
              
              <span className="hidden mini:block mt-2 text-[8px] mini:text-[12px] xl:text-xl text-light-blue-custom">
                {data["section-say"].message}
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
export default Say;


{/*
  
<div className="flex flex-col mini:flex-row items-center xl:space-x-6 mini:space-y-0 -space-y-2 gap-2 text-[10px] sm:text-[12px] md:text-[14px]">
  <div className="flex items-center gap-1 mini:bg-white hover:text-light-blue-custom rounded-full px-0 py-0 mini:px-2 sm:px-4 mini:py-1 2xl:py-2">
    <img
      src={data["section-say"]["google-icon"].url}
      alt={data["section-say"]["google-icon"].alt}
      width={16}
      className="hidden mini:block"
    />
    <button className="mini:text-blue-custom active:text-red-custom p-1 hover:opacity-80">
      {isDesktopOrLaptop
        ? data["section-say"].button1
        : "signup google"}
    </button>
  </div>
  <span>{data["section-say"].option}</span>
  <div className="flex items-center gap-1 mini:bg-light-blue-custom rounded-full px-0 py-0 mini:px-2 sm:px-4 mini:py-1 2xl:py-2">
    <MdContactMail className="hidden mini:block text-lg md:text-xl" />
    <button className="text-white active:opacity-100 p-1 hover:opacity-80">
      {isDesktopOrLaptop
        ? data["section-say"].button2
        : "signup email"}
    </button>
  </div>
</div>
  
*/}