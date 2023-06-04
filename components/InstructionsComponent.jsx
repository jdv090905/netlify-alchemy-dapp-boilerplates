import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					<span>Electro Space</span>
				</h1>
				<p>
					Компания специализирующаяся на ремонте{" "}
					<span>мелкой бытовой и прочей электроники</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://t.me/DrBoom31"}
				>
					<div className={styles.button}>
						{/* <img src="https://detalizdes.ru/content/files/images/Telegram.png" width={"20px"} height={"20px"} /> */}
						<p>Telegram</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://www.avito.ru/user/505ee82d4dfaa0bdcfbfe4e2fc5bb305/profile?id=2956908562&iid=2956908562&src=messenger&page_from=from_item_messenger"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Avito</p>
					</div>
				</a>
				
			</div>
			<div className={styles.footer}>
				
				<div className={styles.icons_container}>
					<div>
						
					</div>
					<div>
						
					</div>
				</div>
			</div>
		</div>
	);
}
