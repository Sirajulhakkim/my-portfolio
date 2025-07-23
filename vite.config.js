import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react'

export defult defineConfig ( {
    plugins:[react()],
    base: process.env.VITE_BASE_PATH || '/latest-portfolio'
})