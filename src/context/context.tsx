import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
} from 'react';
import type { CartItem } from '../types/cartItem';
import type { Product } from '../types/product';

type CartContextType = {
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (product: Product, quantity: 1) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

type CartState = {
  cartItems: CartItem[];
};

const CartAction = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
} as const;

type Action =
  | { type: typeof CartAction.ADD_TO_CART; payload: CartItem }
  | { type: typeof CartAction.REMOVE_FROM_CART; payload: number }
  | {
      type: typeof CartAction.UPDATE_QUANTITY;
      payload: { id: number; quantity: number };
    }
  | { type: typeof CartAction.CLEAR_CART };

const initialState: CartState = {
  cartItems: [],
};

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case CartAction.ADD_TO_CART: {
      const item = action.payload;
      const existing = state.cartItems.find((p) => p.id === item.id);

      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map((p) =>
            p.id === item.id
              ? { ...p, quantity: p.quantity + item.quantity }
              : p
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }

    case CartAction.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((p) => p.id !== action.payload),
      };

    case CartAction.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      if (quantity < 1) return state;

      return {
        ...state,
        cartItems: state.cartItems.map((p) =>
          p.id === id ? { ...p, quantity } : p
        ),
      };
    }

    case CartAction.CLEAR_CART:
      return { cartItems: [] };

    default:
      return state;
  }
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product, quantity = 1) => {
    dispatch({
      type: CartAction.ADD_TO_CART,
      payload: { ...product, quantity },
    });
  };

  const totalPrice = state.cartItems.reduce((total, item) => {
    return total + item.price.main * item.quantity;
  }, 0);

  const removeFromCart = (id: number) => {
    dispatch({ type: CartAction.REMOVE_FROM_CART, payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({
      type: CartAction.UPDATE_QUANTITY,
      payload: { id, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: CartAction.CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
