import { useState, useEffect } from 'react';
import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { BsJustify, BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  const [isOpenDrop, setIsOpenDrop] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownToggle = (itemId) => {
    const newIsOpenDrop = {};
    Object.keys(isOpenDrop).forEach((key) => {
      newIsOpenDrop[key] = false;
    });

    newIsOpenDrop[itemId] = !isOpenDrop[itemId];
    setIsOpenDrop(newIsOpenDrop);
  };

  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 xl:px-16 py-2 flex justify-between items-center h-[78px] text-blue-custom ${
        isScrolled ? 'bg-[rgba(256,256,256,0.6)] backdrop-filter' : ''
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        backgroundColor: isScrolled ? '' : 'transparent',
      }}
    >
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-end gap-1.5 mr-2'>
          <a href='/' className='flex text-2xl items-center'>
            <img
              src={data['section-header'].logo.image.url}
              alt={data['section-header'].logo.image.alt}
              className='w-[52px] xl:w-[60px] cursor-pointer mr-2'
            />
            <h1>{data['section-header'].logo.name}</h1>
          </a>
        </div>
        <div className='hidden sm:flex items-end justify-between md:space-x-6 sm:space-x-3'>
          {data['section-header'].links.map((item, index) => (
            <div key={index} className='relative'>
              {!item.isDropdown ? (
                <Link
                  to={item.href}
                  spy={false}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  className='cursor-pointer'
                >
                  <div className='flex items-center gap-1.5'>
                    <p
                      className='min-w-max text-md hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max'
                      key={item.id}
                    >
                      {item.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div
                  className='flex items-center gap-1.5 cursor-pointer'
                  onClick={() => handleDropdownToggle(item.id)}
                >
                  <p
                    className='min-w-max text-md hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max'
                    key={item.id}
                  >
                    {item.title}
                  </p>
                  {item.isDropdown && (
                    <img
                      src={data['section-header']['dropdow-icon'].url}
                      alt={data['section-header']['dropdow-icon'].alt}
                      className='h-[6px] mr-2'
                      style={{
                        transform: isOpenDrop[item.id]
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                        transition: 'transform 0.2s ease-in-out',
                      }}
                    />
                  )}
                </div>
              )}
              {item.isDropdown && isOpenDrop[item.id] && (
                <div className='absolute top-full mt-1 bg-white rounded-sm bg-opacity-[98%] left-0 z-[100] w-full min-w-max shadow-md'>
                  {item.items.map((option, index) => (
                    <Link
                      key={index + option.text}
                      to={option.link}
                      spy={false}
                      smooth={true}
                      duration={500}
                      offset={-85}
                      className='cursor-pointer'
                    >
                      <p
                        key={option.text + index}
                        className='truncate text-xs sm:text-[12px] xl:text-[14px] p-2 cursor-pointer hover:bg-opacity-70 hover:bg-slate-300 active:text-red-custom transition duration-300'
                        onClick={() => handleDropdownToggle(item.id)}
                      >
                        {option.text}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='hidden sm:flex items-end space-x-2 md:space-x-6'>
          <a href={data.blog.href} target='_blank'>
            <p className='ml-4 text-md cursor-pointer hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max'>
              {data['section-header'].blog}
            </p>
          </a>
          <a href={`${data['contact']}`} target='_blank'>
            <button className='-mb-1 xl:-mb-2 bg-light-blue-custom text-white px-2 py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-3 rounded-[4px] min-w-max text-xs sm:text-[10px] lg:text-[14px] 2xl:text-[16px]'>
              {data['section-header']['contact-button']}
            </button>
          </a>
        </div>
      </div>
      <button
        className='text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center sm:hidden'
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
