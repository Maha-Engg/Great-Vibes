import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Components/Create';
import Read from './Components/Read';
import Edit from './Components/Edit';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/create' element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/edit' element={<Edit/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
