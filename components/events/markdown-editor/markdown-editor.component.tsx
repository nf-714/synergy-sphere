import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarkdownPreview from "@uiw/react-markdown-preview";

import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Link,
  List,
} from "lucide-react";
import { serialize } from "next-mdx-remote/serialize";
import { useState } from "react";

import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const [activeTab, setActiveTab] = useState<string>("write");

  const [mdxSource, setMdxSource] = useState("# Hello");

  const handleMarkdownChange = async (e) => {
    const text = e.target.value;
    setMarkdown(text);

    try {
      const mdx = await serialize(text);
      setMdxSource(mdx);
    } catch (error) {
      console.error("Markdown serialization error:", error);
    }
  };

  const handleInsert = (syntax: string) => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    onChange(before + syntax + after);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + syntax.length;
  };

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleInsert("# ")}
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleInsert("## ")}
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleInsert("### ")}
            >
              <Heading3 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleInsert("**bold**")}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleInsert("*italic*")}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleInsert("[link](url)")}
            >
              <Link className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleInsert("\n- List item")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <TabsContent value="write">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-64 p-2 border rounded-md"
            placeholder="Write your detailed description here..."
          />
        </TabsContent>
        <TabsContent value="preview">
          <div className="markdown-content w-full h-64 p-2 border rounded-md overflow-y-auto prose">
            <MarkdownPreview source={value} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
