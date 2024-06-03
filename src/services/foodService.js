import {sample_foods} from '../data';

export const getAll = async () => sample_foods;

export const searh = async searhTerm => 
    sample_foods.filter(item =>
        item.name.toLowerCase().includes(searhTerm.toLowerCase())
    )