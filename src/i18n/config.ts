export type Locale = (typeof locales)[number];

export const locales = ["en", "ja", "zh"] as const;
export const defaultLocale: Locale = "zh";
