import Footer from '../components/Footer';
import TopNavigation from '../components/TopNavigation';
import HeroImage from '../assets/HeroImage.png';
import Button from '../components/Button';

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
      <Footer />
    </div>
  );
};

export default LandingPage;
