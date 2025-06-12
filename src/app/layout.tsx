import LocaleSwitcher from "@/components/LocaleSwitcher";
import { getUserLocale } from "@/services/locale";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const userLocale = await getUserLocale();

  console.log("1111", locale);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={userLocale}>
          <LocaleSwitcher locale={userLocale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
