const textbox = document.getElementById("textbox");
const button = document.getElementById("button");
const chuyen_sang_do_C = document.getElementById("Chuyen_tu_do_C_sang_do_F");
const chuyen_sang_do_F = document.getElementById("Chuyen_tu_do_F_sang_do_C");
const ket_qua = document.getElementById("ket_qua");
let temp;

function chuyendoi() {
  if (chuyen_sang_do_C.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    ket_qua.textContent = temp.toFixed(1) + "°F";
  } else if (chuyen_sang_do_F.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 32) * 5) / 9;
    ket_qua.textContent = temp.toFixed(1) + "°C";
  } else {
    ket_qua.textContent = "Vui lòng chọn đơn vị để chuyển đổi";
  }
}
