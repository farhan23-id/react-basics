import { useState } from "react";

const Form = () => {
  // Uncontrolled component
  // Susah menenentukan rules untuk ditentukan sebelum data dikirim ke db
  // const inputUserameRef = useRef<HTMLInputElement>(null);
  // const inputPasswordRef = useRef<HTMLInputElement>(null);

  // Controlled component/input
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // const userNameValue = inputUserameRef.current?.value;
    // const passwordValue = inputPasswordRef.current?.value;
    // alert(`Form submitted, name: ${userNameValue} & password:${passwordValue}`);

    const passwordValidation = passwordInput.length < 8;

    if (passwordValidation) {
      setPasswordErrorMessage("password must be at least 9 characters");
    }
  };

  return (
    <>
      <h1>Ini Page Form</h1>
      <h3>Form Example</h3>
      <h3>Username:{usernameInput}</h3>
      <h3>password:{passwordInput}</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          border: "1px solid black",
          width: "350px",
          padding: "9px",
        }}
        action=""
      >
        <label htmlFor="">
          Username: <p style={{ color: "red" }}>{usernameErrorMessage}</p>
          <input
            onChange={(event) => {
              setUsernameInput(event.target.value);

              const usernameValidation = event.target.value.length < 4;

              setUsernameErrorMessage(usernameValidation ? "wkwk" : "");
            }}
            value={usernameInput}
            type="text"
            placeholder="Nama"
          />
        </label>
        <label htmlFor="">
          Password: <p style={{ color: "red" }}>{passwordErrorMessage}</p>
          <input
            onChange={(event) => setPasswordInput(event.target.value)}
            value={passwordInput}
            type="password"
            placeholder="Password"
          />
        </label>
        <button
          style={{ backgroundColor: "greenyellow" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
