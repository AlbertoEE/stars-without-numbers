import type { Config } from "tailwindcss"

const { nextui } = require("@nextui-org/react")
const plugin = require("tailwindcss/plugin")

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
            },
            warning: {
              DEFAULT: "#E7BB41",
              foreground: "#0a2f51",
            },
            danger: {
              DEFAULT: "#7B2D26",
              foreground: "#e9d8a6",
            },
          },
        },
      },
    }),
    plugin(function ({ addUtilities, theme }) {
      const colors = theme("colors")
      let stripeUtilities = {}

      Object.keys(colors).forEach((colorName) => {
        const colorGroup = colors[colorName]

        // Check if the colorGroup is an object with subtypes
        if (typeof colorGroup === "object" && colorGroup !== null) {
          Object.keys(colorGroup).forEach((subtype) => {
            const colorValue = colorGroup[subtype]

            // Only create utilities for string values
            if (typeof colorValue === "string") {
              const className = `.bg-stripe-${colorName}-${subtype}`
              stripeUtilities[className] = {
                backgroundImage: `repeating-linear-gradient( 45deg, 0000 0px, 0000 5px, ${colorValue} 5px, ${colorValue} 8px )`,
              }
            }
          })
        }
      })

      // Add the generated utilities to Tailwind
      addUtilities(stripeUtilitiess, ["responsive", "hover"])
    }),
  ],
}
export default config
