<template>
  <main class="shows w-full spacing">
    <p v-if="state === STATES.LOADING">Chargement</p>
    <section v-for="episode in episodes" :key="episode.id" class="w-full md:w-2/3 lg:w-1/2">
      <h2 class="w-full border-b mb-5 pl-5">
        {{ episode.showName }}
      </h2>
      <TorrentList :episode-id="episode.tvTimeId"/>
    </section>
  </main>
</template>

<script>
import ApiService from '@/services/ApiService';
import TorrentList from "@/components/TorrentList";
const STATES = {
  IDLE: 'idle', EMPTY: 'empty', LOADING: 'loading', ERROR: 'error',
};
export default {
  name: 'Home',
  components: { TorrentList },
  data: () => {
    return {
      episodes: [],
      state: STATES.IDLE,
      STATES,
    }
  },
  methods: {
    fetchShows(){
      this.state = STATES.LOADING;

      ApiService.fetchEpisodes().then(({data}) => {
        this.episodes = data || [];
        this.state = STATES.IDLE;
      }).catch(() => {
        this.state = STATES.ERROR;
      });
    }
  },
  created() {
    this.fetchShows();
  }

};
</script>

<style scoped>
.shows{
  @apply flex flex-col flex-wrap;
}
.showsList{
  @apply grid grid-cols-8 gap-5;
}
</style>
