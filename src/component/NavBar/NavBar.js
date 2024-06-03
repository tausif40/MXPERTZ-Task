import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<>
			<nav className='flex navbar justify-between pt-5'>
				<Link to={'/'}>
					<div className='font-bold text-white'>Brainy Lingo</div>
				</Link>
				<div>
					<ul className='flex navOption gap-8 text-white'>
						<Link to={'/'}>
							<li>Home</li>
						</Link>
						<li>LeadBoard</li>
						<li>Daily Quit</li>
						<li>genre</li>
					</ul>
				</div>
				<div className='button signOutBtn'>SignOut</div>
			</nav>
		</>
	)
}

export default NavBar;