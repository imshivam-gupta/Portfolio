import { LinkPreview } from "../ui/LinkPreview";
import { Timeline } from "../ui/Timeline";
import workData from "../../data/pageData/workData"; 
import { Cover } from "../ui/Cover";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { cn } from "../../../lib/utils";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans, IconBrandWhatsapp } from "@tabler/icons-react";
import { TextArea } from "../ui/TextArea";

const HireMe = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
      };
    return (
        <section id="hire" className="min-h-[100vh] w-full rounded-md bg-neutral-950 relative antialiased">
            <div className="mx-auto p-4">
                <h1 className="relative z-10 pt-10 pb-2 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Hire Me as a Freelancer
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 mb-6 text-lg text-center relative z-10">
                    Want to hire me as a freelancer? Let's discuss.
                    Drop your message and let's discuss about your project.
                    </p>
                    <div className="max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 py-2 md:py-2 shadow-input bg-white dark:bg-black">
                    <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Message</Label>
          <TextArea id="password" placeholder="••••••••" />
        </LabelInputContainer>
       
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
 
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
 
        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandWhatsapp className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Chat on Whatsapp
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
                    </div>
            </div>
        </section>
    );
};

export default HireMe;

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
   
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };