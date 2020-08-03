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


