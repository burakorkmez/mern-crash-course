import {create} from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "All fields are required" };
        }
        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });
            if (!response.ok) {
                const errorData = await response.json();
                return { success: false, message: errorData.message || "Failed to create product" };
            }
            const data = await response.json();
            set((state) => ({ products: [...state.products, data.product] }));
            return { success: true, message: "Product created successfully" };
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Server error" };
        }
    },
    fetchProducts: async () => {
        try {
            const response = await fetch("/api/products");
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            set({ products: data.products });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};

        set(state => ({products: state.products.filter(product => product._id !== pid)}));
        return {success: true, message: data.message};
    },
    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};

        set(state => ({
            products: state.products.map((product) => (product._id === pid ? data.data : product)),
        }));
        return {success: true, message: data.message};
    },
}))
