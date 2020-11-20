<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <nuxt-link :to="localePath('/alertes')" class="nav-link">
            Glassify
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="localePath('/alertes')" class="nav-link">
            {{ $t('layouts.default.sidebar.alertes') }}
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="localePath('/feuilles')" class="nav-link">
            {{ $t('layouts.default.sidebar.feuilleDeRoute') }}
          </nuxt-link>
        </li>
      </ul>
      <div class="copyright">
        &copy; {{ year }}, {{ $t('components.layout.contentFooter.faitAvec') }} <i class="tim-icons icon-heart-2"></i>, {{ $t('components.layout.contentFooter.par') }}
        
        <nuxt-link :to="localePath('/')">
          Glass Connect
        </nuxt-link>
        {{ $t('components.layout.contentFooter.avenirMeilleur') }}.
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
