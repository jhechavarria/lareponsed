<template>
  <div class="row">
      <div id="map"></div>
  </div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps";

export default {
  name: "google",
  data: () => ({
    key: "4NQ8LXRDKZxEifOocQ8QCj6okBGwXpTu",
    lyon: [4.834310, 45.767310]
  }),
  mounted() {
    var firstMap = tt.map({
        key: this.key,
        container: 'map',
        style: 'tomtom://vector/1/basic-main',
        center: this.lyon,
        zoom: 15
    });
  },
};
</script>
