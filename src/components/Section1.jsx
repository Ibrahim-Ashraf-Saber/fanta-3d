export default function Section1() {
  return (
    <div className="flex items-center justify-center w-full h-screen overflow-hidden bg-[linear-gradient(150deg,rgb(255,166,0),rgb(255,94,0))]">
      <h1 className="text-[25vw] font-bold text-white">FANTA</h1>
      <img
        id="fanta"
        src="/Assets/fanta.png"
        className="w-[40%] absolute top-[20%] left-[30%] z-50"
      />
      <img
        src="/Assets/orange2.png"
        id="orange-cut"
        className="absolute top-[10%] left-[32%] w-[15%] z-[1] transition-all duration-500"
      />
      <img
        src="/Assets/orange.webp"
        id="orange"
        className="absolute top-[55%] right-[30%] w-[20%] z-[3]"
      />
      <img
        src="/Assets/leaf.webp"
        id="leaf"
        className="absolute top-[10%] left-0 w-[18%] rotate-[60deg]"
      />
      <img
        src="/Assets/leaf2.png"
        id="leaf2"
        className="absolute top-[70%] left-[80%] w-[12%] -rotate-90"
      />
      <img
        src="/Assets/coconoutleaf.png"
        id="leaf3"
        className="absolute top-[10%] right-0 w-[20%]"
      />
    </div>
  );
}
