import data from "../../data.json";
import Layout from "../ui/Layout";

function Last() {
  return (
    <section id="last">
      <Layout>
        <div className="mt-8 sm:my-20 py-12">
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto text-center">
            <section id="testimonials">
              <h1
                className="text-blue-custom font-bold text-xl pb-4 lg:pb-8 mini:text-2xl sm:text-3xl md:text-[48px]"
                style={{ lineHeight: "normal" }}
              >
                {data["section-last"].title}
              </h1>
              <p>{data["section-last"].paragraph}</p>
            </section>
          </div>
          {/* <div className="flex flex-col text-center justify-center space-y-4">
            <h1 className="text-blue-custom font-bold text-xl mini:text-2xl sm:text-3xl md:text-[48px]">
              {data["section-last"].title}
            </h1>
            <p>{data["section-last"].paragraph}</p>
            <button className="bg-light-blue-custom text-white px-2 py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-3 rounded-[4px] max-w-max text-xs sm:text-[10px] lg:text-[14px] 2xl:text-[16px] mx-auto md:mb-4">
              {data["section-last"].button}
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-10 mt-6">
              {data["section-last"].checks.map((check, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 mr-auto ml-[26vw] break_custom:ml-[30vw] md:mr-0 md:ml-0"
                >
                  <img
                    className="w-4 sm:w-6 lg:w-8 2xl:w-10"
                    src={data["section-last"]["checks-icon"].url}
                    alt={data["section-last"]["checks-icon"].alt}
                  />
                  <p className="text-xs text-blue-custom">{check}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </Layout>
    </section>
  );
}
export default Last;
