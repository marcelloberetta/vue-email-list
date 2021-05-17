const app = new Vue({
    el: '#root',

    data: {
        randomEmailList: [],
    },
    mounted() {
        const mail = [];
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    console.log(resp.data.response);
                    mail.push(resp.data.response);
                   
                    if(mail.length === 10){
                        
                        this.randomEmailList.push(...mail);
                    }
                });
        }

    }

})