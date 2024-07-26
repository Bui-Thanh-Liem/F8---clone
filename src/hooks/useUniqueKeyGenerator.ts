import { useId } from "react";

export const useUniqueKeyGenerator = () => {
    const id = useId();

    const generateKey = (item: any, index: number) => {
        // Tạo một key duy nhất bằng cách kết hợp id, index và một thuộc tính duy nhất của item
        return `${id}-${index}-${item.someUniqueProperty}`;
    };

    return generateKey;
};

