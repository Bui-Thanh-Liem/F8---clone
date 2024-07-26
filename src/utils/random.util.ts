export const randomNumber = (length: number) => {
    let result:string = '';
    for (let index = 0; index < length; index++) {
        result += Math.floor(Math.random() * 10).toString();
    }
    return result
};
