/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        regular: "PingARLT",
      },
      colors: {
        primary: {
          DEFAULT: "#004956",
          d: "#004955",
          l: "#004D5A",
          darker: "#1e2f32",
        },
        light: {
          DEFAULT: "#BBF3E5",
          d: "#A8F0DE",
          l: "#CBF6EB",
        },
        secondary: {
          DEFAULT: "#76E8CD",
          d: "#73E7CC",
          l: "#96EDD9",
          50: "#BAF3E6",
          25: "#CFF7EE",
        },
        grayer: {
          50: "#fcfcfc",
          100: "#f8f8f8",
          200: "#eee",
          300: "#bbb",
        },
        darker: {
          50: "#999999",
          100: "#666666",
          200: "#444444",
          250: "#333333",
          300: "#222222",
          350: "#2C2C2C",
          400: "#272626",
        },
      },
      fontSize: {
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        md: ["0.9rem", "1.3rem"],
        lg: ["1.125rem", "1.75rem"],
      },
      container: {
        padding: {
          DEFAULT: "0.75rem",
          sm: "0.75rem",
          lg: "1rem",
        }, 

        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
          "2xl": "1400px",
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
}

