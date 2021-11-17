import React, { useEffect, useState } from 'react';
import UserProfileCardComponent from '../Components/UserProfileCardComponent';
import UserProfileAddLinkComponent from '../Components/UserProfileAddLinkComponent';
import axios from 'axios';
const url = 'http://localhost:8000/UserLinks/addLink';

export default function UserProfileCentralPage() {
	const [tempValue, setTempValue] = useState();

	// let temp = <div></div>;

	useEffect(() => {
		console.log('Hellor from useEffect');
		// getUserLinks();
	}, []);

	let userFullPage = UserProfileCardComponent();

	let getUserLinks = async () => {
		await axios({
			method: 'post',
			url,
			data: {
				userName: 'userFour',
				userLink: 'linkFour',
			},
		})
			.then((res) => {
				setTempValue(res.body);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			{/* <div>Hello from UserProfileCentralPage</div> */}

			{userFullPage}
			{tempValue}
			<UserProfileAddLinkComponent />
		</div>
	);
}
