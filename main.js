//------------------------BÀI 1-------------------------
console.log("BÀI 1: XUẤT RA 3 SỐ THEO THỨ TỰ TĂNG DẦN");

//cho 3 số nguyên
/**PHÂN TÍCH:
    - nếu a = b = c : xuất ra a - b - c.
    - nếu (a > b và a > c) và (b > c) hoặc (a = b) mà (b > c) hoặc (c = b) mà (b < a): xuất ra c - b - a.
    - nếu (a > b và a > c) và (c > b) : xuất ra b - c - a.
    - nếu (b > a và b > c) và (a > c) hoặc (b = c) mà (b > a) hoặc (a = c) mà (c < b): xuất ra c - a - b.
    - nếu (b > a và b > c) và (a < c) : xuất ra a - c - b.
    - nếu (c > b và c > a) và (b > a) hoặc (a = c) mà (c > b) hoặc (a = b) mà (b < c): xuất ra a - b - c.
    - nếu (c > b và c > a) và (b < a) : xuất ra b - a - c.
 */
//gán sự kiện cho nút button sắp xếp:
//dùng hàm else if để xử lý và xuất kết quả:
document.getElementById("btnSapXepSo").onclick = function()
{
    var a = document.getElementById("txtSoThuNhat").value * 1;
    var b = document.getElementById("txtSoThuHai").value * 1;
    var c = document.getElementById("txtSoThuBa").value * 1;

    if((a == b) && (b == c))
    {
        document.getElementById("divThongBaoSapXep").innerHTML = "Thứ tự là: "+a+" / "+b+" / "+c;
        console.log(a, b, c);
    }
    else if(((a > b && a > c) && (b > c))  || ((a == b) && (b > c)) || ((c == b) && (b < a)) )
    {
        document.getElementById("divThongBaoSapXep").innerHTML = "Thứ tự là: "+c+" / "+b+" / "+a;
        console.log(c, b, a);
    }
    else if(((a > b && a > c) && (b < c)) || ((b == c) && (a > c)) )
    {
        document.getElementById("divThongBaoSapXep").innerHTML = "Thứ tự là: "+b+" / "+c+" / "+a;
        console.log(b, c, a);
    }
    else if(((b > a && b > c) && (a > c)) || ((a == b) && (b > c)) )
    {
        document.getElementById("divThongBaoSapXep").innerHTML = "Thứ tự là: "+c+" / "+a+" / "+b;
        console.log(c, a, b);
    }
    else if(((b > a && b > c) && (a < c)) || ((b == c) && (b > a)) || ((a == c) && (c < b)))
    {
        document.getElementById("divThongBaoSapXep").innerHTML = "Thứ tự là: "+a+" / "+c+" / "+b;
        console.log(a, c, b);
    }
    else if(((c > a && c > b) && (a > b)) || ((a == c) && (c > b))  || ((a == b) && (b < c)) )
    {
        document.getElementById("divThongBaoSapXep").innerHTML = "Thứ tự là: "+b+" / "+a+" / "+c;
        console.log(b, a, c);
    }
    else if(((c > a && c > b) && (a < b)) || ((b == c) && (b > a)) )
    {
        document.getElementById("divThongBaoSapXep").innerHTML = "Thứ tự là: "+a+" / "+b+" / "+c;
        console.log(a, b, c);
    }
}




console.log("--------------------------------------------");
//------------------------BÀI 2-------------------------
console.log("BÀI 2: CHÀO HỎI");

/**
    PHÂN TÍCH: 
    - làm danh sách thành viên bằng select + gắn value cho mỗi thành viên(option)
    - dùng hàm if else if để phân loại value nhận dc và so sánh === với giá trị
    - xuất kết quả trong hàm if.
*/
document.getElementById("btnChaoHoi").onclick = function()
{
    var chonThanhVien = document.getElementById("slThanhVien").value;

    if (chonThanhVien === "Bố!")
    {
        console.log("Chào bố!");
        document.getElementById("divThongBaoChaoHoi").innerHTML = "Chào bố!";
    } 
    else if (chonThanhVien === "Mẹ!")
    {
        console.log("Chào mẹ!");
        document.getElementById("divThongBaoChaoHoi").innerHTML = "Chào mẹ!";
    }
    else if (chonThanhVien === "Anh trai!")
    {
        console.log("Chào anh!");
        document.getElementById("divThongBaoChaoHoi").innerHTML = "Chào anh trai!";
    }
    else if (chonThanhVien === "Em gái!")
    {
        console.log("Chào em!");
        document.getElementById("divThongBaoChaoHoi").innerHTML = "Chào em gái!";
    }
}

console.log("-------------------------------------------------");
//------------------------BÀI 3-------------------------
console.log("BÀI 3: PHÂN CHIA SỐ CHẴN SỐ LẺ");


document.getElementById("btnPhanChia").onclick = function()
{
    //lấy value 3 số
    var so1 = document.getElementById("txtNumber1").value * 1;
    var so2 = document.getElementById("txtNumber2").value * 1;
    var so3 = document.getElementById("txtNumber3").value * 1;

    /**PHÂN TÍCH:
        - Nếu 1 số chia phần trăm cho 2 = 0 thì là số chẵn
        - Nếu 1 số chia phần trăm cho !(2 = 0) thì là số lẻ
     */
    //trường hợp cả 3 số chia phần trăm cho 2 đều = 0 thì có 3 số chẵn:
    if((so1 % 2)==0 && (so2 % 2)==0 && (so3 % 2)==0)
    {
        document.getElementById("divThongBaoPhanChia").innerHTML ="Có 3 số chẵn";
    } 
    //trường hợp có 2 số chia hết và 1 số bị phủ định(lẻ) thì có 2 số chẵn 1 số lẻ:
    //dùng || 
     else if(((so1 % 2)==0 && (so2 % 2) == 0 && !((so3 % 2)==0)) || ((so2 % 2)==0 && (so3 % 2) == 0 && !((so1 % 2)==0)) || ((so3 % 2)==0 && (so1 % 2) == 0 && !((so2 % 2)==0)))
    {
        document.getElementById("divThongBaoPhanChia").innerHTML ="Có 2 số chẵn và 1 số lẻ";
    } 
    //trường hợp có 1 số chia hết và 2 số bị phủ định(lẻ) thì có 1 số chẵn 2 số lẻ:
    else if((so1 % 2)==0 && !((so2 % 2) == 0) && !((so3 % 2) == 0) || ((so2 % 2)==0 && !((so1 % 2) == 0) && !((so3 % 2) == 0)) || ((so3 % 2)==0 && !((so1 % 2) == 0) && !((so2 % 2) == 0)))
    {
        document.getElementById("divThongBaoPhanChia").innerHTML ="Có 1 số chẵn và 2 số lẻ";
    } 
    //trường hợp cả 3 số chia phần trăm cho 2 đều = 0 rồi dùng phủ định thì có 3 số lẻ:
    else if (!((so1 % 2)==0) && !((so2 % 2)==0) && !((so3 % 2)==0))
    {
        document.getElementById("divThongBaoPhanChia").innerHTML ="Có 3 số lẻ";
    }
}

console.log("-------------------------------------------------");
//------------------------BÀI 4-------------------------
console.log("BÀI 4: TAM GIÁC");

document.getElementById("btnTamGiac").onclick = function()
{
    //lấy value của các cạnh tam giác
    var canh_1 = document.getElementById("txtCanh1").value * 1;
    var canh_2 = document.getElementById("txtCanh2").value * 1;
    var canh_3 = document.getElementById("txtCanh3").value * 1;

    if((canh_1 == canh_2) && (canh_2 == canh_3))
    {
        document.getElementById("divThongBaoTamGiac").innerHTML = "Đây là tam giác đều!";
    }
    else if( ((canh_1==canh_2)&& !(canh_1==canh_3)) || ((canh_1==canh_3) && !(canh_1==canh__2))  || ((canh_2==canh_3) && !(canh_2==canh_3)) )
    {
        document.getElementById("divThongBaoTamGiac").innerHTML = "Đây là tam giác cân!";
    }
    else if(  ( (canh_1*2) == ((canh_2*2) + (canh_3*2)) ) || ( (canh_2*2) == ((canh_1*2) + (canh_3*2)) )  ||  ( (canh_3*2) == ((canh_1*2) + (canh_2*2)) )   )
    {
        document.getElementById("divThongBaoTamGiac").innerHTML = "Đây là tam giác vuông!";
        console.log("aaa");
    }
}