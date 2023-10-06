"use client";

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/posts/getPostMetadata";
import Head from "next/head";
import { useRouter } from "next/router";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { motion, AnimatePresence } from "framer-motion"; 
import { useState,useEffect } from "react";
import { FiCopy } from 'react-icons/fi';
import { FcCheckmark } from 'react-icons/fc';



const MyElement = ({ children, ...props }) => <div {...props}>{children}</div>
const MyTable = ({ children, ...props }) => <table {...props}>{children}</table>
const MyTableHead = ({ children, ...props }) => <thead {...props}>{children}</thead>
const MyTableBody = ({ children, ...props }) => <tbody {...props}>{children}</tbody>
const MyTableRow = ({ children, ...props }) => <tr {...props}>{children}</tr>
const MyTableData = ({ children, ...props }) => <td {...props}>{children}</td>
const MyTableHeader = ({ children, ...props }) => <th {...props}>{children}</th>
const MyHeading1 = ({ children, ...props }) => <h1 {...props}>{children}</h1>
const MyHeading2 = ({ children, ...props }) => <h2 {...props}>{children}</h2>
const MyHeading3 = ({ children, ...props }) => <h3 {...props}>{children}</h3>
const MyHeading4 = ({ children, ...props }) => <h4 {...props}>{children}</h4>
const MyHeading5 = ({ children, ...props }) => <h5 {...props}>{children}</h5>
const MyHeading6 = ({ children, ...props }) => <h6 {...props}>{children}</h6>
const MyParagraph = ({ children, ...props }) => <p {...props}>{children}</p>
const MyEmphasis = ({ children, ...props }) => <em {...props}>{children}</em>
const MyStrong = ({ children, ...props }) => <strong {...props}>{children}</strong>
const MyDelete = ({ children, ...props }) => <del {...props}>{children}</del>
const MyLink = ({ children, ...props }) => <a {...props} target="_blank">{children}</a>

const MyImage = ({ alt = "Alt", ...props }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) {
    return null;
  }
  return (
    <div className="mt-4 mb-6">
      <img alt={alt} {...props} />
      <p className="mt-[5px] text-center text-[#babec3] font-sans text-sm">{alt}</p>
    </div>
  );
};
const MyList = ({ children, ...props }) => <ul {...props}>{children}</ul>
const MyOrderedList = ({ children, ...props }) => <ol {...props}>{children}</ol>
const MyListItem = ({ children, ...props }) => <li {...props}>{children}</li>
const MyBlockQuote = ({ children, ...props }) => <blockquote {...props}>{children}</blockquote>
const MyInlineCode = ({ children, ...props }) => <code {...props}>{children}</code>
const MyCode = ({ children, ...props }) => <pre {...props}>{children}</pre>
const MyHorizontalRule = ({ children, ...props }) => <hr {...props}>{children}</hr>


const CodeBlock = ({ className, children }) => {
  const language = className.replace("lang-", "").split(" ")[0].toLowerCase();
  const [elem,setElem] = useState(<FiCopy className="inline "/>);

  const [text, setText] = useState("Copy");

  const changeText = () => {
      setText("Copied!");
      setElem(<FcCheckmark className="inline "/>);
      setTimeout(() => {
        setText("Copy");
        setElem(<FiCopy className="inline "/>)
      }
    , 2000);
  }

  return (
    <div className="codeBlock mb-6 -mt-2">
      <div className="relative top-8 text-right pr-10 text-sm">
        <span className="mr-6">{language}</span>
        <motion.span
          className={` text-gray-200 ${text=="Copied!" ? "text-green-500 cursor-default" : "cursor-pointer"}`}
          onClick={() => {
            navigator.clipboard.writeText(children);
            changeText();
          }}
          animate={{
            color: text=="Copied!" ? "#22C55E" : "#FFFFFF" 
          }}
          transition={{ duration: 0.1 }} // Adjust the duration as needed
        >{elem}</motion.span>
      </div>
      <SyntaxHighlighter 
        language={language} 
        showLineNumbers={language!=="md" ? true : false}
        style={atomOneDark} 
        className={`rounded-md text-sm !py-4 !px-4 bggrad prevent-select ${language!=="md" ? "!px-10" : "!px-10"}}`}
        >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

const PreBlock = ({children, ...rest}) => {
  if ('type' in children) {
    return CodeBlock(children['props']);
  }
  return <h2 {...rest}>{"jiejfie"}</h2>;
};



const Sidebar = ({ posts }) => {
  const router = useRouter();

  const selectedTopic = router.query.topic;
  const selectedSubtopic = router.query.subtopic;
  const selectedSlug = router.query.slug;

  // State to keep track of expanded topics
  const [expandedTopics, setExpandedTopics] = useState([]);

  useEffect(() => {
    setExpandedTopics([selectedSubtopic]);
    // if (selectedSubtopic) {
    //   setExpandedTopics([selectedSubtopic]);
    // }
    // // adding all subtopics to expandedTopics
    // else {
      // const topics = posts.map((post) => post.subtopic);
      // setExpandedTopics(topics);
    // }
  }, [selectedSubtopic]);
    

  const toggleTopic = (topic) => {
    // setExpandedTopics([topic]);
    if (expandedTopics.includes(topic)) {
      setExpandedTopics(expandedTopics.filter((t) => t !== topic));
    } else {
      setExpandedTopics([...expandedTopics, topic]);
    }
  };

  const postsInTopic = posts.filter((post) => post.topic === selectedTopic);

  const groupedPosts = postsInTopic.reduce((acc, post) => {
    if (!acc[post.subtopic]) {
      acc[post.subtopic] = [];
    }
    acc[post.subtopic].push(post);
    return acc;
  }, {});

  return (
    <div className="sidebar-bkg w-[22vw] min-h-[90vh] overflow-y-auto  pt-4 scrollclass pb-20 px-6">
      <ul>
        {Object.keys(groupedPosts).map((topic) => (
          <motion.li 
            key={topic} 
            className={`my-3`}
          >
            <motion.div
              className={`font-bold text-md rounded-lg cursor-pointer bg-black bg-opacity-10 px-4 py-2 ${expandedTopics.includes(topic) ? 'text-white' : 'text-gray-300'}`}
              onClick={() => toggleTopic(topic)}
              animate={{
                color: expandedTopics.includes(topic) ? "#FFFFFF" : "#888888" 
              }}
              transition={{ duration: 0.5 }} // Adjust the duration as needed
            >
              {topic.split("-")[1]}
            </motion.div>
            {expandedTopics.includes(topic) && (
              <ul className="pl-4 py-2">
                {groupedPosts[topic].map((post) => (
                  <motion.li 
                    key={post.slug}
                    animate={{
                      color: (post.slug == selectedSlug && post.subtopic==selectedSubtopic) ? "#FFFFFF" : "#888888" 
                    }}
                    transition={{ duration: 0.2 }} // Adjust the duration as needed
                  >
                    <button
                      onClick={() =>{
                        router.push(`/${post.topic}/${post.subtopic}/${post.slug}/page`)}
                      }
                      className={`w-full text-left text-md my-1  hover:text-gray-200 h-max-content ${
                        (post.slug == selectedSlug && post.subtopic==selectedSubtopic) ? "font-semibold border-l-4 border-white pl-2" : "font-medium"
                      }`}
                    >
                      {post.slug.split("-")[1]}
                    </button>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};






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
    <div className="flex">
      <Sidebar posts={props.posts} />

      <div className="flex-1 z-20 bg-[#111213]">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="">
        <div className="text-center w-[40%] mx-auto text-white font-bold text-4xl mt-6 mb-12">{props.title}</div>
      </div>
      <article className="prose text-white my-10 text-lg min-h-[50vh] mx-auto max-w-[65vw]">
        <Markdown
          options={{
            overrides: {
              h1: { component: MyHeading1,props: {className: 'text-4xl font-bold text-white mt-5 mb-2',},},
              h2: { component: MyHeading2,props: {className: 'text-3xl font-bold text-white mt-5 mb-2',},},
              h3: { component: MyHeading3,props: {className: 'text-2xl font-bold text-white mt-5 mb-2',},},
              h4: { component: MyHeading4,props: {className: 'text-xl font-bold text-white mt-5 mb-2',},},
              h5: { component: MyHeading5,props: {className: 'text-lg font-bold text-white mt-5 mb-2',},},
              h6: { component: MyHeading6,props: {className: 'text-base font-bold text-white mt-5 mb-2',},},
              ul: { component: MyList,props: {className: 'marker:text-white list-disc list-inside mt-1 mb-4',},},
              ol: { component: MyOrderedList,props: {className: 'list-decimal list-inside marker:text-white  mt-1 mb-4 ',},},
              li: { component: MyListItem,props: {className: 'text-[#babec3] font-sans',},},
              p: { component: MyParagraph,props: {className: 'text-[#babec3] font-sans mb-1 prevent-select',},},
              em: { component: MyEmphasis,props: {className: 'text-[#babec3] ',},},
              strong: { component: MyStrong,props: {className: 'text-white font-semibold prevent-select',},},
              del: { component: MyDelete,props: {className: 'text-[#babec3] ',},},
              a: { component: MyLink,props: {className: 'text-[#9aa4e7] hover:text-[#a591ee] font-semibold'},},
              img: { component: MyImage,props: {className: 'w-[75%]  mx-auto mt-2 rounded-xl ',},},
              blockquote: { component: MyBlockQuote,props: {className: 'border-l-4 border-gray-400 dark:border-gray-600 italic my-8 pl-8',},},
              code: { component: MyCode,props: {className: 'cd text-[#babec3] ',},},
              span: { component: MyCode,props: {className: 'sp text-[#babec3] ',},},
              table: { component: MyTable,props: {className: 'table-fixed w-full mt-6 mb-10 rounded-xl bg-transparent border border-white',},},
              thead: { component: MyTableHead,props: {className: 'bggrad',},},
              tbody: { component: MyTableBody,props: {className: 'bg-transparent',},},
              tr: { component: MyTableRow,props: {className: 'border-b bg-transparent border-white',},},
              td: { component: MyTableData,props: {className: 'border px-4 py-2 text-[#babec3] font-sans align-top',},},
              th: { component: MyTableHeader,props: {className: 'border px-4 py-2 text-white font-semibold text-xl dark:bg-transparent',},},
              hr: { component: MyHorizontalRule,props: {className: 'my-8',},},
              pre: { component: PreBlock},
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

      <div className="wrapper-bg absolute top-0 left-[22vw] w-[75%] h-full -z-20"/>
      <div className="styled-bg-clr absolute top-0 left-[22vw] w-[75%] h-full -z-30"/>
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

  const prevPost = currentIndex > 0 ? mapped[currentIndex - 1] : null;
  const nextPost = currentIndex < mapped.length - 1 ? mapped[currentIndex + 1] : null;



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