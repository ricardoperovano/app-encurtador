import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import Error from "../messages/error";

const Create = ({ history }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [responseText, setResponseText] = useState("");
  const [errors, setErrors] = useState({});

  const submit = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}`, {
        original_url: originalUrl,
        shortened_url: shortenedUrl,
      });

      setResponseText(response.data.url);

      setOriginalUrl("");
      setShortenedUrl("");
      setErrors({});
    } catch (err) {
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  };

  return (
    <div>
      {responseText && (
        <Message success onDismiss={() => setResponseText(null)}>
          <a href={responseText} target="_blank">
            {responseText}
          </a>
        </Message>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          style={{
            width: "20%",
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Form.Field>
            <label htmlFor="original_url">Url</label>
            <input
              type="text"
              name="original_url"
              placeholder="https://app.monitchat.com"
              value={originalUrl}
              onChange={(e) => {
                setOriginalUrl(e.target.value);
              }}
            />
            {errors.original_url && (
              <Error text={errors.original_url[0]}></Error>
            )}
          </Form.Field>
          <Form.Field>
            <label htmlFor="shortened_url">Apelido da Url</label>
            <input
              type="text"
              name="shortened_url"
              placeholder="monitchat"
              value={shortenedUrl}
              onChange={(e) => {
                setShortenedUrl(e.target.value);
              }}
            />
            {errors.shortened_url && (
              <Error text={errors.shortened_url[0]}></Error>
            )}
          </Form.Field>

          <Button primary onClick={submit}>
            Cadastrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Create;
