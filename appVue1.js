let app = new Vue({
    el: '#app',
    data: {
        products: [       
            {
                quantityInStock: 2,
                originPrice: 60000,
                url: './img/AoThunDo.jpg',
                altColor: 'Áo Đỏ',
                textColor: 'Màu đỏ'
            },
            {
                quantityInStock: 8,
                originPrice: 40000,
                url: './img/AoThunCam.jpg',
                altColor: 'Áo Cam',
                textColor: 'Màu cam'
            },
            {
                quantityInStock: 4,
                originPrice: 80000,
                url: './img/AoThunDen.jpg',
                altColor: 'Áo Đen',
               textColor: 'Màu đen'
            }
        ],
        numberInCart: 0,
        discount: 0.3,
        tradeMark: 'no brand',
        index: 0,
        description: [
            '#aothunnam chất liệu thun cotton 4 chiều dày min, mềm mại co giãn tốt , thoáng mát',
            'Sản xuất: Việt Nam',
            'Thiết kế thời trang #aothunhanquoc phù hợp xu hướng hiện nay',
            'Kiểu dáng #aothuncotron đa phong cách #aonamdep',
            '#aothunin được thiết kế vể đẹp trẻ trung năng động nhưng không kém phần duyên dáng.',
            ' #aothunbodynam được thiết kế đẹp, chuẩn form, đường may sắc xảo, vải cotton dày, mịn, thấm hút mồ hôi tạo sự thoải mái khi mặc!',
            'Dễ dàng phối trang phục , thích hợp đi chơi đi làm đi dạo phố'
        ]
       
    },
    methods: {
        getIndex: function(index){
           this.index = index;
        },
        checkSelected: function(index){
            return this.index === index;
        },
          addToCart: function() {
            this.numberInCart++;
            window.alert("Thêm sản phẩm vào giỏ thành công!");
            this.getItem.quantityInStock--;
        }
    },
    computed: {
        getFinalPrice: function(){
            let obj = this.products[this.index];
            return obj.originPrice - obj.originPrice * this.discount;
        },
        getItem: function() {
            return this.products[this.index];
        },
      
        checkItemInProducts: function() {
            if (this.getItem.quantityInStock === 0)
                return true;
        }
    }
});