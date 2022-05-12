import React from "react"
import HelmetSEO from "../components/HelmetSEO"
import Layout from "../components/Layout"

const success = () => {
  return (
    <Layout>
      <HelmetSEO title="Success" />
      <div>success page</div>
    </Layout>
  )
}

export default success
