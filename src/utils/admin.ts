export const isAdmin = (userId: string): boolean => {
    return userId === process.env.OWNER_ID;
}; 