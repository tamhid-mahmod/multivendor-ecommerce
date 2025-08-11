import { useEffect, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";

type Props = {
  value: string;
  onChange: (content: string) => void;
};

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div
      className="bg-transparent border border-gray-700 text-white rounded-md"
      style={{ minHeight: "250px" }}
    />
  ),
});

const RichTextEditor = ({ value, onChange }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Cleanup duplicate toolbars
  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      const toolbars = document.querySelectorAll(".ql-toolbar");
      if (toolbars.length > 1) {
        // Remove all except the first toolbar
        toolbars.forEach((toolbar, index) => {
          if (index > 0) toolbar.remove();
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted]);

  return (
    <div className="relative">
      {isMounted ? (
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={{
            toolbar: [
              [{ font: [] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ size: ["small", false, "large", "huge"] }],
              ["bold", "italic", "underline", "strike"],
              [{ color: [] }, { background: [] }],
              [{ script: ["sub"] }, { script: ["super"] }],
              [{ list: ["ordered"] }, { list: ["bullet"] }],
              [{ indent: ["-1"] }, { indent: ["+1"] }],
              [{ align: [] }],
              ["blockquote", "code-block"],
              ["link", "image", "video"],
              ["clean"],
            ],
          }}
          placeholder="Write a detailed product description here..."
          className="bg-transparent border border-gray-700 text-white rounded-md"
          style={{ minHeight: "250px" }}
        />
      ) : (
        <div
          className="bg-transparent border border-gray-700 text-white rounded-md"
          style={{ minHeight: "250px" }}
        />
      )}

      <style>{`
        .ql-toolbar {
          background: transparent;
          border-color: #444;
        }
        .ql-container {
          background: transparent !important;
          border-color: #444;
          color: white;
        }
        .ql-picker {
          color: white !important;
        }
        .ql-editor {
          min-height: 200px;
        }
        .ql-snow {
          border-color: #444 !important;
        }
        .ql-editor.ql-blank::before {
          color: #aaa !important;
          font-style: normal;
        }
        .ql-picker-options {
          background: #333 !important;
          color: white !important;
          border: none !important;
        }
        .ql-picker-item {
          color: white !important;
        }
        .ql-stroke {
          stroke: white !important;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
