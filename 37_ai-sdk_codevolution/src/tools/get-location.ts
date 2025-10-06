export const getLocation = async (name: string) => {
    if (name.toLowerCase().includes("bruce wayne")) {
        return "gotham city";
    }
    if (name.toLowerCase().includes("clark kent")) {
        return "metropolis";
    }
    return "Unknown";
};
