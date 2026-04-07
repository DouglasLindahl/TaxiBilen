import Image from "next/image";

export default function Home() {
  return (
    <main className="relative text-white px-[32px] 2xl:px-[128px] bg-[#101010] min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/road3.png"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            transform: "scaleX(-1)",
            objectPosition: "right",
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col gap-6 max-w-2xl">
        <h1 className="text-[36px] 2xl:text-[48px] font-bold">
          Verksamheten är <span className="text-[#FFE500]">nedlagd</span>
        </h1>

        <p className="text-[22px] 2xl:text-[28px]">Domänen är till salu</p>

        <p className="text-[18px] 2xl:text-[22px]">
          För mer information kontakta oss på{" "}
          <a
            href="mailto:hej@taxibilen.se"
            className="text-[#FFE500] underline"
          >
            hej@taxibilen.se
          </a>
        </p>
      </div>
    </main>
  );
}
