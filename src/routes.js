import EmployeePage from "./pages/EmployeePage";
import HomePage from "./pages/HomePage";

const routes = [
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: 'Employeepage/:url',
		element: <EmployeePage />,
	}
]

export default routes
