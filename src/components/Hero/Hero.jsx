import data from "../../data.json";

function Hero() {
  return (
    <section id="home">
      <div
        style={{
          backgroundImage: `url(${data["section-hero"].bg.url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full mx-auto pt-24 sm:pt-32 md:pt-44 lg:pt-52 pb-12 sm:pb-52 container ">
          <div className="flex flex-col mx-auto text-center">
            <h1 className="text-blue-custom font-bold text-xl mini:text-3xl sm:text-5xl md:text-6xl">
              {data["section-hero"].title}
            </h1>

            <p className="text-gray-custom mt-4 w-full md:w-1/2 mx-auto px-2">
              At <span className="font-bold">OrionTechDigital</span>, we are
              pioneers in the fields of Deep Learning, Blockchain, and
              E-Learning. Our team consists of passionate technologists and
              educators dedicated to leveraging advanced technologies to drive
              innovation and transformation across various industries. We
              believe in the power of technology to change the world and are
              committed to creating solutions that are both cutting-edge and
              impactful.
            </p>
            <div className="min-w-max overflow-hidden flex items-center flex-col break_custom:flex-row mt-8 mx-auto gap-8">
              <button className="button-custom">
                {data["section-hero"].button1}
              </button>
              {/*
              <button className="button-red-custom">
                {data["section-hero"].button2}
              </button>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
