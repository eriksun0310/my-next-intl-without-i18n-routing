"use client";
import { ChangeEvent } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

type LocaleSwitcherProps = {
  locale: Locale;
};

export default function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  function onChange(e: ChangeEvent<HTMLSelectElement>) {
    const locale = e.target.value as Locale;
    setUserLocale(locale);
  }

  return (
    <div className="relative">
      <div className="w-full flex justify-between border-b py-4 ">
        <select
          value={locale}
          onChange={onChange}
          className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="zh">ZH</option>
          <option value="ja">JA</option>
        </select>
      </div>
    </div>
  );
}
