import React, { Component } from 'react'
import {StlViewer} from "react-stl-viewer";
const url = "./stl/hv002.stl"

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}
export default class PreviewStl extends Component {
  render() {
    return (
      <div>
        <StlViewer
        style={style}
        orbitControls
        shadows
        url={url}
    />
      </div>
    )
  }
}
