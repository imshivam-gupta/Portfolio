import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const VerticalSidebar = ({ posts }) => {
    const router = useRouter();
  
    const selectedTopic = router.query.topic;
    const selectedSubtopic = router.query.subtopic;
    const selectedSlug = router.query.slug;
  
    const [expandedTopics, setExpandedTopics] = useState([]);
  
    useEffect(() => {
      setExpandedTopics([selectedSubtopic]);
    }, [selectedSubtopic]);
      
  
    const toggleTopic = (topic) => {
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
      <div className="lg:hidden sidebar-bkg w-[22vw] min-h-[90vh] overflow-y-auto  pt-4 scrollclass pb-20 px-6">
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
                <ul className="pl-4 py-2 max-h-[30vh] overflow-y-auto scrollclass">
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

  
    export default VerticalSidebar;