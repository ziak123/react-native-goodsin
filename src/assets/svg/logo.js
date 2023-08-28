import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Logo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={200} height={200} x={27} fill="#00C06D" rx={19.531} />
    <Path
      fill="#fff"
      d="m144.127 48 5.779 4.17-.525 23.452c-1.576 3.648-5.779 14.071-22.592 22.41-12.609-5.837-20.665-17.373-23.117-22.41V52.169L109.451 48h34.676ZM80.282 117.72l-3.017-.305c-1.09 0-1.933.263-2.532.79-.634.586-1.101 1.718-1.4 3.394-.3 1.664-.587 3.885-.863 6.662-.275 2.766-.413 4.765-.413 5.998 0 1.221.198 2.089.593 2.604.395.503.862.754 1.4.754.551 0 .994-.006 1.33-.018l1.185-10.182c.048-.263.203-.407.467-.431l3.376-.126c.323.012.485.156.485.431l-1.509 13.469c-.048.263-.21.413-.485.449-1.592.239-3.531.359-5.818.359-2.742 0-4.501-1.323-5.28-3.969a7.649 7.649 0 0 1-.323-2.173c0-.718.024-1.568.072-2.55.144-3.52.563-7.171 1.257-10.954.467-2.634 1.042-4.483 1.724-5.549.718-1.113 1.58-1.891 2.586-2.334a9.952 9.952 0 0 1 4.04-.826c1.437 0 2.395.041 2.874.125.478.072.748.114.808.126.143.048.215.197.215.449l-.395 3.34c-.048.311-.174.467-.377.467Zm10.541 23.92c-2.011 0-3.531-.599-4.561-1.796-1.03-1.197-1.544-2.694-1.544-4.49 0-4.573.46-9.092 1.382-13.558.73-3.507 1.742-5.854 3.035-7.039 1.221-1.102 2.831-1.652 4.83-1.652 2.012 0 3.532.604 4.562 1.814 1.041 1.209 1.562 2.699 1.562 4.471 0 1.76-.113 3.897-.34 6.411-.228 2.502-.51 4.597-.845 6.285-.335 1.676-.622 2.903-.862 3.681a13.465 13.465 0 0 1-.952 2.335c-.407.79-.88 1.425-1.418 1.903-1.21 1.09-2.826 1.635-4.849 1.635Zm.467-4.238c1.52 0 2.496-1.401 2.927-4.203.287-1.855.575-4.166.862-6.931.287-2.766.431-4.711.431-5.836 0-1.126-.186-1.922-.557-2.389-.359-.467-.874-.7-1.544-.7-1.389 0-2.329 1.406-2.82 4.22-.287 1.652-.574 3.897-.861 6.734-.288 2.825-.431 4.819-.431 5.98 0 1.161.185 1.975.556 2.442.384.455.862.683 1.437.683Zm18.353 4.238c-2.011 0-3.532-.599-4.561-1.796-1.03-1.197-1.545-2.694-1.545-4.49 0-4.573.461-9.092 1.383-13.558.73-3.507 1.742-5.854 3.035-7.039 1.221-1.102 2.831-1.652 4.83-1.652 2.012 0 3.532.604 4.562 1.814 1.041 1.209 1.562 2.699 1.562 4.471 0 1.76-.114 3.897-.341 6.411-.228 2.502-.509 4.597-.844 6.285-.335 1.676-.623 2.903-.862 3.681a13.514 13.514 0 0 1-.952 2.335c-.407.79-.88 1.425-1.419 1.903-1.209 1.09-2.825 1.635-4.848 1.635Zm.467-4.238c1.52 0 2.496-1.401 2.927-4.203.287-1.855.574-4.166.862-6.931.287-2.766.431-4.711.431-5.836 0-1.126-.186-1.922-.557-2.389-.359-.467-.874-.7-1.544-.7-1.389 0-2.329 1.406-2.82 4.22-.287 1.652-.574 3.897-.862 6.734-.287 2.825-.431 4.819-.431 5.98 0 1.161.186 1.975.557 2.442.383.455.862.683 1.437.683Zm14.851-23.471c.024-.144.066-.246.125-.305.06-.06.665-.144 1.814-.252 1.149-.108 2.724-.161 4.723-.161 2.011 0 3.556.58 4.633 1.741 1.078 1.15 1.616 2.73 1.616 4.741 0 3.795-.425 8.165-1.275 13.109-.455 2.622-1.191 4.574-2.208 5.855-.934 1.173-2.395 1.945-4.382 2.316-.898.156-1.993.258-3.286.305l-4.472.162c-.263-.012-.395-.126-.395-.341l3.107-27.17Zm4.112 3.466-2.191 19.556c1.784-.156 3.017-.503 3.699-1.042.695-.539 1.18-1.562 1.455-3.071.275-1.508.545-3.567.808-6.177.275-2.61.413-4.747.413-6.411 0-.982-.239-1.712-.718-2.191-.479-.479-1.131-.718-1.958-.718-.814 0-1.316.018-1.508.054Zm11.385 24.243c-.299 0-.449-.144-.449-.431l.449-3.754c.048-.263.204-.407.467-.431 1.868-.191 3.101-.484 3.699-.88.599-.407.898-1.209.898-2.406s-.305-2.753-.916-4.669a166.983 166.983 0 0 1-1.185-3.843c-.574-2.035-.862-3.699-.862-4.992 0-1.305.21-2.418.629-3.34.419-.922 1.017-1.658 1.796-2.209 1.508-1.053 3.537-1.58 6.087-1.58.323 0 .485.149.485.449l-.485 3.717c-.048.299-.197.461-.449.485-2.322.155-3.484.844-3.484 2.065 0 1.125.491 3.34 1.473 6.644.994 3.293 1.49 5.651 1.49 7.076 0 5.399-3.214 8.099-9.643 8.099Zm28.391-27.817-3.07 27.044c-.036.288-.192.437-.467.449l-3.7.126c-.263 0-.395-.114-.395-.341l3.107-27.17c.048-.252.203-.389.467-.413l3.591-.126c.312.012.467.156.467.431Zm19.52-.072-3.088 27.045c-.048.275-.204.425-.467.448l-3.556.198c-.203 0-.323-.114-.359-.341l-3.771-19.179-1.329 18.945c-.012.288-.168.437-.467.449l-3.699.126c-.264 0-.395-.114-.395-.341l3.106-27.17c.048-.252.204-.389.467-.413l3.646-.198c.167 0 .275.036.323.108.06.06.108.168.144.323l3.645 18.12 1.257-17.94c.012-.264.174-.401.485-.413l3.573-.198c.324 0 .485.144.485.431Z"
    />
    <Path
      fill="#00C06D"
      d="m.922 215.36 8.226-.292c.195.009.292.115.292.318l-.33 2.602c-.017.127-.046.216-.089.267-.033.051-.11.08-.228.089l-2.463.089-1.853 16.212c-.026.203-.136.308-.33.317l-2.641.089c-.17 0-.254-.081-.254-.241l1.866-16.276-2.526.076c-.212-.008-.318-.105-.318-.292l.318-2.64c.008-.203.118-.309.33-.318Zm17.354 7.529-1.358-.14c-1.1 0-2.023.22-2.768.66l-1.256 11.197c-.034.212-.14.326-.318.343l-2.564.102c-.186-.017-.28-.098-.28-.241l1.676-14.765c.034-.186.14-.288.318-.305l2.475-.089c.229.009.343.119.343.33l-.152 1.308c.541-.55 1.066-.977 1.574-1.282.508-.313 1.015-.47 1.523-.47.517 0 .91.021 1.18.064.179.033.267.152.267.355 0 .584-.097 1.452-.291 2.603-.043.22-.165.33-.369.33Zm12.797-2.908-1.65 14.638c-.025.22-.136.334-.33.343l-2.565.089c-.177-.017-.266-.098-.266-.241l.24-1.727c-.388.66-.816 1.168-1.281 1.523a2.455 2.455 0 0 1-1.55.534c-.575 0-1.066-.098-1.472-.292a3.015 3.015 0 0 1-1.003-.787 4.23 4.23 0 0 1-.622-1.181c-.296-.813-.444-1.921-.444-3.326 0-1.414.093-2.611.28-3.593.194-.982.363-1.727.507-2.234.144-.517.334-1.046.571-1.587.246-.542.52-.995.826-1.359.694-.829 1.57-1.244 2.627-1.244.788 0 1.388.191 1.803.571.415.373.762.927 1.041 1.663l.152-1.726c.017-.186.123-.288.318-.305l2.488-.089c.22.017.33.127.33.33Zm-7.744 9.205c0 2.022.542 3.034 1.625 3.034.474 0 .86-.216 1.155-.648.297-.44.55-1.316.762-2.628.22-1.312.33-2.268.33-2.869 0-.601-.004-.982-.012-1.142a15.165 15.165 0 0 0-.051-.635 2.597 2.597 0 0 0-.14-.673 3.384 3.384 0 0 0-.267-.559c-.22-.364-.575-.545-1.066-.545-.49 0-.88.22-1.168.66-.288.431-.512 1.011-.673 1.739-.33 1.557-.495 2.979-.495 4.266Zm18.967-9.255c.186.067.28.228.28.482l-.293 2.298c-.017.169-.135.254-.355.254-.212 0-.415-.042-.61-.127-.82-.364-1.502-.546-2.044-.546-.541 0-.973.224-1.294.673-.322.448-.58 1.092-.775 1.93-.364 1.565-.546 2.996-.546 4.291 0 2.082.538 3.123 1.613 3.123.778 0 1.409-.098 1.891-.292.483-.204.796-.305.94-.305.296 0 .444.127.444.381l-.267 2.234c-.017.152-.05.246-.101.279a1.624 1.624 0 0 1-.178.089c-1.024.297-1.989.445-2.895.445-.897 0-1.608-.115-2.132-.343-.517-.229-.927-.521-1.232-.876-.304-.364-.55-.8-.736-1.308-.33-.871-.495-1.942-.495-3.212 0-1.278.08-2.386.241-3.326.17-.948.343-1.718.52-2.31a8.91 8.91 0 0 1 .737-1.702c.304-.55.66-1.002 1.066-1.358.889-.779 2.065-1.168 3.53-1.168.981 0 1.878.131 2.69.394Zm2.97 12.695a7.316 7.316 0 0 1-.406-1.498c-.067-.499-.101-1.181-.101-2.044s.093-1.93.28-3.199c.617-4.232 2.538-6.348 5.763-6.348 1.244 0 2.196.428 2.856 1.282.66.855.99 1.964.99 3.327 0 1.362-.084 2.687-.254 3.973-.025.229-.156.347-.393.356l-6.271.215a8 8 0 0 0-.013.508c0 .957.165 1.714.495 2.273.338.558.846.838 1.523.838.677 0 1.304-.098 1.88-.292.583-.204.926-.305 1.028-.305.101 0 .19.034.266.101a.356.356 0 0 1 .114.28l-.254 2.234c-.008.127-.033.212-.076.254a.67.67 0 0 1-.215.114c-1.025.297-2.01.445-2.959.445-.947 0-1.684-.115-2.209-.343-.524-.229-.947-.521-1.269-.876a4.663 4.663 0 0 1-.774-1.295Zm2.768-7.122-.114.812 3.313-.165c.144-.008.237-.033.28-.076.127-.127.19-.474.19-1.041 0-.575-.021-.977-.063-1.206a3.401 3.401 0 0 0-.19-.724c-.195-.541-.53-.812-1.004-.812-.465 0-.833.08-1.104.241-.601.373-1.037 1.363-1.308 2.971Zm20.313-5.523-1.65 14.638c-.026.22-.136.334-.33.343l-2.565.089c-.178-.017-.267-.098-.267-.241l.241-1.727c-.389.66-.816 1.168-1.282 1.523a2.455 2.455 0 0 1-1.549.534c-.575 0-1.066-.098-1.472-.292a3.015 3.015 0 0 1-1.003-.787 4.23 4.23 0 0 1-.622-1.181c-.297-.813-.445-1.921-.445-3.326 0-1.414.093-2.611.28-3.593.194-.982.364-1.727.507-2.234.144-.517.335-1.046.572-1.587a5.9 5.9 0 0 1 .825-1.359c.694-.829 1.57-1.244 2.628-1.244.787 0 1.388.191 1.803.571.414.373.761.927 1.04 1.663l.153-1.726c.017-.186.123-.288.317-.305l2.489-.089c.22.017.33.127.33.33Zm-7.744 9.205c0 2.022.541 3.034 1.624 3.034.475 0 .86-.216 1.156-.648.296-.44.55-1.316.761-2.628.22-1.312.33-2.268.33-2.869 0-.601-.004-.982-.012-1.142a14.995 14.995 0 0 0-.05-.635 2.602 2.602 0 0 0-.14-.673 3.392 3.392 0 0 0-.267-.559c-.22-.364-.576-.545-1.066-.545-.491 0-.88.22-1.169.66-.287.431-.512 1.011-.672 1.739-.33 1.557-.495 2.979-.495 4.266Zm15.36-15.324-1.066 8.113c.424-.787.876-1.388 1.359-1.803.49-.423 1.037-.635 1.638-.635.609 0 1.117.102 1.523.305.406.194.736.457.99.787.263.322.478.711.648 1.168.287.812.431 1.925.431 3.339 0 1.405-.097 2.598-.292 3.58-.186.982-.35 1.731-.495 2.247a11.267 11.267 0 0 1-.584 1.574 5.6 5.6 0 0 1-.812 1.359c-.694.829-1.511 1.244-2.45 1.244-.931 0-1.604-.195-2.019-.584-.415-.398-.77-.995-1.066-1.79l-.14 1.853c-.017.22-.123.334-.317.343l-2.565.089c-.186-.017-.28-.098-.28-.241l2.362-20.859a.65.65 0 0 1 .076-.254c.043-.051.123-.08.242-.089l2.488-.088c.22.025.33.139.33.342Zm2.324 11.629c0-2.023-.542-3.034-1.625-3.034-.474 0-.859.22-1.155.66-.296.432-.555 1.304-.775 2.615-.211 1.312-.317 2.269-.317 2.87 0 .6.004.981.013 1.142.008.161.025.377.05.648.026.262.073.486.14.672.068.178.157.356.267.534.22.372.575.558 1.066.558.491 0 .88-.216 1.168-.647.288-.44.508-1.024.66-1.752.339-1.557.508-2.979.508-4.266Zm9.04-7.223c-.526 0-.945-.165-1.258-.496-.313-.33-.47-.753-.47-1.269 0-.525.208-.99.623-1.397.423-.414.897-.622 1.422-.622.524 0 .947.165 1.27.495.33.331.494.758.494 1.283 0 .516-.216.981-.647 1.396-.432.406-.91.61-1.435.61Zm1.408 1.713-1.65 14.638a.517.517 0 0 1-.089.254c-.042.051-.123.08-.241.089l-2.552.089c-.186-.017-.28-.098-.28-.241l1.677-14.765c.034-.186.14-.288.317-.305l2.476-.089c.228.017.342.127.342.33Zm7.618-6.119-2.336 20.744a.511.511 0 0 1-.09.254c-.042.051-.122.081-.24.089l-2.552.102c-.186-.017-.28-.098-.28-.241l2.35-20.859a.52.52 0 0 1 .088-.254c.042-.051.123-.08.241-.089l2.488-.088c.22.025.33.139.33.342Zm4.836 4.406c-.524 0-.943-.165-1.256-.496-.314-.33-.47-.753-.47-1.269 0-.525.207-.99.622-1.397.423-.414.897-.622 1.422-.622.525 0 .948.165 1.269.495.33.331.495.758.495 1.283 0 .516-.215.981-.647 1.396-.432.406-.91.61-1.435.61Zm1.41 1.713-1.651 14.638a.51.51 0 0 1-.089.254c-.042.051-.122.08-.241.089l-2.552.089c-.186-.017-.279-.098-.279-.241l1.676-14.765c.034-.186.14-.288.317-.305l2.476-.089c.228.017.343.127.343.33Zm4.126-.279c.194-1.862.321-2.822.38-2.882a.381.381 0 0 1 .267-.114l2.425-.089c.228.017.343.123.343.318-.161.939-.297 1.84-.407 2.704l2.958-.102c.204.009.305.119.305.33l-.355 2.019c-.034.203-.14.309-.318.317l-2.907.114c-.576 5.18-.863 8.037-.863 8.57 0 .99.423 1.485 1.269 1.485.432 0 .851-.068 1.257-.203.406-.135.66-.203.762-.203.178 0 .266.11.266.33l-.266 2.222a.534.534 0 0 1-.102.279c-.042.059-.249.131-.622.216-.364.084-.99.127-1.879.127-1.303 0-2.268-.301-2.894-.902-.627-.609-.94-1.515-.94-2.717 0-1.201.335-4.257 1.003-9.166l-1.244.051c-.212-.008-.317-.114-.317-.317l.342-2.044c.026-.195.136-.296.331-.305l1.206-.038Zm18.433.279-7.325 20.783c-.068.211-.19.321-.368.33l-2.552.089c-.186-.009-.279-.093-.279-.254l2.183-6.158-1.98-14.726c0-.195.106-.296.317-.305l2.501-.089c.195.009.301.119.318.33l.965 10.677 3.084-10.613c.051-.195.161-.296.331-.305l2.488-.089c.211.017.317.127.317.33Zm11.401 14.829-1.067-15.197-.952 15.019c-.017.211-.127.321-.33.33l-2.425.089c-.186-.017-.279-.098-.279-.241l2.183-19.208a.479.479 0 0 1 .077-.216c.042-.043.127-.068.254-.076l3.199-.115c.203.009.313.11.33.305l1.155 15.285 4.405-15.183c.043-.187.161-.284.356-.292l3.339-.115c.211.009.317.11.317.305l-2.158 19.145c-.025.203-.14.308-.343.317l-2.615.089c-.178 0-.267-.081-.267-.241l2.476-15.476-4.545 15.323c-.068.195-.19.296-.368.305l-2.463.089c-.169-.017-.262-.098-.279-.241Zm23.473-14.829-1.65 14.638c-.026.22-.136.334-.33.343l-2.565.089c-.177-.017-.266-.098-.266-.241l.241-1.727c-.389.66-.817 1.168-1.282 1.523a2.456 2.456 0 0 1-1.549.534c-.576 0-1.067-.098-1.473-.292a3.024 3.024 0 0 1-1.003-.787 4.232 4.232 0 0 1-.622-1.181c-.296-.813-.444-1.921-.444-3.326 0-1.414.093-2.611.279-3.593.195-.982.364-1.727.508-2.234.144-.517.334-1.046.571-1.587.246-.542.521-.995.825-1.359.694-.829 1.57-1.244 2.628-1.244.788 0 1.388.191 1.803.571.415.373.762.927 1.041 1.663l.152-1.726c.017-.186.123-.288.318-.305l2.488-.089c.22.017.33.127.33.33Zm-7.744 9.205c0 2.022.542 3.034 1.625 3.034.474 0 .859-.216 1.155-.648.297-.44.55-1.316.762-2.628.22-1.312.33-2.268.33-2.869 0-.601-.004-.982-.013-1.142a14.78 14.78 0 0 0-.05-.635 2.613 2.613 0 0 0-.14-.673 3.42 3.42 0 0 0-.267-.559c-.22-.364-.575-.545-1.066-.545-.491 0-.88.22-1.168.66-.288.431-.512 1.011-.673 1.739-.33 1.557-.495 2.979-.495 4.266Zm16.428 4.087c-.77 1.245-1.701 1.867-2.793 1.867-1.464 0-2.467-.754-3.009-2.26-.296-.813-.444-1.921-.444-3.326 0-1.414.093-2.611.279-3.593.195-.982.364-1.727.508-2.234.144-.517.334-1.046.571-1.587.246-.542.521-.995.825-1.359.694-.829 1.57-1.244 2.628-1.244.779 0 1.376.186 1.79.559.415.372.766.926 1.054 1.663l.724-7.808c.025-.22.139-.334.342-.343l2.489-.088c.211.025.317.139.317.342l-2.349 20.757c-.025.22-.135.334-.33.343l-2.551.089c-.178-.017-.267-.098-.267-.241l.216-1.537Zm-3.047-4.087c0 2.022.542 3.034 1.625 3.034.474 0 .859-.216 1.155-.648.296-.44.55-1.316.762-2.628.22-1.312.33-2.268.33-2.869 0-.601-.004-.982-.013-1.142a14.78 14.78 0 0 0-.05-.635 2.613 2.613 0 0 0-.14-.673 3.42 3.42 0 0 0-.267-.559c-.22-.364-.575-.545-1.066-.545-.491 0-.88.22-1.168.66-.288.431-.512 1.011-.673 1.739-.33 1.557-.495 2.979-.495 4.266Zm10.588 3.44a7.29 7.29 0 0 1-.406-1.498c-.068-.499-.102-1.181-.102-2.044s.093-1.93.279-3.199c.618-4.232 2.539-6.348 5.764-6.348 1.244 0 2.196.428 2.856 1.282.661.855.991 1.964.991 3.327 0 1.362-.085 2.687-.254 3.973-.026.229-.157.347-.394.356l-6.271.215a7.607 7.607 0 0 0-.013.508c0 .957.165 1.714.495 2.273.339.558.847.838 1.524.838a5.84 5.84 0 0 0 1.878-.292c.584-.204.927-.305 1.029-.305a.39.39 0 0 1 .266.101.353.353 0 0 1 .115.28l-.254 2.234c-.009.127-.034.212-.076.254a.673.673 0 0 1-.216.114c-1.024.297-2.01.445-2.958.445-.948 0-1.684-.115-2.209-.343-.525-.229-.948-.521-1.27-.876a4.662 4.662 0 0 1-.774-1.295Zm2.767-7.122-.114.812 3.314-.165c.144-.008.237-.033.279-.076.127-.127.19-.474.19-1.041 0-.575-.021-.977-.063-1.206a3.363 3.363 0 0 0-.191-.724c-.194-.541-.529-.812-1.002-.812-.466 0-.834.08-1.105.241-.601.373-1.037 1.363-1.308 2.971Zm14.156 9.686c-.212 0-.318-.101-.318-.304l.318-2.654c.034-.186.144-.287.33-.304 1.32-.136 2.192-.343 2.615-.622.423-.288.635-.855.635-1.702 0-.846-.216-1.946-.648-3.3a121.067 121.067 0 0 1-.838-2.717c-.406-1.439-.609-2.615-.609-3.529 0-.923.148-1.71.444-2.362a3.8 3.8 0 0 1 1.27-1.561c1.066-.745 2.501-1.117 4.304-1.117.228 0 .342.105.342.317l-.342 2.628c-.034.211-.14.326-.318.343-1.642.11-2.463.596-2.463 1.46 0 .795.347 2.361 1.041 4.697.703 2.327 1.054 3.995 1.054 5.002 0 3.817-2.272 5.725-6.817 5.725Zm12.695-16.922c-.525 0-.944-.165-1.257-.496-.313-.33-.47-.753-.47-1.269 0-.525.208-.99.623-1.397.423-.414.897-.622 1.421-.622.525 0 .948.165 1.27.495.33.331.495.758.495 1.283 0 .516-.216.981-.647 1.396-.432.406-.91.61-1.435.61Zm1.409 1.713-1.65 14.638a.52.52 0 0 1-.089.254c-.042.051-.123.08-.241.089l-2.552.089c-.186-.017-.279-.098-.279-.241l1.675-14.765c.034-.186.14-.288.318-.305l2.475-.089c.229.017.343.127.343.33Zm6.932 0-.14 1.181c1.244-1.083 2.438-1.625 3.58-1.625 1.151 0 1.955.554 2.412 1.663 1.27-1.109 2.501-1.663 3.695-1.663 1.472 0 2.42.779 2.843 2.336.119.432.178.834.178 1.206s-.013.673-.038.901l-1.219 10.639c-.034.212-.139.326-.317.343l-2.564.089c-.187-.017-.28-.098-.28-.241l1.155-10.055a6.07 6.07 0 0 0 .051-.597c0-.694-.165-1.164-.495-1.409-.33-.254-.74-.381-1.231-.381a4.16 4.16 0 0 0-1.448.267c.026.203.039.423.039.66 0 .228-.013.457-.039.685l-1.218 10.639c-.034.212-.14.326-.318.343l-2.564.089c-.186-.017-.279-.098-.279-.241l1.155-10.055c.025-.22.038-.419.038-.597 0-.694-.165-1.164-.495-1.409-.322-.254-.737-.381-1.244-.381-.5 0-1.02.106-1.562.318l-1.346 11.92c-.033.212-.139.326-.317.343l-2.564.102c-.187-.017-.28-.098-.28-.241l1.676-14.765c.034-.186.14-.288.317-.305l2.476-.089c.229.009.343.119.343.33Zm14.409 20.884 2.361-20.807c.026-.204.132-.309.318-.318l2.551-.089c.187.017.28.106.28.267l-.254 1.688c.389-.668.812-1.18 1.269-1.536a2.514 2.514 0 0 1 1.562-.533c.584 0 1.079.102 1.485.305.407.194.737.457.991.787.262.322.473.711.634 1.168.296.812.445 1.925.445 3.339 0 1.405-.098 2.598-.292 3.58-.187.982-.352 1.731-.496 2.247a11.207 11.207 0 0 1-.583 1.574 5.594 5.594 0 0 1-.813 1.359c-.694.829-1.511 1.244-2.45 1.244-.94 0-1.617-.199-2.031-.597-.415-.398-.771-.999-1.067-1.803l-.749 8.036c-.008.203-.118.309-.33.318l-2.488.089c-.229-.009-.343-.115-.343-.318Zm8.455-15.374c0-2.014-.542-3.021-1.625-3.021-.491 0-.884.216-1.181.647-.287.432-.541 1.316-.761 2.654-.212 1.337-.318 2.297-.318 2.881 0 .576.005.944.013 1.105.008.152.025.364.051.635.025.27.072.495.139.672.068.178.157.356.267.534.22.372.576.558 1.066.558.491 0 .876-.216 1.156-.647.287-.432.512-1.02.673-1.765.347-1.591.52-3.009.52-4.253Zm11.134-11.629-2.336 20.744a.516.516 0 0 1-.089.254c-.042.051-.123.081-.241.089l-2.552.102c-.186-.017-.279-.098-.279-.241l2.348-20.859a.524.524 0 0 1 .089-.254c.043-.051.123-.08.242-.089l2.488-.088c.22.025.33.139.33.342Zm2.26 18.764a7.358 7.358 0 0 1-.407-1.498c-.067-.499-.101-1.181-.101-2.044s.093-1.93.279-3.199c.618-4.232 2.539-6.348 5.764-6.348 1.244 0 2.196.428 2.856 1.282.66.855.99 1.964.99 3.327a30.48 30.48 0 0 1-.253 3.973c-.026.229-.157.347-.394.356l-6.271.215a7.607 7.607 0 0 0-.013.508c0 .957.165 1.714.495 2.273.338.558.846.838 1.523.838.677 0 1.304-.098 1.879-.292.584-.204.927-.305 1.029-.305a.39.39 0 0 1 .266.101.356.356 0 0 1 .114.28l-.253 2.234c-.009.127-.034.212-.077.254a.653.653 0 0 1-.215.114 10.616 10.616 0 0 1-2.958.445c-.948 0-1.685-.115-2.209-.343-.525-.229-.948-.521-1.27-.876a4.662 4.662 0 0 1-.774-1.295Zm2.767-7.122-.114.812 3.313-.165c.144-.008.237-.033.28-.076.127-.127.19-.474.19-1.041 0-.575-.021-.977-.063-1.206a3.422 3.422 0 0 0-.191-.724c-.194-.541-.529-.812-1.003-.812-.465 0-.833.08-1.104.241-.601.373-1.037 1.363-1.308 2.971Z"
    />
  </Svg>
)
export default Logo