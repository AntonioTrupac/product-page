import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  total: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
  quantity: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  quantity: 0,
  addItem: (item) => {
    set((state) => {
      const items = [...state.items];
      const index = items.findIndex((i) => i.id === item.id);

      if (index === -1) {
        items.push(item);
      } else {
        items[index].quantity += item.quantity;
      }

      const total = state.total + item.discountedPrice * item.quantity
      const quantity = state.quantity + item.quantity;

      return {
        items,
        quantity,
        total
      };
    });
  },
  removeItem: (id) => {
    set((state) => {
      const items = [...state.items];
      const index = items.findIndex((i) => i.id === id);

      if (index !== -1) {
        const item = items[index];
        items.splice(index, 1);

        return {
          items,
          quantity: state.quantity - item.quantity,
          total: state.total - item.discountedPrice * item.quantity,
        };
      }

      return state;
    });
  },
  clearCart: () => {
    set(() => ({
      items: [],
      total: 0,
      quantity: 0,
    }));
  },
}));
