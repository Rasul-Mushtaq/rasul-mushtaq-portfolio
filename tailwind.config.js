// Tailwind theme extension: brand palette and font stacks, loaded via @config in index.css.
export default {
  theme: {
    extend: {
      colors: {
        canvas: "#080c09",
        panel: "#0d1410",
        brand: "#4ade80",
        "brand-deep": "#22c55e",
        "brand-ink": "#05200f",
        ink: "#f8fafc",
        muted: "#94a3b8",
      },
      fontFamily: {
        display: [
          '"Reem Kufi"',
          '"Instrument Serif"',
          '"Playfair Display"',
          "Georgia",
          "serif",
        ],
        body: [
          '"Tajawal"',
          '"Plus Jakarta Sans"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
};
