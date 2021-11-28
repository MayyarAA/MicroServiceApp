import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

const url = `${baseURL}/UserLinks/addLink`;
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(2),
			width: '25ch',
		},
	},
	buttonTheme: {
		color: 'white',

		backgroundColor: '#2196f3',
		'&:hover': {
			backgroundColor: '#2196f3',
		},
	},

	gridTheme: {
		flexGrow: 1,
	},
}));
function UserProfileAddLinkComponent() {
	const [linkValue, setLinkValue] = useState();
	const classes = useStyles();

	let postCall = async () => {
		console.log(linkValue);
		await axios({
			method: 'post',
			url,
			data: {
				userName: 'userFourTwo',
				userLink: `${linkValue}`,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {}, [linkValue]);

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
		<Button onClick={postCall} className={classes.buttonTheme}>
			Add Link
		</Button>
	);

	let addLinkForm = (
		<div className='CenteringElements'>
			<Grid container justify='center' className={classes.gridTheme}>
				<Grid item> {addLinkTextField}</Grid>
				<Grid item>{addLinkButton}</Grid>
			</Grid>
		</div>
	);
	return <div>{addLinkForm}</div>;
}

export default UserProfileAddLinkComponent;

//objectId field type
