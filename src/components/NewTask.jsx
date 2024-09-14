import Button from "./Button";
import { Component, useState } from "react";

// It is possible to extend not Component but PureComponent to re-render component only when state or props are changed.
export default class NewTask extends Component {
  // If there will be a context it should be provided here as ThemeContext
  // static contextType = ThemeContext;

  constructor(props) {
    super(props);

    this.state = {
      task: ''
    }
  }

  // Lifecycle hook for reacting on component mounting
  // componentDidMount() {}

  // Lifecycle hook for reacting on component updating. We are able to compare new props with prev props in order to not create a loop.
  // componentDidUpdate(prevProps, prevState) {}

  // Lifecycle hook for reacting on component unmounting
  // componentWillUnmount() {}

  // Forces a component to re-render.
  // forceUpdate(callback?) 

  // If you define shouldComponentUpdate, React will call it to determine whether a re-render can be skipped. 
  // If you are confident you want to write it by hand,
  // you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped.
  // shouldComponentUpdate(nextProps, nextState, nextContext) 


  handleChange(e) {
    this.setState({task: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task.trim()) {
      this.props.onAddTask(this.state.task);
      this.setState({task: ''});
    }
  }

  render() {
    // Context might be used like that:
    // const theme = this.context;
    return (
      <div className="flex items-center gap-2 mb-4">
        <input
          value={this.state.task}
          onChange={this.handleChange.bind(this)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Add a task"
        />
        <Button primary type="button" onClick={this.handleSubmit.bind(this)}>
          Add
        </Button>
      </div>
    );
  }
}

// Here the same component but using function approach:
// export default function NewTask({ onAddTask }) {
//   const [task, setTask] = useState("");

//   function handleChange(e) {
//     setTask(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (task.trim()) {
//       onAddTask(task);
//       setTask("");
//     }
//   }

//   return (
//     <div className="flex items-center gap-2 mb-4">
//       <input
//         value={task}
//         onChange={handleChange}
//         className="flex-1 p-2 border border-gray-300 rounded-md"
//         type="text"
//         placeholder="Add a task"
//       />
//       <Button primary type="button" onClick={handleSubmit}>
//         Add
//       </Button>
//     </div>
//   );
// }
