import { UserDataContext } from '../Context/Context.js';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
function EditProfileComponent() {
	const { userId } = useContext(UserDataContext);
	useEffect(() => {}, []);

	return <div>{userId}</div>;
}

export { EditProfileComponent };
