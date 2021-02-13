import { Switch, Route } from 'react-router-dom';
import TableContextProvider from './contexts/TableContext';
import Form from './pages/Form';
import Table from './pages/Table';

function App() {
  return (
    <TableContextProvider>
      <Switch>
        <Route exact path="/" component={ Form } />
        <Route path="/table" component={ Table } />
      </Switch>
    </TableContextProvider>
  );
}

export default App;
