'use strict';

class Carousel{
    constructor(slidesPaths) {
        if(slidesPaths.length){
            this._slides = slidesPaths;
            this._currentIndex = 0;
            this._length = slidesPaths.length;
        } else{
            throw new Error();
        }
    }
    get length(){
        return this._length;
    }
    get currentIndex(){
        return this._currentIndex;
    }
    get slides(){
        return this._slides;
    }
    set currentIndex(value){
        if(isNaN(value)){
            throw new TypeError();
        }
        if(value<0 || value>this._slides.length-1){
            throw new RangeError();
        }
        this._currentIndex = value;
    }

    goNext(){
        this.currentIndex = Carousel.getNextIndex(this.currentIndex, this._slides.length);
    }
    goPrev(){
        this.currentIndex = Carousel.getPrevIndex(this.currentIndex, this._slides.length);
    }

    static getNextIndex(index,length){
        if(index<0 || index>length-1){
            throw new RangeError();
        }
        return (index+1)%length;
    }
    static getPrevIndex(index,length){
        if(index<0 || index>length-1){
            throw new RangeError();
        }
        return (index-1+length)%length;
    }
}

export default Carousel;