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
        background: {
          alternate: "#F5F6FA",
          base: "#FBFCFD",
          inverse: "#12131A",
          overlay: "#FBFCFD",
          raised: "#FBFCFD",
          sunken: "#F5F6FA",
        },
        fill: {
          brand: {
            strong: "#0068FF",
            weak: "#0068FF0D",
          },
          disabled: "#0011661A",
          error: {
            strong: "#C73A3A",
            weak: "#FF4A4A0D",
          },
          hover: "#0015800A",
          information: {
            strong: "#1A74A8",
            weak: "#26B0FF0D",
          },
          inverse: {
            disabled: "#FFFFFF1F",
            weak: "#FFFFFF0F",
          },
          overlay: "#000D4D73",
          press: "#0011661A",
          selected: "#0068FF",
          success: {
            strong: "#067A57",
            weak: "#0ACC920D",
          },
          warning: {
            strong: "#8F6C1A",
            weak: "#FFC02E0D",
          },
          weak: "#0015800A",
          weaker: "#00158005",
          white: "#FFFFFF",
          yellow: "#FEC62E",
        },
        icon: {
          brand: "#0068FFCC",
          disabled: "#0011661A",
          error: "#C73A3ACC",
          information: "#1A74A8CC",
          inverse: {
            DEFAULT: "#FFFFFF99",
            disabled: "#FFFFFF1F",
            strong: "#FFFFFF",
          },
          neutral: "#000D4D73",
          success: "#067A57CC",
          warning: "#8F6C1ACC",
        },
        stroke: {
          brand: {
            strong: "#0068FFCC",
            weak: "#0068FF33",
          },
          disabled: "#0011661A",
          error: {
            strong: "#C73A3ACC",
            weak: "#C73A3A24",
          },
          focus: "#0068FF",
          information: {
            strong: "#1A74A8CC",
            weak: "#1A74A833",
          },
          inverse: {
            disabled: "#FFFFFF1F",
            strong: "#FFFFFF99",
            weak: "#FFFFFF1F",
          },
          selected: "#0068FF",
          strong: "#000D4D73",
          success: {
            strong: "#067A57CC",
            weak: "#067A5733",
          },
          warning: {
            strong: "#8F6C1ACC",
            weak: "#8F6C1A33",
          },
          weak: "#0011661A",
        },
        text: {
          brand: "#0068FF",
          disabled: "#000D4D73",
          error: "#C73A3A",
          inverse: {
            disabled: "#FFFFFF1F",
            strong: "#FFFFFF",
            weak: "#FFFFFFC7",
          },
          strong: "#000626E6",
          weak: "#000833A6",
        }
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
