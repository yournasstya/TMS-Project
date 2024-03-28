const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex: RegExp = /^(?=.*\d).{8,}$/;

export { emailRegex, passwordRegex }