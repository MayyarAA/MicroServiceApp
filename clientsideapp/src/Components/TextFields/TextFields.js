import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../Context/Context.js';
import TextField from '@mui/material/TextField';
function UserLinkNameTextField(props) {
	const [linkNameValue, setLinkNameValue] = useState();
	const { editedLinkObj, setEditedLinkObj } = useContext(UserDataContext);
	return (
		<div>
			<TextField
				required
				id='outlined-required'
				value={props.textValueDefault}
				defaultValue={props.textValue}
				value={linkNameValue}
				label='Link Name'
				onChange={(e) => {
					setLinkNameValue(e.target.value);
					setEditedLinkObj((prevState) => ({
						...prevState,
						linkName: e.target.value,
					}));
				}}
			/>
		</div>
	);
}

function UserLinkURLTextField(props) {
	const [linkURLValue, setLinkURLValue] = useState();
	const { editedLinkObj, setEditedLinkObj } = useContext(UserDataContext);
	return (
		<div>
			<TextField
				required
				id='outlined-required'
				value={props.textValueDefault}
				defaultValue={props.textValue}
				value={linkURLValue}
				label='Link URL'
				onChange={(e) => {
					setLinkURLValue(e.target.value);
					setEditedLinkObj((prevState) => ({
						...prevState,
						link: e.target.value,
					}));
				}}
			/>
		</div>
	);
}

function UserLinkImageTextField(props) {
	const [linkImageValue, setLinkImageValue] = useState();
	const { editedLinkObj, setEditedLinkObj } = useContext(UserDataContext);
	return (
		<div>
			<TextField
				required
				id='outlined-required'
				value={props.textValueDefault}
				defaultValue={props.textValue}
				value={linkImageValue}
				label='Link Image'
				onChange={(e) => {
					setLinkImageValue(e.target.value);
					setEditedLinkObj((prevState) => ({
						...prevState,
						linkImage: e.target.value,
					}));
				}}
			/>
		</div>
	);
}
export { UserLinkImageTextField, UserLinkNameTextField, UserLinkURLTextField };
