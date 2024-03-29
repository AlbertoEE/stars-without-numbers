import type { Config } from "tailwindcss"

const { nextui } = require("@nextui-org/react")
const plugin = require("tailwindcss/plugin")

export const spaceTheme = {
  colors: {
    background: {
      DEFAULT: "#fff",
      foreground: "#0a9396",
    },
    foreground: {
      // Used for general text
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
    content2: {
      // Used for buttons
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
      DEFAULT: "#23CE6B",
      foreground: "#0a2f51",
      900: "#126736",
      800: "#168143",
      700: "#1A9B50",
      600: "#1FB45E",
      500: "#23CE6B",
      400: "#39D37A",
      300: "#4FD889",
      200: "#65DD97",
      100: "#7BE2A6",
      50: "#91E7B5",
    },
    warning: {
      DEFAULT: "#E7BB41",
      foreground: "#0a2f51",
      900: "#453814",
      800: "#6E591F",
      700: "#967A2A",
      600: "#BF9A36",
      500: "#E7BB41",
      400: "#EAC55C",
      300: "#EECE76",
      200: "#F1D891",
      100: "#F4E1AB",
      50: "#F8EBC6",
    },
    danger: {
      DEFAULT: "#b91c1c",
      foreground: "#fef2f2",
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
  },
  
  },
}

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
        "space-theme": { ...spaceTheme },
      },
    }),
    plugin(function ({ addUtilities }) {
      const customUtilities: any = {}
      Object.keys(spaceTheme.colors).forEach((color) => {
        Object.keys(spaceTheme.colors[color]).forEach((variant) => {
          customUtilities[`.bg-stripe-${color}-${variant.toLowerCase()}`] = {
            "background-image": `repeating-linear-gradient(45deg, #0000, #0000 5px, ${spaceTheme.colors[color][variant]} 5px, ${spaceTheme.colors[color][variant]} 8px)`,
          }
        })
      })
      addUtilities(customUtilities)
    }),
  ],
}
export default config
