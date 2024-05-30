import data from "../../data.json";
import Layout from "../ui/Layout";

function Future() {
  return (
    <Layout>
      <section id="future">
        <div className="w-full flex flex-col mx-auto px-6 sm:px-10 text-center mt-4 lg:mt-16">
          <h1 className="text-blue-custom font-bold text-xl pb-4 lg:pb-8 mini:text-2xl sm:text-3xl md:text-[48px]">
            {data["section-features"].title}{" "}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data["section-features"].cards.map((item, index) => (
              <div key={index} className="p-2">
                <div className="flex justify-center space-x-4 p-6 rounded-md border border-[rgb(241,241,241)] overflow-hidden">
                  <div>
                    <img src={item.icon} width={96} alt={item.alt} />
                  </div>
                  <div className="flex flex-col text-left space-y-4">
                    <h3 className="min-w-max font-bold text-xl">
                      {item.title}
                    </h3>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                      {item.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <a href={item["action-link"]} target="_blank">
                      <h3 className="min-w-max text-[14px] cursor-pointer active:text-red-custom hover:text-blue-custom text-light-blue-custom">
                        {item.action}
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default Future;
