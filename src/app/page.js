import Image from "next/image";

export default function Home() {
  return (
    <main className="relative text-white px-[32px] 2xl:px-[128px] bg-[#101010]">
      <div className="absolute inset-0 z-0 h-[80vh]">
        <Image
          src="/road2.jfif"
          alt="Image"
          layout="fill"
          objectFit="cover"
          style={{ transform: "scaleX(-1)", objectPosition: "right" }}
        />
        {/* <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the rgba value for darkness
            zIndex: 10,
          }}
        ></div> */}
        <div className="absolute w-full h-1/5 bottom-0 bg-gradient-to-t from-[#101010]"></div>
      </div>
      <section className="h-[80vh] flex justify-left items-center overflow-hidden">
        <div className="w-full pt-[24px] absolute top-0 left-0 z-10 flex items-center justify-between px-[32px] 2xl:px-[128px]">
          <p className="text-[22px] text-white font-semibold">TaxiBilen</p>
          {/* <button className="bg-white text-black px-[16px] py-[4px] rounded-full font-medium">
            Registrera Dig
          </button> */}
        </div>

        <div className="relative h-2/4 flex z-10 flex flex-col justify-start items-start text-left gap-8 drop-shadow-2xl">
          <p className="text-[48px] 2xl:text-[64px] 2xl:w-2/3 font-bold text-white leading-[50px] 2xl:leading-[70px] drop-shadow-2xl">
            Åk vart du vill med{" "}
            <span className="text-[#FFE500]">TaxiBilen</span>
          </p>
          <p className="text-white text-[22px] 2xl:text-[32px] 2xl:w-2/3">
            Res säkert och bekvämt. Kontakta oss direkt och förboka din taxi i
            god tid.
          </p>
        </div>
      </section>
      <section className="min-h-screen pt-[64px] relative px-[32px] 2xl:px-[228px] pb-[256px]">
        <section className="w-full text-center flex flex-col justify-center items-center gap-2 2xl:gap-8">
          <h1 className="text-[36px] 2xl:text-[48px] font-bold leading-[50px]">
            Mer än bara en <span className="text-[#FFE500]">taxi</span>
          </h1>
          <p className="text-[22px] 2xl:text-[28px] leading-10">
            Vi kör även bud med plats för en låg{" "}
            <span className="text-[#FFE500]">lastpall</span>, ordentligt{" "}
            <span className="text-[#FFE500]">takräcke</span> för långa saker och
            möjlighet att köra <span className="text-[#FFE500]">släp</span> med
            t.ex. båt
          </p>
        </section>
        <section className="relative flex flex-col-reverse 2xl:flex-row justify-between items-center gap-[64px] text-[22px] 2xl:text-[28px] pt-[32px] 2xl:pt-[128px]">
          <div className="text-center flex flex-col gap-2 2xl:gap-8 2xl:w-[60%]">
            <p className="text-[36px] 2xl:text-[48px] leading-[50px] font-bold">
              Lokal <span className="text-[#FFE500]">Taxi</span> för
              lokalbefolkningen
            </p>
            <div>
              <p>
                Vårt <span className="text-[#FFE500]">mål</span> är att finnas
                här för lokalbefolkningen{" "}
              </p>
              <p>
                året om.
                <span className="text-[#FFE500]"> Fasta priser</span> och enkelt
                upplägg
              </p>
            </div>
          </div>
          <div className="relative w-[70%] 2xl:w-[40%] aspect-square">
            <Image
              className="rounded-[40px]"
              src="/taxiBilen.png"
              alt="Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </section>
      <footer className="bg-[#101010] text-white text-center py-4 absolute bottom-0 inset-x-0 ">
        <p className="text-[16px]">
          &copy; {new Date().getFullYear()} Invicom. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
