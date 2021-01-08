let app = new Vue({
    el: '#app',
    data: {
       listaEmail: [],
    },
    mounted() {
        for (let i=0; i < 10; i++) {
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
           .then(response => {
            this.i = response.data.response;
            this.listaEmail.push(response.data.response);
            // console.log(response.data.response);
            });
        }   
    }
})