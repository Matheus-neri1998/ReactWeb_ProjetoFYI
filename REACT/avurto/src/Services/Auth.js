export const UsuarioAutenticado = () => localStorage.getItem('avurto-login') !== null;

export const parseJwt = () => {
    let base64 = localStorage.getItem ('avurto-login').split('.')[1];

    return JSON.parse(window.atob(base64))
}