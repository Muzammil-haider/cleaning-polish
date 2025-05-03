import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection />
      <ServiceSection />
      <GallerySection />
      <BeforeAfterSection />
      <ContactSection />
    </div>
  );
}

function Herosection() {
  return (
    <section className="h-screen bg-[url('/images/sofa.jpg')] bg-cover bg-center relative scroll-mt-24" id="home">
      <div className="absolute top-1/3 left-1/2 w-11/12 md:w-2/5 p-6 md:p-10 bg-[#FFF3E3] space-y-4 -translate-x-1/2">
        <div className="text-sm text-gray-600">Twój Zaufany Partner w Sprzątaniu</div>
        <div className="text-[#B88E2F] font-extrabold text-2xl md:text-4xl -mt-2">
          Tchnij Nowe Życie <br /> W Swój Dom
        </div>
        <div className="text-sm font-light text-gray-700">
          Specjalizujemy się w dokładnym czyszczeniu dywanów, sof i mebli, aby Twój dom był świeży i higieniczny.
        </div>
        <div className="flex">
          <button className="bg-[#B88E2F] mt-3 py-3 px-6 md:px-10 text-white text-xs font-semibold">
            Bezpłatna Wycenа
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceSection() {
  return (
    <section className="mt-16 scroll-mt-24 px-4" id="services">
      <div className="text-center text-2xl md:text-3xl font-extrabold">Nasze Usługi Sprzątania</div>
      <div className="text-center text-gray-500">Czystość i świeżość w każdym kącie Twojego domu</div>
      <div className="flex gap-6 md:gap-8 mt-10 md:mt-14 justify-center flex-wrap">
        {[
          { title: "Czyszczenie Dywanów", img: "/images/carpet.jpg" },
          { title: "Czyszczenie Sof", img: "/images/sofa.jpg" },
          { title: "Czyszczenie Schodów", img: "/images/staircase.jpg" },
          { title: "Czyszczenie Sypialni", img: "/images/bedroom1.jpg" },
          { title: "Czyszczenie Korytarzy", img: "/images/hallway.jpg" },
          { title: "Czyszczenie Salonu", img: "/images/livingroom.jpg" },
          { title: "Czyszczenie Stołu", img: "/images/diningtable.jpg" },
          { title: "Czyszczenie Chodników", img: "/images/rug.jpg" },
        ].map((service, i) => (
          <ServiceCard key={i} title={service.title} img={service.img} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, img }: { title: string; img: string }) {
  return (
    <div className="w-[150px] md:w-[250px]">
      <Image className="rounded-lg" alt={title} src={img} width={250} height={250} />
      <p className="flex text-sm md:text-lg font-bold justify-center mt-2 text-center">{title}</p>
    </div>
  );
}

function GallerySection() {
  return (
    <section className="my-16 scroll-mt-24 px-4" id="works">
      <div className="text-center text-2xl md:text-3xl font-extrabold">Nasze Realizacje</div>
      <div className="text-center mb-6 text-gray-500">Zobacz jaką czystość zapewniamy</div>
      <ImageGrid
        images={[
          "/images/sofa1.jpg",
          "/images/sofa2.jpg",
          "/images/carpet1.jpg",
          "/images/carpet2.jpg",
          "/images/rug1.jpg",
          "/images/staircase4.jpg",
          "/images/carpet4.jpg",
          "/images/carpet5.jpg",
        ]}
      />
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="my-16 px-4">
      <div className="text-center text-2xl md:text-3xl font-extrabold">Przed i Po</div>
      <div className="text-center mb-6 text-gray-500">Zobacz różnicę</div>
      <ImageGrid
        images={[
          "/images/sofa3.jpg",
          "/images/beforeafter.jpg",
          "/images/staircase7.jpg",
          "/images/diningtable2.jpg",
        ]}
      />
    </section>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="flex gap-4 md:gap-8 mt-10 md:mt-14 justify-center flex-wrap">
      {images.map((img, idx) => (
        <Image key={idx} className="rounded-lg" alt={`gallery-${idx}`} src={img} width={250} height={250} />
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <section className="bg-[#f9f9f9] py-10 scroll-mt-24 px-4" id="contact">
      <div className="text-center text-2xl font-bold">Skontaktuj się z nami</div>
      <p className="text-center text-gray-500 mb-6">
        Obsługujemy Warszawę i okolice. Skontaktuj się z nami, aby sprawdzić dostępność lub zarezerwować usługę.
      </p>
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <p className="text-lg font-semibold">Telefon / WhatsApp</p>
          <p className="text-[#B88E2F]">+48 000 000 000</p>
          <p className="mt-4 text-lg font-semibold">E-mail</p>
          <p className="text-[#B88E2F]">cleanwithtrust@example.com</p>
          <p className="mt-4 text-sm text-gray-500">
            Odpowiadamy w ciągu 2 godzin w godzinach pracy.
          </p>
        </div>
      </div>
    </section>
  );
}
