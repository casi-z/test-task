import './Leftpanel.scss'

import { FC, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
const { log } = console
interface LeftpanelProps {
}
const Leftpanel: FC<LeftpanelProps> = ({ }) => {
	const menuItems = [
		"Объекты",
		"РД",
		"МТО",
		"СМР",
		"Объекты",
		"РД",
		"МТО",
		"СМР",
		"Объекты",
		"РД",
		"МТО",
		"СМР",
	]


	return (
		<Box className="Leftpanel" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Название проекта</Typography>
				</AccordionSummary>
			</Accordion>

			<nav aria-label="main mailbox folders">
				<List>

					{menuItems.map(menuItem =>
						<ListItemButton component="a" href="#">

							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>

							<ListItemText primary={menuItem} />

						</ListItemButton>
					)}

				</List>
			</nav>
		</Box>
	)
}
export default Leftpanel
