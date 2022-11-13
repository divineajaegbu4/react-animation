import React from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef(null);
    // this.state = {
    //   modalIsOpen: false,
    //   showBlock: true,
    // };
  }
  state = {
    modalIsOpen: false,
    showBlock: false,
  };
  showModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  toggleBtn = () => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  };

  render() {
    return (
      <div className="App" ref={this.wrapper}>
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleBtn}>
          Toggle
        </button>
        <br />
        <Transition
          nodeRef={this.nodeRef}
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              ref={this.nodeRef}
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                opacity: state === "exited" ? 0 : 1,
                margin: "auto",
                transition: "opacity 1s ease-out",
              }}
            />
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
