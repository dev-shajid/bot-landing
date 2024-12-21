'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function ChatBot() {
    useEffect(() => {
        // Initialize the chat widget
        createChat({
            webhookUrl: 'https://playground.attensys.ai/webhook/90cd1a80-7757-49a4-9fcf-17c9c8f24cb0/chat',
            webhookConfig: {
                method: 'POST',
                headers: {},
            },
            target: '#n8n-chat',
            mode: 'window',
            chatInputKey: 'chatInput',
            chatSessionKey: 'sessionId',
            metadata: {},
            showWelcomeScreen: true,
            defaultLanguage: 'en',
            initialMessages: [
                'Hi there! 👋',
                'My name is Salahin. How can I assist you today?',
            ],
            i18n: {
                en: {
                    title: 'Hi there! 👋',
                    subtitle: "Start a chat. We're here to help you 24/7.",
                    footer: '',
                    getStarted: 'New Conversation',
                    inputPlaceholder: 'Type your question...',
                    closeButtonTooltip: 'Close',
                },
            },
        });

        // Simulate clicking the "New Conversation" button
        const observer = new MutationObserver(() => {
            const newConversationButton = document.querySelector('.chat-button'); // Target the button by class
            if (newConversationButton) {
                (newConversationButton as HTMLElement).click();
                observer.disconnect();  // Stop observing once clicked
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Add buttons to simulate initial inputs
        const chatBody = document.querySelector('.chat-body');
        if (chatBody) {
            const buttonContainer = document.createElement('div');
            buttonContainer.id = 'button-container';
            buttonContainer.style.display = 'flex';
            buttonContainer.style.justifyContent = 'center';
            buttonContainer.style.gap = '8px';
            buttonContainer.style.margin = '10px 0';
            buttonContainer.style.position = 'sticky';
            buttonContainer.style.bottom = '20px';
            buttonContainer.style.width = '100%';

            // Predefined button messages
            const buttons = [
                { text: 'Say Hello', message: 'Hello! How can you assist me?' },
                { text: 'Need Help', message: 'Can you help me with something?' },
                { text: 'Service Info', message: 'What services do you provide?' },
            ];

            // Create buttons
            buttons.forEach(({ text, message }) => {
                const button = document.createElement('button');
                button.textContent = text;
                button.style.backgroundColor = 'transparent';
                button.style.color = '#ffffff';
                button.style.border = '1px solid #ffffff';
                button.style.borderRadius = '5px';
                button.style.padding = '5px 10px';
                button.style.fontSize = '0.8rem';
                button.style.cursor = 'pointer';

                button.addEventListener('click', () => {
                    const textArea = document.querySelector('textarea[data-v-2a7fb1c3]');
                    if (textArea) {
                        (textArea as HTMLTextAreaElement).value = message;
                        textArea.dispatchEvent(new Event('input', { bubbles: true }));

                        setTimeout(() => {
                            const submitButton = document.querySelector(
                                'button[data-v-2a7fb1c3]'
                            );
                            if (submitButton) {
                                (submitButton as HTMLButtonElement).click();
                            }
                        }, 100);

                        // Hide buttons after first click
                        const buttonContainer = document.getElementById('button-container');
                        if (buttonContainer) {
                            buttonContainer.style.display = 'none';
                        }
                    }
                });

                buttonContainer.appendChild(button);
            });

            // Append the button container to the chat body
            chatBody.appendChild(buttonContainer);
        }

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    return <div id="n8n-chat"></div>;
}
