import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function AddingField() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({ data: [] });
  const [detials, setDetials] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState();
  function MyVerticallyCenteredModal(props) {
    // let data = {};
    const [data, setData] = useState({});
    // useEffect(()=>{
    //   console.log(data,props?.type,'fjsgljs')

    //   if (props?.type == "radio") {
    //     data.items = [
    //       { label: "", value: "" },
    //       { label: "", value: "" },
    //     ];
    //     setData(data)
    //   }
    // },[props?.type])
   
    const additem=()=>{
      console.log(data,'fjsgljs')
      if(data.items){
        let datas = [
          ...data.items,
           { label: "", value: "" },
         ];
         console.log(data,'fjsgljs')
         
         setData({...data,items:datas})
      }else{
        let datas = [
           { label: "", value: "" },
         ];
         console.log(data,'fjsgljs')
         
         setData({...data,items:datas})
      }
      
    }
    // const addcheck=()=>{
    //   if(data.items){
    //     let datas = [
    //       ...data.items,
    //        { label: "", value: "" },
    //      ];
    //      console.log(data,'fjsgljs')
         
    //      setData({...data,items:datas})
    //   }else{
    //     let datas = [
    //        { label: "", value: "" },
    //      ];
    //      console.log(data,'fjsgljs')
         
    //      setData({...data,items:datas})
    //   }
    // }
      

    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add {props.type}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props?.type == "button" ? (
            <div className="">
              Name:
              <input
                type="text"
                className="form-control"
                // onChange={(e) => (data = { ...data, name: e.target.value })}
                onChange={(e) => (setData({ ...data, name: e.target.value }))}
              />
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData({ ...data, className: e.target.value }))
                }
              />
            </div>
          ) : props?.type == "label" ? (
            <div className="">
              Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData( { ...data, name: e.target.value }))}
              />
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData({ ...data, className: e.target.value }))
                }
              />
            </div>
          ) : props?.type == "text" ? (
            <div className="">
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData({ ...data, className: e.target.value }))
                }
              />
              placeholder:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData({ ...data, placeholder: e.target.value }))
                }
              />
            </div>
          ) : props?.type == "password" ? (
            <div className="">
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData({ ...data, className: e.target.value }))
                }
              />
              {/* placeholder:
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                data={ ...data, placeholder: e.target.value }
              }
            /> */}
            </div>
          ) : props?.type == "label" ? (
            <div className="">
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData({ ...data, className: e.target.value }))
                }
              />
              Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData({ ...data, name: e.target.value }))}
              />
            </div>
          ) : props?.type == "textarea" ? (
            <div className="">
              {/* Name:
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                data={ ...data, Name: e.target.value }
              }
            /> */}
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData( { ...data, className: e.target.value }))
                }
              />
              placeholder:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData({ ...data, placeholder: e.target.value }))
                }
              />
            </div>
          ) : props?.type == "number" ? (
            <div className="">
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData( { ...data, className: e.target.value }))
                }
              />
              placeholder:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData( { ...data, placeholder: e.target.value }))
                }
              />
            </div>
          ) : props?.type == "radio" ? (
            <div className="">
              Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData( { ...data, Name: e.target.value }))}
              />
              Id:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData({ ...data, id: e.target.value }))}
              />
              Class Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData( { ...data, className: e.target.value }))
                }
                // value={text}
                // onChange={(e)=>setText(e.target.value)}
              />
              {console.log(data,'fkgjlfj')
              }
              <div className="mt-3 mb-3">
              Fields:
              <button className="btn btn-success"onClick={additem}>Add</button>
              </div>
              
              {Array.isArray(data?.items)&& data?.items?.map((ele,index) => {
                return (
                  <div className="row mb-3">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        // value={ele?.label}
                        onChange={(e) =>{
                          let changes=data?.items
                          changes[index]={...changes[index],label:e.target.value}
                          setData({...data,items:changes})
                        }
                        }
                        placeholder="label"
                      />
                    </div>
                    <div className="col-6">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>{
                          let changes=data?.items
                          changes[index]={...changes[index],value:e.target.value}

                          // setData({...data,items:changes})
                        }
                        }
                        placeholder="value"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : props?.type == "checkbox" ? (
            <div className="">
              Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData( { ...data, Name: e.target.value }))}
              />
              Id:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData({ ...data, id: e.target.value }))}
              />
              Class Name:
              {/* <input type="checkbox" name="" id="" /> */}
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData( { ...data, className: e.target.value }))
                }
                // value={text}
                // onChange={(e)=>setText(e.target.value)}
              />
              {console.log(data,'fkgjlfj')
              }
              <div className="mt-3 mb-3">
              Fields:
              <button className="btn btn-success"onClick={additem}>Add</button>
              </div>
              
              {Array.isArray(data?.items)&& data?.items?.map((ele,index) => {
                return (
                  <div className="row mb-3">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        // value={ele?.label}
                        onChange={(e) =>{
                          let changes=data?.items
                          changes[index]={...changes[index],label:e.target.value}
                          setData({...data,items:changes})
                        }
                        }
                        placeholder="label"
                      />
                    </div>
                    <div className="col-6">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>{
                          let changes=data?.items
                          changes[index]={...changes[index],value:e.target.value}

                          // setData({...data,items:changes})
                        }
                        }
                        placeholder="value"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ): props?.type == "dropdown" ? (
            <div className="">
              Name:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData( { ...data, Name: e.target.value }))}
              />
              Id:
              <input
                type="text"
                className="form-control"
                onChange={(e) => (setData({ ...data, id: e.target.value }))}
              />
              Class Name:
              {/* <input type="checkbox" name="" id="" /> */}
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  (setData( { ...data, className: e.target.value }))
                }
                // value={text}
                // onChange={(e)=>setText(e.target.value)}
              />
              {console.log(data,'fkgjlfj')
              }
              <div className="mt-3 mb-3">
              Fields:
              <button className="btn btn-success"onClick={additem}>Add</button>
              </div>
              
              {Array.isArray(data?.items)&& data?.items?.map((ele,index) => {
                return (
                  <div className="row mb-3">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        // value={ele?.label}
                        onChange={(e) =>{
                          let changes=data?.items
                          changes[index]={...changes[index],label:e.target.value}
                          setData({...data,items:changes})
                        }
                        }
                        placeholder="label"
                      />
                    </div>
                    <div className="col-6">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>{
                          let changes=data?.items
                          changes[index]={...changes[index],value:e.target.value}

                          // setData({...data,items:changes})
                        }
                        }
                        placeholder="value"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ): (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button
            onClick={() => {
              console.log(data,props?.type,'kjhjfg');
              setDetials(data);
              addField(props?.type, data);
              setModalShow(false);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const popup = (name) => {
    setModalShow(true);
    setShow(name);
  };
  const addField = (field, data) => {
    let added = formData.data;
    let inputText = {};
    console.log("detia",field, detials);

    switch (field) {
      case "text":
        inputText = {
          count: 1,
          type: "text",
          className: data?.className,
          placeholder: data?.placeholder,
        };
        added.push(inputText);
        console.log(added, "fklkj");
        setFormData({ data: added });
        break;

      case "textarea":
        inputText = {
          count: 1,
          type: "textarea",
          className: data?.className,
          placeholder: data?.placeholder,
          name: "",
          id: "",
        };
        added.push(inputText);
        console.log(added, "fklkj");
        setFormData({ data: added });
        break;

      case "password":
        inputText = {
          count: 1,
          type: field,
          className: data?.className,
        };
        added.push(inputText);
        console.log(added, "fklkj");
        setFormData({ data: added });
        break;

      case "number":
        inputText = {
          count: 1,
          type: field,
          className: data?.className,
          placeholder: data?.placeholder,
        };
        added.push(inputText);
        console.log(added, "fklkj");
        setFormData({ data: added });
        break;
      case "button":
        inputText = {
          count: 1,
          type: field,
          className: data?.className,
          name: data?.name,
        };
        added.push(inputText);
        console.log(added, "fklkj");
        setFormData({ data: added });
        break;
      case "label":
        inputText = {
          count: 1,
          type: field,
          className: data?.className,
          name: data?.name,
        };
        added.push(inputText);
        console.log(added, "fklkj");
        setFormData({ data: added });
        break;
        case "radio":
          console.log(
            data,'dadhjf'
          );
          
          inputText = {
            count: 1,
            type: field,
            className: data?.className,
            name: data?.Name,
            id: data?.id,
            items:data?.items
          };
          added.push(inputText);
          console.log(added, "fklkj");
          setFormData({ data: added });
          break;
          case "checkbox":
          console.log(
            data,'dadhjf'
          );
          
          inputText = {
            count: 1,
            type: field,
            className: data?.className,
            name: data?.Name,
            id: data?.id,
            items:data?.items
          };
          added.push(inputText);
          console.log(added, "fklkj");
          setFormData({ data: added });
          break;
          case "dropdown":
          console.log(
            data,'dadhjf'
          );
          
          inputText = {
            count: 1,
            type: field,
            className: data?.className,
            name: data?.Name,
            id: data?.id,
            items:data?.items
          };
          added.push(inputText);
          console.log(added, "fklkj");
          setFormData({ data: added });
          break;
    }
  };
  const deleteField = (index) => {
    let deleted = formData.data?.filter((ele, idx) => idx != index);
    setFormData({ data: deleted });
  };
  console.log(formData, "ygjg");
  const createForm=()=>{
    let data=JSON.stringify(formData?.data)
    localStorage.setItem("formData",data)
    navigate('/form')

  }
  return (
    <>
      <div className="container-fluid">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          type={show}
        />
        <div className="screen">
    <button className="btn btn-success form-btn" onClick={createForm}>Create</button>

          <div className="row p-3 row1">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="title h1 p-2">Form Builder</div>
            </div>
          </div>
          <div className="row w-100 row2">
            <div className="col-3 side">
              <h3> Fields</h3>
              <div className="mt-3">
                <div className="ms-3">
                  <button
                    className="btn btn-primary mb-3 "
                    onClick={() => popup("text")}
                  >
                    Input
                  </button>
                </div>
                <div className="ms-3">
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => popup("radio")}
                  >
                    Radio
                  </button>
                </div>
                <div className="ms-3">
                  <button className="btn btn-primary mb-3"  onClick={() => popup("checkbox")}>Check Box</button>
                </div>
                <div className="ms-3">
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => popup("textarea")}
                  >
                    Textarea
                  </button>
                </div>
                <div className="ms-3">
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => popup("password")}
                  >
                    Password
                  </button>
                </div>
                <div className="ms-3">
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => popup("number")}
                  >
                    Number
                  </button>
                </div>
                <div className="ms-3">
                  <button className="btn btn-primary mb-3"  onClick={() => popup("dropdown")}>Dropdown</button>
                </div>
                <div className="ms-3">
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => popup("button")}
                  >
                    Button
                  </button>
                </div>
                <div className="ms-3">
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => popup("label")}
                  >
                    Label
                  </button>
                </div>
              </div>
            </div>
            <div className="col-9 main">
              <h3>Preview</h3>
              <div className="">
                {/* <FormField fields={"kjgkd"}/> */}

                {formData?.data?.map((field, index) => {
                  return (
                    <div className="row mb-3">
                      <div className="col-4">
                        <FormField key={index} fields={field} />
                      </div>
                      <div className="col-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteField(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddingField;
