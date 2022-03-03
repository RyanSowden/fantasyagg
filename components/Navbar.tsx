import {useState} from 'react'
import styles from '../styles/Navbar.module.css'
import Hamburger from './Hamburger'


const Navbar = () => {

	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen)
	}
	return (
		<div className={styles.div}>
			<div className={styles.nav}>
				<h1 className={styles.header}>FantasyAgg</h1>
				<ul className={styles.list}>
					<li className={styles.items}>Home</li>
					<li className={styles.items}>NFL</li>
					<li className={styles.items}>MLB</li>
					<li className={styles.items}>NBA</li>
				</ul>
				<div className={styles.hamburger} onClick={toggleHamburger}>
					<Hamburger/>
				</div>
			</div>
		</div>
	)
}

export default Navbar
