import { useState } from 'react';

type Props = {
  copyText: string
}

const useCopyToClipboard = ({ copyText }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    isCopied,
    handleCopyClick
  };
};

export default useCopyToClipboard;
