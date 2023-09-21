import { Player, Controls } from '@lottiefiles/react-lottie-player';
import trophyJson from "../assets/lottie/trophy.json";
import styles from "./trophy.module.scss";

export default function Trophy() {
  return (
    <div className={styles["Trophy"]}>
      <Player
        autoplay
        loop={false}
        keepLastFrame={true}
        src={trophyJson}
        style={{ height: '300px', width: '300px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </div>

  )
}
