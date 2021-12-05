const updateUserLinkValueValidatorService = (res, userNameFromReq, linkIdFromReq, linkObj) => {
	if (userNameFromReq === null || userNameFromReq === '' || userNameFromReq === ' ') {
		res.status(400).send('userName cannot be empty');
		return false;
	}
	if (linkIdFromReq === null || linkIdFromReq === '' || linkIdFromReq === ' ') {
		res.status(400).send('linkIdFromReq cannot be empty');
		return false;
	}

	if (
		!('link' in linkObj) ||
		linkObj.link === null ||
		linkObj.link === '' ||
		linkObj.link === ' '
	) {
		res.status(400).send('userDataLinksSchema.link cannot be empty');
		return false;
	}
	if (
		!('linkName' in linkObj) ||
		linkObj.linkName === null ||
		linkObj.linkName === '' ||
		linkObj.linkName === ' '
	) {
		res.status(400).send('userDataLinksSchema.linkName cannot be empty');
		return false;
	}
	if (
		!('linkImage' in linkObj) ||
		linkObj.linkImage === null ||
		linkObj.linkImage === '' ||
		linkObj.linkImage === ' '
	) {
		res.status(400).send('userDataLinksSchema.linkImage cannot be empty');
		return false;
	}

	return true;
};

export { updateUserLinkValueValidatorService };
