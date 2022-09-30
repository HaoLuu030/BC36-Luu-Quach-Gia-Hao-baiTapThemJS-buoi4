/* Bài 1.1: Tìm ngày tháng năm của ngày tiếp theo

Input: ngày, tháng, năm ngẫu nhiên do người dùng nhập


Process: Lấy input: var day = 12; var month = 9; var year = 2022;

Nếu là 1 ngày bình thường (ngày không nằm trong các trường hợp bên dưới) thì ngày tiếp theo sẽ tăng lên 1 ngày

Các trường hợp đặc biệt:

- Ngày nhập là ngày 31 của các tháng 1,3,5,7,8,10,12 thì ngày tiếp theo sẽ là ngày đầu tiên của tháng tiếp theo. Riêng đối với tháng 12 thì ngày tiếp theo sẽ là ngày 1 tháng 1 của năm tiếp theo.

- Ngày nhập là ngày 30 của các tháng 4,6,9,11 thì ngày tiếp theo sẽ là ngày đầu tiên của tháng tiếp theo

- Đối với tháng 2 và ngày nhập là 28, trong trường hợp năm nhuận (năm chia hết cho 4) thì ngày tiếp theo sẽ là 29. Ngược lại, ngày tiếp theo sẽ là ngày 1 tháng 3.






Output: ngày tháng năm của ngày tiếp theo


 */

var date1 = 30;
var month1 = 4;
var year1 = 2000;

switch (month1) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    if (date1 < 31) {
      date1++;
    } else {
      date1 = 1;
      if (month1 === 12) {
        month1 = 1;
        year1++;
      } else {
        month1++;
      }
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if (date1 < 30) {
      date1++;
    } else {
      date1 = 1;
      month1++;
    }
    break;
  case 2:
    if (date1 < 28) {
      date1++;
    } else {
      if (year1 % 4 === 0) {
        date1++;
      } else {
        month1++;
        date1 = 1;
      }
    }
    break;
}

console.log(
  "Kết quả bài 1.1: Ngày mai là " + date1 + "/" + month1 + "/" + year1
);

/*************************************************/

/* Bài 1.2: Tìm ngày tháng năm của ngày hôm qua

Input: ngày, tháng, năm ngẫu nhiên do người dùng nhập


Process: Lấy input: var day = 12; var month = 9; var year = 2022;

Nếu là 1 ngày bình thường (ngày không nằm trong các trường hợp bên dưới) thì ngày hôm qua sẽ giảm xuống 1 ngày

Các trường hợp đặc biệt:

- Ngày nhập là ngày 1 của các tháng 2,5,7,10,12 thì ngày hôm qua sẽ là ngày 30 của tháng trước.

- Ngày nhập là ngày 1 của các tháng 1,4,6,8,9,11 thì ngày hôm qua sẽ là ngày 31 của tháng trước. Riêng đối với tháng 1 thì ngày hôm qua sẽ là ngày 31 tháng 12 của năm trước.

- Đối với tháng 3 và ngày nhập là 1, trong trường hợp năm nhuận (năm chia hết cho 4) thì ngày hôm qua sẽ là 29 tháng 2. Ngược lại, ngày hôm qua sẽ là ngày 28 tháng 2.






Output: ngày tháng năm của ngày hôm qua


 */

var date2 = 1;
var month2 = 1;
var year2 = 1999;

switch (month2) {
  case 2:
  case 5:
  case 7:
  case 10:
  case 12:
    if (date2 > 1) {
      date2--;
    } else {
      month2--;
      date2 = 30;
    }
    break;
  case 1:
  case 4:
  case 6:
  case 8:
  case 9:
  case 11:
    if (date2 > 1) {
      date2--;
    } else {
      date2 = 31;
      if (month2 === 1) {
        month2 = 12;
      } else {
        month2--;
      }
    }
    break;
  case 3:
    if (date2 === 1) {
      month2--;
      if (year2 % 4 === 0) {
        date2 = 29;
      } else {
        date2 = 28;
      }
    } else {
      date2--;
    }
}

console.log(
  "Kết quả bài 1.2: Ngày hôm qua là " + date2 + "/" + month2 + "/" + year2
);

/*************************************************/

/**
 * Bài 2: Xác định số ngày trong tháng
 * 
 * 
 * Input: tháng và năm ngẫu nhiên do người dùng nhập
 * 
 * Process:
 * Lấy input: var numOfDate = ''; var month = 12; var year = 1999;
 * 
 * Xét các trường hợp:
 * 
 * Tháng 1,3,5,7,8,10,12: tháng đấy có 31 ngày;
 * Tháng 4,6,9,11: tháng đấy có 30 ngày
 * Tháng 2: Nếu năm nhập chia hết cho 4 (năm nhuận)
 thì tháng đấy có 29 ngày còn không thì sẽ là 28 ngày
 * 
 * Output: Số ngày trong tháng đó
 * 
 * 
 * 
 */

var month3 = 2;
var year3 = 2001;
var numOfDate = "";

switch (month3) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    numOfDate = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    numOfDate = 30;
    break;
  case 2:
    if (year3 % 4 === 0) {
      numOfDate = 29;
    } else {
      numOfDate = 28;
    }
    break;
}

console.log("Kết quả bài 2: tháng này có " + numOfDate + " ngày.");

/**
 * Bài 3: In cách đọc số
 *
 *
 * Input: Số nguyên có 3 chữ số
 *
 *
 * Process:
 *
 * Lấy input:
 *
 * Đặt 1 biến để chứa số nhập var num = 123;
 *Tách số:
 * Đặt 3 biến làm 3 vị trí hàng chục, hàng trăm, hàng đơn vị (var hundreds = ''; var tens = ''; var ones = '')
 *
 * Lấy số nhập chia cho 100 làm tròn xuống ta được
 * kết quả số hàng trăm
 *
 * Lấy phần dư của phép chia trên chia cho 10 làm tròn xuống ta được số hàng chục
 *
 * Lấy phần dư của phép chia trên ta được hàng đơn vị
 *
 * Đặt tên:
 * Xét các trường hợp của từng vị trí (hàng chục, hàng trăm, hàng đơn vị) ứng với các số từ 1 - 9 ta có cách đọc tương ứng (hàng trăm: một trăm - chín trăm, hàng đơn vị: một - chín)
 *
 * Xét đến số hàng chục:
 * + Nếu số hàng chục bằng 0 chữ đứng sau chữ số này là chữ 'lẻ' (ví dụ 403: bốn trăm lẻ ba)
 *
 * + Nếu số hàng chục bằng 1 => chữ đó là 'mười' (ví vụ 410: bốn trăm mười, 415: bốn trăm mười lăm)
 *
 * + Nếu số hàng chục là những số khác => chữ đó là 'mươi' (ví dụ 420 (bốn trăm hai mươi))
 *
 *
 *Output: Cách đọc của chữ số đó
 *
 *
 *
 */

var num = 695;
// Tách số
var hundreds = Math.floor(num / 100);
var tens = Math.floor((num % 100) / 10);
var ones = (num % 100) % 10;
// Đặt tên biến cho từng vị trí
var hundredText = "";
var tensText = "";
var onesText = "";

switch (hundreds) {
  case 1:
    hundredText = "Một trăm";
    break;
  case 2:
    hundredText = "Hai trăm";
    break;
  case 3:
    hundredText = "Ba trăm";
    break;
  case 4:
    hundredText = "Bốn trăm";
    break;
  case 5:
    hundredText = "Năm trăm";
  case 6:
    hundredText = "Sáu trăm";
    break;
  case 7:
    hundredText = "Bảy trăm";
    break;
  case 8:
    hundredText = "Tám trăm";
    break;
  case 9:
    hundredText = "Chín trăm";
    break;
}

switch (ones) {
  case 1:
    onesText = "một";
    break;
  case 2:
    onesText = "hai";
    break;
  case 3:
    onesText = "ba";
    break;
  case 4:
    onesText = "bốn";
    break;
  case 5:
    onesText = "lăm";
    break;
  case 6:
    onesText = "sáu";
    break;
  case 7:
    onesText = "bảy";
    break;
  case 8:
    onesText = "tám";
    break;
  case 9:
    onesText = "chín";
    break;
}

switch (tens) {
  case 0:
    tensText = "lẻ";
    break;
  case 1:
    tensText = "mười";
    break;
  case 2:
    tensText = "hai mươi";
    break;
  case 3:
    tensText = "ba mươi";
    break;
  case 4:
    tensText = "bốn mươi";
    break;
  case 5:
    tensText = "năm mươi";
    break;
  case 6:
    tensText = "sáu mươi";
    break;
  case 7:
    tensText = "bảy mươi";
    break;
  case 8:
    tensText = "tám mươi";
    break;
  case 9:
    tensText = "chín mươi";
    break;
}

console.log(
  "Kết quả bài 3: " +
    hundredText +
    " " +
    tensText +
    " " +
    onesText +
    " (" +
    num +
    ")"
);

/**
 *Bài 4: In tên sinh viên xa trường nhất

 Input: Tọa độ trường học (x, y), tọa độ nhà của 3 sinh viên ((x1, y1), (x2, y2), (x3, y3)), tên 3 sinh viên (Tí, Mắm, Tèo)


 Process:

 Lấy input: var x = 7; var y = 8; var x1 = 5; var y1 = 6; var x2 = 9; var y2 = 10; var x3 = 12; var y3 = 15;

 Tính khoảng cách quãng đường từ nhà đến trường của 3 sinh viên dựa theo tọa độ thông qua công thức

        √(( x2^2 - x1^2 )+(y2^2 - y1^2))

So sánh chiều dài quãng đường rồi in ra tên sinh viên tương ứng


 Output: Tên sinh viên xa trường nhất
 */

//  Tọa độ trường học
var student = ""; //Tên sinh viên xa trường nhất
var x = 7;
var y = 8;
// Tọa độ nhà Tí
var student1 = "Tí";
var x1 = 5;
var y1 = 6;
// Tọa độ nhà Mắm
var student2 = "Mắm";
var x2 = 9;
var y2 = 10;
// Tọa độ nhà Tèo
var student3 = "Tèo";
var x3 = 8;
var y3 = 7;
// chiều dài quãng đường của 3 bạn sinh viên
var d1 = Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2);
var d2 = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2);
var d3 = Math.sqrt((x3 - x) ** 2 + (y3 - y) ** 2);

if (d1 > d2) {
  student = student1;
  if (d1 < d3) {
    student = student3;
  }
} else {
  student = student2;
  if (d2 < d3) {
    student = student3;
  }
}

console.log("Kết quả bài 4: Sinh viên xa nhà nhất là em " + student);
