import { useState } from "react";
function SignUp(props) {
  const [emailAddress, setEmailAddress] = useState("");
  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <h2>Enter Full Name</h2>
        <input type="text" id="fullName" />
        <h2>Phone Number</h2>
        <input type="text" id="phoneNumber" />
        <h2>Email Id</h2>
        <input type="text" id="email" />
        <button
          onClick={() => {
            alert("Enter Proper Details!");
          }}
        >
          Save Record!
        </button>{" "}
      </form>
    </>
  );
}
export default SignUp;
