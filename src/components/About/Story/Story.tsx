import styles from "./Story.module.scss";
import React from "react";

import { Patua_One } from "@next/font/google";

import Image from "next/image";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const AboutStory: React.FC = () => {
  return (
    <section className={styles.story}>
      <div className={"container"}>
        <h2 className={`${styles.title} ${patuaOne.className} mb-14`}>
          A background <br />
          story
        </h2>
        <div className={"mb-10 md:flex md:gap-5 lg:gap-0 lg:items-center"}>
          <div className={"px-5 md:px-0 md:w-1/2 xl:pr-32"}>
            <p className={`${styles.text} mb-9`}>
              Our company specializes in the manufacture of surfboards, using
              rare equipment that allows us to produce excellent surfboards in
              short periods of time. But what is Frigate really?
            </p>
            <p className={`${styles.text} mb-9 md:mb-0`}>
              Frigate derives its name from the Spanish word “fragata”.
              Originally a small swift vessel, it was a maneuverable ship
              intended to be used in scouting, escort and patrol roles.
              Throughout the history of warships there were numerous ships that
              became famous but one frigate became a legend, its name was His
              Majesty’s Ship “Dolphin”.
            </p>
          </div>

          <div className={`${styles.image} md:w-1/2`}>
            <Image
              alt="serf boards"
              src={"/images/story/1mobile.jpg"}
              width={500}
              height={475}
              sizes="90vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className={"md:hidden"}
            />
            <Image
              alt="serf boards"
              src={"/images/story/1desk.jpg"}
              width={1000}
              height={600}
              sizes="90vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className={"hidden md:block"}
            />
          </div>
        </div>

        <div className={"md:flex md:gap-5 lg:items-center lg:gap-0"}>
          <div className={"px-5 md:px-0 md:w-1/2 xl:pl-28"}>
            <p className={`${styles.text} mb-9`}>
              “Dolphin” was the first ship to make two circumnavigations of the
              world under the successive commands of John Byron and Samuel
              Wallis. The first circumnavigation was completed in less than two
              years, this was the first time anything like that took place in
              the sea. HMS “Dolphin” served the crew very well and stood all the
              difficulties it faced throughout the service. During two
              circumnavigations of the world “Dolphin” allowed its captains to
              discover many new islands and take them in possession of the
              crown.
            </p>
            <p className={`${styles.text} mb-9 md:mb-0`}>
              We associate our surfboards with the “Dolphin-like” frigates -
              fast, lightweight and maneuverable. Just like the HMS “Dolphin”
              served its purpose truthfully, our surfboards will serve you in
              your voyages.
            </p>
          </div>

          <div className={`${styles.image} md:w-1/2 md:order-first`}>
            <Image
              alt="serf boards"
              src={"/images/story/2mobile.jpg"}
              width={500}
              height={475}
              sizes="90vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className={"md:hidden"}
            />
            <Image
              alt="serf boards"
              src={"/images/story/2desk.png"}
              width={1000}
              height={600}
              sizes="80vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className={"hidden md:block"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
