/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import Footer from './footer'
import CookieConsent from "react-cookie-consent"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto bg-primary-dark light:bg-offwhite text-white light:text-black transition-all duration-200 ease-linear antialiased font-sans">
        <main>{children}</main>
      </div>
      <Footer />
      <CookieConsent
          enableDeclineButton 
          flipButtons
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
          style={{
            background: "linear-gradient(to right, transparent, #171717)",
            textShadow: "2px 2px black",
          }}
          buttonStyle={{
            background: "radial-gradient(circle at top right, #222, transparent)",
            color: "white",
            fontWeight: "bolder",
            borderRadius: '3px',
            border: "1px black",
            textShadow: "2px 2px black",
          }}
        >
          PubliusLogic uses cookies for user experience.{" "}
          <span 
            style={{ 
              fontSize: "14px",
              textAlign: "center",
              marginLeft: "20px"
            }}
          > 
            <Link to='/privacy' alt='Privacy Page'>
              Privacy Page
            </Link>
          </span>
        </CookieConsent>
    </>
  )
}

export default Layout
