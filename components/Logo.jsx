import Image from 'next/image'

function capitalizeDomain(name) {
  if (!name || typeof name !== "string") return name;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function Logo({ domain, logo, align = "center", hideTextWordmark = false }) {
  const alignClass =
    align === "start"
      ? "tw-text-center md:tw-text-left"
      : "tw-text-center";
  const showTextBrand = !logo && !hideTextWordmark;
  return (
    <div className={alignClass}>
      {logo ? (
        <Image
          src={logo}
          width={300}
          height={300}
          alt={`${capitalizeDomain(domain)} logo`}
          className="d-inline-flex img-fluid tw-mb-4 tw-max-h-16 md:tw-max-h-20 tw-w-auto"
        />
      ) : showTextBrand ? (
        <h1 className="tw-text-4xl md:tw-text-5xl tw-font-semibold tw-tracking-tight tw-text-white">
          {capitalizeDomain(domain)}
        </h1>
      ) : null}
      <p
        className={`tw-text-sm tw-text-zinc-400 ${showTextBrand || logo ? "tw-mt-3" : "tw-mt-0"}`}
      >
        <a
          href="https://contrib.com/"
          className="tw-no-underline tw-text-zinc-400 hover:tw-text-white tw-transition-colors"
        >
          Proud Member of CONTRIB
        </a>
        {" · "}
        <a
          href="https://vnoc.com/"
          className="tw-no-underline tw-text-zinc-400 hover:tw-text-white tw-transition-colors"
        >
          Powered by VNOC
        </a>
      </p>
    </div>
  );
}
