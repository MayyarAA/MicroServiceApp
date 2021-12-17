import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

const updateUserLinkAPICall = async (updateUserLinkAPIObj) => {
	const url = `${baseURL}/modifylinks/updateLinkValue`;
	await axios
		.patch(url, updateUserLinkAPIObj)
		.then((res) => {
			if (res.status === 201) {
				console.log('res ' + res);
				return res;
			}
			console.log('res ' + res);
			return 'Error';
		})
		.catch((err) => {
			if (err.status === 404) {
				console.log('err ' + err);
				return err;
			}
			console.log('err ' + err);
			return 'done';
		});
	// console.log('ran');
};

function UpdateUserLinkService(userObject, editUserLinkObj) {
	let updateUserLinkAPIObj = {
		userName: userObject.username,
		userId: userObject.username,
		linkId: editUserLinkObj.linkId,
		linkObj: {
			link: editUserLinkObj.link,
			linkName: editUserLinkObj.linkName,
			linkImage: editUserLinkObj.linkImage,
		},
	};
	updateUserLinkAPICall(updateUserLinkAPIObj);
}

export { UpdateUserLinkService };
