import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './Header.module.scss';

const HeaderMenu = () => {
	return (
		<div className="container">
			<div className={styles.wrapper}>
				<Link to="/">
					<img src="./images/logo.png" alt="" className={styles.logo} />
				</Link>
				<div className={styles.navigation}>
					<ul>
						<li>
							<Link to="/about" className={styles.link}>
								About
							</Link>
						</li>
					</ul>
					<Button label="Login" />
				</div>
			</div>
		</div>
	);
};

export default HeaderMenu;
