import { Container } from "@mantine/core"
import React from "react"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const markdown = `
# PRIVACY NOTICE
**Last updated April 19, 2022**

This privacy notice for The Muslim's Dashboard (**"Company," "we," "us,"** or **"our"**), describes how and why we might collect, store, use and/or share (**"process"**) your information when you use our services(**"Services"**), such as when you:
- Download and use our web application (The Muslim's Dashboard), or any other application of ours that links to this privacy notice
- Engage with us in other related ways, including sales, marketing, or events.

**Questions or concerns?** Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at subaan.qasim@gmail.com.

## SUMMARY OF KEY POINTS
This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.

**What personal information do we process?** When you visit, use, or navigate our Services, we may process personal information depending on how you interact with The Muslim's Dashboard and the Services, the choices you make, and the products and features you use. *Click here to learn more.*

**Do we process any sensitive personal information?** We do not process sensitive personal information.

**Do you receive any information from third parties?** We do not receive any information from third parties.

**How do you process my information?** We process your information to provide, improve and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. *Click here to learn more*

**In what situations and with which parties do we share personal information?** We may share information in specific situation and with specific third parties. *Click here to learn more.*

**How do we keep your information safe?** We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal or modify your information. *Click here to learn more.*

**What are your rights?** Depending on where you are located geographically, the applicable privacy law may mena you have certain rights regarding your personal information. *Click here to learn more.*

**How do I exercise my rights?** The easiest way to exercise your rights is by filling out our data subject request form available [here](https://app.termly.io/notify/6fd3583f-a3f4-434d-8331-4c31412c3d4b), or by contacting us. We will consider and act upon any request in according with applicable data protection laws.
`

const privacypolicy = () => {
  return (
    <Layout>
      <Container>
        <div>privacypolicy</div>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </Container>
    </Layout>
  )
}

export default privacypolicy
