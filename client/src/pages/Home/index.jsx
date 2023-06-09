import { Fragment } from "react";
import Playlists from "../../components/Playlists";
import styles from "./styles.module.scss";
import playlistImg from "../../images/rock.jpg";

const playlists = [
	{ _id: 1, img: playlistImg, name: "Today's Top Songs", desc: "By Sachin Maurya" },
];

const Home = () => {
	return (
		<>
			<div className={styles.container}>
				<h1>Good afternoon</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
				<h1>Just the hits</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
			</div>
		</>
	);
};

export default Home;
