import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            description
            image
          }
        }
      }
    `
  )

  const name = site.siteMetadata.name
  const metaDescription = description || site.siteMetadata.description
  const image = site.siteMetadata.image
  const twitterHandle = site.siteMetadata.twitterHandle

  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      /> */}

      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no, minimal-ui"
        key="viewport"
      />
      <title>{title}</title>
      {/* <meta name="generator" content="Gatsby 2.15.16"/> */}
      {/* <!-- Regular meta tags --> */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="rating" content="general" />
      {/* <meta http-equiv="content-language" content="sr-Latn" /> */}
      {/* <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="" /> */}
      {/* <meta property="fb:app_id" content="768837276512199" /> */}
      {/* <!-- Open graph --> */}

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-itunes-app" content="app-id=1480865931" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" href="/assets/images/icon.png" />
      <meta name="google-play-app" content="app-id=com.boxspot.athlete" />

      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {/* <!-- Tweeter cards --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {/* <!-- Google meta --> */}
      <meta itemprop="image" content={image} />
      <meta itemprop="title" content={title} />
      <meta itemprop="description" content={metaDescription} />
      {/* <!-- Open Directory --> */}
      <meta name="googlebot" content="noodp" />
      <meta name="slurp" content="noydir" />
      <meta name="msnbot" content="noodp" />
      {/* <!-- Favicons  --> */}
      <link
        rel="icon"
        type="image/x-icon"
        href="/assets/images/favicon/favicon.ico"
      />
      {/* <link
        rel="icon"
        type="image/x-icon"
        href="/assets/images/favicon-edge.ico"
      /> */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/favicon/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="/assets/images/favicon/ms-icon-144x144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="150x150"
        href="/assets/images/favicon/ms-icon-150x150.png"
      />
      {/* <link
        id="favicon"
        href="/assets/images/favicon-edge.ico?rev=40"
        rel="shortcut icon"
        type="image/vnd.microsoft.icon"
      /> */}
      {/* <link
        id="favicon"
        href="/assets/images/favicon.ico?rev=40"
        rel="shortcut icon"
        type="image/vnd.microsoft.icon"
      /> */}
      {/* <!--ANDROID--> */}
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/assets/images/favicon/android-icon-48x48.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/assets/images/favicon/android-icon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="/assets/images/favicon/android-icon-144x144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/assets/images/favicon/android-icon-192x192.png"
      />
      {/* <!--IOS--> */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/images/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/images/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/images/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/images/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/images/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/images/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/images/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/images/favicon/apple-icon-180x180.png"
      />
    </Helmet>
  )
}

SEO.defaultProps = {}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
