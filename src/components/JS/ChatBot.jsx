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

import React, { useEffect } from 'react';

function BotpressChat() {
  useEffect(() => {
    // Create first script tag
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Create second script tag
    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/3ba0412a-5f83-4619-bc43-e7d3d2dead2d/webchat/v2.1/config.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup function to remove scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Empty array ensures this effect runs only once after the initial render

  return (
    <div>
      <h1>Botpress Chat Integration</h1>
    </div>
  );
}

export default BotpressChat;
