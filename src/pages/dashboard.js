import React, { forwardRef, useState } from "react";
import Layout from "../components/Layout";
import firebase from "firebase";

const database = firebase && firebase.database && firebase.database();
const LIVE = database && database.ref("LIVE");

const IndexPage = () => {
  const [machine, setState] = useState({ state: "MENUET4PHONES_SCENE_1" });

  LIVE &&
    LIVE.on("value", snapshot => {
      const value = snapshot.val();
      if (machine.state !== value.state) {
        setState(value);
      }
    });

  const _changeState = state => {
    LIVE.set({ state });
  };

  console.log(machine);
  return (
    <Layout strech title="LIVE 🔴">
      <button
        className="button"
        onClick={() => _changeState("MENUET4PHONES_SCENE_1")}
      >
        MENUET4PHONES_SCENE_1
      </button>
      <button
        className="button"
        onClick={() => _changeState("MENUET4PHONES_SCENE_2")}
      >
        MENUET4PHONES_SCENE_2
      </button>
      <button
        className="button"
        onClick={() => _changeState("MENUET4PHONES_SCENE_3")}
      >
        MENUET4PHONES_SCENE_3
      </button>
      <button className="button" onClick={() => _changeState("NOISE")}>
        NOISE
      </button>
      <p>{JSON.stringify(machine)}</p>
    </Layout>
  );
};

export default IndexPage;
