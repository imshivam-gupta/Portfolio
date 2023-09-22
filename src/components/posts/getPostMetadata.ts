// import fs from "fs";
// import matter from "gray-matter";
// import { PostMetadata } from "./PostMetadata";

// const getPostMetadata = (): PostMetadata[] => {
//   const folder = "posts/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   const posts = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       title: matterResult.data.title || "No Title",
//       date: matterResult.data.date || "No Date",
//       subtitle: matterResult.data.subtitle || "No Subtitle",
//       slug: fileName.replace(".md", ""),
//     };
//   });
  

//   return posts;
// };

// export default getPostMetadata;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (folder = "posts") => {
  const posts = [];

  function traverseDirectory(directory) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverseDirectory(filePath); // Recurse into subdirectory
      } else if (file.endsWith(".md")) {
        const fileContents = fs.readFileSync(filePath, "utf8");
        const matterResult = matter(fileContents);

        const postMetadata = {
          title: matterResult.data.title || "",
          date: matterResult.data.date || "",
          subtitle: matterResult.data.subtitle || "",
          directory_path: filePath
            .replace("posts", "") // Remove "posts/" from the beginning
            .replace(/\.md$/, "") // Remove ".md" from the end in next step will remove all \ and / from the string begining
            .replace(/\\/g, "/") // Replace all \ with /
            .replace(/^\//, ""), // Remove / from the beginning
          slug: filePath
            .replace("posts", "") // Remove "posts/" from the beginning
            .replace(/\.md$/, "") // Remove ".md" from the end in next step will remove all \ and / from the string begining
            .replace(/\\/g, "/") // Replace all \ with /
            .replace(/^\//, "")
            .split("/")
            .pop()
        };
        console.log(postMetadata);
        posts.push(postMetadata);
      }
    });
  }

  traverseDirectory(folder);
  console.log(posts);

  return posts;
};

export default getPostMetadata;
