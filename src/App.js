import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            this.setState({isLoaded: true, items: data,})
        })
    }

    render() {
        const {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="App">
                    <div className="Names">
                        <ul>
                            {items.map(item => {
                                return (
                                    <li key={item.id}> Name: {item.name} | Username: {item.username} | {' '}
                                        <a href={`htttps://${item.website}`}>Website</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default App