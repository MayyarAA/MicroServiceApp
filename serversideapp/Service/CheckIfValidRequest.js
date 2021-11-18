function CheckIfValidDeleteLinkRequest(userNameFromReq, userIdFromReq, linkIdToRemove) {
	if (
		userNameFromReq == null ||
		userNameFromReq == undefined ||
		userNameFromReq == ' ' ||
		userNameFromReq == ''
	) {
		console.log('userNameFromReq ' + userNameFromReq);
		return false;
	}
	if (
		userIdFromReq == null ||
		userIdFromReq == undefined ||
		userIdFromReq == ' ' ||
		userIdFromReq == ''
	) {
		console.log('userIdFromReq ' + userIdFromReq);
		return false;
	}
	if (
		linkIdToRemove == null ||
		linkIdToRemove == undefined ||
		linkIdToRemove == ' ' ||
		linkIdToRemove == ''
	) {
		console.log('linkIdToRemove ' + linkIdToRemove);
		return false;
	}

	return true;
}

export { CheckIfValidDeleteLinkRequest };
