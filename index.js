const express = require('express');
// este paqute ayuda al manejo de sesion
const session = require('express-session');

// creamos la aplicación mediante el uso de express
const app = express();

app.use(session({
  // indicamos que no se guarde la cookie cada vez que se haga un cambio, y tiene mucha utilidad ya que auqnue no haya un cambio de sesión se guarde la sesion 
  // bajo este mecanismo de almacenamiento
  resave: false,
  // por defecto si la cookie no se a inicilaizado no me la guarde por defecto
  saveUninitialized: false,
  // secret de 256 bit
  secret: "keyboard cat"
}));

// definimos una ruta bajo el root
app.get('/', (req, res) => {
  //verificamos el request session count
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: 'world', counter: req.session.count });
});

app.listen(3000, () => {
  console.log('listening http://localhost:3000');
});