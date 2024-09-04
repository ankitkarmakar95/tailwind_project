import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Profile from './components/Profile';


function App() {
  const prf1 = {
    username: "Delba",
    designation: "Sales coordinator",
    posts: 36,
    followers: 17,
    following: 789
  }
  const prf2 = {
    username: 'Carol',
    designation: 'CEO',
    posts: 5,
    followers: 197,
    following: 57
  }

  const color1 = "#343336";
const color2 = "#B408A4";
  return (
    <>
    <div className='main_style'>
    <Profile profile={prf1}/>
    <Profile profile={prf2}/>
    <Card />  </div> 
    </>
  );
}

export default App;
