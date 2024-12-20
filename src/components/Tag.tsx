import React from 'react';

interface TagProps {
  tag: string; 
  className?: string; 
  key?: React.Key; 
}

const Tag: React.FC<TagProps> = ({ tag, className = '', key }) => {
  return (
    <span
      key={key}
      className={`text-zinc-500 uppercase tracking-widest dark:text-zinc-400 text-[10px] font-medium border dark:border-zinc-600 rounded-md px-1 py-1 leading-none ${className}`}
    >
      {tag}
    </span>
  );
};

export default Tag;
