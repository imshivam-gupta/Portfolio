import { LinkPreview } from "../ui/LinkPreview";
import { Timeline } from "../ui/Timeline";
import workData from "../../data/pageData/workData"; 
import { Cover } from "../ui/Cover";

const Work = () => {
    const data = workData.workItems.map((item, i) => ({
        title: `${item.startDate} - ${item.endDate}`,
        content: <WorkItem {...item}/>
    }));

    return (
        <section id="work" className="min-h-[100vh] w-full rounded-md bg-neutral-950 relative antialiased">
            <div className="mx-auto p-4">
                <h1 className="relative z-10 pt-10 pb-2 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    {workData.sectionTitle}
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
                    {workData.sectionDescription}
                </p>
                <Timeline data={data}/>
            </div>
        </section>
    );
};

export default Work;

const WorkItem = ({role, companyUrl, companyName, tasks, tags}) => {
    return (
        <div>
            <h1 className="relative z-10 pb-4 text-lg md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left font-sans font-bold">
                {role} @ <LinkPreview url={companyUrl} openInNewTab={true}><Cover>{companyName}</Cover></LinkPreview>
            </h1>
            <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-400 text-md mb-6">
                {tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
            <div className="flex gap-1.5 flex-wrap">
                {tags.map((tag, i) => (
                    <span key={i} className="text-zinc-500 uppercase tracking-widest dark:text-zinc-400 text-[10px] font-medium border dark:border-zinc-600 rounded-md px-1 py-1 leading-none">
                    {tag}
                </span>
                ))}
            </div>
        </div>
    );
};