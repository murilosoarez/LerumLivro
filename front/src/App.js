
import AppRoutes from './components/Routes';
import UserContext from './components/Account'

import './App.css'

function App() {
  return (
    <UserContext>
      <AppRoutes/>
    </UserContext>
  )
}

export default App;
