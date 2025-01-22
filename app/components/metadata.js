import Head from "next/head";

export default function Metadata({ title, description, keywords, openGraph }) {
    return (
        <Head>
            {/* Standard meta tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords?.join(", ")} />
            
            {/* Open Graph tags */}
            {openGraph && (
                <>
                    <meta property="og:title" content={openGraph.title} />
                    <meta property="og:description" content={openGraph.description} />
                    <meta property="og:url" content={openGraph.url} />
                </>
            )}
        </Head>
    );
}