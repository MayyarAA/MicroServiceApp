import { EditProfileComponent } from '../Components/EditProfile/EditProfileComponent.js';
import { ProfilePageUserHeader } from '../Components/Profile/ProfileComponent.js';
import { EditProfileLinksComponent } from '../Components/EditProfile/EditProfileLinksComponent.js';
import { EditProfileSubmitButton } from '../Components/EditProfile/EditProfileSubmitButton.js';
import { EditProfileCancelButton } from '../Components/EditProfile/EditProfileCancelButton.js';
import { AddNewUserLinkComponent } from '../Components/EditProfile/AddNewUserLinks/AddNewUserLinkComponent.js';
import { OverallJSCSS } from '../ComponentsCSS/OverallJSCSS.js';
import Grid from '@mui/material/Grid';
function EditProfilePage() {
	return (
		<div>
			<div>here from edit page</div>
			<ProfilePageUserHeader />
			<EditProfileComponent />
			<EditProfileLinksComponent />
			<AddNewUserLinkComponent />
			<Grid container direction='row' justifyContent='center' alignItems='center'>
				<Grid item>
					<EditProfileSubmitButton />
				</Grid>
				<Grid item>
					<EditProfileCancelButton />
				</Grid>
			</Grid>
		</div>
	);
}

export { EditProfilePage };
