interface ImageWithCaptionProps {
  caption?:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
  src: string
  alt: string
}

export function ImageWithCaption(props: ImageWithCaptionProps) {
  if (props.caption !== undefined) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} style={{ width: '100%' }} />
        <figcaption style={{ fontStyle: 'italic' }}>{props.caption}</figcaption>
      </figure>
    )
  } else {
    return <img src={props.src} alt={props.alt} />
  }
}
