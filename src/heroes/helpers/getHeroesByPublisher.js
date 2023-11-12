import { heroes } from "../../assets/heroes_info"

export const getHeroesByPublisher = ( publisher ) => {
    
    if(!publisher in ["Marvel Comics","DC Comics"]) return;
    
    return heroes.filter(hero => hero.publisher === publisher)

}
