import { create } from "zustand";
import { ICustomer } from "@/interfaces/models/customer.interface";

interface ICurrentCustomer {
    currentCustomer: ICustomer;
}

export const useCustomerStore = create<ICurrentCustomer>((set) => ({
    currentCustomer: {
        email: "",
        image: "",
        name: "",
    },
    setCurrentCustomer: (payload: ICustomer) =>
        set((state) => ({
            currentCustomer: { ...state.currentCustomer, ...payload },
        })),
    getCurrentCustomer: () =>
        set((state) => ({ currentCustomer: state.currentCustomer })),
}));
