import React, { useContext, useEffect } from 'react';
import {
	UserLinkNameTextField,
	UserLinkURLTextField,
	UserLinkImageTextField,
} from '../TextFields/TextFields.js';
import { UserDataContext } from '../Context/Context.js';
import { Grid } from '@material-ui/core';

function EditProfileComponent(textValueDefault) {
	const { editedLinkObj } = useContext(UserDataContext);
	textValueDefault = 'userlinkimgae';
	useEffect(() => {}, []);

	return (
		<div>
			<Grid container spacing={3} alignItems='center' justify='center'>
				<Grid item>
					<h2> Link Name</h2>
				</Grid>
				<Grid item>
					<UserLinkNameTextField textValue={editedLinkObj.linkName} />
				</Grid>
			</Grid>
			<Grid container spacing={3} alignItems='center' justify='center'>
				<Grid item>
					<h2> Link Value</h2>
				</Grid>
				<Grid item>
					<UserLinkURLTextField textValue={editedLinkObj.link} />
				</Grid>
			</Grid>
			<Grid container spacing={3} alignItems='center' justify='center'>
				<Grid item>
					<h2> Link Image</h2>
				</Grid>
				<Grid item>
					<UserLinkImageTextField textValue={editedLinkObj.linkImage} />
				</Grid>
			</Grid>
		</div>
	);
}

export { EditProfileComponent };
