
import React from 'react';
import { Box, ChakraBaseProvider } from '@chakra-ui/react';
import SideNav from './components/SideNav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Aaliyah from './components/Aaliyah';
import DashboardLayout from './Dashboard/DashboardLayout/DashboardLayout';

function App() {
  const navigate = useNavigate();

  // Check if the 'id' query parameter is present in the URL
  const searchParams = new URLSearchParams(window.location.search);
  const idParam = searchParams.get('id');

  console.log(idParam)

  // if (idParam) {
  //   // If 'id' query parameter is present, navigate to the Aaliyah component
  //   navigate(`/${idParam}`);
  // }
  return (

    <ChakraBaseProvider>
      {/* <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path=":id" element={
            <DashboardLayout>
               {<Aaliyah />}
            </DashboardLayout>
          } />

        </Route>

      </Routes> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path=":id" element={
          <Dashboard>
            <Aaliyah />
          </Dashboard>
        } />
      </Routes>
    </ChakraBaseProvider>
  );
}

export default App;
