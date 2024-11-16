export const sanitizeInput = (input) => {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return input.replace(/[&<>"']/g, (char) => map[char]);
};
