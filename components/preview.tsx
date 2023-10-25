"use client";

import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  // import react-quill without server-side rendering (which is react.lazy and suspense)
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        loading: () => <Loader2 className="h-4 w-5 animate-spin" />,
        ssr: false,
      }),
    []
  );

  return <ReactQuill theme="bubble" value={value} readOnly />;
};
