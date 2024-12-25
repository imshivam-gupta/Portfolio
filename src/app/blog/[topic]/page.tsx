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
        <>
            <Head>
                <title>{blogname} | Shivam Gupta Blog</title>
                <meta name="description" content={`Shivam Gupta's Blog Post on ${blogname}`} />
            </Head>

            <h1 className="text-4xl font-bold text-center mt-20">
                {blogname.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
            </h1>

            <TracingBeam className="px-4">
                <div className="mx-auto py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8">
                    {[...Array(10)].map((_, index) => (
                        <BlogCard key={index} />
                    ))}
                </div>
            </TracingBeam>

            <div className="mt-20">
                {loading ? <SkeletonLoader /> : <MDX source={markdownContent} />}
            </div>

            <div className="mt-20">
                {/* Render fetched folder data */}
                <pre>{JSON.stringify(foldersData, null, 2)}</pre>
            </div>
        </>
    );
};

export default BlogPost;
