/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        "off-black": "#222222",
        papyrus: "#FBF6E5",
        "accent-green-light": "#9AC19B",
        "accent-green": "#74AA76",
        "accent-green-hover": "#67A268",
        "accent-green-active": "#5D985F",
        "main-gray": "#f2f3f5",
        "main-gray-hover": "#E8EAED",
        "main-gray-active": "#DCDFE4",
        "off-gray": "#e7e1d0",
      },
    },
  },
  plugins: [],
};
