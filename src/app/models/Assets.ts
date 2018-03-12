export class Asset {

    symbol:string;
    name:string;
    isCrypto:boolean;
    icon:string;

    static fromJson(json:any):Asset {
        return new Asset(json);
    }



    constructor(json) {
        this.symbol = json.asset_id;
        this.name = json.name;
        this.isCrypto = json.type_is_crypto;
        this.icon = `../assets/${this.symbol}.jpeg`;
    }
}