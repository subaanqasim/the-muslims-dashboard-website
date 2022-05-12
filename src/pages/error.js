import React from "react"
import HelmetSEO from "../components/HelmetSEO"
import Layout from "../components/Layout"

const error = () => {
  return (
    <Layout>
      <HelmetSEO title="Error" />
      <div>error page</div>
    </Layout>
  )
}

export default error
