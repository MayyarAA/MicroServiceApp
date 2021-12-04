import { EditProfileComponent } from '../Components/EditProfile/EditProfileComponent.js';
import { DeleteLinkSubmitButton } from '../Components/EditProfile/DeleteUserLinks/DeleteLinkSubmitButton.js';
import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../Components/Context/Context.js';
import { SubmitLinkUpdatingButton } from '../Components/EditProfile/UpdateUserLink/SubmitLinkUpdatingButton.js';
function EditSingleLinkPage() {
	const { editedLinkObj } = useContext(UserDataContext);
	const { userObject } = useContext(UserDataContext);
	return (
		<div>
			{EditProfileComponent('textValue')}

			<div>here from EditSingleLinkPage</div>
			<SubmitLinkUpdatingButton />
			<DeleteLinkSubmitButton />
		</div>
	);
}

export { EditSingleLinkPage };
