import { EditProfileComponent } from '../Components/EditProfile/EditProfileComponent.js';
import { DeleteLinkSubmitButton } from '../Components/EditProfile/DeleteUserLinks/DeleteLinkSubmitButton.js';
import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { UserDataContext } from '../Components/Context/Context.js';
import { SubmitLinkUpdatingButton } from '../Components/EditProfile/UpdateUserLink/SubmitLinkUpdatingButton.js';
function EditSingleLinkPage() {
	const { editedLinkObj } = useContext(UserDataContext);
	const { userObject } = useContext(UserDataContext);
	return (
		<div>
			{EditProfileComponent('textValue')}
			<Grid container spacing={3} alignItems='center' justify='center'>
				<Grid item>
					<SubmitLinkUpdatingButton />
				</Grid>
				<Grid item>
					<DeleteLinkSubmitButton />
				</Grid>
			</Grid>
		</div>
	);
}

export { EditSingleLinkPage };
