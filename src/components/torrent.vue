<template>
  <article class="flex flex-col border shadow p-5 justify-center rounded">
    <h3 class="w-full text-center mb-3">{{ torrent.torrent }}</h3>
    <span>
            <fa-icon class="" icon="clock"  /> {{ torrent.age }}
    </span>
    <span class="text-green">
            <fa-icon class="" icon="arrow-up"  /> {{ torrent.s }}
    </span>
    <span class="text-red">
            <fa-icon class="" icon="arrow-down"  /> {{ torrent.l }}
    </span>
    <span>
            <fa-icon class="" icon="database"  /> {{ torrent.size }}
    </span>
    <button class="mt-5 btn btn-primary" @click="download(torrent.id)">Download</button>
  </article>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock,faArrowUp,faArrowDown,faDatabase } from '@fortawesome/free-solid-svg-icons';
library.add(faClock,faArrowUp,faArrowDown,faDatabase);
export default {
  name: "Torrent",
  props:['torrent'],
  methods: {
    download(torrentId) {
      window.open(`${process.env.VUE_APP_API_URL}/download?id=${torrentId}`)
    }
  },
  computed: {
    name(){
      let regex = 'S[0-9]+(E[0-9][0-9])*'
      let name = this.torrent.torrent.match(regex);
      return (name === null) ? 'NULL' : name[0]
    },
  }
}
</script>

<style scoped>
span{
  @apply w-full;
}
</style>
