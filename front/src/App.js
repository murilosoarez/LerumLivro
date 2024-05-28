
import AppRoutes from './components/Routes';
import UserContext from './components/Account'


function App() {
  return (
    <UserContext>
      <AppRoutes/>
    </UserContext>
  )
}

export default App;
