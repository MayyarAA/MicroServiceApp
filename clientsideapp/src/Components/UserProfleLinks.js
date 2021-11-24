import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { UserDataContext } from './Context/Context.js';
import { ImageMap } from './Objects/ImageMap.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import '../ComponentsCSS/OverallCSS.css';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

function UserProfileLinks() {
	const { userId } = useContext(UserDataContext);

	const { userData, setUserData } = useContext(UserDataContext);
	const [linksList, setLinksList] = useState([]);
	useEffect(() => {
		if (userId !== undefined || userId !== null || userId.length !== 0) {
			console.log('here ' + userId);
			apiCallUserLinks();
		}
	}, [userId]);

	useEffect(() => {
		printFcn();
	}, [userData]);
	useEffect(() => {}, [linksList]);

	let apiCallUserLinks = useCallback(async () => {
		let url = `${baseURL}/UserLinks/getLink/${userId}`;
		await axios({
			method: 'get',
			url,
		})
			.then(function (response) {
				setUserData(response.data[0]);
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	});

	let printFcn = () => {
		if (Object.keys(userData).length !== 0) {
			let linksListLocal = [];
			for (let i = 0; i < userData.userData.length; i++) {
				let localInstance = userData.userData[i];
				let liistObj = new UserLinkObj(
					localInstance._id,
					localInstance.link,
					localInstance.linkName,
					localInstance.linkImage
				);
				linksListLocal.push(liistObj);
				console.log('liistObj ' + liistObj + ' ' + i);
			}
			setLinksList(linksListLocal);
		}
	};

	return (
		<div>
			<div class='inner'>
				{/* <div> */}
				<UserProfileLinksListComponent data='123' listLinkItemsLocal={linksList} />
			</div>
		</div>
	);
}

function UserProfileLinksListComponent(props) {
	const [localLinks, setLocalLinks] = useState([]);
	const openNewTap = (link) => {
		console.log(link);
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};
	let resultUIComponent;
	useEffect(() => {
		setLocalLinks(props.listLinkItemsLocal);
	}, [props.listLinkItemsLocal]);

	if (localLinks !== undefined || localLinks !== null) {
		console.log(resultUIComponent);
		resultUIComponent = (
			<List>
				{localLinks.map((linkObj) => {
					const labelId = `checkbox-list-secondary-label-${linkObj.id}`;
					return (
						<ListItem key={linkObj.id}>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar src={ImageMap[linkObj.linkImage]} />
								</ListItemAvatar>
								<ListItemText
									id={labelId}
									primary={` ${linkObj.linkName}`}
									onClick={() => {
										openNewTap(linkObj.link);
									}}
								/>
								{/* <ListItemText id={labelId} primary={` ${linkObj.id}`} /> */}
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		);
	}
	return <div>{resultUIComponent}</div>;
}

function UserLinkObj(id, link, linkName, linkImage) {
	this.id = id;
	this.link = link;
	this.linkName = linkName;
	this.linkImage = linkImage;
}

export default UserProfileLinks;
