import React from 'react'
import { useHistory } from "react-router-dom"
import Header from '../components/Header'
import { useUser } from '../providers/UserProvider'
import "./Home.page.css"

export default function Home() {
  const history = useHistory()
  const { signMessage, message, verified } = useUser()

  return (
    <>
      <Header
        title={<><span className="highlight">Crypto</span>Dappy</>}
        subtitle={<>The brand new <span className="highlight">collectible game</span> on the blockchain</>}
      />
      
        <div className="">
           Msg: {message} verified: {verified}
        </div>
        <button onClick={() => signMessage()}>
          ⚠️ Sign Message
        </button>
      <img className="header-image"
        alt="Header"
        onClick={() => history.push("/packs")}
        src={`${process.env.PUBLIC_URL}/assets/PackDrops.png`}
      />
    </>
  )
}
