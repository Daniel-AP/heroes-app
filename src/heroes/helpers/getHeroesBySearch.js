import { heroes } from "../../assets/heroes_info";

export const getHeroesBySearch = ( search ) => {

    if(!search) return [];
    
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

}
