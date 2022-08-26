import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout ';
import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import NoPage from '../pages/NoPage';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="blogs" element={<Blogs />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
	);
}
export default AppRoutes;