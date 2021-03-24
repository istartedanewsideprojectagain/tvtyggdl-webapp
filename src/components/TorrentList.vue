<template>
  <div v-if="isNotEmpty" class="torrentList">
    <Torrent class="mr-5 mb-5" v-for="torrent in torrents" :key="torrent.id" :torrent="torrent" />
  </div>
  <div v-else class="w-full text-center">
    Pas de torrent disponible
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";
import Torrent from "@/components/torrent.vue";
export default {
  name: "TorrentList",
  props:['episodeId'],
  components:{ Torrent },
  data: () => ({
    torrents: [],
  }),
  computed: {
    isNotEmpty(){
      return this.torrents.length > 0
    }
  },
  methods: {
    getTorrentList(){
      ApiService.fetchTorrents(this.episodeId).then(({data}) => {
        this.torrents = data;
      });
    }
  },
  created() {
    this.getTorrentList();
  }
}
</script>

<style scoped>
.torrentList{
  @apply w-full flex flex-wrap;
}
</style>
