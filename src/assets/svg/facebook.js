import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const FaceBookLogo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={40} height={40} x={8} y={8} fill="#F5F5F5" rx={20} />
    </G>
    <Path
      fill="#3C5A99"
      d="M28 44c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z"
    />
    <Path
      fill="#fff"
      d="M29.244 36v-7.288H31.7l.369-2.853h-2.825v-1.815c0-.825.228-1.385 1.41-1.385h1.496v-2.543a20.118 20.118 0 0 0-2.194-.113c-2.172 0-3.66 1.325-3.66 3.76v2.1H23.85v2.853h2.447V36h2.947Z"
    />
    <Defs></Defs>
  </Svg>
)
export default FaceBookLogo