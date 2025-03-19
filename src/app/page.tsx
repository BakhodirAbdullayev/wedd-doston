import Showcase from "./components/showcase";
import DateSection from "./components/date";
import Location from "./components/location";
import Music from "./components/music";
import AOSConfig from "./components/aos-config";

export default function Home() {
  return (
    <main className="max-w-[450px] p-2 bg-[#ececec] w-full min-h-svh overflow-x-hidden">
      <Showcase />
      <DateSection />
      <Location />
      <Music />
      <a
        href="https://t.me/bakhodir_abdullaev"
        target="_blank"
        className="block mt-20 text-right text-sm text-[#a9a05c] font-serif italic pr-2 underline"
      >
        by Abdullaev
      </a>
      <AOSConfig />
    </main>
  );
}
