<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home page</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/productos">Productos</router-link></li>
        <li><router-link to="/categorias">Categorías</router-link></li>
        <li><router-link to="/marcas">Marcas</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
    </nav>

    <router-view/>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  display: inline;
  list-style-type: none;
}

li {
  display: inline;
}

li a {
  padding: 15px;
}
</style>