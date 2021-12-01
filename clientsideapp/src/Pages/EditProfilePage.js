import { EditProfileComponent } from '../Components/EditProfile/EditProfileComponent.js';
import { ProfilePageUserHeader } from '../Components/Profile/ProfileComponent.js';
import { EditProfileLinksComponent } from '../Components/EditProfile/EditProfileLinksComponent.js';
function EditProfilePage() {
	return (
		<div>
			<div>here from edit page</div>
			<ProfilePageUserHeader />
			<EditProfileComponent />
			<EditProfileLinksComponent />
		</div>
	);
}

export { EditProfilePage };
