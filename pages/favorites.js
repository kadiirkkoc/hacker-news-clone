import Story from "../components/Story";
import store from "../store";
import view from "../utils/view";
import checkFavorite from "../utils/checkFavorite";

export default function Favorites(){
    const { favorites } = store.getState();  
    const hasFavorites = favorites.length > 0

    view.innerHTML = `<div>
     ${hasFavorites ? favorites.map(favoriteStory => 
        Story({...favoriteStory,
             isFavorite : checkFavorite(favorites,favoriteStory)
            })).join("")
        : "no favorites"}

    </div>`

    document.querySelectorAll(".favorite").forEach(favoriteButton =>{
        favoriteButton.addEventListener("click", function(){
            const story = JSON.parse(this.dataset.story)

            const isFavorited = checkFavorite(favorites,story)
            
            store.dispatch({type : isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: {favorite : story } } )

            if(isFavorited){
                store.dispatch({type : "REMOVE_FAVORITE" , payload : { favorite : story } })
            }
            else{
                store.dispatch({type : "ADD_FAVORITE" , payload : { favorite : story } })
            }
            Favorites()

        })
    })
}
