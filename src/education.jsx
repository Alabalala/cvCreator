import { useState } from "react";

export default function Education() {
  const [educationList, setEducationList] = useState([
    {
      id: 1,
      nameInstitution: "",
      nameEducation: "",
      yearStarted: "",
      yearEnded: "",
    },
  ]);

  const addMoreEducation = () => {
    const newEducation = {
      id: educationList.length + 1,
      nameInstitution: "",
      nameEducation: "",
      yearStarted: "",
      yearEnded: "",
    };

    setEducationList([...educationList, newEducation]);
    setIsEditing([...isEditing, true]);
  };

  const [isEditing, setIsEditing] = useState([true]);

  const saveEducation = (index) => {
    const updatedEditing = [...isEditing];
    updatedEditing[index] = false;
    setIsEditing(updatedEditing);
  };

  const handleEducationEdit = (index) => {
    const updatedEditing = [...isEditing];
    updatedEditing[index] = true;
    setIsEditing(updatedEditing);
  };

  const handleEducationDelete = (index) => {
    if (educationList.length > 1) {
      const updatedList = [...educationList];
      updatedList.splice(index, 1);
      setEducationList(updatedList);
    } else {
      alert("No puedes borrar más!");
    }
  };

  return (
    <div className="bigSection education">
      {educationList.map((education, index) =>
        isEditing[index] ? (
          <div className="educationCard" key={education.id}>
            <label htmlFor="nameInstitution">Name of Institution</label>
            <input
              type="text"
              className="nameInstituion"
              value={education.nameInstitution}
              onChange={(e) => {
                const updatedList = [...educationList];
                updatedList[index].nameInstitution = e.target.value;
                setEducationList(updatedList);
              }}
            ></input>

            <label htmlFor="nameEducation">Name of studies</label>
            <input
              type="text"
              className="nameEducation"
              value={education.nameEducation}
              onChange={(e) => {
                const updatedList = [...educationList];
                updatedList[index].nameEducation = e.target.value;
                setEducationList(updatedList);
              }}
            />

            <label htmlFor="yearStarted">Year started</label>
            <input
              type="date"
              name="yearStarted"
              value={education.yearStarted}
              onChange={(e) => {
                const updatedList = [...educationList];
                updatedList[index].yearStarted = e.target.value;
                setEducationList(updatedList);
              }}
            />

            <label htmlFor="yearEnded">Year ended</label>
            <input
              type="date"
              name="yearEnded"
              value={education.yearEnded}
              onChange={(e) => {
                const updatedList = [...educationList];
                updatedList[index].yearEnded = e.target.value;
                setEducationList(updatedList);
              }}
            />
            <button onClick={() => saveEducation(index)}>Save</button>
            <div className="cardButtons">
              <button
                className="deleteButton"
                onClick={() => handleEducationDelete(index)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="educationCard" key={education.id}>
            <h2>Education {index + 1} summary</h2>
            <p>
              <strong>Name of institution: </strong>
              {education.nameInstitution}
            </p>
            <p>
              <strong>Name of Education: </strong>
              {education.nameEducation}
            </p>
            <p>
              <strong>Year started: </strong>
              {education.yearStarted}
            </p>
            <p>
              <strong>Year ended: </strong>
              {education.yearEnded}
            </p>
            <div className="cardButtons">
              <button
                className="editButton"
                onClick={() => handleEducationEdit(index)}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                className="deleteButton"
                onClick={() => handleEducationDelete(index)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        )
      )}
      <button onClick={addMoreEducation}>Add more</button>
    </div>
  );
}
