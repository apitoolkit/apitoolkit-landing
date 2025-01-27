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
    extend: {
      colors: {
        bgAlternate: "#F5F6FA",
        bgBase: "#FBFCFD",
        bgInverse: "#12131A",
        bgOverlay: "#FBFCFD",
        bgRaised: "#FBFCFD",
        bgSunken: "#F5F6FA",
        fillBrand: {
          strong: "#0068FF",
          weak: "#0068FF0D",
        },
        fillDisabled: "#0011661A",
        fillError: {
          strong: "#C73A3A",
          weak: "#FF4A4A0D",
        },
        fillHover: "#0015800A",
        fillInformation: {
          strong: "#1A74A8",
          weak: "#26B0FF0D",
        },
        fillInverse: {
          disabled: "#FFFFFF1F",
          weak: "#FFFFFF0F",
        },
        fillOverlay: "#000D4D73",
        fillPress: "#0011661A",
        fillSelected: "#0068FF",
        fillSuccess: {
          strong: "#067A57",
          weak: "#0ACC920D",
        },
        fillWarning: {
          strong: "#8F6C1A",
          weak: "#FFC02E0D",
        },
        fillWeak: "#0015800A",
        fillWeaker: "#00158005",
        fillWhite: "#FFFFFF",
        fillYellow: "#FEC62E",
        iconBrand: "#0068FFCC",
        iconDisabled: "#0011661A",
        iconError: "#C73A3ACC",
        iconInformation: "#1A74A8CC",
        iconInverse: {
          DEFAULT: "#FFFFFF99",
          disabled: "#FFFFFF1F",
          strong: "#FFFFFF",
        },
        iconNeutral: "#000D4D73",
        iconSuccess: "#067A57CC",
        iconWarning: "#8F6C1ACC",
        strokeBrand: {
          strong: "#0068FFCC",
          weak: "#0068FF33",
        },
        strokeDisabled: "#0011661A",
        strokeError: {
          strong: "#C73A3ACC",
          weak: "#C73A3A24",
        },
        strokeFocus: "#0068FF",
        strokeInformation: {
          strong: "#1A74A8CC",
          weak: "#1A74A833",
        },
        strokeInverse: {
          disabled: "#FFFFFF1F",
          strong: "#FFFFFF99",
          weak: "#FFFFFF1F",
        },
        strokeSelected: "#0068FF",
        strokeStrong: "#000D4D73",
        strokeSuccess: {
          strong: "#067A57CC",
          weak: "#067A5733",
        },
        strokeWarning: {
          strong: "#8F6C1ACC",
          weak: "#8F6C1A33",
        },
        strokeWeak: "#0011661A",
        textBrand: "#0068FF",
        textDisabled: "#000D4D73",
        textError: "#C73A3A",
        textInverse: {
          disabled: "#FFFFFF1F",
          strong: "#FFFFFF",
          weak: "#FFFFFFC7",
        },
        textStrong: "#000626E6",
        textWeak: "#000833A6",
      },
    },
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
          primary: "#0068ff",
          secondary: "#567bd6",
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
