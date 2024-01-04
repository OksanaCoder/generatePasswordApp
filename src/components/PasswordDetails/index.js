import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Password from "../Password";

const PasswordDetails = () => {
  const [password, setPassword] = useState("");
  const [letterValue, setLetters] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);
  const [includeUpperCase, setIncludeUppercase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleSubmit = (e) => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+[]{}|;:'\"<>,.?/";

    let chars = "";
    if (includeUpperCase) chars += lowercaseChars;
    if (includeLowerCase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;
    e.preventDefault();

    console.log(chars);
    let newPass = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPass += chars.charAt(randomIndex);
    }
    setPassword(newPass);
  };
  return (
    <div>
      <Password password={password} />
      <Form>
        <Form.Label>Character length {passwordLength}</Form.Label>
        <Form.Range
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          min={1}
          max={20}
        />
        <Form.Check
          type="checkbox"
          label="Include Uppercase Letters"
          checked={includeUpperCase}
          onChange={() => setIncludeUppercase(!includeUpperCase)}
        />
        <Form.Check
          type="checkbox"
          label="Include Lowercase Letters"
          checked={includeLowerCase}
          onChange={() => setIncludeLowerCase(!includeLowerCase)}
        />
        <Form.Check
          type="checkbox"
          label="Include Numbers "
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        <Form.Check
          type="checkbox"
          label="Include Symbols"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />

        <Button type="submit" className="mt-5" onClick={handleSubmit}>
          Generate
        </Button>
      </Form>
    </div>
  );
};

export default PasswordDetails;
