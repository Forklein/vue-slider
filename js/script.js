Vue.config.devtools = true;
console.log('Vue is activated', Vue);

const app = new Vue({
    el: '#slider',
    created() {
        setInterval(this.increaseIndex, 2000);
    },
    data: {
        currentIndex: 0,
        images: [
            "images/image1.jpg",
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg",
        ],
        names: [
            "Immagine 1",
            "Immagine 2",
            "Immagine 3",
            "Immagine 4",
        ],
    },
    methods: {
        isView(index) {
            if (this.currentIndex === index) {
                return 'view';
            }
        },
        isActive(index) {
            if (this.currentIndex === index) {
                return 'active';
            }
        },
        increaseIndex() {
            if (this.currentIndex === this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        decreaseIndex() {
            if (this.currentIndex <= 0) {
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
            }
        },
        setCurrentIndex(index) {
            this.currentIndex = index;
        },
    },
})