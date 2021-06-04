import { useState } from "react";
import ErrorModal from '../components/ErrorModal'

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
        setError({
            title: "Something went wrong",
            message: "please enter a valid name and age (non-empty value)"
        })
      return;
    }
    if (+age < 1) {
        setError({
            title: "Invalid Age",
            message: "Please enter  a valid age (age > 0)"
        })
      return;
    }
    onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const handleError = () => {
      setError(null)
  }
  return (
    <>
      {error &&<ErrorModal title={error.title} message={error.message} onConfirm={handleError}/>}
      <div className="card inputs">
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" value={age} onChange={ageHandler} />
          <button type="submit" className="btn">
            {" "}
            Add User{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
