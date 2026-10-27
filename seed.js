// Run once: npm run seed
// Creates an admin user + sample products so you can test immediately.
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";
import Product from "./models/Product.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

await User.deleteMany({});
await Product.deleteMany({});

await User.create({ name: "Admin", email: "admin@shopsmart.com", password: "admin123", role: "admin" });
await User.create({ name: "Test Customer", email: "user@shopsmart.com", password: "user123" });

await Product.insertMany([
  { name: "Running Shoes", price: 59.99, category: "shoes", stock: 25, description: "Light and comfy", image: "https://placehold.co/300x300?text=Shoes" },
  { name: "Cotton T-Shirt", price: 14.99, category: "clothing", stock: 80, description: "100% cotton", image: "https://placehold.co/300x300?text=T-Shirt" },
  { name: "Wireless Earbuds", price: 39.99, category: "electronics", stock: 40, description: "Bluetooth 5.3", image: "https://placehold.co/300x300?text=Earbuds" },
  { name: "Backpack", price: 29.99, category: "bags", stock: 30, description: "Water resistant", image: "https://placehold.co/300x300?text=Backpack" },
  { name: "Smart Watch", price: 89.99, category: "electronics", stock: 15, description: "Fitness tracking", image: "https://placehold.co/300x300?text=Watch" },
]);

console.log("Done! Admin: admin@shopsmart.com / admin123");
process.exit(0);
