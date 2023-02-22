import './Header.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import { FC } from 'react';
const { log } = console

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
	return (<>
		<Box className="Header" sx={{ borderBottom: 1, borderColor: 'divider' }}>

			{/* Иконочные кнопки  */}

			<IconButton aria-label="Back">
				<ReplyIcon />
			</IconButton>

			<IconButton aria-label="delete">
				<AppsIcon />
			</IconButton>

			{/* Табы */}
			<Tabs value={0} aria-label="basic tabs example">
				<Tab label="Просмотр" />
				<Tab label="Управление" />
			</Tabs>
		</Box>

	</>)
}
export default Header
