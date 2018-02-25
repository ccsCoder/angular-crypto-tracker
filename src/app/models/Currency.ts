export class Currency {

  private id: string;
  private name: string;
  private symbol: string;
  private rank: number;
  private price: number;
  private change: number[];
  private updatedTimestamp: number;

  constructor() {

  }

//   constructor(id: string, name: string, symbol: string, rank: number, price: number, change: number[], updatedOn: number ) {
//     this.id = id;
//     this.name = name;
//     this.symbol = symbol;
//     this.rank = rank;
//     this.price = price;
//     this.change = change;
//     this.updatedTimestamp = updatedOn;
//   }



  	public get Id(): string {
		return this.id;
	}

	public get Name(): string {
		return this.name;
	}

	public get Symbol(): string {
		return this.symbol;
	}

	public get Rank(): number {
		return this.rank;
	}

	public get Price(): number {
		return this.price;
	}

	public get Change(): number[] {
		return this.change;
	}

	public get UpdatedTimestamp(): number {
		return this.updatedTimestamp;
	}

	public fromJson(json: any): Currency {
		this.id = json.id;
		this.name = json.name;
		this.symbol = json.symbol;
		this.rank = json.rank;
		this.price = json.price_usd;
		this.change = [];
		this.change.push(json.percent_change_1h);
		this.change.push(json.percent_change_24h);
		this.change.push(json.percent_change_7d);
		this.updatedTimestamp = json.last_updated;

		return this;
	}

}
