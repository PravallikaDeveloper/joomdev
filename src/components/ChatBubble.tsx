'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import '../styles/n8n-chat-custom.css';
import { ChatBubbleIcon } from './ChatBubbleIcon';

export function ChatBubble() {
  useEffect(() => {
    let chatInstance: any;

    (async () => {
      // ✅ Dynamic import — runs ONLY in the browser
      const { createChat } = await import('@n8n/chat');

      chatInstance = createChat({
        webhookUrl:
          'https://ai-agents.juicefin.com/webhook/202a6379-0c36-4265-b09a-bc0e404d0c32/chat',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          "Hello! I'm Berry👋",
          'I am here to help insurance companies like yours with our comprehensive solutions for managing incoming and outgoing payments.',
          'If you have any questions or need assistance, feel free to ask',
        ],
        i18n: {
          en: {
            title: 'Berry Assistant',
            subtitle: 'Juice Financial',
            inputPlaceholder: 'Type your question...',
            getStarted: 'New Conversation',
            footer: 'Powered by Juice Financial',
            closeButtonTooltip: 'Close chat',
          },
        },
      });
    })();

    return () => {
      // Optional cleanup if supported
      chatInstance?.destroy?.();
    };
  }, []);

  return (
    <div id="n8n-chat" className="fixed bottom-6 right-6 z-50">
      <div
        className="chat-button-wrapper"
        aria-label="Chat button visual"
      >
        <ChatBubbleIcon className="w-[95%] h-[95%]" />
      </div>
    </div>
  );
}
