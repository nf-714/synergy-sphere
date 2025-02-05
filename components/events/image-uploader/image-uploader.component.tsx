import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploaderProps {
  coverImage: string | null;
  setCoverImage: (image: string | null) => void;
  eventName: string;
}

export function ImageUploader({
  coverImage,
  setCoverImage,
  eventName,
}: ImageUploaderProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setCoverImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [setCoverImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    onDropRejected: () =>
      setError(
        "File too large or invalid type. Please use an image under 5MB."
      ),
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
          ${coverImage ? "bg-gray-100" : ""}
        `}
      >
        <input {...getInputProps()} />
        {coverImage ? (
          <div className="relative h-48">
            <img
              src={coverImage || "/placeholder.svg"}
              alt="Cover"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <p className="text-white text-xl font-bold">
                {eventName || "Event Name"}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-500">
              Drag and drop an image here, or click to select
            </p>
            <Button variant="outline" className="mt-4">
              Upload Image
            </Button>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
