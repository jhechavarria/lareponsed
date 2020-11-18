<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">
            Glass Connect
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/alertes" class="nav-link">
            Alertes
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/feuilles" class="nav-link">
            Feuille ed route
          </nuxt-link>
        </li>
      </ul>
      <div class="copyright">
        &copy; {{ year }}, made with <i class="tim-icons icon-heart-2"></i> by
        
        <nuxt-link to="/">
          Glass Connect
        </nuxt-link>
        for a better future.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
