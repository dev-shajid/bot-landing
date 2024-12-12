export default function splitStringUsingRegex(str: string): string[] {
    // This regex will match individual characters, including spaces
    return str.split(/(?=(?:[\S\s]))/);
}