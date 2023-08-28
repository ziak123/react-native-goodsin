import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const GoogleLogo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={40} height={40} x={8} y={8} fill="#F5F5F5" rx={20} />
    </G>
    <Path
      fill="#FFC107"
      d="M43.689 24.866H42.4V24.8H28v6.4h9.042c-1.319 3.726-4.864 6.4-9.042 6.4-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6c2.447 0 4.674.923 6.369 2.431l4.525-4.525C36.037 13.642 32.214 12 28 12c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16c0-1.073-.11-2.12-.311-3.134Z"
    />
    <Path
      fill="#FF3D00"
      d="m13.845 20.553 5.257 3.855C20.524 20.886 23.969 18.4 28 18.4c2.447 0 4.674.923 6.369 2.431l4.525-4.525C36.037 13.642 32.214 12 28 12c-6.146 0-11.475 3.47-14.155 8.553Z"
    />
    <Path
      fill="#4CAF50"
      d="M28 44c4.133 0 7.888-1.582 10.727-4.154l-4.952-4.19A9.528 9.528 0 0 1 28 37.6c-4.162 0-7.695-2.654-9.026-6.357l-5.218 4.02C16.404 40.445 21.782 44 28 44Z"
    />
    <Path
      fill="#1976D2"
      d="M43.689 24.866H42.4V24.8H28v6.4h9.042a9.632 9.632 0 0 1-3.27 4.457l.003-.002 4.952 4.19C38.377 40.165 44 36 44 28c0-1.073-.11-2.12-.311-3.134Z"
    />
    <Defs></Defs>
  </Svg>
)
export default GoogleLogo
