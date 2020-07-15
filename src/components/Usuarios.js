import React from 'react';
// import Button from '@material-ui/core/Button'
import '../css/index.scss'
import axios from 'axios';

// const App = () => {

class Usuarios extends React.Component{

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  async componentDidMount() {

    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log('respuesta: ', respuesta.data);

    this.setState({
      users: respuesta.data
    })
  }

  ponerFilas = () => (
    this.state.users.map((user) => (
      <tr key={ user.id }>
        <td>
          { user.name }
        </td>
        <td>
          { user.email }
        </td>
        <td>
          { user.website }
        </td>
      </tr>
    ))
  );

  render() {
    return (
      <div className="button">
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    );  
  }
}

export default Usuarios;
