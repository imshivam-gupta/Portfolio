"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { getStorage, ref, listAll, getDownloadURL, getBlob } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { serialize } from 'next-mdx-remote/serialize';
import MDX from "@/components/MDX";
import { BlogCard } from "@/components/Card";
import { TracingBeam } from "@/components/TracingBeam";

// Skeleton Loader Component
const SkeletonLoader = () => (
    <div className="skeleton-loader">
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
    </div>
);

const data = [
    {
        title: "Dynamic Programming",
        description: "Learn Dynamic Programming from scratch",
        image: "/images/dynamic-programming.jpg",
        position: 1,
        slug: "dynamic_programming",
        blogs: [
            {
                title: "Introduction to Dynamic Programming",
                description: "Learn the basics of Dynamic Programming",
                image: "/images/dynamic-programming.jpg",
                position: 1,
                slug: "introduction_to_dynamic_programming",
            },
            {
                title: "Fibonacci Series",
                description: "Learn about Fibonacci Series in Dynamic Programming",
                image: "/images/dynamic-programming.jpg",
                position: 2,
                slug: "fibonacci_series",
            },
            {
                title: "0/1 Knapsack Problem",
                description: "Learn about 0/1 Knapsack Problem in Dynamic Programming",
                image: "/images/dynamic-programming.jpg",
                position: 3,
                slug: "knapsack_problem",
            },
        ],
    },
    {
        title: "Graph Theory",
        description: "Learn Graph Theory from scratch",
        image: "/images/graph-theory.jpg",
        position: 2,
        slug: "graph_theory",
        blogs: [
            {
                title: "Introduction to Graph Theory",
                description: "Learn the basics of Graph Theory",
                image: "/images/graph-theory.jpg",
                position: 1,
                slug: "introduction_to_graph_theory",
            },
            {
                title: "Breadth First Search",
                description: "Learn about Breadth First Search in Graph Theory",
                image: "/images/graph-theory.jpg",
                position: 2,
                slug: "breadth_first_search",
            },
            {
                title: "Depth First Search",
                description: "Learn about Depth First Search in Graph Theory",
                image: "/images/graph-theory.jpg",
                position: 3,
                slug: "depth_first_search",
            },
        ],
    }
];

// Data rendering component
const RenderData = ({ data }) => {
    return (
        <div className="mt-20">
            {data.map((topic) => (
                <div key={topic.slug} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>
                    <p className="text-gray-500">{topic.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {topic.blogs.map((blog) => (
                            <BlogCard
                                key={blog.slug}
                                title={blog.title}
                                description={blog.description}
                                image={blog.image}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

interface BlogPostProps {
    params: Promise<{
        topic: string; // dynamic parameter from the URL
    }>;
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
    const [markdownContent, setMarkdownContent] = useState<any>(null); // State to hold the serialized markdown
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [blogname, setBlogname] = useState<string>("");
    const [foldersData, setFoldersData] = useState<any[]>([]); // State to hold structured data from Firebase

    useEffect(() => {
        const fetchParams = async () => {
            try {
                const unwrappedParams = await params; // Await and unwrap params promise
                setBlogname(unwrappedParams.topic); // Set blogname after unwrapping
            } catch (error) {
                console.error("Error fetching params:", error);
            }
        };

        fetchParams();
    }, [params]);

    useEffect(() => {
        const fetchFolderData = async () => {
            try {
                const folderRef = ref(storage, `courses/${blogname}`);
                const folderList = await listAll(folderRef); 
                
                const sections = await Promise.all(
                    folderList.prefixes.map(async (folder) => {
                        const folderName = folder.name.split("/").pop();
                        const folderMDFiles = await listAll(folder);
                        
                        // Filter only MD files and map them to their full path
                        const mdFiles = folderMDFiles.items
                            .filter((file) => file.name.endsWith('.md')) // Only consider .md files
                            .map((file) => file.fullPath); // Get the path to the MD file
    
                        return { foldername: folderName, mdFiles }; // Return the folder and its MD files
                    })
                );
    
                setFoldersData(sections); // Set the array of sections and their MD files into state
            } catch (error) {
                console.error("Error fetching folder data:", error);
            }
        };
    
        fetchFolderData();
    }, [blogname]);
    
    return (
        <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] ">
            <Head>
                <title>{blogname} | Shivam Gupta Blog</title>
                <meta name="description" content={`Shivam Gupta's Blog Post on ${blogname}`} />
            </Head>

            <h1 className="text-4xl font-bold text-center py-20">
                {blogname.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
            </h1>

            <TracingBeam className="px-4">
                <h2 className="text-2xl font-bold mb-8">Dynamic Programming</h2>
                <div className="mx-auto pb-20 grid grid-cols-1 gap-y-4">
                    {[...Array(10)].map((_, index) => (
                        <div
                            className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition duration-200"
                            key={index}
                        >
                            <h3 className="text-lg font-semibold text-gray-100">Lesson {index + 1}</h3>
                            <p className="text-gray-400 mt-2">Introduction to Dynamic Programming</p>
                        </div>
                    ))}
                </div>
            </TracingBeam>

            <div className="mt-20">
                {loading ? <SkeletonLoader /> : <MDX source={markdownContent} />}
            </div>

            <RenderData data={data} />

            <div className="mt-20">
                {/* Render fetched folder data */}
                <pre>{JSON.stringify(foldersData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default BlogPost;
