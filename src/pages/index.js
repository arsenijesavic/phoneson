import React, { forwardRef, useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import firebase from "firebase"
import { useMachine } from "@xstate/react"
import { Machine } from "xstate"

const Audio = forwardRef((props, ref) => {
  const { autoPlay, src } = props
  return <audio ref={ref} src={src} autoPlay={autoPlay}></audio>
})

const Trigger = ({ title, src, background, color }) => {
  const sound = React.createRef()

  const _handlePress = () => {
    sound.current.currentTime = 0
    sound.current.play()
  }

  return (
    <div style={{ background, color }}>
      <button className="key" onClick={_handlePress}>
        {title}
      </button>
      <Audio ref={sound} src={src} />
    </div>
  )
}

const Keys = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 50%;
  }

  .key {
    width: 100%;
    height: 33.333vh;
    border: 2px solid rgba(0, 0, 0, 0.7);
    text-align: center;
    display: block;
    opacity: 1;
    outline: none;
    font-size: 50px;
  }

  .playing {
    opacity: 0.3;
  }
`

const SoundBoard = ({ data }) => (
  <Keys>
    {data && data.map((byte, index) => <Trigger key={index} {...byte} />)}
  </Keys>
)

const data = [
  {
    title: "1",
    background: "#EC247B",
    color: "white",
    src: "sounds/Sound0.mp3",
  },

  {
    title: "4",
    background: "white",
    color: "#EC247B",
    src: "sounds/Sound3.mp3",
  },
  {
    title: "2",
    background: "#FB932B",
    color: "white",
    src: "sounds/Sound1.mp3",
  },

  {
    title: "5",
    background: "white",
    color: "#FB932B",
    src: "sounds/Sound4.mp3",
  },
  {
    title: "3",
    color: "white",
    background: "#B152E9",
    src: "sounds/Sound2.mp3",
  },

  {
    title: "6",
    color: "#B152E9",
    background: "white",
    src: "sounds/Sound5.mp3",
  },
]

const data2 = [
  {
    title: "1",
    background: "#DC3245",
    color: "white",
    src: "sounds/B0.mp3",
  },
  {
    title: "4",
    background: "white",
    color: "#DC3245",
    src: "sounds/B3.mp3",
  },
  {
    title: "2",
    background: "#696591",
    color: "white",
    src: "sounds/B1.mp3",
  },
  { title: "5", background: "white", color: "#696591", src: "sounds/B4.mp3" },
  { title: "3", background: "#1B9ABB", color: "white", src: "sounds/B2.mp3" },
  { title: "6", background: "white", color: "#1B9ABB", src: "sounds/B5.mp3" },
]

const database = firebase.database()
const LIVE = database.ref("LIVE")

const IndexPage = () => {
  const [machine, setState] = useState({ state: "NOISE" })

  LIVE.on("value", snapshot => {
    const value = snapshot.val()
    if (machine.state !== value.state) {
      setState(value)
    }
  })

  return (
    <Layout strech title="LIVE 🔴">
      {machine.state === "MENUET4PHONES_SCENE_1" && <SoundBoard data={data} />}
      {machine.state === "MENUET4PHONES_SCENE_2" && <SoundBoard data={data2} />}
      {machine.state === "MENUET4PHONES_SCENE_3" && (
        <>
          <h1>J. S. Bach - Menuet</h1>
          <Audio autoPlay={true} src="sounds/jsbach-menuet.mp3" />
        </>
      )}

      {machine.state === "NOISE" && (
        <>
          <h1>NOISE</h1>
          <Audio autoPlay={true} src="sounds/white-noise.wav" />
        </>
      )}
    </Layout>
  )
}

export default IndexPage
