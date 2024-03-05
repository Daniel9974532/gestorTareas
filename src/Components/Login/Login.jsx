import React from 'react'

const users =[
    { user: 'usuario 1', password: 'clave1'},
    { user: 'usuario 2', password: 'clave2'},
    { user: 'usuario 3', password: 'clave3'},
    { user: 'usuario 4', password: 'clave4'},
    { user: 'usuario 5', password: 'clave5'},
    { user: 'usuario 6', password: 'clave6'},
    { user: 'usuario 7', password: 'clave7'},
    { user: 'usuario 8', password: 'clave8'},
    { user: 'usuario 9', password: 'clave9'},
    { user: 'usuario 10', password: 'clave10'}
]

export const Login = () => {
  return (
    <>
    <form action="">
        <h4>Usuario</h4>
        <input type="text" />
        <h4>Password</h4>
        <input id='password' type="password" />
        <hr />
        <button>Enviar</button>
    </form>
    
    </>
  )
}
