"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { getBlob, ref } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { serialize } from 'next-mdx-remote/serialize';
import MDX from "@/components/MDX";

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
        blogname: string; // dynamic parameter from the URL
    }>;
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
    const [markdownContent, setMarkdownContent] = useState<any>(null); // State to hold the serialized markdown
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [blogname, setBlogname] = useState<string>("");

    useEffect(() => {
        const fetchParams = async () => {
            try {
                const unwrappedParams = await params; // Await and unwrap params promise
                setBlogname(unwrappedParams.blogname); // Set blogname after unwrapping
            } catch (error) {
                console.error("Error fetching params:", error);
            }
        };

        fetchParams();
    }, [params]);

    useEffect(() => {
        if (!blogname) return;

        const fetchMarkdown = async () => {
            try {
                const mdFileRef = ref(storage, `blogs/${blogname}.md`);
                const contentBlob = await getBlob(mdFileRef);

                const reader = new FileReader();
                reader.onloadend = async () => {
                    const markdown = reader.result as string;
                    const mdxSource = await serialize(markdown); // Serialize markdown content to MDX
                    setMarkdownContent(mdxSource); // Set the serialized MDX content
                    setLoading(false);
                };

                reader.readAsText(contentBlob);
            } catch (error) {
                console.error("Error fetching markdown file:", error);
                setLoading(false);
            }
        };

        fetchMarkdown();
    }, [blogname]);

    return (
        <>
            <Head>
                <title>{blogname} | Shivam Gupta Blog</title>
                <meta name="description" content={`Shivam Gupta's Blog Post on ${blogname}`} />
            </Head>

            <div className="mt-20">
                {loading ? <SkeletonLoader /> : <MDX source={markdownContent} />}
            </div>
        </>
    );
};

export default BlogPost;
