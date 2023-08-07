import { defineConfig,type PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer() as PluginOption],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
