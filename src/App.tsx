import Header from "./components/Header/Header";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Leftpanel from "./components/Leftpanel/Leftpanel";

function App() {
	
	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<Header />
				<Leftpanel/>
			</div>
		</ThemeProvider>
	);
}

export default App;
