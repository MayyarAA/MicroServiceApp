import React, { useContext } from 'react';
import { UserDataContext } from '../../Context/Context.js';
import Button from '@mui/material/Button';
import { DeleteUserProfileLinksService } from '../../../Services/LinksService/DeleteUserProfileLinksService.js';
function DeleteLinkSubmitButton() {
	const { deleteLinksList } = useContext(UserDataContext);
	const { userObject } = useContext(UserDataContext);
	const { editedLinkObj } = useContext(UserDataContext);
	const callDeleteUserLinkService = (userObject, deleteLinksList) => {
		DeleteUserProfileLinksService(userObject, editedLinkObj);
	};

	let button = (
		<div>
			<Button
				variant='outlined'
				onClick={() => {
					callDeleteUserLinkService(userObject, deleteLinksList);
				}}>
				Delete
			</Button>
		</div>
	);

	return <div>{button}</div>;
}

export { DeleteLinkSubmitButton as DeleteLinkSubmitButton };
