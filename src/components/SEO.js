import Head from 'next/head';

export default function SEO({ title, description, keywords, author }) {
  return (
    <Head>
      <title>{title ? `${title} | Cargo Tracking` : 'Cargo Tracking'}</title>
      <meta name="description" content={description || 'Cargo solutions for modern businesses'} />
      <meta name="keywords" content={keywords || 'cargo tracking, cargo shipment, consignment'} />
      <meta name="author" content={author || 'Cargo Tracking'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
