import { NavLink } from 'react-router-dom';

const Profile = () => {
	return(
		<div className="absolute w-full top-0 z-40 mt-16">
			<div className="mx-4 mt-8 p-4 shadow-md bg-white rounded-md">
				<h1 className="font-bold text-xl text-green">
					<NavLink to={'/'}>
						foodee restaurant
					</NavLink>
				</h1>
				<div className="flex justify-between items-center border-b pb-1">
					<p>
						name
					</p>
					<div className="flex justify-end items-center">
						<div className="">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
						</div>
						<div className="ml-2">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
						</div>
					</div>
				</div>
				<p className="font-light">
					Jalan Jessica Jung
				</p>
			</div>
		</div>
	);
}

export default Profile;