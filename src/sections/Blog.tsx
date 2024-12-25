import { HoverEffect } from "@/components/HoverEffect";
import { projects } from "@/lib/data";
import {
  BLOG_SECTION_ID,
  BLOG_SECTION_CLASSES,
  BLOG_TITLE_CLASSES,
  BLOG_TITLE,
  BLOG_PARAGRAPH_CLASSES,
  BLOG_PARAGRAPH_TEXT,
  BLOG_HOVER_WRAPPER_CLASSES,
  BLOG_DIVIDER_CLASSES,
  BLOG_DIVIDER_OVERLAY_CLASSES,
  BLOG_GRADIENT_CLASSES,
  BLOG_CONTENT_WRAPPER_CLASSES,
} from "@/lib/constants";


interface BlogProps {
  topics: { name: string; originalName?: string; path?: string }[];
}

const Blog: React.FC<BlogProps> = ({ topics }) => {
  return (
    <section id={BLOG_SECTION_ID} className={BLOG_SECTION_CLASSES}>
      <h1 className={BLOG_TITLE_CLASSES}>{BLOG_TITLE}</h1>
      <div className={BLOG_DIVIDER_CLASSES}>
        {BLOG_GRADIENT_CLASSES.map((gradientClass, index) => (
          <div key={index} className={gradientClass}></div>
        ))}
        <div className={BLOG_DIVIDER_OVERLAY_CLASSES}></div>
      </div>

      <div className={BLOG_CONTENT_WRAPPER_CLASSES}>
        <p className={BLOG_PARAGRAPH_CLASSES}>
          {BLOG_PARAGRAPH_TEXT}
        </p>
      </div>

      <div className={BLOG_HOVER_WRAPPER_CLASSES}>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default Blog;
