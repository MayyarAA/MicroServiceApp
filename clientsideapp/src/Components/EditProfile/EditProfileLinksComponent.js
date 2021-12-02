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
import IconButton from '@mui/material/IconButton';
import { BuildLinksFeatureSetContext } from '../../Services/LinksService/BuildLinksFeature.js';
import { OverallJSCSS } from '../../ComponentsCSS/OverallJSCSS.js';
import DeleteIcon from '@mui/icons-material/Delete';
function EditProfileLinksComponent() {
	return (
		<div style={OverallJSCSS.makeComponentCentered}>
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
	const { deleteLinksList, setDeleteLinksList } = useContext(UserDataContext);
	const openNewTap = (link) => {
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};
	useEffect(() => {
		setLocalLinks(linksList);
	}, [linksList]);

	const deleteLink = (linkObj) => {
		console.log(
			'in deletelink caller ' +
				JSON.stringify(linkObj) +
				' deleteLinksList.length ' +
				deleteLinksList.length
		);
		setDeleteLinksList(deleteLinksList.concat(linkObj));
	};
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
							</ListItemButton>

							<IconButton
								edge='end'
								aria-label='delete'
								onClick={() => {
									deleteLink(linkObj);
								}}>
								<DeleteIcon />
							</IconButton>
						</ListItem>
					);
				})}
			</List>
		);
	}
	return <div>{resultUIComponent}</div>;
}

export { EditProfileLinksComponent };
