Vue.config.devtools = true;
console.log('Vue is activated', Vue);

const app = new Vue({
    el: '#slider',
    data: {
        test: 'Hi vue!'
    },
    methods: {
        bye() {
            alert('Hi vue');
        }
    },
})