import './Datatable.scss'
import { FC, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const { log } = console

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	proteinS: number,
) {
	return { name, calories, fat, carbs, protein, proteinS };
}

const rows = [
	createData('Южная строительная площадка', 159, 6.0, 24, 4.0, 24),
	createData('Фундаментальные работы', 237, 9.0, 37, 4.3, 24),
	createData('Статья работы №1', 262, 16.0, 24, 6.0, 24),
	createData('Статья работы №2', 305, 3.7, 67, 4.3, 24),
]

const tableCellsData = [
	"Уровень",
	"Наименование работ",
	"Основная з/п",
	"Оборудование",
	"Накладные расходы",
	"Сметная прибыль",
]

interface DatatableProps {
}
const Datatable: FC<DatatableProps> = ({ }) => {
	return (

		<TableContainer component={Paper}>

			<Table sx={{ minWidth: 650 }} aria-label="simple table">

				<TableHead>

					<TableRow>

						{tableCellsData.map(tableCellData => 
						
							<TableCell>{tableCellData}</TableCell>

						)}
						
					</TableRow>

				</TableHead>

				<TableBody>
					{rows.map((row) => (

						<TableRow
							key={row.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>

							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>

						</TableRow>

					))}

				</TableBody>

			</Table>

		</TableContainer>

	)
}
export default Datatable
