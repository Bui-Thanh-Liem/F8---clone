export const convertStringToSlug = (str: string) => {
    if (!str) return "";
    return String(str)
        .normalize("NFKD") // Chia các kí tự có dấu thành kí tự base hoặc có dấu phụ
        .replace(/[\u0300-\u036f]/g, "") // Xóa kí tự có dấu, thay thành không dấu
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, "") // Xóa tất cả các kí tự không phải là số, chữ, dấu gạch nối
        .replace(/\s+/g, "-") // replace spaces with hyphens
        .replace(/-+/g, "-"); // Xóa 2 dấu gạch nối liên tiếp
};

export const convertFullNameToCharacter = (fullname: string) => {
    if (!fullname) return "L";
    const arrFullName = fullname.trim().split(" ");
    return arrFullName[arrFullName.length - 1][0].toLocaleUpperCase();
};
