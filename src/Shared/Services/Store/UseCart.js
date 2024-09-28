import { create } from "zustand";
import {persist} from'zustand/middleware'



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
            removeFromCart: (productId) => set((state) => ({
                cart: state.cart.filter((item) => item._id !== productId)
            })),
            decrementQuantity: (productId) => set((state) => ({
                cart: state.cart.map((item) =>
                    item._id === productId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            })),
        }),
        {
            name: 'product-Cart',
            getStorage: () => localStorage,
        }
    )
);
export default useCartStore;


