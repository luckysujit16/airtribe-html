import React, { Component } from "react";
import axios from "axios";

class AddBatch extends Component {
  constructor(props) {
    super();

    this.state = {
      course: "",
      startDate: "",
      timing: "",
      duration: "",
      trainer: "",
    };
  }
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name + " : " + e.target.value);
  };

  postBatch = (e) => {
    e.preventDefault();
    // alert("Data Submitted");
    axios
      .post("http://localhost:4000/batches", this.state)
      .then(() => {
        alert("New Batch Added Succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state);
  };
  render() {
    const { course, startDate, timing, duration, trainer } = this.state;
    return (
      <div className="container col-12 p-5">
        <h3>Add Batch</h3>
        <form onSubmit={this.postBatch} className="mb-2">
          <input
            type="text"
            name="course"
            placeholder="Course Name"
            value={course}
            onChange={this.changeData}
            className="form-control mb-4"
          ></input>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={this.changeData}
            className="form-control mb-4"
          ></input>
          <input
            type="text"
            name="timing"
            placeholder="Batch Time"
            value={timing}
            onChange={this.changeData}
            className="form-control mb-4"
          ></input>
          <input
            type="number"
            name="duration"
            placeholder="Course Duration"
            value={duration}
            onChange={this.changeData}
            className="form-control mb-4"
          ></input>
          <input
            type="text"
            name="trainer"
            placeholder="Trainer Namen"
            value={trainer}
            onChange={this.changeData}
            className="form-control mb-4"
          ></input>
          <input
            type="submit"
            value="Add Batch"
            className="form-control btn btn-success"
          ></input>
        </form>
      </div>
    );
  }
}

export default AddBatch;
