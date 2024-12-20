export const workData = {
    sectionTitle: "Work Experience",
    sectionDescription: "Here are some of the organizations I've worked with. I've been fortunate to work with some amazing people and learn from them.",
    workItems: [
        {
            role: "Software Engineer",
            companyUrl: "https://mysensei.co/",
            companyName: "My Sensei",
            tasks: ["Worked remotely on startup products and features.", "Developed and maintained scalable and secure web applications using TypeScript, React, Next.js, and Node.js.", "Collaborated with cross-functional teams to implement new features and improve user experiences.", "Participated in code reviews and contributed to team knowledge sharing."],
            tags: ["TypeScript", "React", "Next.js", "Node.js"],
            startDate: "Sep 2024",
            endDate: "Present"
        },
        {
            role: "Software Engineer Intern",
            companyUrl: "https://www.flipkart.com/",
            companyName: "Flipkart",
            tasks: ["Worked remotely on startup products and features.", "Developed and maintained scalable and secure web applications using TypeScript, React, Next.js, and Node.js.", "Collaborated with cross-functional teams to implement new features and improve user experiences.", "Participated in code reviews and contributed to team knowledge sharing."],
            tags: ["TypeScript", "React", "Next.js", "Node.js"],
            startDate: "May 2024",
            endDate: "July 2024"
        },
        {
            role: "Frontend Instructor",
            companyUrl: "https://acciojob.com/",
            companyName: "AccioJob",
            tasks: ["Taught frontend development to 100+ students.", "Mentored students to help them learn and grow."],
            tags: ["TypeScript", "React", "Next.js", "Node.js"],
            startDate: "March 2024",
            endDate: "May 2024"
        },
        {
            role: "Teaching Assistant",
            companyUrl: "https://www.codingninjas.com/",
            companyName: "Coding Ninjas",
            tasks: ["Taught Data Structures and Algorithms to 100+ students.", "Mentored students to help them learn and grow."],
            tags: ["TypeScript", "React", "Next.js", "Node.js"],
            startDate: "Jan 2024",
            endDate: "March 2024"
        }
    ]
}


export const HeroContent = {
    introPart1: "I am a Software Developer at ",
    introPart2: ", with a passion for solving complex problems and building products that make a real difference, particularly in",
    currentFocus: "Currently, I'm trying to improve my skills in Problem Solving Skills and Machine Learning.",
    location: "Bangalore, 2024",
    profileImage: "/images/profile/me.jpg",
    words: ["machine learning", "web development", "app development"],
    mainText: "Hey, I am Shivam Gupta",
    additionalText: "I'm committed to open-source contributions and constantly expanding my skills.",
    workButtonTitle: "Show my work",
    contactButtonTitle: "Contact me",
    profileAltText: "Shivam, standing on a cliff facing the Himalayas.",
    para1: "I am a  Software Engineer passionate about scalable systems, backend optimization, and mentoring developers.",
    para2: "At Flipkart, I improved data compression and workflow automation, cutting dataset sizes by 99% and boosting efficiency by 30%. I also led an A/B testing initiative, increasing user engagement by 25%.",
    para3: "As an intern at MySensei, I built a high-accuracy RAG-based chatbot and resolved concurrency issues, enabling smooth management of 100+ conversations. I optimized SSR performance and introduced real-time monitoring.",
    para4: "Previously, as a Teaching Assistant at Coding Ninjas, I guided students in mastering Data Structures and Algorithms, achieving a 4.9/5 satisfaction rating and leading workshops on Node.js.",
    para5: "I contribute to open-source projects and enjoy solving real-world challenges while sharing knowledge through mentorship and workshops."
};

const blogBaseUrl = "http://localhost:3000/blog/";

export const projects = [
    {
        title: "Why Low Level Design Matters?",
        description:
            "Understanding the importance of low level design in software development. Why it matters and how to do it. How to think through the design of a system at a higher level of abstraction.",
        link: `${blogBaseUrl}lld`,
    },
    {
        title: "Why Redis?",
        description:
            "A collection of reasons why Redis is a powerful tool for building scalable and performant systems.",
        link: `${blogBaseUrl}why-redis`,
    },
    {
        title: "Server Side Rendering vs Static Site Generation",
        description: "A comparison of server side rendering and static site generation. How they work and when to use them. The trade offs and the benefits.",
        link: `${blogBaseUrl}server-side-rendering-vs-static-site-generation`,
    },
    {
        title: "Segment Tree",
        description:
            "A data structure that allows for efficient range queries and updates. How it works and how to implement it.",
        link: `${blogBaseUrl}segment-tree`,
    },
    {
        title: "Graph Databases",
        description:
            "A comparison of graph databases and relational databases. How they work and when to use them.",
        link: `${blogBaseUrl}graph-databases`,
    },
    {
        title: "Handling Big Data",
        description:
            "A collection of techniques and best practices for handling big data. How to process and analyze large datasets efficiently",
        link: `${blogBaseUrl}handling-big-data`,
    },
];
