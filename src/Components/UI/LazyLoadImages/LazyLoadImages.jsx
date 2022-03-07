import LazyLoad from 'react-lazyload';

export default function LazyLoadImages({ src, altText, classText = '' }) {
  return (
    <LazyLoad>
      <img
        src={src}
        alt={altText}
        className={classText}
      />
    </LazyLoad>
  )
}