Vue.config.devtools = true;
console.log('Vue is activated', Vue);

const app = new Vue({
    el: '#slider',
    data: {
        test: 'Hi vue!',
        images: [
            "images/image1.jpg",
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg",
        ]
    },
    methods: {
        bye() {
            alert('Hi vue');
        }
    },
})