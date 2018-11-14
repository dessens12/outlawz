new Vue({
    el: 'main',
    data: {
       dessens: [],
       makavelo: [],
       sh1nnok: [],
       crystal: []
    },

    mounted () {
        this.statscod();
    },

    methods: {
        statscod(){
             axios.get('https://cod-api.theapinetwork.com/api/stats/bo4/DessensD/xbl?type=:multiplayer:')
             .then(response => (this.dessens = response.data.stats))
             axios.get('https://cod-api.theapinetwork.com/api/stats/bo4/makavelo/xbl?type=:multiplayer:')
             .then(response => (this.makavelo = response.data.stats))
             axios.get('https://cod-api.theapinetwork.com/api/stats/bo4/SH1NNOK/xbl?type=:multiplayer:')
             .then(response => (this.sh1nnok = response.data.stats))
             axios.get('https://cod-api.theapinetwork.com/api/stats/bo4/CrystalKofex/xbl?type=:multiplayer:')
             .then(response => (this.crystal = response.data.stats))
        }

    },
    filters: {
        statdecimal (value) {
          return value.toFixed(2)
        }
      },
});