
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-[#FFF3E3] px-4 py-4 sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <Image className="rounded-lg" src="/images/professionalcleaning3.png" width={50} height={10} alt="logo" />
        <div className="text-xl md:text-3xl text-black font-bold">Blask Warszawa </div>
      </div>
      <div className="flex flex-wrap justify-center md:space-x-10 space-x-4 mt-4 md:mt-0 text-sm md:text-base font-light">
        <a href="#home" className="hover:text-[#B88E2F] transition">Strona Główna</a>
        <a href="#services" className="hover:text-[#B88E2F] transition">Usługi</a>
        <a href="#works" className="hover:text-[#B88E2F] transition">Nasze Realizacje</a>
        <a href="#contact" className="hover:text-[#B88E2F] transition">Kontakt</a>
      </div>
    </div>
  );
};

export default Header;
