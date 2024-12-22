'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import { chatConfig } from '@/action/chat-config';

export default function ChatBot() {
    useEffect(() => {
        chatConfig().then((authHeader) => {
            createChat({
                webhookUrl: 'https://playground.attensys.ai/webhook/90cd1a80-7757-49a4-9fcf-17c9c8f24cb0/chat',
                webhookConfig: {
                    method: 'POST',
                    headers: {
                        Authorization: authHeader,
                    },
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

            // Add custom styles
            const style = document.createElement('style');
            style.textContent = `
            .chat-window {
                border-radius: 16px !important;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2) !important;
                backdrop-filter: blur(8px) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                overflow: hidden !important;
            }

            main.chat-layout.chat-wrapper {
                background: linear-gradient(to bottom, #2e74ff, #0a1835, #000000, #131316) !important;
            }

            .chat-header {
                background: none !important;
                padding: 1.5rem !important;
                position: relative !important;
                overflow: hidden !important;
                border: 0 !important;
            }

            // .chat-header::before {
            //     content: '';
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     right: 0;
            //     bottom: 0;
            //     background: radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent);
            //     pointer-events: none;
            // }

            .chat-title {
                font-size: 1.5rem !important;
                font-weight: 700 !important;
                margin-bottom: 0.5rem !important;
                color: white !important;
            }

            .chat-subtitle {
                opacity: 0.9 !important;
                font-size: 0.9rem !important;
                line-height: 1.5 !important;
            }

            .chat-body {
                padding: 1rem !important;
                background: none !important; //#131316
            }

            .chat-message-bot {
                background: #2b2b2b !important;
                border-radius: 12px !important;
                padding: 1rem !important;
                margin-bottom: 1rem !important;
                animation: slideIn 0.3s ease-out !important;
                border-top-left-radius: 4px !important;
            }

            .chat-message-user {
                background: #4a6cdb !important;
                border-radius: 12px !important;
                padding: 1rem !important;
                margin-bottom: 1rem !important;
                animation: slideIn 0.3s ease-out !important;
                border-top-right-radius: 4px !important;
            }

            .chat-input-container {
                background: transparent !important;
                border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
                padding: 1rem !important;
            }

            .chat-input {
                background: #131316 !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                padding: 0 0.75rem !important;
                color: white !important;
                transition: all 0.2s ease !important;
            }

            .chat-send-button {
                background: #4a6cdb !important;
                border-radius: 8px !important;
                padding: 0.75rem !important;
                color: white !important;
                transition: all 0.2s ease !important;
            }

            .chat-send-button:hover {
                background: #2548bc !important;
            }

            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .quick-actions-button {
                background: rgba(255, 255, 255, 0.1) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                color: white !important;
                padding: 0.2rem 1rem !important;
                border-radius: 6px !important;
                font-size: 0.875rem !important;
                transition: all 0.2s ease !important;
                backdrop-filter: blur(4px) !important;
                display: flex !important;
                align-items: center !important;
            }

            .quick-actions-button:hover {
                background: rgba(255, 255, 255, 0.15) !important;
                border-color: rgba(255, 255, 255, 0.3) !important;
                transform: translateY(-1px) !important;
            }

            .quick-actions-container {
                display: flex !important;
                gap: 0.5rem !important;
                margin-top: 1rem !important;
                flex-wrap: wrap !important;
                justify-content: center !important;
            }

            .faq-container {
                background: rgba(43, 43, 43, 0.8) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                border-radius: 12px !important;
                padding: 1rem !important;
                margin: 1rem 0 !important;
                backdrop-filter: blur(4px) !important;
            }

            .faq-button {
                background: rgba(74, 108, 219, 0.2) !important;
                border: 1px solid rgba(74, 108, 219, 0.3) !important;
                color: white !important;
                font-size: 0.875rem !important;
                padding: 0.3rem 0.6rem !important;
                border-radius: 8px !important;
                width: 100% !important;
                text-align: left !important;
                margin: 0.5rem 0 !important;
                transition: all 0.2s ease !important;
            }

            .faq-button:hover {
                background: rgba(74, 108, 219, 0.3) !important;
                border-color: rgba(74, 108, 219, 0.4) !important;
            }

            .chat-message-typing {
                background: #2b2b2b !important;
                border-radius: 12px !important;
                padding: 12px !important;
                width: fit-content !important;
                margin: 8px 0 !important;
                display: flex !important;
                align-items: center !important;
                gap: 4px !important;
            }

            .chat-message-typing-body {
                display: flex !important;
                align-items: center !important;
                gap: 4px !important;
            }

            .chat-message-typing-circle {
                width: 6px !important;
                height: 6px !important;
                border-radius: 50% !important;
                background-color: #ffffff !important;
                opacity: 0.7 !important;
                display: inline-block !important;
            }

            .chat-message-typing-circle:nth-child(1) {
                animation: typingAnimation 1s infinite ease-in-out !important;
            }

            .chat-message-typing-circle:nth-child(2) {
                animation: typingAnimation 1s infinite ease-in-out 0.2s !important;
            }

            .chat-message-typing-circle:nth-child(3) {
                animation: typingAnimation 1s infinite ease-in-out 0.4s !important;
            }

            @keyframes typingAnimation {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-4px);
                    opacity: 0.5;
                }
            }
        `;
            document.head.appendChild(style);


            // Observe DOM changes to detect when submit button and textarea are available
            const observer = new MutationObserver(() => {
                const newConversationButton = document.querySelector('.chat-button');
                if (newConversationButton) {
                    (newConversationButton as HTMLElement).click();
                }

                const textArea = document.querySelector('textarea[data-v-2a7fb1c3]');
                const submitButton = document.querySelector('button[data-v-2a7fb1c3]');

                if (textArea && submitButton) {
                    // Attach keydown listener to textarea (if not already attached)
                    if (!textArea.hasAttribute('listener-attached')) {
                        textArea.addEventListener('keydown', (event) => {
                            const keyboardEvent = event as KeyboardEvent;
                            console.log(keyboardEvent.key, keyboardEvent.shiftKey);  // Debugging log

                            // Detect Enter without Shift (send message)
                            if (keyboardEvent.key === 'Enter' && !keyboardEvent.shiftKey) {
                                event.preventDefault();
                                (submitButton as HTMLButtonElement).click();
                                removeFAQs();
                            }
                        });

                        textArea.setAttribute('listener-attached', 'true');
                    }

                    // Attach click listener to submit button (if not already attached)
                    if (!submitButton.hasAttribute('listener-attached')) {
                        submitButton.addEventListener('click', () => {
                            removeFAQs();
                        });

                        submitButton.setAttribute('listener-attached', 'true');
                    }

                    // Disconnect observer ONLY when both textarea and submit button are handled
                    if (textArea.hasAttribute('listener-attached') && submitButton.hasAttribute('listener-attached')) {
                        observer.disconnect();
                    }
                }
            });

            // Observe for DOM mutations in the entire body (including dynamic content)
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });


            const chatHeader = document.querySelector('.chat-header');
            const chatBody = document.querySelector('.chat-body');
            if (chatHeader) {
                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'quick-actions-container';

                const buttons = [
                    { text: 'FAQ', icon: 'help-circle', message: '' },
                    { text: 'Raise Issue', icon: 'alert-circle', message: 'I want to raise an issue ticket' },
                    { text: 'Contact Support', icon: 'message-square', message: 'I need Contact Support' },
                ];

                buttons.forEach(({ text, icon, message }) => {
                    const button = document.createElement('button');
                    button.className = 'quick-actions-button';

                    const iconElement = document.createElement('span');
                    iconElement.innerHTML = `<i data-lucide="${icon}"></i>`;

                    const textSpan = document.createElement('span');
                    textSpan.textContent = text;

                    button.appendChild(iconElement);
                    button.appendChild(textSpan);

                    button.addEventListener('click', () => {
                        if (text === 'FAQ') {
                            displayFAQs(chatBody);
                        } else {
                            sendMessageToBot(message);
                        }
                    });

                    buttonContainer.appendChild(button);
                });

                chatHeader.appendChild(buttonContainer);
            }

            const removeFAQs = () => {
                const faqContainer = document.querySelector('.faq-container');
                if (faqContainer) faqContainer.remove();
            }

            const sendMessageToBot = (message: string) => {
                const textArea = document.querySelector('textarea[data-v-2a7fb1c3]');
                if (textArea) {
                    (textArea as HTMLTextAreaElement).value = message;
                    textArea.dispatchEvent(new Event('input', { bubbles: true }));

                    setTimeout(() => {
                        const submitButton = document.querySelector('button[data-v-2a7fb1c3]');
                        if (submitButton) {
                            (submitButton as HTMLButtonElement).click();
                            removeFAQs();
                        }
                    }, 100);
                }
            };


            const displayFAQs = (chatBody: Element | null) => {
                // Check if an FAQ container already exists
                if (chatBody?.querySelector('.faq-container')) {
                    return; // Prevent adding duplicate FAQ containers
                }

                const faqContainer = document.createElement('div');
                faqContainer.className = 'faq-container';

                const faqs = [
                    { question: 'What services do attensys provide?', message: 'What services do attensys provide?' },
                    { question: 'Which industries benefit most?', message: 'Which industries benefit most?' },
                    { question: 'How can I create robust automated tests?', message: 'How can I create robust automated tests?' },
                    { question: 'What capabilities do personal AI agents have?', message: 'What capabilities do personal AI agents have?' },
                    { question: 'Can I customize integrations for my workflows?', message: 'Can I customize integrations for my workflows?' },
                    { question: 'How secure are workflows?', message: 'How secure are workflows?' },
                    { question: 'What should I do if I encounter a workflow failure?', message: 'What should I do if I encounter a workflow failure?' },
                ];

                const title = document.createElement('h3');
                title.textContent = 'Frequently Asked Questions';
                title.style.color = 'white';
                title.style.marginBottom = '1rem';
                title.style.fontSize = '1rem';
                title.style.fontWeight = '600';
                faqContainer.appendChild(title);

                faqs.forEach(({ question, message }) => {
                    const faqButton = document.createElement('button');
                    faqButton.className = 'faq-button';
                    faqButton.textContent = question;

                    faqButton.addEventListener('click', () => {
                        sendMessageToBot(message);
                        faqContainer.remove();
                    });

                    faqContainer.appendChild(faqButton);
                });

                chatBody?.appendChild(faqContainer);
                if (chatBody) {
                    chatBody.scrollTop = chatBody.scrollHeight;
                }
            };


            return () => {
                observer.disconnect();
                document.head.removeChild(style);
            };
        });
    }, []);

    return <div id="n8n-chat prose" />;
}

