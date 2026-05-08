"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type InquiryItemType = "gear" | "campsite" | "trip";

export interface InquiryItem {
  id: string; // The specific item ID
  type: InquiryItemType;
  name: string;
  image: string;
  quantity?: number; // Only for gear
}

interface InquiryContextType {
  items: InquiryItem[];
  addItem: (item: InquiryItem) => void;
  removeItem: (id: string, type: InquiryItemType) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBasket: () => void;
  totalItems: number;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("sucre_inquiry_basket");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse inquiry basket from local storage");
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("sucre_inquiry_basket", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addItem = (newItem: InquiryItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === newItem.id && i.type === newItem.type);
      if (existingIndex >= 0) {
        if (newItem.type === "gear") {
          const updated = [...prev];
          updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + (newItem.quantity || 1);
          return updated;
        }
        return prev; // Campsites and trips don't stack quantity
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (id: string, type: InquiryItemType) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.type === type)));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, "gear");
      return;
    }
    setItems((prev) =>
      prev.map((i) => {
        if (i.id === id && i.type === "gear") {
          return { ...i, quantity };
        }
        return i;
      })
    );
  };

  const clearBasket = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, item) => acc + (item.type === "gear" ? (item.quantity || 1) : 1), 0);

  return (
    <InquiryContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearBasket, totalItems }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}
