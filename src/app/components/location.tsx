import { FC } from "react";
import Header from "./header";
import { MapPin } from "lucide-react";
import Link from "next/link";
import CountdownTimer from "./count-down";

const Location: FC = (): JSX.Element => {
  return (
    <div className="mt-40">
      <Header
        text=""
        paragraph="Manzil: Qashqadaryo viloyati Qarshi shahri Diydor shirin to'yxonasi"
      />
      <Link
        href="https://maps.app.goo.gl/WYUZtCEyVHdFSrnJ6"
        target="_blank"
        className="flex items-center justify-center gap-2 my-8"
        data-aos="zoom-in"
      >
        <p className="text-center text-[#a9a05c] underline italic font-serif">
          Manzilni ko'rish
        </p>
        <MapPin size={22} color="#a9a05c" />
      </Link>

      <CountdownTimer targetDate="2025-04-26T18:00:00" />
    </div>
  );
};

export default Location;
