"use client";

export default function Navbar({
  lang,
  setLang,
  t
}: {
  lang: "en" | "id";
  setLang: (v: "en" | "id") => void;
  t: any;
}) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 px-6 py-4 flex justify-between">
      <span className="font-bold">Novusterria Expo 1972</span>

      <div className="flex gap-4 items-center">
        <a href="#home">{t.navHome}</a>
        <a href="#about">{t.navAbout}</a>

        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="border px-2 py-1 text-sm"
        >
          {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}
