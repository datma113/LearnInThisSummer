//Vue init
let msg = new Vue({
    el: "#demo-vue",
    data: {
        msg: "hello world!",
        owner: "Dat Ma XM"
    }
});

//v-once: will not change data anyway

//v-html: render a text-data to html
let demo1 = new Vue({
    el: "#demo-vue-1",
    data:{
        rawHtml: "<span style= \"color:red\">This should be red</span>   "
    }
});

//v-bind : change static attribute to dynamic attribute
//v-bind : not effect with true/false attribute
let demo2 = new Vue({
    el: "#demo-vue-2",
    data:{
        link: "https://www.w3schools.com/",
        isWhat: null,
        name: "DatMaXM"
    }
});

let demo3 = new Vue({
    el: "#demo-vue-3",
    data:{
        str: "hello vue",
        number: 1
    },
    computed:{
        reverseStr: function() {
           console.log(`computed: ${this.str.split("").reverse().join("")}`) ;
            return this.str.split("").reverse().join("");
        },
        involved: function() {
            console.log(`computed involved: ${this.number} `);
            return this.number;
        }
    }, 
    methods: {
        reverseMethods: function() {
            console.log(`methods${this.number} : ${this.str.split("").reverse().join("")}`);              
            return `${this.number}  ${this.str.split("").reverse().join("")}`;
        },
        testMethods: function() {
            console.log(` this is testing`);
        },
        increaseNumber: function() {
            return this.number++;
        }
    }
});


let demo4 = new Vue({
    el: '#demo-vue-4',
    data:{
        isActive: false,
        hasError: true     
    },
    methods: {
        changeText: function() {
            return this.hasError ? this.hasError = false : this.hasError = true;
        },
        changeText2: function() {
            return {
                'text-danger' : this.hasError
            }
        }
    }
});