import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000/');

        socket.onopen = () => {
            console.log('Connected to server');
            socket.send('Hello, server! Love, Client.');
        };

        socket.onmessage = (event) => {
            console.log('Received: ' + event.data);
        };

        socket.onclose = (event) => {
            console.log('Connection closed: ', event);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error: ', error);
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div className="App">
            <h1>WebSocket Client</h1>
        </div>
    );
}

export default App;
