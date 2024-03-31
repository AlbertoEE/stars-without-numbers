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
      DEFAULT: "#005f73",
      foreground: "#fff",
      "50": "#e7fffd",
      "100": "#c2fff9",
      "200": "#8cfff4",
      "300": "#3dffec",
      "400": "#00ffe7",
      "500": "#00f9ff",
      "600": "#00c5e3",
      "700": "#009bb5",
      "800": "#007a90",
      "900": "#005f73",
      "950": "#004255",
    },
    secondary: {
      DEFAULT: "#E7BB41",
      foreground: "#000000",
      "50": "#fcf9ea",
      "100": "#f8f1c9",
      "200": "#f3e295",
      "300": "#eccb58",
      "400": "#e7bb41",
      "500": "#d49c1e",
      "600": "#b77917",
      "700": "#925716",
      "800": "#7a4619",
      "900": "#683a1b",
      "950": "#3c1e0c",
    },
    success: {
      DEFAULT: "#23CE6B",
      foreground: "#0a2f51",
      "50": "#f0fdf5",
      "100": "#dcfce9",
      "200": "#bbf7d3",
      "300": "#86efb2",
      "400": "#4ade88",
      "500": "#23ce6b",
      "600": "#16a351",
      "700": "#158043",
      "800": "#166538",
      "900": "#145330",
      "950": "#052e18",
    },

    warning: {
      DEFAULT: "#E7BB41",
      foreground: "#0a2f51",
      "50": "#fcf9ea",
      "100": "#f8f1c9",
      "200": "#f3e295",
      "300": "#eccb58",
      "400": "#e7bb41",
      "500": "#d49c1e",
      "600": "#b77917",
      "700": "#925716",
      "800": "#7a4619",
      "900": "#683a1b",
      "950": "#3c1e0c",
    },

    danger: {
      DEFAULT: "#b91c1c",
      foreground: "#fef2f2",
      "50": "#fef2f2",
      "100": "#fee2e2",
      "200": "#fecaca",
      "300": "#fca5a5",
      "400": "#f87171",
      "500": "#ef4444",
      "600": "#dc2626",
      "700": "#b91c1c",
      "800": "#991b1b",
      "900": "#7f1d1d",
      "950": "#450a0a",
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
