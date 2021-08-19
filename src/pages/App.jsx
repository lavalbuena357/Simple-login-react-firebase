import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function App() {
  return (
    <div className="App">
      <Input use='text' width={200} border='green' hint='Ingrese correo' />
      <Input use='password' width={200} border='violet' hint='Ingrese contraseña' />
      <Button primary title='Login' />
    </div>
  );
}

export default App;
