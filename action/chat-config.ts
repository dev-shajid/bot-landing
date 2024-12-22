'use server'

export async function chatConfig(): Promise<string> {
    const username = process.env.NEXT_PUBLIC_CHAT_N8N_USERNAME;
    const password = process.env.NEXT_PUBLIC_CHAT_N8N_PASSWORD;
  
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
  
    return authHeader!;
}
