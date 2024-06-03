import React, { useEffect, useState } from 'react';
import './Home.css';
import { cardDataUrl } from '../../app.url';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Loader from '../Loader/Loader';

function Home() {
	const [ cardData, setCartData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ filter, setFilter ] = useState('');
	const cartInPage = 8;

	useEffect(() => {
		setIsLoading(true);
		axios.get(cardDataUrl)
			.then((response) => {
				console.log(response.data);
				setCartData(response.data);
				setIsLoading(false);
			}).catch((err) => {
				console.log(err);
			});
	}, []);

	const handleFilterChange = (status) => {
		setFilter(status);
	};

	const filteredCart = filter ? cardData.filter(item => item.Status === filter) : cardData;
	const lastCard = currentPage * cartInPage;
	const firstCart = lastCard - cartInPage;
	const currentCart = filteredCart.slice(firstCart, lastCard);


	return (
		<>
			<main>
				<div className='topBar container'>
					<NavBar />
				</div>

				<section className='pt-16'>
					<div className='flex justify-center items-center flex-col'>
						<h2 className='text-3xl font-bold text-white'>Science Fiction Stories</h2>
						<div className='infoBtnGroup flex gap-5 pt-12 text-white flex-wrap justify-center'>
							<div className='button bg-[#1c84ff]' onClick={() => handleFilterChange('New')}>New</div>
							<div className='button bg-[#ffbf1a]' onClick={() => handleFilterChange('In Progress')}>In Progress</div>
							<div className='button bg-[#22d154]' onClick={() => handleFilterChange('Completed')}>Completed</div>
							<div className='button clearBtn' onClick={() => handleFilterChange('')}>Clear All</div>
						</div>
					</div>
				</section>

				<section className='cartBg mt-40'>
					<svg viewBox="0 0 1440 320" className='mt-24'>
						<path fill="#0d031e" fillOpacity="1" d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,234.7C840,256,960,256,1080,229.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
					</svg>
					<div className='container flex flex-wrap justify-center gap-4'>
						{isLoading ? <Loader /> :
							currentCart.map((value) => (
								<Link to={`/cartDetails/${value._id}`} className='z-20 cursor-default' key={value._id}>
									<div className='card p-4 rounded-xl mb-10'>
										<img src={`https://ik.imagekit.io/dev24/${value?.Image[ 0 ]}`} alt="img break" className='w-72 h-72 cursor-pointer rounded-md' />
										<p className='text-white h-8'>{value.Title}</p>
										<button className={`progress-button w-full bg-white font-semibold ${value.Status === "New" ? 'text-[#1c84ff]' : value.Status === "In Progress" ? 'text-[#ffbf1a]' : value.Status === 'Completed' ? 'text-[#40c556]' : ''}`}>{value.Status}</button>
									</div>
								</Link>
							))
						}
					</div>
					{!isLoading && (
						<div className='ChangePage container text-xl font-bold pb-10'>
							{currentPage > 1 && (
								<button className='previousBtn' onClick={() => setCurrentPage(currentPage - 1)}>&lt; Previous</button>
							)}
							{currentCart.length === cartInPage && (
								<button className='nextBtn' onClick={() => setCurrentPage(currentPage + 1)}> Next &gt;</button>
							)}
						</div>
					)}
				</section>
			</main>
		</>
	);
}

export default Home;
