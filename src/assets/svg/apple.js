import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AppleLogo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={40} height={40} x={8} y={8} fill="#F5F5F5" rx={20} />
    </G>
    <Path
      fill="#7D7D7D"
      d="M34.733 39.04c-1.306 1.267-2.733 1.067-4.106.467-1.454-.614-2.787-.64-4.32 0-1.92.826-2.934.586-4.08-.467-6.507-6.707-5.547-16.92 1.84-17.293 1.8.093 3.053.986 4.106 1.066 1.574-.32 3.08-1.24 4.76-1.12 2.014.16 3.534.96 4.534 2.4-4.16 2.494-3.174 7.974.64 9.507-.76 2-1.747 3.987-3.387 5.453l.013-.013ZM28.04 21.667c-.2-2.974 2.213-5.427 4.987-5.667.386 3.44-3.12 6-4.987 5.667Z"
    />
    <Defs></Defs>
  </Svg>
)
export default AppleLogo
