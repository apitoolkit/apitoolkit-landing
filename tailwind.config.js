module.exports = {
  content: [
    "./**/*.{html,md,liquid}",
    "!./_quickstatic/public/*.{html,md,liquid}",
  ],
  safelist: [
    "h-screen",
    "h-full",
    "w-screen",
    "w-full",
    "h-lvh",
    "lg:grid-cols-4",
    "text-md",
    "pl-6",
    "pl-9",
    "pl-12",
  ],
  theme: {
    // colors: {
    //   atblue: "#0068ff",
    //   atyellow: "#ffff00",
    //   atlightblue: "#567bd6",
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    // ...
  ],
  darkMode: ["class", '[data-theme="sunset"]'],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    // themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    themes: [
      "emerald",
      {
        sunset: {
          "color-scheme": "dark",
          primary: "#FF865B",
          secondary: "#377cfb",
          "secondary-content": "#fff",
          accent: "#B387FA",
          neutral: "oklch(26% 0.019 237.69)",
          "neutral-content": "oklch(70% 0.019 237.69)",
          "base-100": "#0B0C14",
          "base-200": "oklch(20% 0.019 237.69)",
          "base-300": "oklch(18% 0.019 237.69)",
          "base-content": "rgb(201, 211, 238)",
          info: "#89e0eb",
          success: "#addfad",
          warning: "#f1c891",
          error: "#ffbbbd",
          "--rounded-box": "1.2rem",
          "--rounded-btn": "0.8rem",
          "--rounded-badge": "0.4rem",
          "--tab-radius": "0.7rem",
        },
      },
    ],
    darkTheme: "sunset", // name of one of the included themes for dark mode
    // darkTheme: false,
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
