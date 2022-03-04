import LazyLoad from 'react-lazyload';

export default function LazyLoadImages({ src, altText }) {
  return (
    <LazyLoad>
      <img
        src={src}
        alt={altText}
      />
    </LazyLoad>
  )
}