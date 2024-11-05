import { createBrowserRouter } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoutes from './private-routes';
import Home from '../containers/Home';
import Products from '../containers/Products';
import Cart from '../containers/Cart';
import Admin from '../containers/Admin';
import paths from '../constants/paths';
import ProductFinalizado from '../containers/ProductFinalizado';
import PedidoConcluido from '../containers/PedidoConcluido';
import Favoritos from '../containers/Favoritos';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoutes element={<Home />} />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/produtos',
        element: <PrivateRoutes element={<Products />} />,
    },
    {
        path: '/carrinho',
        element: <PrivateRoutes element={<Cart />} />,
    },
    {
        path: '/pedidoFinalizado',
        element: <PrivateRoutes element={<ProductFinalizado />} />,
    },
    {
        path: '/pedidoConcluido',
        element: <PrivateRoutes element={<PedidoConcluido />} />,
    },
    {
        path: '/favoritos',
        element: <PrivateRoutes element={<Favoritos />} />,
    },
    {
        path: paths.Order,
        element: <PrivateRoutes element={<Admin />} isAdmin={true} />,
    },
    {
        path: paths.Products,
        element: <PrivateRoutes element={<Admin />} isAdmin={true} />,
    },
    {
        path: paths.NewProduct,
        element: <PrivateRoutes element={<Admin />} isAdmin={true} />,
    },
    {
        path: paths.EditProducts, 
        element: <PrivateRoutes element={<Admin />} isAdmin={true} />,
    }
]);
