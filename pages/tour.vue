<template>
  <div>
    <h1>Lokasi Terdekat</h1>

    <button @click="ambilLokasi">Ambil Lokasi Saya</button>

    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="lokasiTerdekat.length">
      <li v-for="lokasi in lokasiTerdekat" :key="lokasi.id">
        {{ lokasi.name }} - {{ lokasi.distanceInKm }} km
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lokasiTerdekat: [],
      error: null
    };
  },
  methods: {
    ambilLokasi() {
      if (!navigator.geolocation) {
        this.error = 'Geolocation tidak didukung di browser ini.';
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const res = await fetch('http://localhost:3001/api/jarak', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ latitude, longitude })
            });

            const data = await res.json();
            this.lokasiTerdekat = data;
          } catch (err) {
            console.error('Error fetching data:', err);
            this.error = 'Gagal mengambil data dari server.';
          }
        },
        (err) => {
          this.error = 'Gagal mengambil lokasi: ' + err.message;
        }
      );
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>
