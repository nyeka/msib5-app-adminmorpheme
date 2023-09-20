import { defineStore } from "pinia";

interface ICounter {
  id: number;
  name: string;
  price: number;
  category: string;
  images?: string;
}

export const useProductStore = defineStore("Product", {
  state: () => ({
    Products: [
      {
        id: 1,
        name: "Smartphone",
        price: 599.99,
        category: "Electronics",
        images: "https://picsum.photos/300/300?random=3",
      },
      {
        id: 2,
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        images: "https://picsum.photos/300/300?random=5",
      },
      {
        id: 3,
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        images: "https://picsum.photos/300/300?random=7",
      },
      {
        id: 6,
        name: "Desk Chair",
        price: 149.99,
        category: "Furniture",
        images: "https://picsum.photos/300/300?random=9",
      },
      {
        id: 7,
        name: "Bluetooth Speaker",
        price: 69.99,
        category: "Electronics",
        images: "https://picsum.photos/300/300?random=3",
      },
    ] as ICounter[],
  }),

  actions: {
    addProducts(product: ICounter) {
      this.Products.push(product);
    },
    removeProduct(id: number) {
      this.Products = this.Products.filter((item) => item.id !== id);
    },
  },
});
