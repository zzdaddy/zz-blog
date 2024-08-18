import Image from './Image'
import Link from './Link'

type cardAttr = {
    title?: string
    time?: string
  author?: string
  subtitle?: string
  description?: any
  imgSrc?: string
  href?: string
}

const MemoCard = ({ title, subtitle, description, imgSrc, href, author, time }:cardAttr) => (
  <div className="w-auto h-auto">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-y-auto relative h-[300px] rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700 hover:shadow-lg`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title as string}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title as string}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-4 min-h-[calc(100%-30px)] box-border">
        {/* <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2> */}
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-300 text-sm">{subtitle}</p>
        <div className="prose mb-3 max-w-none dark:prose-invert markdown-it-body">{description}</div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
      <div className="text-right sticky bottom-0 box-border px-2 w-full">
            { author &&  <span className="author mr-2">{ author }</span> }
            { time &&  <span className="time text-sm text-gray-600">{ new Date(time).toLocaleDateString() }</span> }
        </div>
    </div>
  </div>
)

export default MemoCard
