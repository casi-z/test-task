import Header from "./components/Header/Header";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Leftpanel from "./components/Leftpanel/Leftpanel";
import Datatable from "./components/Datatable/Datatable";

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
				<div className="TableSection">
					<Leftpanel />
					<Datatable/>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
