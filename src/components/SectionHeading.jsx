import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}