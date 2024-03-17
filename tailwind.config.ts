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
              DEFAULT: "#48525d",
              foreground: "#0a9396",
            },
            foreground: {
              DEFAULT: "#1F1F1F",
              foreground: "#e9d8a6",
            },
            divider: {
              DEFAULT: "#1F1F1F",
              foreground: "#ee9b00",
            },
            overlay: {
              DEFAULT: "#1F1F1F",
              foreground: "#ca6702",
            },
            focus: {
              DEFAULT: "#1F1F1F",
              foreground: "#ee9b00",
            },
            content1: {
              DEFAULT: "#141414",
              foreground: "#e9d8a6",
            },
            content2: {
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
            default: {
              DEFAULT: "#ffff",
              foreground: "#94d2bd",
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
