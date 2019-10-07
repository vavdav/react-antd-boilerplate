import ReactDOM from 'react-dom';
import React from 'react';

import { Button } from 'antd';

class Test extends React.Component {
    render () {
        return (
            <div>Hello <Button>Click me</Button></div>
        )
    }
}

ReactDOM.render(<Test />, document.getElementById('app'))