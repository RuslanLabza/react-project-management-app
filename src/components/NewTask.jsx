import Button from "./Button";
import { Component, useState } from "react";

// It is possible to extend not Component but PureComponent to re-render component only when state or props are changed.
export default class NewTask extends Component {
  // If there will be a context it should be provided here as ThemeContext
  // static contextType = ThemeContext;

  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Lifecycle hook for reacting on component mounting
  // componentDidMount() {}

  // Lifecycle hook for reacting on component updating. We are able to compare new props with prev props in order to not create a loop.
  // componentDidUpdate(prevProps, prevState) {}

  // Lifecycle hook for reacting on component unmounting
  // componentWillUnmount() {}

  // Forces a component to re-render. As changing props or state do.
  // forceUpdate(callback?)

  // It should return an object to update the state, or null to update nothing.
  // Use this method when you need to ensure that the component's state is synchronized with its incoming props.
  // When you need to compute new state values based on changes in props, getDerivedStateFromProps can be useful.
  // If your component needs to reset some parts of its state when certain props change, you can do so using this method.
  // getDerivedStateFromProps(nextProps, prevState) {
  // if (nextProps.userId !== prevState.userId) { - Update state if props have changed
  //   return {
  //     userId: nextProps.userId,
  //     userData: {} - Reset user data when userId changes
  //   };
  // }
  // return null;} - Return null if no state updates are required

  // We have new props. Typical React dogma says that when a component receives new props, or new state, it should update.
  // But our component is a little bit anxious and is going to ask permission first.
  // shouldComponentUpdate(nextProps, nextState, nextContext)

  // getSnapshotBeforeUpdate () {}

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task.trim()) {
      this.props.onAddTask(this.state.task);
      this.setState({ task: "" });
    }
  }

  render() {
    // Context might be used like that:
    // const theme = this.context;
    return (
      <div className="flex items-center gap-2 mb-4">
        <input
          value={this.state.task}
          onChange={this.handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Add a task"
        />
        <Button primary type="button" onClick={this.handleSubmit}>
          Add
        </Button>
      </div>
    );
  }
}

//How to use Store in class-based component:

// 1. Create function where map state to props.
// function mapStateToProps(state) {
//   return {
//     tasks: state.tasks
//   }
// }

// 2. Create function where map dispatch to props.
// function mapDispatchToProps(dispatch) {
//   return {
//     changeState: () => dispatch({type: 'change state', payload: ''})
//   }
// }

// 3. Use connect function from react-redux to create high-order component (HOC) from component NewTask.
// connect(mapStateToProps, mapDispatchToProps)(NewTask)

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
