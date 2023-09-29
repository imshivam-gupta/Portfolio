import fs from "fs";
import path from "path";
import matter from "gray-matter";


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
          title: matterResult.data.title || "Sample Title",
          date: matterResult.data.date || "2020-01-01",
          subtitle: matterResult.data.subtitle || "Sample Subtitle",
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
        posts.push(postMetadata);
      }
    });
  }

  traverseDirectory(folder);
  return posts;
};

export default getPostMetadata;
