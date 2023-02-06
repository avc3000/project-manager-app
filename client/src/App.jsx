import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='container m-auto h-screen flex items-center justify-center'>
          <Routes>
            <Route path='/' element={<Navigate to="/projects" />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
