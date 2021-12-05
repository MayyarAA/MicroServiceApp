function CheckIfValidDeleteLinkRequest(userNameFromReq, userIdFromReq, listOfLinksIdToRemove) {
	if (
		userNameFromReq === null ||
		userNameFromReq === undefined ||
		userNameFromReq === ' ' ||
		userNameFromReq === ''
	) {
		console.log('userNameFromReq ' + userNameFromReq);
		return false;
	}
	if (
		userIdFromReq === null ||
		userIdFromReq === undefined ||
		userIdFromReq === ' ' ||
		userIdFromReq === ''
	) {
		console.log('userIdFromReq ' + userIdFromReq);
		return false;
	}
	if (
		listOfLinksIdToRemove === null ||
		listOfLinksIdToRemove === undefined ||
		listOfLinksIdToRemove.length === 0
	) {
		console.log('listOfLinksIdToRemove ' + listOfLinksIdToRemove);
		return false;
	}

	return true;
}

const getLinksForUserValidatorService = (req, res) => {
	if (
		req.params.userName === null ||
		req.params.userName === '' ||
		req.params.userName === ' '
	) {
		res.status(400).send('Error need to supply userName');
		return;
	}
	return;
};

export { CheckIfValidDeleteLinkRequest, getLinksForUserValidatorService };
