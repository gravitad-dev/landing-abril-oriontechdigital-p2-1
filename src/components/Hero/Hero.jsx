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
              En <span className="font-bold">OrionTechDigital</span> somos
              pioneros en los campos de Deep Learning, Blockchain y E-Learning.
              Nuestro equipo está formado por tecnólogos y educadores
              apasionados dedicados a aprovechar las tecnologías avanzadas para
              impulsar la innovación y la transformación en diversas industrias.
              Creemos en el poder de la tecnología para cambiar el mundo y
              estamos comprometidos a crear soluciones que sean a la vez
              innovadoras e impactantes.
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
