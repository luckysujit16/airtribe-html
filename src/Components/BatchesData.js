import axios from "axios";
import React, { Component } from "react";
import AddBatch from "./CurdEx/AddBatch";

class BatchesData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      course: "",
      startDate: "",
      timing: "",
      duration: "",
      trainer: "",
      batches: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/batches")
      .then((res) => {
        this.setState({
          batches: res.data,
        });
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteBatch = (batchId) => {
    axios
      .delete(`http://localhost:4000/batches/${batchId}`)
      .then(() => alert("Batch ID " + batchId + " Deleted succfully"))
      .catch((err) => console.log(err));
    //
  };

  editBatch = (batchId) => {
    // alert("Edit Batch ID : " + batchId);
    axios
      .get(`http://localhost:4000/batches/${batchId}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          id: res.data.id,
          course: res.data.course,
          startDate: res.data.startDate,
          timing: res.data.timing,
          duration: res.data.duration,
          trainer: res.data.trainer,
        });
      })
      .catch((err) => console.log(err));
  };

  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name + " : " + e.target.value);
  };

  updateBatch = (e) => {
    const { id, course, startDate, timing, duration, trainer } = this.state;
    e.preventDefault();
    axios
      .put(`http://localhost:4000/batches/${id}`, {
        id,
        course,
        startDate,
        timing,
        duration,
        trainer,
      })
      .then(() => alert("Batch Update Succesfully"))
      .catch((err) => {
        console.log(err);
      });
  };

  addBatch = () => {
    alert("Working");
  };
  render() {
    const { course, startDate, timing, duration, trainer } = this.state;
    return (
      <div className="container-fluid">
        <div className="col-12 col-lg-12">
          <div className="table-responsive p-5 center vh-100">
            <h3>Batches Data from Custom API</h3>
            <table className="table table-bordered bi-text-center">
              <thead className="table-dark">
                <tr>
                  {/* <td>Id</td> */}
                  <td>Course</td>
                  <td>Start Date</td>
                  <td>Timing</td>
                  <td>Duration</td>
                  <td>Instructor</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {this.state.batches.map((batch) => (
                  <tr key={batch.id}>
                    {/* <td>{batch.id}</td> */}
                    <td>{batch.course}</td>
                    <td>{batch.startDate}</td>
                    <td>{batch.timing}</td>
                    <td>{batch.duration} Days</td>
                    <td>{batch.trainer}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          this.editBatch(batch.id);
                        }}
                        className="btn btn-primary m-2"
                        data-bs-target="#update"
                        data-bs-toggle="modal"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        onClick={() => {
                          this.deleteBatch(batch.id);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-success mb-3"
              data-bs-target="#addBatch"
              data-bs-toggle="modal"
            >
              Add Batch
            </button>
            <div className="modal fade" id="update">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3>Update Batch Details</h3>
                    <button
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={this.updateBatch} className="mb-2">
                      <input
                        type="text"
                        name="course"
                        placeholder="Course Name"
                        className="form-control mb-4"
                        onChange={this.changeData}
                        value={course}
                      ></input>
                      <input
                        type="text"
                        name="startDate"
                        className="form-control mb-4"
                        onChange={this.changeData}
                        value={startDate}
                      ></input>
                      <input
                        type="text"
                        name="timing"
                        value={timing}
                        placeholder="Batch Time"
                        onChange={this.changeData}
                        className="form-control mb-4"
                      ></input>
                      <input
                        type="number"
                        name="duration"
                        value={duration}
                        placeholder="Course Duration"
                        onChange={this.changeData}
                        className="form-control mb-4"
                      ></input>
                      <input
                        type="text"
                        name="trainer"
                        value={trainer}
                        placeholder="Trainer Namen"
                        onChange={this.changeData}
                        className="form-control mb-4"
                      ></input>
                      <input
                        type="submit"
                        data-bs-dismiss="modal"
                        value="Update Batch"
                        className="form-control btn btn-success"
                      ></input>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="addBatch">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3>Add Batch</h3>
                    <button
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <AddBatch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BatchesData;
