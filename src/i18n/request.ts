import { getUserLocale } from "@/services/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const userLocale = await getUserLocale();

  const locale = userLocale || "zh";

  console.log("locale", locale);
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
