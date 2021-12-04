import React, { useContext, useEffect } from 'react';
import {
	UserLinkNameTextField,
	UserLinkURLTextField,
	UserLinkImageTextField,
} from '../TextFields/TextFields.js';

import { UserDataContext } from '../Context/Context.js';
function EditProfileComponent(textValueDefault) {
	const { editedLinkObj } = useContext(UserDataContext);
	textValueDefault = 'userlinkimgae';
	useEffect(() => {}, []);

	return (
		<div>
			<UserLinkNameTextField textValue={editedLinkObj.linkName} />
			<UserLinkURLTextField textValue={editedLinkObj.link} />
			<UserLinkImageTextField textValue={editedLinkObj.linkImage} />
		</div>
	);
}

export { EditProfileComponent };
