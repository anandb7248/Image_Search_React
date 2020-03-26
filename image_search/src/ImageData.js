export default class ImageData {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.image = data.images[0].link
    }
}