import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from 'vite-plugin-env-compatible';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			sass: {
				implementation: sass,
			},
		},
	},
	plugins: [react(), envCompatible()],
	server: {
		port: process.env.PORT || 4000,
		host: true,
	},
});
