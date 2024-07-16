import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  {
    id: 0,
    url: "",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    url: "",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "",
    icon: <FaXTwitter />,
  },
];

function SocialButtons() {
  return (
    <div className="flex py-10 justify-center">
      <ul>
        <li className="flex gap-[60px]">
          {social.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className=" bg-white h-[28px] w-[28px] rounded-[4px] text-black text-[16px] flex justify-center items-center"
            >
              {item.icon}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default SocialButtons;
