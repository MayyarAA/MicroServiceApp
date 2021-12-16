import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;
function DeleteUserProfileLinksService(userObject, deleteLinksList) {
	let deleteLinksAPIObject = {
		userName: '',
		userId: '',
		listOfLinksIdToRemove: [],
	};
	const deletUserProfileLinksAPI = async (deleteLinksAPIObject) => {
		let url = `${baseURL}/UserLinks/deleteLinkExistingUser`;
		await axios
			.patch(url, deleteLinksAPIObject)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	deleteLinksAPIObject.userId = userObject.userId;
	deleteLinksAPIObject.userName = userObject.userName;
	deleteLinksAPIObject.listOfLinksIdToRemove.push(deleteLinksList.linkId);

	console.log(JSON.stringify(deleteLinksAPIObject));
	deletUserProfileLinksAPI(deleteLinksAPIObject);
}

export { DeleteUserProfileLinksService };
