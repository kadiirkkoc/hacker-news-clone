import Item from "./pages/item.js"
import Stories from "./pages/stories.js"


// var root = null;
// var useHash = true;  //Defaults to: false
// var hash = '#!'; // Defaults to: '#'
// var router = new Navigo(root, useHash, hash);

const router = new Navigo(null,true,"#")

export default class RouterHandler{
    constructor(path){
        this.createRoutes(path)
    }

    createRoutes(){
        const routes = [
            {path: "/" , page : Stories},
            {path: "/new" , page : Stories},
            {path: "/ask" , page : Stories},
            {path: "/show" , page : Stories},
            {path: "/item" , page : Item}
        ];

        routes.forEach(({path,page}) => {
            router.on(path, () => {
                page(path)
            }).resolve();
        })
    }
}