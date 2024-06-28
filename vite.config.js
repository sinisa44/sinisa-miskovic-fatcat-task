import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
    resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
