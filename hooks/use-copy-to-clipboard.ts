import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  textToCopy: string;
}

export default function useCopyToClipBoard({ textToCopy }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      toast.success("successfully copied to clipboard!")
      // Optionally reset the copied status after a delay
      setTimeout(() => setIsCopied(false), 2000);
      
      
    } catch (err) {
    //   console.error('Failed to copy: ', err);
      toast.error("failed copy to clipboard!")

    }
  };

  return {
    isCopied,
    handleCopy,
  };
}