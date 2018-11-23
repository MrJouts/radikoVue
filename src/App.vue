<template>
  <div class="dashboard">
    <div class="col-left">
      <h1>
        <router-link to="/" class="nav-link">
          Radiko
        </router-link>
      </h1>

      <datos-huerta></datos-huerta>

      <ul class="menu">
        <li class="nav-item">
          <router-link to="/productos" class="nav-link">
            <i class="icon icon-fruit"></i>
            <span>Mis productos</span>
          </router-link>
          <ul class="submenu">
            <li>
              <router-link to="/productos/create" class="nav-link">
                <i class="icon">+</i>
                <span>Agregar producto</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="icon icon-cart"></i>
            <span>Mis pedidos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon icon-user"></i>
            <span>Mis datos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon icon-chat"></i>
            <span>Chat</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon icon-logout"></i>
            <span>Cerrar sesión</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="col-right">
      <router-view />
    </div>
    
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>
