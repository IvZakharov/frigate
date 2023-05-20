import Title from "@/components/Shared/Title/Title";
import { journals } from "@/data/journals";
import JournalCard from "@/components/Journal/Card/JournalCard";

export default function Journal() {
  return (
    <>
      <div className={"container mt-16 mb-7 md:mt-8 md:mb-8 xl:mt-20 xl:mb-20"}>
        <Title variant={"h1"}>Journal</Title>
      </div>

      <div className={"container"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-7"}>
          {journals.map((journal, idx) => (
            <JournalCard
              key={journal.title + idx}
              title={journal.title}
              thumbnail={journal.thumbnail}
              date={journal.date}
              description={journal.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
