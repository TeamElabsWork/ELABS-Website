import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    script1.async = true;
   
    script1.onload = ()=>
    {
        const script2 = document.createElement("script");
        script2.src = "https://files.bpcontent.cloud/2025/10/08/16/20251008161012-59NJHNYI.js";
        script2.defer = true;
        document.body.appendChild(script2);
    }
    
    document.body.appendChild(script1);

  }, []);

  return null; 
};

export default Chatbot;