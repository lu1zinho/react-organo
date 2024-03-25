import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programming',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      primaryColor: '#DB6E8F',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Innovation & Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const [employees, setEmployees] = useState([])

  const onAddEmployee = (employee) => {
    //debugger
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onAddEmployee={employee => onAddEmployee(employee)} />

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        employees={employees.filter(employee => employee.team === team.name)}
      />)}

      <Footer />

    </div>
  );
}

export default App;
