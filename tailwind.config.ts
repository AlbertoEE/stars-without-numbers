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
      50: "#126736",
      100: "#168143",
      200: "#1A9B50",
      300: "#1FB45E",
      400: "#23CE6B",
      500: "#39D37A",
      600: "#4FD889",
      700: "#65DD97",
      800: "#7BE2A6",
      900: "#91E7B5",
    },
    warning: {
      DEFAULT: "#E7BB41",
      foreground: "#0a2f51",
      50: "#745E21",
      100: "#907529",
      200: "#AD8C31",
      300: "#CAA439",
      400: "#E7BB41",
      500: "#E9C254",
      600: "#ECC967",
      700: "#EECF7A",
      800: "#F1D68D",
      900: "#F3DDA0",
    },
    danger: {
      DEFAULT: "#7B2D26",
      foreground: "#e9d8a6",
      50: "#472125",
      100: "#59292E",
      200: "#6B3238",
      300: "#7C3A41",
      400: "#8E424A",
      500: "#99555C",
      600: "#A5686E",
      700: "#B07B80",
      800: "#BB8E92",
      900: "#C7A1A5",
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
            "background-image": `repeating-linear-gradient(45deg, #0000, #0000 5px, ${spaceTheme.colors[color][variant]}25 5px, ${spaceTheme.colors[color][variant]}25 8px)`,
          }
        })
      })
      addUtilities(customUtilities)
    }),
  ],
}
export default config
