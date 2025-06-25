import { useState } from 'react';

const useClipboard = (text) => {
  const [success, setSuccess] = useState(false);

  
  const copyToClipboard = () => {
   
    const textArea = document.createElement('textarea');
    textArea.value = text; 

    
    document.body.appendChild(textArea);

   
    textArea.select();

   
    const wasSuccessful = document.execCommand('copy');
    setSuccess(wasSuccessful); 

   
    document.body.removeChild(textArea);
  };

  return { success, copyToClipboard };
};

export default useClipboard;
