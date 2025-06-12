import LocaleSwitcher from "@/components/LocaleSwitcher";
import { getUserLocale } from "@/services/locale";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const locale = await getUserLocale();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <LocaleSwitcher locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
