import React, { useEffect, useRef } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import sadTrombone from "../sounds/sadtrombone.swf.mp3"

const NotFoundPage = () => {
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current.play()
  }, [])

  return (
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <audio ref={audioRef}>
        <source src={sadTrombone} type="audio/mpeg" />
      </audio>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="404: Not found" />
