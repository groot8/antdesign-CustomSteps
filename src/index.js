import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Steps, Button } from "antd";
import CustomeSteps from "./Steps";
class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { Step } = Steps;
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title={
            <div>
              <h1>Create Push Queue</h1>
              <p>set push queue details</p>
            </div>
          }
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          bodyStyle={{ height: "95vh" }}
          style={{
            margin: "0",
            top: "0",
            left: "0",
            height: "200px"
          }}
          width={"100%"}
          height={"100%"}
          footer={null}
        >
          <div>

          </div>
        </Modal> */}
        <CustomeSteps
          stepsCount={3}
          steps={[
            { title: "title 1", description: "description 1" },
            { title: "title 2", description: "description 2" },
            { title: "title 3", description: "description 3" }
          ]}
          type="vertical"
          views={[<p>view 1</p>, <p>view 2</p>, <p>view 3</p>]}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
