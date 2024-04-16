export const regExpCommasFilter: RegExp = /,/g;
export const valueFilter = (value: string): number => {
    return +value.replace(/[^0-9.]/g, '');
};
export const regExpEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;