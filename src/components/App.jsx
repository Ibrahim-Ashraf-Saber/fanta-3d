import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#t1",
        start: "top 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to("#fanta", { x: "-30vw", y: "100vh", rotate: 10 });
    tl.to(
      "#orange-cut",
      {
        top: "160%",
        left: "23%",
      },
      "<"
    );
    tl.to(
      "#orange",
      {
        width: "15%",
        top: "160%",
        right: "10%",
      },
      "<"
    );
    tl.to(
      "#leaf",
      {
        top: "110%",
        rotate: "130deg",
        left: "70%",
      },
      "<"
    );
    tl.to(
      "#leaf2",
      {
        top: "110%",
        rotate: "130deg",
        left: "0%",
      },
      "<"
    );

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#t2",
        start: "top 80%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl2.to("#fanta", { x: "0", y: "190vh", rotate: 0, scale: 0.8 });
    tl2.to(
      "#orange-cut",
      {
        top: "210%",
        left: "42.5%",
        scale: 1.3,
      },
      "<"
    );
    tl2.from(
      "#lemon",
      {
        scale: 0,
        y: 20,
      },
      0
    );
    tl2.from(
      "#coca",
      {
        rotate: -30,
      },
      0
    );
    tl2.from(
      "#pepsi",
      {
        rotate: 30,
      },
      0
    );
  });

  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <p className="p-3 font-bold text-center text-white bg-red-950">
        Made With ❤️ By <sapn className="text-yellow-500">Ibrahim Ashraf</sapn>
      </p>
    </div>
  );
}
