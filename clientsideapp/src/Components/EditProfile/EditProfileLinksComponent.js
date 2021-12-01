import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../Context/Context.js';
import { ImageMap } from '../Objects/ImageMap.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import '../../ComponentsCSS/OverallCSS.css';
import dotenv from 'dotenv';
import { BuildLinksFeatureSetContext } from '../../Services/LinksService/BuildLinksFeature.js';
import { OverAllJSCSS } from '../../ComponentsCSS/OverallJSCSS.js';
function EditProfileLinksComponent() {
	return (
		<div style={OverAllJSCSS.makeComponentCentered}>
			<EditProfileLinksComponentRenderHelper />
		</div>
	);
}

function EditProfileLinksComponentRenderHelper() {
	const { linksList } = useContext(UserDataContext);
	if (linksList === null || linksList === undefined) {
		BuildLinksFeatureSetContext();
	}
	let resultUIComponent;
	const [localLinks, setLocalLinks] = useState([]);
	const openNewTap = (link) => {
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};
	useEffect(() => {
		setLocalLinks(linksList);
	}, [linksList]);

	if (localLinks !== undefined || localLinks !== null) {
		resultUIComponent = (
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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

export { EditProfileLinksComponent };
