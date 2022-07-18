import "./PasswordConfirm.css";
import React from "react";
import { useState } from "react";

const PasswordInput = ({ min }) => {
  const [firstPass, SetFirstPass] = useState("password");
  const [secondPass, SetSecondPass] = useState("password");

  return (
    <>
    <div class="convas_password_input">
      <p>
        Текст должен быть <b>{firstPass}</b>
      </p>
      <p>Пример пароля</p>
      <input
        type="text"
        onChange={(e) =>
          SetFirstPass((firstPass) => (firstPass = e.target.value))
        }
        value={firstPass}
        style={
          /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/.test(
            firstPass
          ) && firstPass.length > min
            ? { background: "white" }
            : { background: "yellow" }
        }
      />

      <p>Повтори пароль</p>
      <p>Текст должен совпадать с примером</p>
      <input
        type="text"
        onChange={(e) =>
          SetSecondPass((secondPass) => (secondPass = e.target.value))
        }
        value={secondPass}
        style={
          firstPass === secondPass
            ? { background: "chartreuse" }
            : { background: "red" }
        }
      />
      </div>
    </>
  );
};

export default PasswordInput;
