// function ChatBot() {
//     return (
//         <div>
//             <h1>ChatBot</h1>
//             <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
//     <       script src="https://mediafiles.botpress.cloud/3ba0412a-5f83-4619-bc43-e7d3d2dead2d/webchat/v2.1/config.js"></script>
//         </div>
//     );
// }

// export default ChatBot;

import { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    // Load the Botpress chat widget script
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js'; // Replace with your Botpress server URL
    script.async = true;
    document.body.appendChild(script);

    // Initialize the chat widget after the script is loaded
    script.onload = () => {
      window.botpressWebChat.init({
        host: "https://mediafiles.botpress.cloud/3ba0412a-5f83-4619-bc43-e7d3d2dead2d/webchat/v2.1/config.js",  
        botId: "79ba890d-6153-4c0d-bd58-1f4123ac3a61",  // Replace with your Bot ID
        botName: "DoubtMaster Bot",  // Optional: Give your bot a name
        showConversationsButton: true,
        enableReset: true
      });
    };

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No need to render anything in the component itself
};

export default BotpressChat;
