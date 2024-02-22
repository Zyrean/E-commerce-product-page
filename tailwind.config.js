/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      backgroundImage: {
        "collection-highligh":
          "url(`/public/images/image-product-1-thumbnail.jpg`)",
      },
    },
  },
  plugins: [],
};
