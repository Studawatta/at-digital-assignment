/* eslint-disable react/prop-types */
import plusIcon from '../assets/plusIcon.png';
import minusIcon from '../assets/minusIcon.png';

const Faqs = ({ question, answer, showFAQAnswer, setShowFAQAnswer, id }) => {
  return (
    <div className="w-full">
      {showFAQAnswer === id ? (
        <div className="flex flex-col items-start gap-3">
          <div className="flex w-full flex-row items-start justify-between gap-10 p-0 ">
            <p className="w-[232px] font-['Inter'] text-[22px] font-medium leading-7 text-[#6B3CC9] md:w-fit">
              {question}
            </p>
            <div
              className="flex h-[24px] w-[14px] cursor-pointer flex-col pt-2"
              onClick={() => setShowFAQAnswer(null)}
            >
              <img
                src={minusIcon}
                alt="minus icon"
                className=" h-[3px] w-[14px]"
              />
            </div>
          </div>
          <p className="w-[286px]  font-['Inter'] text-[18px] font-normal leading-[30px] text-[#6F6C90] md:w-fit">
            {answer}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-3">
          <div className="flex w-full flex-row items-start justify-between  gap-10  p-0">
            <p className="w-[232px] font-['Inter'] text-[22px] font-medium leading-7 text-black md:w-fit">
              {question}
            </p>
            <div
              className="flex h-[24px] w-[14px] cursor-pointer flex-col pt-2"
              onClick={() => setShowFAQAnswer(id)}
            >
              <img
                src={plusIcon}
                alt="plus icon"
                className=" h-[14px] w-[14px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faqs;
