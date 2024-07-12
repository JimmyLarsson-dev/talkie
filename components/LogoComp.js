import {Image} from "react-native";

export default function LogoComp({w, h}) {
    const logo = require("../assets/talkieLogo.png")
    return(
        <Image style={{width: w, height: h}} source={logo}></Image>
    )
}

