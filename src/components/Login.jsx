import React, {useEffect, useState} from 'react'
import firebase from 'firebase/app';
import 'firebase/auth'
import Button from "./Button";
import Input from "./Input";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUser, setIsUser] = useState(false)
  const [isVerifiy, setIsVerify] = useState(false)

  useEffect(() => {
    observer()
  }, [])

  const user = firebase.auth().currentUser

  async function handleRegister() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      verify()
      clean()
    } catch (error) {console.log(error)}
  }

  async function verify() {
    try {
      const userRegister = firebase.auth().currentUser
      await userRegister.sendEmailVerification()
    } catch (error) {console.log(error)}
  }

  async function handleLogin() {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      clean()
    } catch (error) {console.log(error)}
  }

  async function handleLogout() {
    try {
      await firebase.auth().signOut()
    } catch (error) {console.log(error)}
  }

  function observer() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setIsUser(true)
        if(user.emailVerified) {
          setIsVerify(true)
        }
      } else {
        setIsUser(false)
        setIsVerify(false)
      }
    })
  }

  function clean() {
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      {isUser && !isVerifiy ?
        <div>
          <h6>Hemos enviado un correo electrónico con un link para verificar su cuenta.</h6>
          <h6>presione f5 para refrescar la página una vez haya verificado su cuenta.</h6>
        </div>:
      isUser && isVerifiy ?
        <div>
          <h1>Bienvenido {user.email}</h1>
          <Button danger title='Cerrar sesión' onClick={handleLogout} />
        </div> :
      !isUser &&
      <div>
        <Input use='email' border='green' hint='Ingrese correo' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input use='password' hint='Ingrese contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button success title='Iniciar sesión' onClick={handleLogin} /> 
        <Button primary title='Regístrarse' onClick={handleRegister} /> 
      </div>}
    </div>
  )
}

export default Login
