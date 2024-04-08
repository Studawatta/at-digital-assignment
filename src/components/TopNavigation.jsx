import { useState } from 'react';
import GroupIcon from '../assets/GroupIcon.png';
import Logo from '../assets/Logo.png';
import CloseIcon from '../assets/CloseIcon.png';
const TopNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navButtonStyle =
    " font-['Inter'] uppercase font-medium text-[14px] leading-[17px] cursor-pointer";
  return (
    <div className="absolute left-0 top-0 flex h-[77px] w-full items-center justify-between bg-[#6B3CC9] px-5 py-[26px] sm:px-10 md:px-[60px] xl:px-20">
      <img src={Logo} alt="AT Digital Logo" className="h-[25px] w-[238px]" />

      <div className=" hidden gap-7 sm:flex">
        <span className={`${navButtonStyle} text-white`}>services</span>
        <span className={`${navButtonStyle} text-white`}>about us</span>
        <span className={`${navButtonStyle} text-white`}>contact us</span>
        <span className={`${navButtonStyle} text-white`}>careers</span>
      </div>

      {/* MOBILE VIEW */}
      <div className="sm:hidden">
        <img
          src={GroupIcon}
          alt="Drop down menu"
          className=" h-6 w-8 cursor-pointer rounded-[5px]"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu && (
        <div className=" fixed left-0 top-0 z-20 h-screen w-full bg-white px-5 py-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-9">
              <span className={`${navButtonStyle} text-black`}>services</span>
              <span className={`${navButtonStyle} text-black`}>about us</span>
              <span className={`${navButtonStyle} text-black`}>contact us</span>
              <span className={`${navButtonStyle} text-black`}>careers</span>
            </div>
            <div>
              <img
                src={CloseIcon}
                alt="close icon"
                className="h-[30px] w-[30px]"
                onClick={() => setShowMenu(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavigation;
