/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sansita: "Sansita",
        pop: "Poppins",
        jos: "Jost",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #111f22, #031B35)',
      },
    },
  },
  plugins: [],
};
