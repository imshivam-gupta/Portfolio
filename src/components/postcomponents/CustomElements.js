import { FiCopy } from 'react-icons/fi';
import { FcCheckmark } from 'react-icons/fc';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useState,useEffect } from "react";
import { motion } from "framer-motion";


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
const MyList = ({ children, ...props }) => <ul {...props}>{children}</ul>
const MyOrderedList = ({ children, ...props }) => <ol {...props}>{children}</ol>
const MyListItem = ({ children, ...props }) => <li {...props}>{children}</li>
const MyBlockQuote = ({ children, ...props }) => <blockquote {...props}>{children}</blockquote>
const MyInlineCode = ({ children, ...props }) => <code {...props}>{children}</code>
const MyCode = ({ children, ...props }) => <pre {...props}>{children}</pre>
const MyHorizontalRule = ({ children, ...props }) => <hr {...props}>{children}</hr>


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



//  return all the components

export const components = {
    MyHeading1,
    MyHeading2,
    MyHeading3,
    MyHeading4,
    MyHeading5,
    MyHeading6,
    MyParagraph,
    MyEmphasis,
    MyStrong,
    MyDelete,
    MyLink,
    MyList,
    MyOrderedList,
    MyListItem,
    MyBlockQuote,
    MyInlineCode,
    MyCode,
    MyHorizontalRule,
    MyImage,
    MyElement,
    MyTable,
    MyTableHead,
    MyTableBody,
    MyTableRow,
    MyTableData,
    MyTableHeader,
    CodeBlock,
    PreBlock
};