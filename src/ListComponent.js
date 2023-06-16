import { useRef, useState } from "react";
import classes from "./ListComponent.module.scss";
import { Tooltip } from "@mui/material";

const ListComponent = () => {
  const [persons, setPerson] = useState([
    {
      name: "Lisa Johnson",
      department: 2,
    },
    {
      name: "David Lee",
      department: 1,
    },
    {
      name: "Sarah Smith",
      department: 1,
    },
    {
      name: "Emily Davis",
      department: 2,
    },
    {
      name: "Jessica Chen",
      department: 1,
    },
    {
      name: "Samantha Lee",
      department: 2,
    },
    {
      name: "John Doe",
      department: 1,
    },
    {
      name: "Daniel Kim",
      department: 2,
    },
    {
      name: "Michael Brown",
      department: 1,
    },
    {
      name: "Mark Wilson",
      department: 2,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  let handleRemovePerson = (person) => {
    setPerson((prevPersons) => {
      const updatedPersons = [...prevPersons];
      updatedPersons.splice(person, 1);
      return updatedPersons;
    });
  };

  const resetFields = () => {
    nameRef.current.value = "";
    departmentRef.current.value = "";
  };
  const nameRef = useRef();
  const departmentRef = useRef();

  let handleAddPerson = () => {
    const nameValue = nameRef.current.value;
    const departmentValue = departmentRef.current.value;
    if (nameValue !== "" && departmentValue !== "") {
      const newPerson = { name: nameValue, department: departmentValue };
      setPerson([...persons, newPerson]);
      resetFields();
    }
  };

  return (
    <div className={`${classes.filterComponent}`}>
      <table className={`${classes.table}`}>
        <thead>
          <tr className={`${classes.container}`}>
            <th className={`${classes.headerTable}`}>Name</th>
            <th className={`${classes.headerTable}`}>Department</th>
            <th className={`${classes.headerTable}`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => {
            return (
              <tr key={index} className={`${classes.ulContainer}`}>
                <td className={`${classes.list}`}>{person.name}</td>
                <td className={`${classes.list}`}>
                  {person.department == "1" ? "IT" : "Marketing"}
                </td>
                <td className={`${classes.list}`}>
                  {/* <Button></Button> */}
                  <button
                    className={`${classes.deleteButton}`}
                    onClick={() => handleRemovePerson(person)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className={`${classes.addButton}`} onClick={handleModal}>
        Add person
      </button>

      <div
        className={`${classes.inputContainer}`}
        style={{ display: `${isOpen ? "" : "none"}` }}
      >
        <input
          className={`${classes.input}`}
          type="text"
          ref={nameRef}
          placeholder="Name"
        ></input>
        <Tooltip title="Tap 1 for IT ot 2 for Marketing">
          <input
            className={`${classes.input}`}
            type="text"
            ref={departmentRef}
            placeholder="Department"
          ></input>
        </Tooltip>

        <button className={`${classes.saveButton}`} onClick={handleAddPerson}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ListComponent;
