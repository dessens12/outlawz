<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

import axios from 'axios'

Vue.use(axios)

const axios = require('axios');

new Vue({
    el: 'main',
    data() {
       return {
         info: null    
       }
    },

    mounted () {
        axios.get('https://cod-api.theapinetwork.com/api/stats/bo4/DessensD/xbl?type=:multiplayer:')
         .then(response => (this.info = response))
    }
    
});