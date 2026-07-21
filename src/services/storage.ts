import type {GalleryImage,InventoryItem,Sale} from '../types';
const get=<T,>(k:string,f:T):T=>{try{return JSON.parse(localStorage.getItem(k)||'') as T}catch{return f}};
export const db={
 images:()=>get<GalleryImage[]>('pml_images',[{id:'poster',src:'/assets/poster-original.png',alt:'Publicidad principal'}]),
 saveImages:(v:GalleryImage[])=>localStorage.setItem('pml_images',JSON.stringify(v)),
 inventory:()=>get<InventoryItem[]>('pml_inventory',[
  {id:'1',name:'Pepino',unit:'unidad',stock:35,minStock:10,cost:2.5},{id:'2',name:'Mango',unit:'unidad',stock:28,minStock:10,cost:4},{id:'3',name:'Takis',unit:'bolsa',stock:18,minStock:6,cost:8},{id:'4',name:'Taqueritos',unit:'bolsa',stock:20,minStock:6,cost:7},{id:'5',name:'Salsa Valentina',unit:'botella',stock:8,minStock:3,cost:15},{id:'6',name:'Jugo B8',unit:'botella',stock:10,minStock:3,cost:12},{id:'7',name:'Gomitas',unit:'bolsa',stock:15,minStock:5,cost:10},{id:'8',name:'Pepita',unit:'libra',stock:6,minStock:2,cost:22},{id:'9',name:'Consomé',unit:'frasco',stock:9,minStock:3,cost:14},{id:'10',name:'Tajín',unit:'frasco',stock:11,minStock:3,cost:18},{id:'11',name:'Chamoy',unit:'botella',stock:10,minStock:3,cost:16},{id:'12',name:'Limón',unit:'unidad',stock:60,minStock:20,cost:0.75}
 ]),
 saveInventory:(v:InventoryItem[])=>localStorage.setItem('pml_inventory',JSON.stringify(v)),
 sales:()=>get<Sale[]>('pml_sales',[]),
 saveSales:(v:Sale[])=>localStorage.setItem('pml_sales',JSON.stringify(v)),
};
