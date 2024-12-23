// auth.js (mock authentication)
export const isAuthenticated = () => {
    // Replace with real auth logic
    return localStorage.getItem("authToken") !== null;
};