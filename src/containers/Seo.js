import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ name, label, website, imageUrl, keywords = [] }) => {
  const title = `Resume/CV of ${name}`;
  const description = `${name} - ${label}`;
  return (
    <Helmet>
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={imageUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={imageUrl} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={website} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={imageUrl} />
      <meta name="og:site_name" content={title} />
      <title>{name} CV</title>
    </Helmet>
  );
};

export default Seo;
