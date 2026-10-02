/**
 * Quote — a cited quotation paired with a short note on what it taught
 * the author. Supports the “descriptions of learning” requirement.
 */
export default function Quote({
  text,
  source,
  note,
}: {
  text: string
  source: string
  note?: string
}) {
  return (
    <figure className="quote">
      <blockquote>“{text}”</blockquote>
      <figcaption>— {source}</figcaption>
      {note ? <p className="quote-note">{note}</p> : null}
    </figure>
  )
}
