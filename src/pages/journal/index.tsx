import { MainLayout } from "@/layouts/MainLayout";
import Title from "@/components/Shared/Title/Title";
import { journals } from "@/data/journals";
import JournalCard from "@/components/Journal/Card/JournalCard";

export default function Journal() {
  return (
    <MainLayout>
      <>
        <div className={"container pt-24 pb-16 xl:pb-24"}>
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
    </MainLayout>
  );
}
