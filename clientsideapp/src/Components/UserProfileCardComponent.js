import React from 'react';
import { Button, Box, Grid } from '@material-ui/core';

export default function UserProfileCardComponent() {
	return (
		<div>
			<Box boxShadow={2} width={700} height={600} mx='auto'>
				<Box>
					<Grid Container>
						<Grid item>twitter icon</Grid>
						<Grid item>link to twittwer</Grid>
					</Grid>
				</Box>
			</Box>
		</div>
	);
}
