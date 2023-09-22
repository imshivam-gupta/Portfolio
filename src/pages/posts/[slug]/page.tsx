import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/posts/getPostMetadata";
import Head from "next/head";
import { useRouter } from "next/router";


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
const MyImage = ({ children, ...props }) => <img {...props}>{children}</img>
const MyList = ({ children, ...props }) => <ul {...props}>{children}</ul>
const MyOrderedList = ({ children, ...props }) => <ol {...props}>{children}</ol>
const MyListItem = ({ children, ...props }) => <li {...props}>{children}</li>
const MyBlockQuote = ({ children, ...props }) => <blockquote {...props}>{children}</blockquote>
const MyInlineCode = ({ children, ...props }) => <code {...props}>{children}</code>
const MyCode = ({ children, ...props }) => <pre {...props}>{children}</pre>
const MyHorizontalRule = ({ children, ...props }) => <hr {...props}>{children}</hr>

const Sidebar = ({ posts, selectedSlug }) => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-gray-800 w-[20vw] p-4">
      <h3 className="text-xl font-bold mb-4">Post Slugs</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <button
              onClick={() => router.push(`/posts/${post.slug}/page`)}
              className={`w-full text-left text-blue-500 hover:underline ${
                post.slug === selectedSlug ? "font-bold" : ""
              }`}
            >
              {post.slug}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 w-full p-4">
      <h3 className="text-xl font-bold mb-4">Post Slugs</h3>
      <ul>
        <li>
          <button className="w-full text-left text-blue-500 hover:underline">
            Post 1
          </button>
        </li>
        <li>
          <button className="w-full text-left text-blue-500 hover:underline">
            Post 2
          </button>
        </li>
        <li>
          <button className="w-full text-left text-blue-500 hover:underline">
            Post 3
          </button>
        </li>
      </ul>
    </div>
  );
}


const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const getStaticPaths = async () => {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};



const PostPage = (props: any) => {
  return (
    <div>
    <Navbar />
    <div className="flex">
      <Sidebar posts={props.posts} selectedSlug={props.slug} />

      <div className="flex-1">
      <Head>
        <title>{props.title}</title>
      </Head>

      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{props.title}</h1>
        <p className="text-slate-400 mt-2">{props.date}</p>
      </div>

      <article className="prose text-white text-lg min-h-[30vh] mx-auto max-w-[60vw]">
        <Markdown
          options={{
            overrides: {
              // Headings
              h1: { component: MyHeading1,props: {className: 'text-4xl font-bold text-gray-700 dark:text-gray-400 mb-3',},},
              h2: { component: MyHeading2,props: {className: 'text-3xl font-bold text-gray-700 dark:text-gray-400 mb-3',},},
              h3: { component: MyHeading3,props: {className: 'text-2xl font-bold text-gray-700 dark:text-gray-400 mb-3',},},
              h4: { component: MyHeading4,props: {className: 'text-xl font-bold text-gray-700 dark:text-gray-400 mb-3',},},
              h5: { component: MyHeading5,props: {className: 'text-lg font-bold text-gray-700 dark:text-gray-400 mb-3',},},
              h6: { component: MyHeading6,props: {className: 'text-base font-bold text-gray-700 dark:text-gray-400 mb-3',},},
              
              // Lists  
              ul: { component: MyList,props: {className: 'list-disc  mb-2',},},
              ol: { component: MyOrderedList,props: {className: 'list-decimal ',},},
              li: { component: MyListItem,props: {className: 'text-gray-700 dark:text-gray-400',},},

              // Text
              p: { component: MyParagraph,props: {className: 'text-gray-700 dark:text-gray-400',},},
              em: { component: MyEmphasis,props: {className: 'text-gray-700 dark:text-gray-400',},},
              strong: { component: MyStrong,props: {className: 'text-gray-700 dark:text-gray-400',},},
              del: { component: MyDelete,props: {className: 'text-gray-700 dark:text-gray-400',},},
              a: { component: MyLink,props: {className: 'text-blue-500 hover:underline',},},
              img: { component: MyImage,props: {className: 'w-full',},},
              blockquote: { component: MyBlockQuote,props: {className: 'border-l-4 border-gray-400 dark:border-gray-600 italic my-8 pl-8',},},
              code: { component: MyCode,props: {className: 'cd text-gray-700 dark:text-gray-400',},},
              pre: { component: MyCode,props: {className: 'pr text-gray-700 dark:text-gray-400',},},
              span: { component: MyCode,props: {className: 'sp text-gray-700 dark:text-gray-400',},},

              // Tables
              table: { component: MyTable,props: {className: 'table-auto w-full my-6 rounded-xl border dark:border-gray-700',},},
              thead: { component: MyTableHead,props: {className: 'bg-gray-200 dark:bg-gray-800',},},
              tbody: { component: MyTableBody,props: {className: 'bg-gray-100 dark:bg-gray-700',},},
              tr: { component: MyTableRow,props: {className: 'bg-white border-b dark:bg-gray-800 dark:border-gray-700',},},
              td: { component: MyTableData,props: {className: 'border px-4 py-2 text-gray-700 dark:text-gray-400',},},
              th: { component: MyTableHeader,props: {className: 'border px-4 py-2 text-gray-700 dark:text-gray-400',},},

              // Misc
              hr: { component: MyHorizontalRule,props: {className: 'my-8',},},
            },
          }}
        >
          {props.content}
        </Markdown>
      </article>
    </div>
    </div>
    </div>
  );
};


export const getStaticProps = async ({ params }: any) => {
  const postData = getPostContent(params.slug);
  const allPostsSlug = getPostMetadata();
  const allPosts = allPostsSlug.map((post) => ({
    slug: post.slug,
  }));
  const props = {
    title: postData.data.title,
    date: postData.data.date,
    content: postData.content,
    subtitle: postData.data.subtitle,
    posts: allPosts,
  };
  return {
    props
  };
}

export default PostPage;