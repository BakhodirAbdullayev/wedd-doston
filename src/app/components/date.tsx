import { FC } from "react";
import Flowers from "./flowers";
import Header from "./header";

const DateSection: FC = (): JSX.Element => {
  return (
    <div className="relative mt-32">
      <Flowers />
      <Header
        text="Assalomu alaykum"
        paragraph="Hurmatli qadrdonlar! Sizlarni aziz farzandlarimiz Dostonbek va Sevinchlarning nikoh to‘ylari munosabati bilan 2025-yil 26-april kuni soat 18:00 da bo‘lib o‘tadigan to‘y dasturxonimizga taklif etamiz!"
        p="Hurmat va ehtirom ila, Raxmonovlar oilasi"
      />

      <div className="my-7 w-3/6 mx-auto flex items-center" data-aos="zoom-in">
        <span className="w-2 h-2 rounded-full border-1 border-[#a9a05c]"></span>
        <div className="w-full h-px bg-[#a9a05c]"></div>
        <span className="w-2 h-2 rounded-full border-1 border-[#a9a05c]"></span>
      </div>

      <h3
        className="text-center text-3xl text-[#a9a05c] font-serif"
        data-aos="zoom-in"
      >
        <div>
          26 <span className="mx-1">April</span> 2025
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>18</span>
          <span className="w-1 h-1 rounded-full bg-[#a9a05c]"></span>
          <span>00</span>
        </div>
      </h3>
    </div>
  );
};

export default DateSection;
