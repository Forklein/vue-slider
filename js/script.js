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
        ],
        names: [
            "immagine 1",
            "immagine 2",
            "immagine 3",
            "immagine 4",
        ]
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
    },
})