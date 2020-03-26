export default class ImageData {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.image = data.images[0].link
    }

    static containsImages(data){
        if(data.images){
            return data.images[0].type == 'image/jpeg';
        }
    }
}