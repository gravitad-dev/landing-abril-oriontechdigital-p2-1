import data from "../data.json";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import SocialButtons from "../components/Socials";

function Footer() {
  return (
    <footer className="flex w-full pt-10 pb-10 bg-blue-custom overflow-hidden">
      <div className="flex flex-col justify-center text-white mx-auto">
        <div className="p-12 flex items-center justify-center flex-wrap gap-4 sm:gap-8 xl:gap-12 2xl:gap-20 mx-auto">
          {data["section-footer"].links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              spy={false}
              smooth={true}
              duration={500}
              offset={-85}
              className="cursor-pointer"
            >
              <p className="mb-2 cursor-pointer hover:text-red-custom shadow-only">
                {link.title}
              </p>
            </Link>
          ))}
          <a href={data["section-header"]["blog-ref"]} target="_blank">
            <p className="mb-2 cursor-pointer hover:text-red-custom">
              {data["section-header"].blog}
            </p>
          </a>
          <a href={`mailto:${data.contact}?subject=Contact`}>
            <p className="mb-2 cursor-pointer hover:text-red-custom">
              {data["section-header"]["contact-button"]}
            </p>
          </a>
        </div>
        <div>
          <SocialButtons />
        </div>
        <div className="w-screen flex items-center flex-wrap-reverse justify-around gap-6 sm:gap-12 p-4">
          <div className="flex justify-center items-center gap-4 flex-wrap px-2">
            <Link
              to={"home"}
              spy={false}
              smooth={true}
              duration={500}
              offset={-85}
              className="cursor-pointer"
            >
              <img
                src={data["section-footer"]["logo-white"].url}
                alt={data["section-footer"]["logo-white"].alt}
                className="h-6 sm:h-6 mini:w-50 lg:w-10 lg:h-auto hover:invert-[0.1]"
              />
            </Link>
            <p className="hidden mini:block text-[10px] truncate">
              {data["section-footer"].copywrite}
            </p>
            <a href={data["section-footer"].privacy.url}>
              <p className="text-[8px] xxs:text-[10px] truncate hover:text-light-blue-custom">
                {data["section-footer"].privacy.text}
              </p>
            </a>
            <a href={data["section-footer"].terms.url}>
              <p className="text-[8px] xxs:text-[10px] truncate hover:text-light-blue-custom">
                {data["section-footer"].terms.text}
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RenderLink({ link }) {
  if (link.external === true) {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <p className="text-[14px] hover:text-light-blue-custom cursor-pointer">
          {link.text}
        </p>
      </a>
    );
  } else {
    return (
      <Link
        to={link.url}
        spy={false}
        smooth={true}
        duration={500}
        offset={-75}
        className="cursor-pointer"
      >
        <p className="text-[14px]  hover:text-light-blue-custom cursor-pointer">
          {link.text}
        </p>
      </Link>
    );
  }
}

RenderLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default Footer;
