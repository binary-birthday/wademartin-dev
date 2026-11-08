// The site's colours (SPEC.md section 6, "Look"). Dark theme only.
// tests/theme.test.ts checks every text pair below against WCAG AA.
export const colors = {
  bg: "#13294B", // navy
  surface: "#243858", // navy lifted 7% toward white: code blocks, banners
  rule: "#364966", // navy lifted 15% toward white: borders, dividers
  text: "#E6EBF2",
  muted: "#A7B1C0", // text mixed 30% toward navy
  link: "#2DD4BF", // teal: links, "settled"
  accent: "#FF6FA5", // hot pink: highlights, "exploring"
  onFill: "#13294B", // text on teal or pink fills
} as const;

// Every foreground/background pair the site uses for text.
export const textPairs: [name: string, fg: string, bg: string][] = [
  ["body text", colors.text, colors.bg],
  ["muted text", colors.muted, colors.bg],
  ["links", colors.link, colors.bg],
  ["pink text", colors.accent, colors.bg],
  ["text in code blocks", colors.text, colors.surface],
  ["muted text in code blocks", colors.muted, colors.surface],
  ["teal in code blocks", colors.link, colors.surface],
  ["pink in code blocks", colors.accent, colors.surface],
  ["text on settled badge", colors.onFill, colors.link],
  ["text on exploring badge", colors.onFill, colors.accent],
  ["muted text on outdated badge", colors.muted, colors.surface],
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
  --astro-code-background: ${colors.surface};
  --astro-code-foreground: ${colors.text};
  --astro-code-token-keyword: ${colors.accent};
  --astro-code-token-string: ${colors.link};
  --astro-code-token-string-expression: ${colors.link};
  --astro-code-token-constant: ${colors.link};
  --astro-code-token-function: ${colors.text};
  --astro-code-token-parameter: ${colors.text};
  --astro-code-token-comment: ${colors.muted};
  --astro-code-token-punctuation: ${colors.muted};
  --astro-code-token-link: ${colors.link};
}`;
