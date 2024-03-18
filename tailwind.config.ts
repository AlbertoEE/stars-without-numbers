import type { Config } from "tailwindcss"

const { nextui } = require("@nextui-org/react")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
    
    
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "space-theme": {
          colors: {
            background: {
              DEFAULT: "#fff",
              foreground: "#0a9396",
            },
            foreground: { // Used for general text
              DEFAULT: "#fff",
              foreground: "#e9d8a6",
            },
            default: {
              DEFAULT: "#fff",
              foreground: "#94d2bd",
            },
            divider: {
              DEFAULT: "#fff",
              foreground: "#ee9b00",
            },
            overlay: {
              DEFAULT: "#fff",
              foreground: "#ca6702",
            },
            focus: {
              DEFAULT: "#fff",
              foreground: "#ee9b00",
            },
            content1: {
              DEFAULT: "#141414", // Used for cards
              foreground: "#e9d8a6",
            },
            content2: { // Used for buttons
              DEFAULT: "#1F1F1F",
              foreground: "#e9d8a6",
            },
            primary: {
              DEFAULT: "#0a9396",
              foreground: "#e9d8a6",
            },
            secondary: {
              DEFAULT: "#005f73",
              foreground: "#e9d8a6",
            },
            success: {
              DEFAULT: "#94d2bd",
              foreground: "#0a2f51",
            },
            warning: {
              DEFAULT: "#ee9b00",
              foreground: "#0a2f51",
            },
            danger: {
              DEFAULT: "#9b2226",
              foreground: "#e9d8a6",
            },
          },
        },
      },
    }),
  ],
}
export default config
