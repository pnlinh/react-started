import React, {Component} from 'react';
import './App.css';

let One = (props) => (
    <div>First React App - {props.name}</div>
);

const Two = (props) => (
    <div>Demo App - {props.name}</div>
);

const Four = (props) => {
    let abc = <span>Hello Word</span>;

    return (
        <div>
            <span>Four - {abc}</span>
        </div>
    );
};

function Three(props) {
    return <div>La la la - {props.name}</div>;
}

function MultipleLines(props) {
    return (
        <div>
            <div>Multiple lines - {props.name}</div>
            <div>Multiple lines - {props.name}</div>
        </div>
    );
}

const Notification = (props) => {
    // const { title, content } = props;
    const { title } = props;
    return (
        <div className="notification">
            <h2 className="message__title">{title}</h2>
            <p>{props.children}</p>
        </div>
    );
};

class Person extends Component {
    constructor(props) {
        super(props);

        console.log('Constructor is running...');

        // Init state
        this.state = {
            name: 'Ngoc Linh',
            job: 'Developer'
        };

        // Binding
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount is running...');
    }

    componentDidMount() {
        console.log('componentDidMount is running...');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps is running...');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        debugger;

        console.log('shouldComponentUpdate is running...');

        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate is running...');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate is running...');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount is running...');
    }

    handleOnChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // console.log(target, name, value);

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log('Render is running...');

        return (
            <div>
                <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name}/>

                <div>Name: {this.state.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Job: {this.state.job}</div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<p>Hello ReactJS</p>*/}

                    {/*<Notification*/}
                        {/*title = "title..."*/}
                        {/*content = "content..."*/}
                    {/*/>*/}

                    {/*<Notification*/}
                        {/*title = "title..."*/}
                    {/*>*/}
                        {/*Content...*/}
                    {/*</Notification>*/}

                    {/*<One name="One"/>*/}
                    {/*<Two name="Two"/>*/}
                    {/*<Three name="Three"/>*/}
                    {/*<Four/>*/}
                    {/*<MultipleLines name="Multiple lines"/>*/}
                    {/*<Person name="Ngọc Lịnh" age="23"/>*/}
                    {/*<Person name="Ai đó" age="20"/>*/}
                    <Person age={23}/>
                </header>

                <div className="footer">

                </div>
            </div>
        );
    }
}

export default App;
