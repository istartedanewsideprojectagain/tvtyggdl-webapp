import AxiosService from '@/services/AxiosService';


const ApiService = {
  async fetchTorrents(episodeId) {
    return AxiosService.get(`/torrents?episodeId=${episodeId}`);
  },
  async fetchEpisodes(){
    return AxiosService.get(`/episodes`);
  },
  async getTorrentFile(torrentId){
    return AxiosService.get(`/download?id=${torrentId}`);
  }
}

export default ApiService;
