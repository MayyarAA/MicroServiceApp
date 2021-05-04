import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(2),
			width: '25ch',
		},
	},
}));
function UserProfileAddLinkComponent() {
	const [linkValue, setLinkValue] = useState();
	const classes = useStyles();

	const postCall = () => {
		console.log(linkValue);
	};

	useEffect(() => {
		// console.log(linkValue);
	}, [linkValue]);

	let addLinkTextField = (
		<form className={classes.root}>
			<TextField
				id='outlined-basic'
				label='New Link'
				variant='outlined'
				value={linkValue}
				onChange={(event) => {
					setLinkValue(event.target.value);
				}}
			/>
		</form>
	);
	let addLinkButton = (
		<Button color='secondary' onClick={postCall}>
			Add Link
		</Button>
	);

	let addLinkForm = (
		<Grid container justify='center'>
			<Grid item>{addLinkTextField}</Grid>
			<Grid item>{addLinkButton}</Grid>
		</Grid>
	);
	return <div>{addLinkForm}</div>;
}

export default UserProfileAddLinkComponent;

//objectId field type
