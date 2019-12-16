import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import GlobalStyles from "../../styles/global"

import styled from "styled-components"
// import Header from "./header"
// import Footer from "./footer"
import SEO from "../seo"
import Tone from "tone"

const Wrap = styled.div`
  position: relative;
  width: ${props => (props.strech ? "100%" : "992px")};
  margin: 0 auto;

  @media (max-width: 992px) {
    width: 100%;
  }

  background: black;
`

const Layout = ({ children, title, header, ...props }) => {
  return (
    <>
      <Helmet>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
      <GlobalStyles />

      <SEO title={`PHONES:ON | ${title}`} />
      <Wrap id="page-wrap" {...props}>
        {/* {header && <Header user={me} />} */}
        <main>{children}</main>
      </Wrap>
      {/* {header && <Footer />} */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  header: true,
}

export default Layout
