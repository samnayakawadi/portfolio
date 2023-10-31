/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        herobg: "#F8F9FC",
        footerbg: "#1D1E24",
        aboutbg: "#191919",
        servicesbg: "#101010",
        serviceTileBg: "#191919",
        serviceTileBgOnHover: "#1D1E24"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi", "business"],
  },
}