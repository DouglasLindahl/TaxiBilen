import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen text-white px-[128px] bg-[#151515]">
      <section className="h-screen flex justify-left items-center overflow-hidden">
        <div className="w-full pt-[24px] absolute top-0 left-0 z-10 px-[128px] flex items-center justify-between">
          <p className="text-[32px] text-white font-semibold">TaxiBilen</p>
          <button className="bg-white text-black px-[32px] py-[8px] rounded-full font-medium">
            Registrera Dig
          </button>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/heroImg.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="object-top"
          />
        </div>
        <div className="relative h-2/4 flex z-10 flex flex-col justify-start items-start text-left">
          <p className="text-[96px] font-bold text-white leading-10">
            Åk vart du vill
          </p>
          <p className="text-[96px] font-bold text-white">
            med <span className="text-[#FFE500]">TaxiBilen</span>
          </p>
          <p className="text-white text-[48px]">Kontakta oss direkt eller</p>
          <p className="text-white text-[48px]">ladda ner appen</p>
        </div>
      </section>
      <section className="min-h-screen pt-[64px] relative px-[256px]">
        <section className="w-full text-center flex flex-col justify-center items-center">
          <h1 className="text-[64px] font-semibold">
            Mer än bara en <span className="text-[#FFE500]">taxi</span>
          </h1>
          <p className="text-[32px] leading-10">
            Vi kör även bud med plats för en låg{" "}
            <span className="text-[#FFE500]">lastpall</span>, ordentligt{" "}
            <span className="text-[#FFE500]">takräcke</span>
            för långa saker och möjlighet att köra{" "}
            <span className="text-[#FFE500]">släp</span> med t.ex. båt
          </p>
        </section>
        <section className="relative flex flex-row justify-between items-center gap-[64px] text-[32px] pt-[128px]">
          <div className="w-1/2 flex flex-col gap-[16px]">
            <p className="text-[48px] leading-[50px] font-semibold">
              Lokal <span className="text-[#FFE500]">Taxi</span> for
              lokalbefolkningen
            </p>
            <p>
              Vårt <span className="text-[#FFE500]">mål</span> är att finnas här
              för lokalbefolkningen{" "}
              <span className="text-[#FFE500]">året om. Fasta priser</span> och
              enkelt upplägg
            </p>
          </div>
          <div className="relative w-[50%] aspect-square">
            <Image
              className="rounded-[40px]"
              src="/road.png"
              alt="Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </section>
      <section className="h-screen"></section>
    </main>
  );
}
