import { create } from "zustand";
import{persist} from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product) => set((state) => {
                const existingProduct = state.cart.find((item) => item._id === product._id); 
                if (existingProduct) {
                    return {
                        cart: state.cart.map((item) =>
                            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    };
                }
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }),
        }),
        {
            name: 'product-Cart',
            getStorage: () => localStorage,
        }
    )
);


export default  useCartStore;




