import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

export function ThreeDCardDemo() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation will trigger only once
    });
  }, []);

  return (
    <div className="flex gap-12 justify-center">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            data-aos="fade-up"
          >
            Launch stunning websits and apps in minute
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            data-aos="fade-up"
          >
            ~ no code,no hassle,just pure speed
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://i.pinimg.com/736x/7f/b5/c1/7fb5c1f781551999d54b387d79679b06.jpg"
              height="600"
              width="1000"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl" // reduced height
              alt="thumbnail"
              data-aos="fade-up"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-12"> {/* reduced spacing */}
            <CardItem
              translateZ={20}
              as="a"
              href=""
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              data-aos="fade-up"
            >
              Try now →
            </CardItem>

            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              data-aos="fade-up"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            data-aos="fade-up"
          >
            Make things float in air
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            data-aos="fade-up"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://i.pinimg.com/736x/cd/fc/89/cdfc893a1409ccc95f90c2449fb91d3f.jpg"
              height="600"
              width="1000"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl" // reduced height
              alt="thumbnail"
              data-aos="fade-up"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-12"> {/* reduced spacing */}
            <CardItem
              translateZ={20}
              as="a"
              href="https://twitter.com/mannupaaji"
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              data-aos="fade-up"
            >
              Try now →
            </CardItem>

            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              data-aos="fade-up"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
