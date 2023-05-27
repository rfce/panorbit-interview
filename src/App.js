import {BrowserRouter, Routes, Route} from "react-router-dom"
import Users from "./pages/Users"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Error from "./pages/Error"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Users />} />
				<Route path="/user/:userid" element={<Dashboard />}>
					<Route path="/user/:userid" element={<Profile />} />
					<Route path="/user/:userid/error" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
  	)
}

export default App
