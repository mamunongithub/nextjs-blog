import Head from "next/head";
import Link from "next/link";

const name = "Mamun";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className="min-h-screen overflow-hidden text-gray-700 bg-gray-50">
      <div className="max-w-xl px-6 mx-auto">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="This is my blog." />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className="my-6 text-center">
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className="w-32 h-32 mx-auto rounded-full"
                alt={name}
              />
              <h1 className="mt-4 text-5xl font-bold">{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className="w-32 h-32 mx-auto rounded-full"
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className="mt-4 text-2xl font-bold">
                <Link href="/">
                  <a className="hover:text-blue-500">{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className="my-6">
            <Link href="/">
              <a className="inline-flex items-center gap-2 p-2 pr-3 font-medium border rounded hover:text-blue-500 hover:bg-blue-50 hover:border-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>{" "}
                Back to home
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
