export class UtilCls{
    static MyRoot(n){
        return Math.sqrt(n);
    }

    static MyCub(n){
        return Math.pow(n,3);
    }
    
    static MySqr(n){
        return Math.pow(n,2);
    }

    static BasePrice(n){
        return n;
    }

    static RoadTax(n){
        return n*1.2;
    }

    static ServiceTax(n){
        return n*1.18;
    }

    static CityCharge(n){
        return n*(1.1);
    }

    static TotalPrice(n){
        return UtilCls.BasePrice(n)+UtilCls.RoadTax(n)+UtilCls.ServiceTax(n)+UtilCls.CityCharge(n);
    }
}

export default UtilCls;