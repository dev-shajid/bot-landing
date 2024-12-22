declare module '@n8n/chat' {
    export function createChat(config: {
        webhookUrl: string;
        webhookConfig: {
            method: string;
            headers: {
                Authorization: string;
            };
        };
        target: string;
        mode: string;
        chatInputKey: string;
        chatSessionKey: string;
        metadata: Record<string, unknown>;
        showWelcomeScreen: boolean;
        defaultLanguage: string;
        initialMessages: string[];
        i18n: {
            [key: string]: {
                title: string;
                subtitle: string;
                footer: string;
                getStarted: string;
                inputPlaceholder: string;
                closeButtonTooltip: string;
            };
        };
    }): void;
}

