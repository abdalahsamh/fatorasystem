import { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import "./App.css";
import Swal from "sweetalert2";
export default function App() {
  const nameinput = useRef();
  const priceinput = useRef();
  const qtyinput = useRef();
  const [phones, setpones] = useState([
    { name: "iphonex", price: 300, qty: 3 },
    { name: "iphone11", price: 400, qty: 5 },
    { name: "iphone12", price: 500, qty: 6 },
  ]);

  const handelsubmit = (event) => {
    event.preventDefault();
    let newphone = {
      name: nameinput.current.value,
      price: +priceinput.current.value,
      qty: +qtyinput.current.value,
    };

    let copy = [...phones];
    copy.push(newphone);
    setpones(copy);
    Swal.fire({
      icon: "success",
      title: "phone added success",
      timer: 1200,
    }).then(() => {
      setmodalindex(false);
    });
  };

  const [modalindex, setmodalindex] = useState(false);

  return (
    <div className="col-12 App container d-flex flex-column align-items-center">
      <h1>Fatora system</h1>
      <button
        onClick={() => {
          setmodalindex(true);
        }}
        className="btn btn-primary m-2"
      >
        Add new phone
      </button>
      <table className="table table-success table-bordered table-hover">
        <thead>
          <tr>
            <th>-</th>
            <th>phone name</th>
            <th>phone price</th>
            <th>phone qty</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((el, index) => {
            return (
              <tr key={index}>
                <th>{index + 1} </th>
                <th>{el.name} </th>
                <th>{el.price} </th>
                <th>{el.qty} </th>
                <td>
                  <div className="d-flex justify-content-center gap-4">
                    <button className=" btn bg-danger">
                      <FaTrash className="text-white" />
                    </button>

                    <button className="btn bg-warning">
                      <FiEdit className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modalindex == true ? (
        <div
          onClick={() => {
            setmodalindex(false);
          }}
          className="Mymodal d-flex align-items-center justify-content-center"
        >
          <form
            onSubmit={handelsubmit}
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded shadow border p-3 d-flex flex-column gap-3 col-12 col-md-5 animate__animated animate__fadeInDown"
          >
            <input
              className="form-control"
              type="text"
              placeholder="enter new phone name"
              ref={nameinput}
            />
            <input
              className="form-control"
              type="number"
              placeholder="enter new price"
              ref={priceinput}
            />
            <input
              className="form-control"
              type="number"
              placeholder="enter new qty"
              ref={qtyinput}
            />
            <button className="btn btn-primary"> add new phone</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
