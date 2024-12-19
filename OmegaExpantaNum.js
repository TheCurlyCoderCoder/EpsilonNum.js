class Big {
    constructor(value) {
        if (value.toString().charAt(0) == "b") {
            this.bv = value.substring(1,value.length);
        } else {
            if (value < 20) {
                this.bv = value/10;
            } else {if (value < 100) {
                    this.bv = (value-20)/80 + 2;
            } else {if (value < 10000000000) {
                    this.bv = (Math.log10(value) - 2)/8 + 3
            } else {
                this.bv = (Math.log10(Math.log10(value)) - 1)/72 + 4
            }}}
        }
    }

    format() {
        if (this.bv < 2) {
            return (this.bv * 10).toString();
        }
        if (this.bv < 3) {
            return ((this.bv - 2)*80 + 20).toString();
        }
        if (this.bv < 3.625) {
            return Math.pow(10,(this.bv - 3)*8 + 2).toString();
        }
        if (this.bv < 4) {
            let exp = (this.bv - 3)*8 + 2;
            return Math.floor(Math.pow(10,exp - Math.floor(exp))*100)/100 + "*10^" + Math.floor(exp);
        }
        if (this.bv < 4.125) {
            let exp = Math.pow(10,(this.bv - 4) * 72 + 1);
            return Math.floor(Math.pow(10,exp - Math.floor(exp))*100)/100 + "*10^" + Math.floor(exp);
        }
        if (this.bv < 4.25) {
            let exp = Math.pow(10,(this.bv - 4.125) * 72 + 1);
            return "10^" + Math.floor(Math.pow(10,exp - Math.floor(exp))*100)/100 + "*10^" + Math.floor(exp);
        }
        if (this.bv < 5) {
            let exp = (this.bv - 4) * 8 + 2;
            return "10^^" + Math.floor(exp) + ">" + Math.floor(Math.pow(10,exp - Math.floor(exp))*100)/100;
        }
        if (this.bv < 6) {
            let exp = (this.bv - 5) * 8 + 2;
            return "10^^^" + Math.floor(exp) + ">" + Math.floor(Math.pow(10,exp - Math.floor(exp))*100)/100;
        }
        if (this.bv < 7) {
            let exp = (this.bv - 6) * 8 + 2;
            return "10^^^^" + Math.floor(exp) + ">" + Math.floor(Math.pow(10,exp - Math.floor(exp))*100)/100;
        }
        if (this.bv < 10) {
            let exp = (this.bv - Math.floor(this.bv)) * 8 + 2;
            return "10{" + Math.floor(this.bv - 2) + "}" + Math.floor(exp)
        }
    }
}
let T = new Big("b7.63")
console.log(T.format())