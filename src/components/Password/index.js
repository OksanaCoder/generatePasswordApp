import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import "./styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Password = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    console.log("copied!");
    setCopied(true);
  };
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="3k%w!dW"
          aria-label="password"
          aria-describedby="basic-addon1"
          value={password}
        />
        <CopyToClipboard text={password} onCopy={handleCopy}>
          <button className="btn-default">Copy</button>
        </CopyToClipboard>
      </InputGroup>
      {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </>
  );
};

export default Password;
