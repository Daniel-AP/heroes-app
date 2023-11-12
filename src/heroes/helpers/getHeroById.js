import { heroes } from "../../assets/heroes_info"

export const getHeroById = ( id ) => {
    
    return heroes.find(hero => hero.id === id);

}
