import { Fragment } from "react";

/** Renders text, putting any {wrapped} words in the cyan→violet brand gradient. */
export function GText({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("{") && p.endsWith("}") ? (
          <span key={i} className="text-signal-gradient">
            {p.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/** Strips {markers} for plain-text contexts (metadata, aria labels). */
export const plain = (text: string) => text.replace(/[{}]/g, "");
