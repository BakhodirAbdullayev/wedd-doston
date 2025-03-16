import { greatVibes, monoton } from "@/fonts";
import { FC } from "react";

const Logo: FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center py-8 rounded-t-full rounded-b-full border-2 border-[#a9a05c]">
      <div
        className={`${greatVibes.className} w-24 h-24 flex items-center justify-center text-[#a9a05c] text-6xl relative`}
      >
        <span className="absolute top-2.5 left-2.5">D</span>
        <span className="absolute bottom-1 right-2.5">S</span>
      </div>
    </div>
  );
};

export default Logo;
