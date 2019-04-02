var app = new Vue({
    el: '#app',
    data() {
        return {
            images: [
                {
                    id: '1',
                    big: 'images/1977NowaNadzieja.jpg',
                    thumb: 'images/thumbs/p1.jpeg'
                },
                {
                    id: '2',
                    big: 'images/1980ImperiumKontratakuje.jpg',
                    thumb: 'images/thumbs/p2.jpeg'
                },
                {
                    id: '3',
                    big: 'images/1983PowrotJedi.jpg',
                    thumb: 'images/thumbs/p3.jpeg'
                },
                {
                    id: '4',
                    big: 'images/1999MroczneWidmo.jpg',
                    thumb: 'images/thumbs/p4.jpeg'
                }
                {
                    id: '5',
                    big: 'images/2002AtakKlonow.jpg',
                    thumb: 'images/thumbs/p5.jpeg'
                }
                {
                    id: '6',
                    big: 'images/2005ZemstaSithow.jpg',
                    thumb: 'images/thumbs/p6.jpeg'
                }
                {
                    id: '7',
                    big: 'images/2015PrzebudzenieMocy.jpg',
                    thumb: 'images/thumbs/p7.jpeg'
                }
                {
                    id: '8',
                    big: 'images/2017OstatniJedi.jpg',
                    thumb: 'images/thumbs/p8.jpeg'
                }
            ],
         
            activeImage: 0
        }
    },
    computed: {
        
        currentImage() {
            return this.images[this.activeImage].big;
        }
    },
    methods: {
        
        nextImage() {
            var active = this.activeImage + 1;
            if(active >= this.images.length) {
                active = 0;
            }
            this.activateImage(active);
        },
        
        prevImage() {
            var active = this.activeImage - 1;
            if(active < 0) {
                active = this.images.length - 1;
            }
            this.activateImage(active);
        },
        activateImage(imageIndex) {
            this.activeImage = imageIndex;
        }
    }
});
