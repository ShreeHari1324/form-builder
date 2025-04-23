import React from "react";

function FormField({ fields }) {
  console.log(fields, "kmfm");
  switch (fields?.type) {
    case "text":
      return (
        <>
          <input
            type="text"
            className={fields.className}
            placeholder={fields?.placeholder}
          />
        </>
      );
      break;
    case "textarea":
      return (
        <>
          <textarea
            name={fields.name}
            id={fields.id}
            className="fields.className"
          ></textarea>
        </>
      );
      break;
    case "password":
      return (
        <>
          <input
            type="password"
            className={fields.className}
            placeholder={fields?.placeholder}
          />
        </>
      );
      break;
    case "number":
      return (
        <>
          <input
            type="number"
            className={fields.className}
            placeholder={fields?.placeholder}
          />
        </>
      );
      break;
    case "button":
      return (
        <>
          <button className={fields.className}>{fields?.name}</button>
        </>
      );
      break;
    case "label":
      return (
        <>
          <label htmlFor="" className={fields.className}>
            {fields?.name}
          </label>
        </>
      );
      break;
    case "radio":
      return (
        <>
          {fields?.items?.map((ele, idx) => {
            return (
              <>
                <input
                  type="radio"
                  name={fields?.name}
                  //   id={fields?.id}
                  value={ele?.value}
                  className={fields.className}
                />
                <label htmlFor="">{ele?.label}</label>
                <br />
              </>
            );
          })}
        </>
      );
      break;
    case "checkbox":
      return (
        <>
          {fields?.items?.map((ele, idx) => {
            return (
              <>
                {/* <input
                    type="radio"
                    name={fields?.name}
                  //   id={fields?.id}
                    value={ele?.value}
                  /> */}
                <input
                  type="checkbox"
                  name={fields?.name}
                  id={fields?.id}
                  value={ele?.value}
                  className={fields.className}
                />
                <label htmlFor="">{ele?.label}</label>
                <br />
              </>
            );
          })}
        </>
      );
      break;
    case "dropdown":
      return (
        <>
          <select id={fields?.id} name={fields?.name}  className={fields.className}>
          <option disabled >select</option>
            {fields?.items?.map((ele, idx) => {
              return (
                <>
                  {/* <input
                    type="radio"
                    name={fields?.name}
                  //   id={fields?.id}
                    value={ele?.value}
                  /> */}
                  <option value={ele?.value}>{ele?.label}</option>
                  {/* <input
                    type="checkbox"
                    name={fields?.name}
                    id={fields?.id}
                    value={ele?.value}
                  />
                  <label htmlFor="">{ele?.label}</label> */}
                </>
              );
            })}
          </select>
        </>
      );
      break;
  }
  return <>{fields?.type}</>;
}

export default FormField;
