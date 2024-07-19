import { useState } from 'react';
import { Link } from 'react-scroll';
import data from '../../data.json';
import PropTypes from 'prop-types';

const MenuMobile = ({ isOpen, onClick }) => {
  const [isOpenDrop, setIsOpenDrop] = useState({});

  const handleDropdownToggle = (itemId) => {
    setIsOpenDrop((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div
      className={`${
        isOpen ? 'flex fadeIn' : 'hidden'
      } w-full min-h-screen fixed inset-0 md:hidden scroll-auto`}
      onClick={onClick}
      style={{ background: 'rgba(0,0,0,0.3)' }}
    >
      <ul
        className={`fixed left-0 top-0 px-4 py-5 h-screen w-[60vw] flex flex-col gap-4 
        items-start  text-blue-custom bg-white shadow-md shadow-white`}
      >
        <div className='flex'>
          <a href='/'>
            <img
              src={data['section-header'].logo.image.url}
              alt={data['section-header'].logo.image.alt}
              className='h-[36px] cursor-pointer mx-auto mt-4'
            />
            <hr className='mt-6 w-[50vw]'></hr>
          </a>
        </div>
        <div className='ml-[2vw] flex flex-col gap-12 mt-6 w-full'>
          {data['section-header'].links.map((item, index) => (
            <RenderLink
              key={index}
              link={item}
              handleDropdownToggle={handleDropdownToggle}
              isOpenDrop={isOpenDrop}
            />
          ))}
          <a href={data['section-header']['blog-ref']} target='_blank'>
            <div className='flex items-center gap-2'>
              {data['section-header']['blog-icon'] && (
                <img
                  src={data['section-header']['blog-icon']}
                  alt={data['section-header'].blog}
                  className='w-[26px] h-[26px]'
                />
              )}
              <p className='min-w-max text-md hover:text-red-custom active:text-red-custom'>
                {data['section-header'].blog}
              </p>
            </div>
          </a>
          <a href={`${data['contact']}`} target='_blank'>
            <div className='flex items-center gap-2'>
              {data['section-header']['contact-button-icon'] && (
                <img
                  src={data['section-header']['contact-button-icon']}
                  alt={data['section-header']['contact-button']}
                  className='w-[26px] h-[26px]'
                />
              )}
              <button className='mr-auto min-w-max text-md hover:text-red-custom active:text-red-custom'>
                {data['section-header']['contact-button']}
              </button>
            </div>
          </a>
        </div>
      </ul>
    </div>
  );
};

function RenderLink({ link, handleDropdownToggle, isOpenDrop }) {
  return (
    <div>
      <Link
        to={link.href}
        key={link.id}
        className='flex flex-col gap-4 hover:text-red-custom active:text-red-custom cursor-pointer'
        smooth={true}
        duration={700}
        spy={false}
        offset={-80}
      >
        <div
          className='flex flex-col gap-1.5 cursor-pointer'
          onClick={() => handleDropdownToggle(link.id)}
        >
          <div className='flex items-center gap-2'>
            {link.icon && (
              <img
                src={link.icon}
                alt={link.alt}
                className='w-[26px] h-[26px]'
              />
            )}
            <p
              className='min-w-max text-md hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max'
              key={link.id}
            >
              {link.title}
            </p>
            {link.isDropdown && (
              <img
                src={data['section-header']['dropdow-icon'].url}
                alt={data['section-header']['dropdow-icon'].alt}
                className='h-[6px] mr-2'
                style={{
                  transform: isOpenDrop[link.id]
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              />
            )}
          </div>
        </div>
      </Link>
      {link.isDropdown && isOpenDrop[link.id] && (
        <div className='flex flex-col space-y-3 w-full min-w-max mt-4'>
          {link.items.map((option) => (
            <Link
              key={option.id + option.text}
              to={option.link}
              className='ml-8 truncate text-blue-custom cursor-pointer hover:text-red-custom'
              smooth={true}
              duration={700}
              spy={false}
              offset={-80}
            >
              {option.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

RenderLink.propTypes = {
  link: PropTypes.object.isRequired,
  handleDropdownToggle: PropTypes.func.isRequired,
  isOpenDrop: PropTypes.object.isRequired,
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuMobile;
