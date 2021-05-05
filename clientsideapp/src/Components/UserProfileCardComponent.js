import React from 'react';
import { Button, Box, Grid } from '@material-ui/core';
import '../ComponentsCSS/OverallCSS.css';
const userLinksFromDB = [
	{ link: 'twitter link', icon: 'twitter icon' },
	{ link: 'FB link', icon: 'FB icon' },
	{ link: 'Insta link', icon: 'Insta icon' },
];

export default function UserProfileCardComponent() {
	let userLink = userLinkAndIcon('twitter link', 'twiiter Icon');
	let userLinkArr = [];

	for (let i = 0; i < userLinksFromDB.length; i++) {
		let userLinkObj = userLinkAndIcon(
			userLinksFromDB[i].link,
			userLinksFromDB[i].icon
		);
		userLinkArr.push();
		console.log(userLinkArr);
	}

	let renderItem = userLinkArr.forEach((element) => {
		<div>
			<Box>{element.icon}</Box>
			<Box>{element.link}</Box>
		</div>;
	});

	let mappingFcn = (
		<div>
			{userLinksFromDB.map((userVal) => {
				return (
					<div>
						<Grid container alignItems='center' justify='center' spacing={4}>
							<Grid item>{userVal.icon}</Grid>
							<Grid item>{userVal.link}</Grid>
						</Grid>
					</div>
				);
			})}
		</div>
	);

	return (
		<div>
			hello
			<Box boxShadow={2} width={700} height={600} mx='auto'>
				{mappingFcn}
			</Box>
		</div>
	);
}

function userLinkAndIcon(link, icon) {
	return (
		<div>
			<Grid Container>
				<Grid item>{'twitter link'}</Grid>
				<Grid item>{link}</Grid>
			</Grid>
		</div>
	);
}
