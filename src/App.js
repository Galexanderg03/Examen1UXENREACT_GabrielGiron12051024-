import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">Experiencia de Usuario</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">Sobre el DCU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="inicio" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#inicio" data-slide-to="0" className="active"></li>
          <li data-target="#inicio" data-slide-to="1"></li>
          <li data-target="#inicio" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="imagen1.jpg" className="d-block w-100" alt="Imagen 1" />
        </div>

          <div className="carousel-item" style={{ backgroundImage: "url('imagen2.jpg')" }}>
          </div>
          <div className="carousel-item" style={{ backgroundImage: "url('imagen3.jpg')" }}>
          </div>
        </div>
        <a className="carousel-control-prev" href="#inicio" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#inicio" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>

      <div id="sobre" className="container-fluid">
        <br />
        <br />
        <h1 className="text-center">¿Qué es el Diseño Centrado en el Usuario?</h1>
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <img src="imagen4.jpg" className="card-img-top" alt="img4" />
            <div className="card-body">
              <h5 className="card-title">Definicion</h5>
              <p className="card-text">El Diseño Centrado en el Usuario (DCU) es un enfoque metodológico que busca desarrollar productos o servicios teniendo en cuenta las necesidades, objetivos y preferencias de los usuarios finales. En el caso de la página web para mejorar la experiencia de los estudiantes del área de ingeniería en sistemas, es importante seguir un proceso de DCU que permita entender las necesidades de los usuarios y diseñar una interfaz intuitiva y funcional. A continuación, se presenta un paso a paso del proceso de DCU para esta página web:</p>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />

      <div id="contenido1" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <img src="imagen6.jpg" className="card-img-top" alt="img6" />
              <div className="card-body">
                <h5 className="card-title">#1 Investigación y comprensión del usuario:</h5>
                <p className="card-text">Realizar entrevistas y encuestas a estudiantes, jóvenes que trabajan y padres de familia para comprender sus necesidades y expectativas en relación a la página web.</p>
                <p className="card-text">Analizar el perfil demográfico de los usuarios, considerando las edades que rondan entre los 17 y los 30 años para los estudiantes, y entre los 25 y los 50 años para los padres.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="imagen5.jpg" className="card-img-top" alt="img5" />
              <div className="card-body">
                <h5 className="card-title">#2 Definición de los objetivos de la página web</h5>
                <p className="card-text">Establecer los objetivos claros de la página web, como proporcionar información sobre la experiencia de usuario, resaltar su importancia y ofrecer ejemplos ilustrativos sobre el proceso de DCU.</p>
                <p className="card-text">Identificar los principales mensajes que se desean transmitir a los usuarios para promover una comprensión adecuada del tema.</p>
                <br /><br /><br />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="imagen7.jpg" className="card-img-top" alt="img7" />
              <div className="card-body"> <br />
                <h5 className="card-title">Diseño de la estructura de la página web</h5> <br />
                <p className="card-text">Crear un mapa del sitio que refleje la organización y jerarquía de la información en la página web</p>
                <p className="card-text">Definir las secciones principales de la página, como la página de inicio, la sección de información sobre la experiencia de usuario, la importancia y los ejemplos ilustrativos del proceso de DCU.</p>
                <p className="card-text">Establecer una navegación clara y fácil de usar que permita a los usuarios acceder a la información de manera intuitiva.</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />

      <div id="contenido2" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-center">
              <img src="imagen8.jpg" className="card-img-top" alt="img8" />
              <div className="card-body">
                <h5 className="card-title">#4 Funcionalidad y comportamiento</h5>
                <p className="card-text">Realizar entrevistas y encuestas a estudiantes, jóvenes que trabajan y padres de familia para comprender sus necesidades y expectativas en relación a la página web.</p>
                <p className="card-text">Analizar el perfil demográfico de los usuarios, considerando las edades que rondan entre los 17 y los 30 años para los estudiantes, y entre los 25 y los 50 años para los padres.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="imagen9.jpg" className="card-img-top" alt="img9" />
              <br />
              <h5 className="card-title">#5 Pruebas y ajustes</h5>
              <p className="card-text">Realiza pruebas exhaustivas para asegurarte de que la página web funcione correctamente en diferentes navegadores y dispositivos.</p>
              <p className="card-text">Recopila el feedback de los usuarios y realiza ajustes y mejoras en base a sus comentarios.</p>
              <p className="card-text">Asegúrate de que la página web sea accesible y cumpla con los estándares de usabilidad.</p>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div id="contacto" className="container-fluid">
        <h1>Dejanos tu Contacto</h1>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input type="email" className="form-control" id="correo" placeholder="Ingresa tu correo electrónico" />
          </div>
          <div className="form-group">
            <label htmlFor="rol">Rol</label>
            <select className="form-control" id="rol">
              <option>Estudiante</option>
              <option>Padre del estudiante</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>

      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <p>&copy; 2023 Universidad Tecnológica de Centroamérica</p>
        </div>
      </footer>
    </>
  );
}

export default App;


