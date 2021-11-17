const UserNotFoundErrorMessage = (userNameFromReq) => {
	return new Error(`The ${userNameFromReq} user was  not found in database`);
};

export { UserNotFoundErrorMessage };
