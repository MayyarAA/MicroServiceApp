import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../Context/Context.js';
import Button from '@mui/material/Button';
import { DeleteUserProfileLinksService } from '../../Services/LinksService/DeleteUserProfileLinksService.js';
function EditProfileSubmitButton() {
	const { deleteLinksList, setDeleteƒLinksList } = useContext(UserDataContext);
	const { userObject } = useContext(UserDataContext);
	const callDeleteUserLinkService = (userObject, deleteLinksList) => {
		DeleteUserProfileLinksService(userObject, deleteLinksList);
	};

	let button = (
		<div>
			<Button
				variant='outlined'
				onClick={() => {
					callDeleteUserLinkService(userObject, deleteLinksList);
				}}>
				Submit
			</Button>
		</div>
	);

	return <div>{button}</div>;
}

export { EditProfileSubmitButton };
