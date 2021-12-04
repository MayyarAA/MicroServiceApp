import { EditProfileComponent } from '../Components/EditProfile/EditProfileComponent.js';
import { ProfilePageUserHeader } from '../Components/Profile/ProfileComponent.js';
import { EditProfileLinksComponent } from '../Components/EditProfile/EditProfileLinksComponent.js';

import { EditProfileCancelButton } from '../Components/EditProfile/EditProfileCancelButton.js';
import { AddNewUserLinkComponent } from '../Components/EditProfile/AddNewUserLinks/AddNewUserLinkComponent.js';
import { AddUserLinkButton } from '../Components/EditProfile/AddNewUserLinks/AddUserLinkButton.js';

import { OverallJSCSS } from '../ComponentsCSS/OverallJSCSS.js';
import Grid from '@mui/material/Grid';
function EditProfilePage() {
	return (
		<div>
			<div>here from edit page</div>
			<ProfilePageUserHeader />
			<EditProfileLinksComponent />
			<Grid container direction='row' justifyContent='center' alignItems='center'>
				<Grid item>{/* <EditProfileSubmitButton /> */}</Grid>
				<Grid item>{/* <EditProfileCancelButton /> */}</Grid>
				<Grid item>{/* <AddUserLinkButton /> */}</Grid>
				<Grid item>
					<Grid item>
						<AddNewUserLinkComponent />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export { EditProfilePage };
