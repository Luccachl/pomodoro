import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <h1 className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        <span>Chronus</span>
      </a>
    </h1>
  );
}
