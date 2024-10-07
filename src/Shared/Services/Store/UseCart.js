
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product) => {
                set((state) => {
                    const itemIndex = state.cart.findIndex(item => item._id === product._id);
                    if (itemIndex >= 0) {
                      
                        const updatedCart = [...state.cart];
                        updatedCart[itemIndex].quantity += 1;
                        return { cart: updatedCart };
                    } else {
                     
                        return { cart: [...state.cart, { ...product, quantity: 1 }] };
                    }
                });
            },
            removeFromCart: (productId) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item._id !== productId),
                }));
            },
            clearCart: () => set({ cart: [] }),
            increaseQuantity: (productId) => {
                set((state) => ({
                    cart: state.cart.map(item => 
                        item._id === productId 
                            ? { ...item, quantity: item.quantity + 1 } 
                            : item
                    ),
                }));
            },
            decreaseQuantity: (productId) => {
                set((state) => ({
                    cart: state.cart.map(item => 
                        item._id === productId && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }));
            },
        }),
        {
            name: 'product-Cart', 
            getStorage: () => localStorage, 
        }
    )
);

export default useCartStore;

