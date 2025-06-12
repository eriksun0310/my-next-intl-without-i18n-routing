import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{t("home")}</Link>
    </div>
  );
}
