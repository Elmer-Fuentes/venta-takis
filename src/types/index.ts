export type Product={id:string;name:string;description:string;price:number;emoji:string;featured?:boolean};
export type GalleryImage={id:string;src:string;alt:string};
export type InventoryItem={id:string;name:string;unit:string;stock:number;minStock:number;cost:number};
export type Sale={id:string;date:string;product:string;quantity:number;unitPrice:number;unitCost:number};
