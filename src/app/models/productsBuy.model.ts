//crie uma interface para o produto que será comprado
// Path: src/app/models/productsBuy.model.ts
export interface ProductBuy {
    id: number;
    title: string;
    price: number;
    photo: string;
    qnt: number;
}
