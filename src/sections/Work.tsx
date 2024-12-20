import { LinkPreview } from "@/components/LinkPreview";
import { Timeline } from "@/components/Timeline";
import { workData } from "@/lib/data";
import { Cover } from "@/components/Cover";
import Tag from "@/components/Tag";

interface WorkItemData {
  role: string;
  companyUrl: string;
  companyName: string;
  tasks: string[];
  tags: string[];
  startDate: string;
  endDate: string;
}

const Work = () => {
  const data = workData.workItems.map((item: WorkItemData, i: number) => ({
    title: `${item.startDate} - ${item.endDate}`,
    content: <WorkItem {...item} />,
  }));

  return (
    <section
      id="work"
      className="min-h-[100vh] w-full rounded-md bg-neutral-950 relative antialiased"
    >
      <div className="mx-auto p-4">
        <h1 className="relative z-10 pt-10 pb-2 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          {workData.sectionTitle}
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
          {workData.sectionDescription}
        </p>
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Work;

interface WorkItemProps {
  role: string;
  companyUrl: string;
  companyName: string;
  tasks: string[];
  tags: string[];
}

const WorkItem = ({ role, companyUrl, companyName, tasks, tags }: WorkItemProps) => {
  return (
    <div>
      <h1 className="relative z-10 pb-4 text-lg md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left font-sans font-bold">
        {role} @{" "}
        <LinkPreview url={companyUrl} openInNewTab={true}>
          <Cover>{companyName}</Cover>
        </LinkPreview>
      </h1>
      <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-400 text-md mb-6">
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <div className="flex gap-1.5 flex-wrap">
        {tags.map((tag, i) => (
          <Tag key={i} tag={tag} />
        ))}
      </div>
    </div>
  );
};
