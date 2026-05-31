"use client";

import MDEditor from "@uiw/react-md-editor";

export function MarkdownView({ content }: { content: string }) {
  return (
    <div data-color-mode="dark">
      <MDEditor.Markdown source={content} style={{ backgroundColor: "transparent", color: "var(--text)" }} />
    </div>
  );
}
