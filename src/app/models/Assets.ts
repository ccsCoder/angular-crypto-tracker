export class Asset {

    symbol:string;
    name:string;
    isCrypto:boolean;
    icon:string;

    static fromJsonArray(jsonArray:any[]):Asset[] {
        return jsonArray.map((jsonItem)=> {return new Asset(jsonItem);});
    }

    constructor(json) {
        this.symbol = json.asset_id;
        this.name = json.name;
        this.isCrypto = json.type_is_crypto;
        this.icon = `../assets/${this.symbol}.jpeg`;
    }
    
}