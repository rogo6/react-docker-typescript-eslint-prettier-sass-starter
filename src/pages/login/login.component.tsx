import React, { useState } from "react";
import "./login.styles.scss";
import FormInput from "../../components/formInput/formInput.component";
import Button from "../../components/button/button.component";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={"loginPage"}>
      <div className={"wrapper"}>
        <div className={"formContainer"}>
          <span className={"headerTitle"}>Masz już konto ?</span>
          <form>
            <FormInput
              value={email}
              placeholder={"Adres email"}
              onChange={(e) => setEmail(e.target.value)}
              label={"Adres email"}
              type={"text"}
            />
            <FormInput
              value={password}
              placeholder={"Hasło"}
              onChange={(e) => setPassword(e.target.value)}
              label={"Hasło"}
              type={"password"}
            />
            <Button value={"Zaloguj się"} />
          </form>
          <div className={"flexColumn mt20"}>
            <span className={"headerTitle"}>Chcę założyć konto</span>
            <Button value={"Załóż konto"} />
          </div>
        </div>
        <div className={"loginInfo"}>
          <span className={"headerTitle"}>
            Załóż konto w systemie Votechain:
          </span>
          <ul>
            <li>organizacja głosowań</li>
            <li>
              pełne bezpieczeństwo i wiarygodność przeprowadzanych głosowań
            </li>
            <li>możliwość śledzenia na bieżąco przebiegu głosowań</li>
            <li>możliwość weryfikacji głosu przez głosującego</li>
            <li>bezpieczny system oparty o technologie blockchain</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
