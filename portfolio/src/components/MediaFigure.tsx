/**
 * MediaFigure — an image with a caption that states what the media is
 * and why it was included on the page.
 */
export default function MediaFigure({
  src,
  alt,
  title,
  caption,
}: {
  src: string
  alt: string
  title: string
  caption: string
}) {
  return (
    <figure className="media-figure">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>
        <span className="cap-title">{title}</span>
        {caption}
      </figcaption>
    </figure>
  )
}
