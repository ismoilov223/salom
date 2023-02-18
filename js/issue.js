function one_i(params) {
  var weekday = prompt("Weekdayga qiymat kiriting!");
  var vaction = prompt("Vaktionga qiymat kiriting!");
  if (weekday == "true" && vaction == "true") {
    alert("true");
  } else if (weekday == "true" && vaction == "false") {
    alert(false);
  } else if (weekday == "true" || vaction == "true") {
    alert("true");
  }
}
function two_i(params) {
  var son1 = prompt("Birinchi sonni kiritng!") * 1;
  var son2 = prompt("Ikkinchi sonni kiritng!") * 1;
  var nat;
  //   var natj;
  if (son1 == son2) {
    nat = (son1 + son2) ** 2;
  } else {
    nat = son1 + son2;
  }
  alert(nat + " Natija");
}
function three_i(params) {
  var son = prompt("Sonni kiritng!") * 1;
  var nat;
  if (son > 21) {
    nat = "Natija " + (son - 21) ** 2 + " N 21 dan katta";
  } else {
    nat = "Farq " + (21 - son) + " N 21 dan kichik";
  }
  alert(nat);
}
function four_i(params) {
  var son1 = prompt("Birinchi sonni kiritng!") * 1;
  var son2 = prompt("Ikkinchi sonni kiritng!") * 1;
  var nat = son1 + son2;
  var ret;
  if (nat > 10 || son1 == 10 || son2 == 10) {
    ret = true;
  } else {
    ret = false;
  }
  alert(ret);
}
function five_i(params) {
  var string = prompt("So'z kiritng!");
  var nat;
  if (string.search("not") == -1) {
    nat = "not " + string;
  } else{
    nat = string;
  }
  alert(nat);
}
function six_i(params) {
  var son = prompt("Son kiritng!") * 1;
  var nat;
  if (son % 3 == 0 || son % 5 == 0) {
    nat = true;
  } else {
    nat = false;
  }
  alert(nat);
}
function seven_i(params) {
  var a = prompt("Temperatura kiritng!") * 1;
  var b = prompt("Temperatura kiritng!") * 1;
  var nat;
  if (a < 0 || (b < 0 && a > 100) || b > 100) {
    nat = true;
  } else {
    nat = false;
  }
  alert(nat);
}
function eight_i(params) {
  var a = prompt("Son kiritng!") * 1;
  var b = prompt("Son kiritng!") * 1;
  var nat;
  if ((a > 10 && a < 20) || (b > 10 && b < 20)) {
    nat = true;
  } else {
    nat = false;
  }
  alert(nat);
}
function nine_i(params) {
  var a = prompt("Son kiritng!") * 1;
  var b = prompt("Son kiritng!") * 1;
  var c = prompt("Son kiritng!") * 1;
  var nat;
  if ((a >= 13 && a < 19) || (b >= 13 && b < 19) || (c >= 13 && c < 19)) {
    nat = true;
  } else {
    nat = false;
  }
  alert(nat);
}
function ten_i(params) {
  var a = prompt("Son kiritng!") * 1;
  var b = prompt("Son kiritng!") * 1;
  var nat;
  if (a == b) {
    nat = false;
  } else if (a >= 13 && a < 19 && b >= 13 && b < 19) {
    nat = false;
  } else if ((a >= 13 && a < 19) || (b >= 13 && b < 19)) {
    nat = true;
  }else{
    nat = true;
  }
  alert(nat);
}
function elevn_i(params) {
  var a = prompt("Son kiritng!") * 1;
  var b = prompt("Son kiritng!") * 1;
  var nat;
  var natk = a*b;
  var nat_kv_a = a**2;
  var nat_kv_b = b**2;
  var natay = nat_kv_a - nat_kv_b;
  if (natk > natay) {
    nat = "katta"
  }else{
    nat = "kichik"
  }
  
  alert(nat);
}
