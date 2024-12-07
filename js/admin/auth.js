import Cookies from 'js-cookie';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123'; // In production, use proper authentication
const AUTH_COOKIE = 'admin_auth';

export function isAuthenticated() {
    return Cookies.get(AUTH_COOKIE) === 'true';
}

export function login(username, password) {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        Cookies.set(AUTH_COOKIE, 'true', { expires: 1 });
        return true;
    }
    return false;
}

export function logout() {
    Cookies.remove(AUTH_COOKIE);
}