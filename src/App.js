import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(data => {
                this.setState({ isLoaded: true, items: data, })
            })
    }

    render() {
        const { isLoaded, items } = this.state
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
                                        <a href={`https://${item.website}`}>Website</a>
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
