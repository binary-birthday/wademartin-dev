// The site's colours (SPEC.md section 6, "Look"). Dark theme only.
// tests/theme.test.ts checks every text pair below against WCAG AA.
export const colors = {
  bg: "#13294B", // navy
  surface: "#243858", // navy lifted 7% toward white: code blocks, banners
  rule: "#364966", // navy lifted 15% toward white: borders, dividers
  text: "#E6EBF2",
  muted: "#A7B1C0", // text mixed 30% toward navy
  link: "#2DD4BF", // teal: links, "settled"
  accent: "#F15BB5", // magenta: highlights, "exploring"
  accentInCode: "#F47CC4", // magenta mixed 20% toward white, so it passes AA on the code background
  onFill: "#13294B", // text on teal or pink fills
  highlight: "#77407B", // magenta 45% over navy: highlighter mark behind text
} as const;

// Every foreground/background pair the site uses for text.
export const textPairs: [name: string, fg: string, bg: string][] = [
  ["body text", colors.text, colors.bg],
  ["muted text", colors.muted, colors.bg],
  ["links", colors.link, colors.bg],
  ["magenta text", colors.accent, colors.bg],
  ["text in code blocks", colors.text, colors.surface],
  ["muted text in code blocks", colors.muted, colors.surface],
  ["teal in code blocks", colors.link, colors.surface],
  ["magenta in code blocks", colors.accentInCode, colors.surface],
  ["text on settled badge", colors.onFill, colors.link],
  ["text on exploring badge", colors.onFill, colors.accent],
  ["text on outdated badge", colors.onFill, colors.muted],
  ["text on highlighter mark", colors.text, colors.highlight],
  ["text on magenta file tab", colors.onFill, colors.accent],
  ["muted text in the search panel", colors.muted, colors.surface],
];

// Shapes that must stand out from the page: WCAG 1.4.11 asks for 3:1.
export const shapePairs: [name: string, fill: string, bg: string][] = [
  ["settled badge", colors.link, colors.bg],
  ["exploring badge", colors.accent, colors.bg],
  ["outdated badge", colors.muted, colors.bg],
];

// CSS custom properties for the site, including Shiki's css-variables theme
// for code blocks.
export const themeCss = `:root {
  color-scheme: dark;
  --bg: ${colors.bg};
  --surface: ${colors.surface};
  --rule: ${colors.rule};
  --text: ${colors.text};
  --muted: ${colors.muted};
  --link: ${colors.link};
  --accent: ${colors.accent};
  --on-fill: ${colors.onFill};
  --highlight: ${colors.highlight};
  --astro-code-background: ${colors.surface};
  --astro-code-foreground: ${colors.text};
  --astro-code-token-keyword: ${colors.accentInCode};
  --astro-code-token-string: ${colors.link};
  --astro-code-token-string-expression: ${colors.link};
  --astro-code-token-constant: ${colors.link};
  --astro-code-token-function: ${colors.text};
  --astro-code-token-parameter: ${colors.text};
  --astro-code-token-comment: ${colors.muted};
  --astro-code-token-punctuation: ${colors.muted};
  --astro-code-token-link: ${colors.link};
}`;
