import { Link } from "gatsby"
import * as React from "react"
import Layout from "./components/layout"

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <img
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/2.jpg"
        />
      </Layout>
    </main>
  )
}


export default AboutPage