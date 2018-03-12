export class CryptoList {

    private static _list = [
     "BTC"
    ,"ETH"
    ,"XRP"
    ,"BCH"
    ,"LTC"
    ,"ADA"
    ,"NEO"
    ,"XLM"
    ,"XMR"
    ,"EOS"
    ,"MIOTA"
    ,"DASH"
    ,"XEM"
    ,"TRX"
    ,"ETC"
    ,"USDT"
    ,"VEN"
    ,"QTUM"
    ,"LSK"
    ,"XRB"
    ,"BTG"
    ,"OMG"
    ,"ZEC"
    ,"ICX"
    ,"DGD"
    ];
    constructor() {

    }

    static getCryptoList(): any {
        return CryptoList._list;
    }
}