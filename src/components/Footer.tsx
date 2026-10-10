import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/lib/content";

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm text-haze">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-mist transition-colors hover:text-paper">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Image src="/images/infortum-wordmark-white.png" alt="Infortum" width={1600} height={451} className="h-8 w-auto" />
          <p className="mt-6 text-pretty text-mist">{site.tagline}</p>
          <p className="mt-6 text-sm text-haze">{site.address}</p>
        </div>
        <Column title="Services" links={footer.services} />
        <Column title="Company" links={footer.company} />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-haze sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName} All rights reserved. Powered by{" "}
          <a href={site.credit.href} className="text-mist hover:text-paper" target="_blank" rel="noopener">
            {site.credit.label}
          </a>
          .
        </p>
        <ul className="flex gap-6">
          {footer.legal.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-paper">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
