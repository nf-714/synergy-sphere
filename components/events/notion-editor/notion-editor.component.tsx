import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NotionEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function NotionEditor({ value, onChange }: NotionEditorProps) {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleBold = () => {
    setIsBold(!isBold);
    onChange(value + (isBold ? " " : " **bold** "));
  };

  const handleItalic = () => {
    setIsItalic(!isItalic);
    onChange(value + (isItalic ? " " : " *italic* "));
  };

  return (
    <div className="border rounded-md p-4 space-y-4">
      <div className="flex space-x-2">
        <Button
          type="button"
          variant={isBold ? "default" : "outline"}
          size="sm"
          onClick={handleBold}
        >
          B
        </Button>
        <Button
          type="button"
          variant={isItalic ? "default" : "outline"}
          size="sm"
          onClick={handleItalic}
        >
          I
        </Button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-40 p-2 border rounded-md"
        placeholder="Write your detailed description here..."
      />
    </div>
  );
}
