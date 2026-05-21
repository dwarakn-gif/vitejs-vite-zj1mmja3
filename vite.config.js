import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/* import Sidebar from "@/components/Sidebar"; */
/*
 
export default defineConfig({
  plugins: [react()],
});
*/
import path from "path";
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
