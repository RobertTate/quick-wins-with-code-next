import { Player, Controls } from '@lottiefiles/react-lottie-player';
import downArrow from "../assets/lottie/downArrow.json";
import styles from "./downArrow.module.scss";

export default function DownArrow() {
  return (
    <div className={styles["DownArrow"]}>
      <Player
        autoplay
        loop={true}
        keepLastFrame={true}
        src={downArrow}
        style={{ height: '200px', width: '180px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </div>

  )
}
