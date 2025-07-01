/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_KEY: string;
}

interface ImportMata {
    readonly env: ImportMetaEnv;
}