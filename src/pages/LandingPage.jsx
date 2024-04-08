import Footer from '../components/Footer';
import TopNavigation from '../components/TopNavigation';
import HeroImage from '../assets/HeroImage.png';
import Button from '../components/Button';
import image2 from '../assets/image2.png';
import image1 from '../assets/image1.png';
import Faqs from '../components/Faqs';

const LandingPage = () => {
  return (
    <div className="relative w-full">
      <TopNavigation />
      <div className="absolute left-0 top-[77px]  h-[218px] w-full  sm:h-[448px] lg:h-[700px]">
        <img
          src={HeroImage}
          alt="laptop on a desk"
          className="h-[218px] w-full sm:h-[448px] lg:h-[700px]"
        />
        <div
          className={`absolute left-0 top-[218px] flex w-full flex-col items-start gap-5 bg-[linear-gradient(256.73deg,_#1CBDDD_27.86%,_#4DCA79_100%,_#FFFFFF)] 
                         px-5 pb-8 pt-6 sm:top-[448px] sm:px-10 lg:left-20 lg:top-[354px] lg:w-[630px]`}
        >
          <p className="h-[144px] w-full font-['Inter'] text-[36px] font-bold capitalize leading-9 tracking-tight text-white sm:text-5xl lg:h-[192px] lg:w-[556px]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <Button text="Get free consultation" />
        </div>
      </div>

      {/* SERVICE 01 */}

      <div
        className={`absolute left-5 top-[649px] flex h-fit w-[335px] flex-col items-center gap-5 p-0 md:left-10 md:top-[843px] md:w-[688px] 
                     md:flex-row lg:left-[152px] lg:top-[857px] lg:w-[896px] xl:left-[188px] xl:w-fit xl:gap-[108px]`}
      >
        <img
          src={image2}
          alt="computer image"
          className="h-[275px] w-[275px] lg:h-[346px] lg:w-[346px] xl:h-[414px] xl:w-[414px]"
        />

        <div className="flex w-full flex-col items-center gap-5 p-0 md:items-start xl:w-[542px]">
          <h1 className="text-center font-['Poppins'] text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-[#6B3CC9] md:text-left">
            Web & Mobile App Development
          </h1>
          <p className="text-center font-['Inter'] text-[16px] font-normal leading-[19px] tracking-tight text-black md:text-left lg:tracking-normal">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <Button text="learn more" />
        </div>
      </div>
      {/* SERVICE 02 */}
      <div
        className={`absolute left-5 top-[1282px] flex h-fit w-[335px] flex-col items-center gap-5 p-0 md:left-10 md:top-[1178px] md:w-[688px] 
                     md:flex-row-reverse lg:left-[152px] lg:top-[1253px] lg:w-[896px] xl:left-[188px] xl:top-[1351px] xl:w-fit xl:gap-[108px]`}
      >
        <img
          src={image1}
          alt="magnifying glass image"
          className="h-[275px] w-[275px] lg:h-[346px] lg:w-[346px] xl:h-[414px] xl:w-[414px]"
        />

        <div className="flex w-full flex-col items-center gap-5 p-0 md:items-start xl:w-[542px]">
          <h1 className="text-center font-['Poppins'] text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-[#6B3CC9] md:text-left">
            Digital Strategy Consulting
          </h1>
          <p className="text-center font-['Inter'] text-[16px] font-normal leading-[19px] tracking-tight text-black md:text-left lg:tracking-normal">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <Button text="learn more" />
        </div>
      </div>

      {/* FAQs */}
      <div className="absolute left-5 top-[1915px] flex w-[334px] flex-col items-center gap-7 p-0 md:left-[42px] md:top-[1514px] md:w-[686px] lg:left-[152px] lg:top-[1711px] lg:w-[896px] xl:left-[297px] xl:top-[1847px] xl:w-fit">
        <h1 className=" text-center font-['Poppins'] text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-[#6B3CC9] md:text-left">
          Frequently asked questions
        </h1>
        <div className="flex w-full flex-col items-start gap-4">
          {/* QUESTIONS */}
          <div className="flex w-full flex-col items-start gap-3 rounded-[7px] bg-[#FAF8FF] p-6 xl:w-[846px]">
            <Faqs
              question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-[7px] bg-[#FAF8FF] p-6 xl:w-[846px]">
            <Faqs
              question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
              answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
            />
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-[7px] bg-[#FAF8FF] p-6 xl:w-[846px]">
            <Faqs
              question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
              answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
