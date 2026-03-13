import Image from 'next/image'

function capitalizeDomain(name) {
  if (!name || typeof name !== "string") return name;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function Logo({ domain, logo }) {
  return (
    <div className="tw-text-center">
      {logo ? (
        <Image
          src={logo}
          width={300}
          height={300}
          alt=""
          className="d-inline-flex img-fluid tw-mb-4"
        />
      ) : (
        <h1 className="tw-text-4xl md:tw-text-5xl tw-font-semibold tw-tracking-tight tw-text-white">
          {capitalizeDomain(domain)}
        </h1>
      )}
      <p className="tw-text-sm tw-text-zinc-400 tw-mt-3">
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
