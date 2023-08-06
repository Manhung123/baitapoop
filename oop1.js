
// 1. Hoàn thành bài tập: Viết một lớp các đối tượng hình chữ nhật lấy tên là Rectangle,
// mỗi hình chữ nhật đều có những đặc tính sau:
//     + Có thông số chiều dài (int).
// + Có thông số chiều rộng (int).
// + Có tính năng tính diện tích.
// + Có tính năng tính chu vi.
// => Tạo một đối tượng HCN
// + Hiển thị thông tin hình chữ nhât lên web
// + Thay đổi chiều dài và chiều rộng của hình chữ nhật
// +  In ra màn hình diện tích và chu vi của hình chữ nhật đó.
    class rectangle {
        heigth;
        width;
        s;
        p;
        constructor(heigthInput, widthInput) {
            this.heigth = heigthInput;
            this.width = widthInput;
        }
        getHeigth() {
            return this.heigth
        }
        getWidth() {
            return this.width
        }
        getInfo() {

            return this.heigth + '-' + this.width
        }
    }
    function main () {

    let produts = new rectangle(5, 4)
        console.log(produts.getInfo())
    }
    main()


