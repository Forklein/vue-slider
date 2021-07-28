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
            "Immagine 1",
            "Immagine 2",
            "Immagine 3",
            "Immagine 4",
        ],
    },
    methods: {
        isView(index) {
            return this.currentIndex === index ? 'view' : '';
        },
        isActive(index) {
            return this.currentIndex === index ? 'active' : '';
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


//# JS
const createInterval = document.getElementById('interval');
const startDisplay = document.getElementById('start');
const pauseDisplay = document.getElementById('pause');

let isStarted = true;
let start;

startDisplay.addEventListener('click', () => {
    if (isStarted) {
        start = setInterval(() => {
            createInterval.click();
        }, 1500);
        isStarted = !isStarted;
    }
});

pauseDisplay.addEventListener('click', () => {
    isStarted = true;
    clearInterval(start);
});
