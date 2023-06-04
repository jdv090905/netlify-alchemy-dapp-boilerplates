import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://www.avito.ru/user/505ee82d4dfaa0bdcfbfe4e2fc5bb305/profile?id=2956908562&iid=2956908562&src=messenger&page_from=from_item_messenger" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/cw3d-logo.png"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
