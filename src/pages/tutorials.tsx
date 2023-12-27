import getPostMetadata from "@/components/posts/getPostMetadata";
import Head from "next/head";
import Link from "next/link";


const PostContent = (props: any) => {
    return(
        <div className="topic-card">
            <div className="text-[1.5rem] font-semibold leading-5 text-white mb-1">{props.title}</div>
            <div className="text-[1rem] font-medium leading-5 text-white mb-2">{props.description}</div>
            <Link href={`${props.topic}/${props.subtopic}/${props.slug}/page`}
                className="text-ellipsis text-[#9aa4e7] hover:text-[#838cf1] cursor-pointer .color-anim text-lg" 
            >Read Now</Link>
        </div>
    )
}



const PostPage = (props: any) => {

  return (
    <div className="mt-12">
    <div className="flex">
      {/* <Sidebar posts={props.posts} /> */}

      <div className="flex-1 z-20 bg-[#111213]">
      <Head>
        <title>{props.title}</title>
      </Head>
      {/* <Navbar /> */}
        
        <div className="c-i-box-grid w-full px-20 mx-auto">

            {props.posts.map((post: any,index) => (
                <PostContent 
                    title={post.topic} 
                    description={"Complete " + post.topic + " from basics to advanced covering all needed topics."}
                    topic={post.topic}
                    subtopic={post.subtopic}
                    slug={post.slug}
                    key={index}
                />
            ))}
           
        
        </div>
        
      <div className="wrapper-bg absolute top-0 left-0 w-full h-full -z-20"/>
      <div className="styled-bg-clr absolute top-0 left-0 w-full h-full -z-30"/>
    </div>
    </div>
    </div>
  );
};


// export const getStaticProps = async ({ params }: any) => {
//   const postData = getPostContent(params.slug, params.topic);
//   const posts = getPostMetadata();
//   const mapped = posts.map((post) => {
//     const directory_path = post.directory_path.split('/');
//     const slug = directory_path.pop();
//     const topic = directory_path[0];
//     return {
//         slug: slug,
//         topic: topic,
//     }
//   });

//   const props = {
//     title: postData.data.title,
//     date: postData.data.date,
//     content: postData.content,
//     subtitle: postData.data.subtitle,
//     posts: mapped,
//     topic: params.topic,
//   };
//   return {
//     props
//   };
// }

export const getStaticProps = async ({ params }: any) => {
    // Generating foldername and first subtopic and slug name from posts directory using fs module

    const posts = getPostMetadata();

    // Set of folders
    // getting first post directory of each folder usinf posts array

    const folders = new Set();

    const links_array = [];

    posts.forEach((post) => {
        const directory_path = post.directory_path.split('/');
        const slug = directory_path.pop();
        const topic = directory_path[0];
        const subtopic = directory_path[1];

        if(!folders.has(topic)){
            folders.add(topic);
            links_array.push({
                slug: slug,
                topic: topic,
                subtopic: subtopic,
            })
        }
    });
    

  
    const props = {
        posts: links_array,
    };

    return {
        props
    };
}
    


export default PostPage;



/*


*/