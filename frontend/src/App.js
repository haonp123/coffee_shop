import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { publicRoutes, logRoutes, privateRoutes } from './routes';
import Layout from './components/Layout';
import GlobalContext from './context/GlobalContext';

function App() {
    const { currentUser } = useContext(GlobalContext);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Component = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {logRoutes.map((route, index) => {
                        const Component = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    currentUser ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    )
                                }
                            />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        const Component = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    !currentUser ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
