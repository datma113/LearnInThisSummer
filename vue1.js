let app = new Vue({
    el: '#app',
    data: {
        state: 'show',
        show: true
    },
    methods:{
        change: function(){
            console.log(this.state);
            if ( this.state === 'show' ){
                this.state = 'hide';
                this.show = false;
            } else {
                this.show = true;
                this.state = 'show'
            }
        }
    }
});

let app1 = new Vue({
    el: '#app1',
    data: {
        title: 'List Rendering',
        list: [
            'apple', 'banana', 'orange'
        ]       
    },
    methods: {
        addItem: function(something){
            this.list.push(something);
        }
    }
});

let app2 = new Vue({
    el: '#app2',
    data:{
        count: 0
    },
    methods: {
        testPropagation: function(mess, event){
            console.log(`${mess}`);
            console.log(event.target);
        }
    }
});