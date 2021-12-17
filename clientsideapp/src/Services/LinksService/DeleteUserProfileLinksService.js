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
		let url = `${baseURL}/modifylinks/deleteLinkExistingUser`;
		await axios
			.patch(url, deleteLinksAPIObject)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	deleteLinksAPIObject.userId = '111111';
	deleteLinksAPIObject.userName = userObject.username;
	deleteLinksAPIObject.listOfLinksIdToRemove.push(deleteLinksList.linkId);
	console.log('userObject ' + JSON.stringify(userObject));
	console.log('deleteLinksAPIObject.userName ' + deleteLinksAPIObject.userName);
	console.log(JSON.stringify(deleteLinksAPIObject));
	deletUserProfileLinksAPI(deleteLinksAPIObject);
}

export { DeleteUserProfileLinksService };
