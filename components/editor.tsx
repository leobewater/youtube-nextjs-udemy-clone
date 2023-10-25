"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}
export const Editor = ({ onChange, value }: EditorProps) => {
  // import react-quill without server-side rendering (which is react.lazy and suspense)
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        loading: () => <p>Loading Editor...</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};
