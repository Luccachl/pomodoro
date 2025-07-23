import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <h1 className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </h1>
  );
}
