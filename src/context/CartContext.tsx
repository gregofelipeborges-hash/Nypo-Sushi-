import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface CartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  category: string;
  imageUrl?: string;
  optionName?: string;
  unitPrice: number;
  quantity: number;
  notes?: string;
}

interface CartContextValue {
  items: CartItem[];
  totalCount: number;
  subtotal: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: Omit<CartItem, 'cartItemId'>) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  lastAddedName: string | null;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'nypo_sushi_cart_v1';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage quota errors
    }
  }, [items]);

  useEffect(() => {
    if (!lastAddedName) return;
    const timer = window.setTimeout(() => setLastAddedName(null), 2600);
    return () => window.clearTimeout(timer);
  }, [lastAddedName]);

  const addItem = (incoming: Omit<CartItem, 'cartItemId'>) => {
    const cleanNotes = incoming.notes?.trim() || '';
    const cartItemId = `${incoming.dishId}__${incoming.optionName || 'default'}__${cleanNotes}`;

    setItems((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.cartItemId === cartItemId
            ? { ...i, quantity: i.quantity + incoming.quantity }
            : i
        );
      }
      return [...prev, { ...incoming, notes: cleanNotes || undefined, cartItemId }];
    });

    setLastAddedName(
      incoming.optionName ? `${incoming.name} (${incoming.optionName})` : incoming.name
    );
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalCount,
        subtotal,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        lastAddedName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
