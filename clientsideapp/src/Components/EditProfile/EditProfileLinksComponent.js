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
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import { BuildLinksFeatureSetContext } from '../../Services/LinksService/BuildLinksFeature.js';
import { OverallJSCSS } from '../../ComponentsCSS/OverallJSCSS.js';
import { Link } from 'react-router-dom';
import { EditSingleLinkRoute } from '../../Routes/UserProfileRoute.js';
import { useHistory } from 'react-router-dom';
import { EditUserLinkObj } from '../Objects/UserLinkObj.js';
import EditIcon from '@mui/icons-material/Edit';
function EditProfileLinksComponent() {
	return (
		<div style={OverallJSCSS.makeComponentCentered}>
			<EditProfileLinksComponentRenderHelper />
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		'& .Mui-selected': {
			backgroundColor: 'pink',
			color: 'red',
			fontWeight: 'bold',
		},
		'& .Mui-selected:hover': {
			backgroundColor: 'tomato',
		},
	},
});

function EditProfileLinksComponentRenderHelper() {
	const history = useHistory();
	const styles = useStyles();
	const { linksList } = useContext(UserDataContext);
	const { editedLinkObj, setEditedLinkObj } = useContext(UserDataContext);
	const [linkComponentColor, setLinkComponentColor] = useState('#fafafa');
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
	useEffect(() => {}, [linkComponentColor]);
	const deleteLink = (linkObj) => {
		setLinkComponentColor('#ffab91');
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
