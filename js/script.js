Vue.config.devtools = true;
console.log('Vue is activated', Vue);

const app = new Vue({
    el: '#slider',
    data: {
        currentIndex: 0,
        images: [
            "images/image1.jpg",
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg",
        ]
    },
    methods: {
        isActive(index) {
            if (this.currentIndex === index) {
                return 'view';
            } else {
                return '';
            }
        },
        increaseIndex() {
            this.currentIndex++;
        },
        decreaseIndex() {
            this.currentIndex--;
        }
    },
})