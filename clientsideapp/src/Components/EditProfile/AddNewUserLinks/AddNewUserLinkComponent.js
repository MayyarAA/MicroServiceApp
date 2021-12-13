// import { AddUserLinkButton } from './AddUserLinkButton.js';
import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AddNewUserLinksService } from '../../../Services/LinksService/AddNewUserLinksService.js';
import { UserDataContext } from '../../Context/Context.js';
function AddNewUserLinkComponent() {
	const {
		userObject,
		userSubmittingNewLink,
		setUserSubmittingNewLink,
		renderUserLinksUserInput,
		setRenderUserLinksUserInput,
	} = useContext(UserDataContext);
	useEffect(() => {}, [renderUserLinksUserInput, userSubmittingNewLink]);

	let addNewLinkButton = (
		<div>
			<Button
				onClick={() => {
					setRenderUserLinksUserInput(!renderUserLinksUserInput);
					setUserSubmittingNewLink(true);
				}}
				variant='outlined'>
				Add Link
			</Button>
		</div>
	);
	if (!userSubmittingNewLink) {
		return (
			<div>
				<AddUserLinkUserInputComponent />
				{addNewLinkButton}
			</div>
		);
	}
	return (
		<div>
			<AddUserLinkUserInputComponent
				renderUserInput={renderUserLinksUserInput}
				userObj={userObject}
			/>
		</div>
	);
}

function AddUserLinkUserInputComponent(props) {
	const [linkNameValue, setLinkNameValue] = useState();
	const [linkURLValue, setLinkURLValue] = useState();
	const [linkImageValue, setLinkImageValue] = useState();
	const {
		userObject,
		renderUserLinksUserInput,
		setRenderUserLinksUserInput,
		userSubmittingNewLink,
		setUserSubmittingNewLink,
	} = useContext(UserDataContext);
	useEffect(() => {
		console.log(linkNameValue);
	}, [userObject, renderUserLinksUserInput, userSubmittingNewLink]);
	let userLinkNameTextField = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={linkNameValue}
				label='Link Name'
				onChange={(e) => {
					setLinkNameValue(e.target.value);
				}}
			/>
		</div>
	);
	let userLinkURLTextField = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={linkURLValue}
				label='Link URL'
				onChange={(e) => {
					setLinkURLValue(e.target.value);
				}}
			/>
		</div>
	);
	let userLinkImageTextField = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={linkImageValue}
				label='Link Image'
				onChange={(e) => {
					setLinkImageValue(e.target.value);
				}}
			/>
		</div>
	);
	let addNewLinkButton = (
		<div>
			<Button
				onClick={() => {
					AddNewUserLinksService(linkNameValue, linkURLValue, linkImageValue, userObject);
					setUserSubmittingNewLink(false);
					setRenderUserLinksUserInput(false);
				}}
				variant='outlined'>
				Submit New Link
			</Button>
		</div>
	);
	if (renderUserLinksUserInput) {
		return (
			<div>
				<Grid contianer direction='row' justifyContent='center' alignItems='center'>
					<Grid item>{userLinkNameTextField}</Grid>
					<Grid item>{userLinkURLTextField}</Grid>
					<Grid item>{userLinkImageTextField}</Grid>
				</Grid>
				{addNewLinkButton}
			</div>
		);
	}
	return <div></div>;
}

export { AddNewUserLinkComponent };
