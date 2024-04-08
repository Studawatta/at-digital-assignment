import Logo from '../assets/Logo.png';
const Footer = () => {
  return (
    <div className="absolute left-0 top-[2744px] flex w-full flex-col items-center gap-10 bg-[#6B3CC9] px-5 pb-5 pt-10 md:top-[2088px] md:px-10 lg:top-[2183px] lg:px-[60px] xl:top-[2319px] xl:px-20">
      <div className="flex w-full flex-col items-start justify-between gap-[60px] p-0 lg:flex-row lg:gap-[112px] xl:gap-[345px]">
        <div className="flex w-full flex-col items-start gap-5 md:w-[412px] lg:mx-auto">
          <img
            src={Logo}
            alt="AT Digital Logo"
            className="h-[25px] w-[238px]"
          />
          <p className="font-['Lato'] text-[16px] font-light leading-[19px] text-white">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex flex-col items-start gap-10 md:flex-row md:gap-20 lg:mx-auto lg:gap-5 xl:gap-32">
          <div className="flex w-[216px] flex-col items-start gap-3 lg:w-[255px] xl:w-[200px]">
            <h2 className="font-['Inter'] text-[21px] font-semibold leading-[25px] text-white">
              Our Technologies
            </h2>
            <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
              ReactJS
            </span>
            <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
              Gatsby
            </span>
            <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
              NextJS
            </span>
            <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
              NodeJS
            </span>
          </div>
          <div className="flex w-[216px] flex-col items-start gap-3 lg:w-[255px] xl:w-[200px]">
            <h2 className="font-['Inter'] text-[21px] font-semibold leading-[25px] text-white">
              Our Services
            </h2>
            <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
              Social media Marketing
            </span>
            <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
              Web & Mobile App Development
            </span>
            <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
              Data & Analytics
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-2 md:w-[630px]">
        <div className="h-0 w-full border border-white"></div>
        <div className="flex items-center justify-center gap-4 ">
          <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
            Privacy Policy
          </span>
          <div className="h-0 w-4 rotate-90 border border-white"></div>
          <span className="font-['Inter'] text-[14px] font-medium capitalize leading-[17px] text-white">
            Terms & Conditions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
