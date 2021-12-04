import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../Context/Context.js';
import Button from '@mui/material/Button';
import { UpdateUserLinkService } from '../../../Services/LinksService/UpdateUserLinkService.js';
function SubmitLinkUpdatingButton() {
	const { deleteLinksList } = useContext(UserDataContext);
	const { userObject } = useContext(UserDataContext);
	const { editedLinkObj } = useContext(UserDataContext);
	const callDeleteUserLinkService = () => {
		console.log(userObject);
		UpdateUserLinkService(userObject, editedLinkObj);
	};

	let button = (
		<div>
			<Button
				variant='outlined'
				onClick={() => {
					callDeleteUserLinkService();
				}}>
				Save
			</Button>
		</div>
	);

	return <div>{button}</div>;
}

export { SubmitLinkUpdatingButton };
