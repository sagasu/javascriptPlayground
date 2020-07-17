"use strict";

var yourself = {
    mem: [],
    fibonacci : function(n){
        this.mem = new Array(n);
        return this.fibonacciMem(n);
    },
    fibonacciMem: function(n) {
        if(this.mem[n] != null) return this.mem[n];
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            this.mem[n-1] = this.fibonacciMem(n - 1);
            this.mem[n-2] = this.fibonacciMem(n - 2);
            return  this.mem[n-1]+this.mem[n-2];
        }
    }
};

console.log(yourself.fibonacci(7));