import { useState, useContext, memo } from 'react';
import { AddressContext } from '../../contexts/addressContext';
import { Helmet } from "react-helmet";

const Profile = () => {
	const { address, dispatch } = useContext(AddressContext);
	const [edit, setEdit] = useState(false);
	const [newAddress, setNewAddress] = useState(address.address ? (address.address) : (''));

	const saveNewAddress = () => {
		dispatch({type: 'EDIT_ADDRESS', newAddress: newAddress});
		setEdit(false);
	}

	return(
		<div className="mx-4 shadow-md rounded-md px-4 py-8 bg-white">
			<Helmet>
				<title>Foodee - Makan Murah Sepuasnya</title>
				<meta name="title" content="Profil - Foodee - Makan Murah Sepuasnya" />
				<meta name="description" content="Foodee adalah tempat mencari serta memesan makanan secara online sepuasnya, dengan harga terjangkau." />
			</Helmet>

			<div className="flex justify-start items-center mb-4">
				<div className="rounded-full bg-gray-400 w-12 h-12"></div>
				<div className="font-semibold text-lg ml-4">name</div>
			</div>
			<div className="mt-2 bg-gray-200 py-2 px-4 rounded-md mb-4">
				<div className="flex justify-between items-center mb-2">
					<div>
						Alamat
					</div>
					<button onClick={() => setEdit(!edit)}>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
					</button>
				</div>
				{
					edit === true ? (
						<div>
							<textarea className="bg-gray-100 rounded-md p-2" name="address" id="address" cols="26" rows="5" value={newAddress} onChange={(e) => setNewAddress(e.target.value)}></textarea>
							<button className="mt-2 p-1 flex justify-end items-center bg-gray-300 rounded-md" onClick={() => saveNewAddress()}>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
								<span>save</span>
							</button>
						</div>
					) : (
						<div className="font-light">
							{address.address ? (address.address) : ('')}
						</div>
					)
				}
			</div>
			<div className="mb-4">
				<div>
					Pemesanan Terakhir
				</div>
			</div>
		</div>
	);
}

export default memo(Profile);