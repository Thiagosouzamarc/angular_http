import { Department } from './department';

export interface Product {
    name: string;
    departments: Department[] | string[];
    _id?: string;
    stock: number;
    price: number; 
}
