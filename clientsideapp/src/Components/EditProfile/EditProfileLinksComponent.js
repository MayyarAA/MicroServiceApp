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

import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import { BuildLinksFeatureSetContext } from '../../Services/LinksService/BuildLinksFeature.js';
import { OverallJSCSS } from '../../ComponentsCSS/OverallJSCSS.js';
import { EditSingleLinkRoute } from '../../Routes/UserProfileRoute.js';
import { useHistory } from 'react-router-dom';
import { EditUserLinkObj } from '../Objects/UserLinkObj.js';
import EditIcon from '@mui/icons-material/Edit';
function EditProfileLinksComponent() {
	console.log('renderede');
	const { linksList, renderUserLinksUserInput, setEditedLinkObj } = useContext(
		UserDataContext
	);
	const [reRenderEditProfileLinksComponent, setReRenderEditProfileLinksComponent] = useState(
		false
	);
	useEffect(() => {
		console.log(' renderUserLinksUserInput------>' + renderUserLinksUserInput);
		setReRenderEditProfileLinksComponent(!reRenderEditProfileLinksComponent);
	}, [renderUserLinksUserInput]);
	return (
		<div style={OverallJSCSS.makeComponentCentered}>
			<EditProfileLinksComponentRenderHelper />
		</div>
	);
}

const openNewTap = (link) => {
	const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
	if (newWindow) newWindow.opener = null;
};

function EditProfileLinksComponentRenderHelper() {
	const history = useHistory();
	const { linksList, renderUserLinksUserInput, setEditedLinkObj } = useContext(
		UserDataContext
	);
	BuildLinksFeatureSetContext();

	if (linksList === null || linksList === undefined) {
		BuildLinksFeatureSetContext();
	}
	let resultUIComponent;
	useEffect(() => {}, [linksList]);
	if (linksList !== undefined || linksList !== null) {
		resultUIComponent = (
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{linksList.map((linkObj) => {
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
									setEditedLinkObj(
										new EditUserLinkObj(
											linkObj.link,
											linkObj.linkName,
											linkObj.id,
											linkObj.linkImage
										)
									);
									history.push(EditSingleLinkRoute.EditSingleLinkPage);
								}}>
								<EditIcon />
							</IconButton>
						</ListItem>
					);
				})}
			</List>
		);
	}
	return <div>{resultUIComponent}</div>;
}

export { EditProfileLinksComponent, makeStyles };
