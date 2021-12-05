const validateAddLinkExistingUserRequest = (
	res,
	userNameFromReq,
	userDataLinksSchemaLocal
) => {
	if (userNameFromReq === null || userNameFromReq === '' || userNameFromReq === ' ') {
		res.status(404).send('userName cannot be empty');
		return false;
	}
	if (userDataLinksSchemaLocal === null || userDataLinksSchemaLocal.length === 0) {
		res.status(404).send('userDataLinksSchemaLocal cannot be empty');
		return false;
	}
	return true;
};

export { validateAddLinkExistingUserRequest };
