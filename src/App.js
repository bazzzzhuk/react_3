import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hello from './components/Hello';
import Form from './components/Form';
import Range from './components/Range';
import Posts from './components/Posts'

function App() {
  const posts = [
    { id: '1', title: 'Procedure С++', description: 'Процедурное программирование С++' },
    { id: '2', title: 'OOP С++', description: 'Объектно-ориентированное программирование С++' },
    { id: '3', title: 'Windows Desktop', description: 'Разработка настольных приложений для Windows' }
  ];

  return (
    <div className="App">
      {/* <Header /> */}
      <Hello />
      <Form />
      <Range />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
