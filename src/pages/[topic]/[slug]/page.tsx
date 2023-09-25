"use client";

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/posts/getPostMetadata";
import Head from "next/head";
import { useRouter } from "next/router";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useState,useEffect } from "react";
// Importing background image

// console.log(bg.src);


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
const MyLink = ({ children, ...props }) => <a {...props}>{children}</a>

const MyImage = ({ alt = "Alt", ...props }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) {
    return null;
  }
  return (
    <div className="mt-2 mb-6">
      <img alt={alt} {...props} />
      <p className="text-center text-[#babec3] font-sans text-sm">{alt}</p>
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
  return (
    <div className="codeBlock my-6">
      <SyntaxHighlighter language={language} style={atomOneDark} className="rounded-xl">
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

  const possibleSlugs = posts.map((post) => post.slug);
  const selectedSlug = router.query.slug;
  console.log("Selected slug: ", selectedSlug)

  const groupedPosts = posts.reduce((acc, post) => {
    if (!acc[post.topic]) {
      acc[post.topic] = [];
    }
    acc[post.topic].push(post);
    return acc;
  }, {});

  return (
    <div className="sidebar-bkg w-[20vw] py-4 px-6">
      <ul>
        {Object.keys(groupedPosts).map((topic) => (
          <li key={topic} className="mb-4">
            <div className="text-white font-bold text-lg py-1">{topic}</div>
            <ul>
              {groupedPosts[topic].map((post) => (
                <li key={post.slug}>
                  <button
                    onClick={() =>router.push(`/${post.topic}/${post.slug}/page`)}
                    className={`w-full text-left text-[#9aa4e7] hover:text-[#a591ee]  ${ post.slug === selectedSlug ? "font-semibold text-xl" : "font-medium text-lg"}`}
                  >
                    {post.slug}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};



const getPostContent = (slug: string,topic: string) => {
  const folder = "posts/";
  const subfolder = `${topic}/`;
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
    return {
      params: {
        slug: slug,
        topic: topic,
      },
    }
  });

  return {
    paths: mapped,
    fallback: false,
  };
};



const PostPage = (props: any) => {
  return (
    <div className="">
    <div className="flex">
      <Sidebar posts={props.posts} />

      <div className="flex-1 z-20 bg-[#111213]">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="">
        <div className="text-center w-[33%] mx-auto text-white font-bold text-4xl mt-6 mb-12">{props.title}</div>
      </div>
      <article className="prose text-white mt-10 text-lg min-h-[30vh] mx-auto max-w-[60vw]">
        <Markdown
          options={{
            overrides: {
              h1: { component: MyHeading1,props: {className: 'text-4xl font-bold text-white mb-3',},},
              h2: { component: MyHeading2,props: {className: 'text-3xl font-bold text-white mb-3',},},
              h3: { component: MyHeading3,props: {className: 'text-2xl font-bold text-white mb-3',},},
              h4: { component: MyHeading4,props: {className: 'text-xl font-bold text-white mb-3',},},
              h5: { component: MyHeading5,props: {className: 'text-lg font-bold text-white mb-3',},},
              h6: { component: MyHeading6,props: {className: 'text-base font-bold text-white mb-3',},},
              ul: { component: MyList,props: {className: 'marker:text-white list-disc list-inside mt-1 mb-4',},},
              ol: { component: MyOrderedList,props: {className: 'list-decimal ',},},
              li: { component: MyListItem,props: {className: 'text-[#babec3] font-sans',},},
              p: { component: MyParagraph,props: {className: 'text-[#babec3] font-sans',},},
              em: { component: MyEmphasis,props: {className: 'text-[#babec3] ',},},
              strong: { component: MyStrong,props: {className: 'text-[#babec3] ',},},
              del: { component: MyDelete,props: {className: 'text-[#babec3] ',},},
              a: { component: MyLink,props: {className: 'text-[#9aa4e7] hover:text-[#a591ee] font-semibold'},},
              img: { component: MyImage,props: {className: 'w-[75%] mx-auto mt-2 rounded-xl',},},
              blockquote: { component: MyBlockQuote,props: {className: 'border-l-4 border-gray-400 dark:border-gray-600 italic my-8 pl-8',},},
              code: { component: MyCode,props: {className: 'cd text-[#babec3] ',},},
              span: { component: MyCode,props: {className: 'sp text-[#babec3] ',},},
              table: { component: MyTable,props: {className: 'table-auto w-full my-10 rounded-xl bg-transparent border border-white',},},
              thead: { component: MyTableHead,props: {className: 'bg-transparent',},},
              tbody: { component: MyTableBody,props: {className: 'bg-transparent',},},
              tr: { component: MyTableRow,props: {className: 'border-b bg-transparent border-white',},},
              td: { component: MyTableData,props: {className: 'border px-4 py-2 text-[#babec3] font-sans',},},
              th: { component: MyTableHeader,props: {className: 'border px-4 py-2 text-white font-semibold text-xl dark:bg-transparent',},},
              hr: { component: MyHorizontalRule,props: {className: 'my-8',},},
              pre: { component: PreBlock},
            },
          }}
        >
          {props.content}
        </Markdown>
      </article>
      <div className="wrapper-bg absolute top-0 left-[20vw] w-[79%] h-full -z-20"/>
      <div className="styled-bg-clr absolute top-0 left-[20vw] w-[79%] h-full -z-30"/>
    </div>
    </div>
    </div>
  );
};


export const getStaticProps = async ({ params }: any) => {
  const postData = getPostContent(params.slug, params.topic);
  const posts = getPostMetadata();
  const mapped = posts.map((post) => {
    const directory_path = post.directory_path.split('/');
    const slug = directory_path.pop();
    const topic = directory_path[0];
    return {
        slug: slug,
        topic: topic,
    }
  });

  const props = {
    title: postData.data.title,
    date: postData.data.date,
    content: postData.content,
    subtitle: postData.data.subtitle,
    posts: mapped,
    topic: params.topic,
  };
  return {
    props
  };
}

export default PostPage;



/*


*/