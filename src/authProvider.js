export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        if(username === 'test' && password === 'test') {
            localStorage.setItem('admincmc', username);
            return Promise.resolve();
        } else {
            return Promise.reject()
        }
        
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('admincmc');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('admincmc');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('admincmc')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};