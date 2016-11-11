

var vm = new Vue({
  el: '#app',
  data: {
    result: 0,
    valueA: 0,
    strOper: 0,
    lastVal: 0,
    ans: null
  },
  methods: {
    btnClick: function(str) {
      console.log(str)
      if(this.strOper == null) {
        this.result = str;
        this.strOper = 0;
        this.ans = null;
        return;
      }

      if (this.result == 0) {
        this.result = str;
      } else {
        this.result += str;
      }
    },
    btnOper: function(str) {
      this.equal();

      this.valueA = this.result;
      this.strOper = str;
      console.log('valueA =' + ' ' + this.valueA);
      this.result = 0;
    },
    equal: function() {

      if(this.ans == null) {
        switch(this.strOper) {
          case '+':
            this.result = parseFloat(this.valueA) + parseFloat(this.result);
            this.lastVal = this.result;
            console.log(this.result)
            break;
          case '-':
            this.result = parseFloat(this.valueA) - parseFloat(this.result);
            this.lastVal = this.result;
            break;
          case '*':
            this.result = parseFloat(this.valueA) * parseFloat(this.result);
            this.lastVal = this.result;
            break;
          case '/':
            this.result = parseFloat(this.valueA) / parseFloat(this.result);
            this.lastVal = this.result;
            break;
          case '%':
            this.result = parseFloat(this.valueA) / 100;
            break;
          default:
            break;
        }
      }else if(this.ans != null) {
        switch(this.strOper) {
          case '+':
            this.result = parseFloat(this.lastVal) + parseFloat(this.result);
            this.lastVal = this.result;
            console.log(this.result)
            break;
          case '-':
            this.result = parseFloat(this.lastVal) - parseFloat(this.result);
            this.lastVal = this.result;
            break;
          case '*':
            this.result = parseFloat(this.lastVal) * parseFloat(this.result);
            this.lastVal = this.result;
            break;
          case '/':
            this.result = parseFloat(this.lastVal) / parseFloat(this.result);
            this.lastVal = this.result;
            break;
          case '%':
            this.result = parseFloat(this.lastVal) / 100;
            break;
          default:
            break;
        }
      }
      console.log(this.ans);
      this.strOper = null;
    },
    rest: function() {
      this.result = 0;
      this.valueA = 0;
      this.ans = null;
      this.lastVal = 0;
    },
    del: function() {
      this.result;
      this.result = this.result.slice(0,(this.result.length - 1));
      if(this.result.length == 0) {
        this.result = 0;
      }
      console.log(this.result, this.result.length)
    },
    last: function(str) {
      this.result = str;
      this.ans = 1;
      console.log(this.lastVal)
    }
  }
})
