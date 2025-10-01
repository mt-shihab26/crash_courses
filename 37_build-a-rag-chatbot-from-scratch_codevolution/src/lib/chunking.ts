import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 150,
    chunkOverlap: 20,
    separators: [' '],
});

export const chunkContent = async (content: string): Promise<string[]> => {
    return await textSplitter.splitText(content.trim());
};
