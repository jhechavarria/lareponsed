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
    lyon: [4.83431, 45.76731],
  }),
  methods: {
    createMarker(icon, position, color, popupText, map) {
      var markerElement = document.createElement("div");
      markerElement.className = "marker";
      var markerContentElement = document.createElement("div");
      markerContentElement.className = "marker-content";
      markerContentElement.style.backgroundColor = color;
      markerElement.appendChild(markerContentElement);
      var iconElement = document.createElement("div");
      iconElement.className = "marker-icon";
      iconElement.style.backgroundImage =
        "url(https://api.tomtom.com/maps-sdk-for-web/5.x/assets/images/" +
        icon +
        ")";
      markerContentElement.appendChild(iconElement);
      var popup = new tt.Popup({ offset: 30 }).setText(popupText);
      // add marker to map
      new tt.Marker({ element: markerElement, anchor: "bottom" })
        .setLngLat(position)
        .setPopup(popup)
        .addTo(map);
    },
  },
  mounted() {
    var map = tt.map({
      key: this.key,
      container: "map",
      style: "tomtom://vector/1/basic-main",
      dragPan: true,
      center: this.lyon,
      zoom: 15,
    });
    map.addControl(
      new tt.FullscreenControl({ container: document.querySelector("body") })
    );
    map.addControl(new tt.NavigationControl());
    this.createMarker('accident.colors-white.svg', this.lyon, '#5327c3', 'SVG icon', map);
    this.createMarker('accident.colors-white.png', this.lyon, '#c30b82', 'PNG icon', map);
    this.createMarker('accident.colors-white.jpg', this.lyon, '#c31a26', 'JPG icon', map);
  },
};
</script>
