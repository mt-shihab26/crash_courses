const randomString = (length: number): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let ouputString = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.ceil(Math.random() * characters.length);

        const character = characters[randomIndex];

        ouputString += character;
    }

    return ouputString;
};

export const getRandomNoteId = () => {
    return randomString(3);
};
