"use client";

import { Loader2 } from "lucide-react";
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
        loading: () => <Loader2 className="h-4 w-5 animate-spin" />,
        ssr: false,
      }),
    []
  );

  return (
    <div className="">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="bg-white"
      />
    </div>
  );
};
