"use client";

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/posts/getPostMetadata";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import {components} from "../../../../components/postcomponents/CustomElements";
import VerticalSidebar  from "../../../../components/postcomponents/VerticalSidebar";
import HorizontalSidebar  from "../../../../components/postcomponents/HorizontalSidebar";









const getPostContent = (slug: string,topic: string, subtopic:string) => {
  const folder = "posts/";
  const subfolder = `${topic}/${subtopic}/`;
  const file = `${folder}${subfolder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const getStaticPaths = async () => {
  const posts = getPostMetadata();

  const mapped = posts.map((post) => {
    const directory_path = post.directory_path.split('/');
    const slug = directory_path.pop();
    const topic = directory_path[0];
    const subtopic = directory_path[1];
    // console.log(`post: ${slug} ${topic} ${subtopic}`);
    return {
      params: {
        slug: slug,
        topic: topic,
        subtopic: subtopic,
      },
    }
  });

  return {
    paths: mapped,
    fallback: false,
  };
};



const PostPage = (props: any) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Adjust the scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="">
      <HorizontalSidebar posts={props.posts} />
    <div className="flex">
      <VerticalSidebar posts={props.posts} />

      <div className="flex-1 z-20 bg-[#111213]">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="">
        <div className="text-center w-[40%] mx-auto text-white font-bold text-4xl mt-6 mb-12">{props.title}</div>
      </div>
      <article className="mdcl prose text-white my-10 text-lg min-h-[50vh] mx-auto max-w-[65vw]">
        <Markdown
          options={{
            overrides: {
              h1: { component: components.MyHeading1,props: {className: 'text-4xl font-bold text-white mt-5 mb-2',},},
              h2: { component: components.MyHeading2,props: {className: 'text-3xl font-bold text-white mt-5 mb-2',},},
              h3: { component: components.MyHeading3,props: {className: 'text-2xl font-bold text-white mt-5 mb-2',},},
              h4: { component: components.MyHeading4,props: {className: 'text-xl font-bold text-white mt-5 mb-2',},},
              h5: { component: components.MyHeading5,props: {className: 'text-lg font-bold text-white mt-5 mb-2',},},
              h6: { component: components.MyHeading6,props: {className: 'text-base font-bold text-white mt-5 mb-2',},},
              ul: { component: components.MyList,props: {className: 'marker:text-white list-disc list-inside mt-1 mb-4',},},
              ol: { component:components.MyOrderedList,props: {className: 'list-decimal list-inside marker:text-white  mt-1 mb-4 ',},},
              li: { component: components.MyListItem,props: {className: 'text-[#babec3] font-sans',},},
              p: { component: components.MyParagraph,props: {className: 'text-[#babec3] font-sans mb-1 prevent-select',},},
              em: { component: components.MyEmphasis,props: {className: 'text-[#babec3] ',},},
              strong: { component: components.MyStrong,props: {className: 'text-white font-semibold prevent-select',},},
              del: { component: components.MyDelete,props: {className: 'text-[#babec3] ',},},
              a: { component: components.MyLink,props: {className: 'text-[#9aa4e7] hover:text-[#a591ee] font-semibold'},},
              img: { component: components.MyImage,props: {className: 'w-[75%]  mx-auto mt-2 rounded-xl ',},},
              blockquote: { component: components.MyBlockQuote,props: {className: 'border-l-4 border-gray-400 dark:border-gray-600 italic my-8 pl-8',},},
              code: { component:components.MyCode,props: {className: 'cd text-[#babec3] ',},},
              span: { component: components.MyCode,props: {className: 'sp text-[#babec3] ',},},
              table: { component: components.MyTable,props: {className: 'table-fixed w-full mt-6 mb-10 rounded-xl',},},
              thead: { component: components.MyTableHead,props: {className: 'bggrad rounded-xl',},},
              tbody: { component: components.MyTableBody,props: {className: 'bg-[#25252B]',},},
              tr: { component: components.MyTableRow,props: {className: ' bg-transparent border-b border-2 border-[#111213] text-[#b3b3b3]  ',},},
              td: { component: components.MyTableData,props: {className: 'px-4 py-2  font-sans align-top    ease-in-out duration-300 hover:text-white hover:bg-[#2e2e36]',},},
              th: { component: components.MyTableHeader,props: {className: 'py-2 text-white font-semibold text-lg text-left px-4',},},
              hr: { component:components.MyHorizontalRule,props: {className: 'my-8',},},
              pre: { component: components.PreBlock},
            },
          }}
        >
          {props.content}
        </Markdown>
      </article>
      <div className="flex flex-row w-[80%] mx-auto justify-between gap-x-2 mb-10">
        {props.prevPost && (
          <div className="next-page-cont cursor-pointer text-white font-bold" onClick={()=>{router.push(`/${props.prevPost.topic}/${props.prevPost.subtopic}/${props.prevPost.slug}/page`)}}>
            &larr; Previous 
            <span className="text-[#9aa4e7]">{props.prevPost.slug.split("-")[1]}</span>
          </div>)
        }
        
        {props.nextPost && (
          <div className="next-page-cont cursor-pointer text-white font-bold" onClick={()=>{router.push(`/${props.nextPost.topic}/${props.nextPost.subtopic}/${props.nextPost.slug}/page`)}}>
            Next &rarr;
            <span className="text-[#9aa4e7]">{props.nextPost.slug.split("-")[1]}</span>
          </div>)
        }
      </div>
      
      {/* display only if screen greater than lg */}
  
      <div className="">
        <div className="lg:hidden block wrapper-bg absolute top-0 left-[22vw] w-[75%] h-full -z-20"/>
        <div className="lg:hidden block styled-bg-clr absolute top-0 left-[22vw] w-[75%] h-full -z-30"/>
      </div>

    

      <div
      className={`fixed right-12 bottom-12 text-white text-2xl cursor-pointer` }
      onClick={scrollToTop}
    >
         <button className={`back-to-top ${isVisible ? 'show' : ''}`} type="button"></button>
      </div>
    </div>
    </div>
    </div>
  );
};


export const getStaticProps = async ({ params }: any) => {

  const postData = getPostContent(params.slug, params.topic,params.subtopic);
  const posts = getPostMetadata();

  const mapped = posts.map((post) => {
    const directory_path = post.directory_path.split('/');
    const slug = directory_path.pop();
    const topic = directory_path[0];
    const subtopic = directory_path[1];

    return {
      slug: slug,
      topic: topic,
      subtopic: subtopic,
    }
  });

  // mapped.forEach((post,index) => {
  //   console.log(`post ${index}: ${post.slug} ${post.topic} ${post.subtopic}`);
  // });

  const currentIndex = mapped.findIndex((post) => (post.slug === params.slug && post.topic === params.topic && post.subtopic === params.subtopic));

  // console.log(`current index: ${currentIndex}`);

  let prevPost = currentIndex > 0 ? mapped[currentIndex - 1] : null;
  let nextPost = currentIndex < mapped.length - 1 ? mapped[currentIndex + 1] : null;
  
  if(prevPost && prevPost.topic !== params.topic){
    prevPost = null;
  }

  if(nextPost && nextPost.topic !== params.topic){
    nextPost = null;
  }


  const props = {
    title: postData.data.title || "Sample title",
    date: postData.data.date || "Sample date",
    content: postData.content || "Sample content",
    subtitle: postData.data.subtitle || "Sample subtitle",
    posts: mapped,
    topic: params.topic,
    prevPost,
    nextPost,
  };

  return {props};
}

export default PostPage;