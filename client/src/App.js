import React, { useState, useEffect } from 'react';
import './App.css';

// class App extends Component {
//   state = {users: []}

//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

//   render() {
//     return (
//       <div classname="App">
//         <h1>Users</h1>
//         {this.state.users.map(user =>
//           <div key="{user.id}">{user.username}</div>
//         )}
//       </div>
//     );
//   }
// }

const App = () => {

  const [comment, setComment] = useState('2')
  useEffect(() => {
    const loadData = async () => {
      console.log("hogehoge")
      await fetch('/users')
      .then(res => res.json())
      .then(users => setComment(users))
    }
    console.log('loading...')
    loadData()
  }, [])
  console.log(comment)
  // // fetch('/users')
  // //   .then(res => res.json())
  // //   .then(users => setUsers(users))
  // console.log(comment)
  return <h1>Hello! {comment}</h1>
}

export default App;