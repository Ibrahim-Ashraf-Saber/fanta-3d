export default function Section3() {
  return (
    <div
      id="t2"
      className="flex items-center justify-center gap-[5vw] w-full h-screen bg-gradient-to-br from-orange-400 to-orange-600"
    >
      <div className="relative flex flex-col items-center gap-[2vh] w-[25vw] h-[60vh] mt-[10vh] rounded-2xl bg-white">
        <img
          src="/Assets/lemon.webp"
          id="lemon"
          className="absolute top-[-40%] left-1/2 w-[25vw] -translate-x-1/2"
        />
        <img
          src="/Assets/cocacola.png"
          id="coca"
          className="absolute top-[-20%] left-1/2 w-[55%] -translate-x-1/2"
        />
        <h1 className="mt-[45vh] text-[3vw] font-bold">CocaCola</h1>
      </div>

      <div className="relative flex flex-col items-center gap-[2vh] w-[25vw] h-[60vh] mt-[10vh] rounded-2xl bg-white">
        <h1 className="mt-[45vh] text-[3vw] font-bold">Fanta</h1>
      </div>

      <div className="relative flex flex-col items-center gap-[2vh] w-[25vw] h-[60vh] mt-[10vh] rounded-2xl bg-white">
        <img
          src="/Assets/lemon.webp"
          id="lemon"
          className="absolute top-[-40%] left-1/2 w-[25vw] -translate-x-1/2"
        />
        <img
          src="/Assets/pepsi.png"
          id="pepsi"
          className="absolute top-[-25%] left-1/2 w-[80%] -translate-x-1/2"
        />
        <h1 className="mt-[45vh] text-[3vw] font-bold">Pepsi</h1>
      </div>
    </div>
  );
}
