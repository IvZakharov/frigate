import Hero from "@/components/About/Hero/AboutHero";
import Story from "@/components/About/Story/Story";
import Documents from "@/components/About/Documents/Documents";
import Crew from "@/components/Crew/Crew";

export default function AboutUsPage() {
  return (
    <>
      <Hero />
      <div className={"mb-16"}>
        <Story />
      </div>

      <div className={"hidden md:block md:mb-14 xl:mb-32"}>
        <Documents />
      </div>

      <div className={"mb-14 xl:mb-32"}>
        <Crew />
      </div>
    </>
  );
}
