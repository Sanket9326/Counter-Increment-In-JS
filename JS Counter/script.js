function leftIncrement() {
  let str1 = document.getElementById("counter1").innerHTML;
  let str2 = document.getElementById("counter2").innerHTML;
  let arr1 = str1.split(" ");
  let arr2 = str2.split(" ");

  let apple1 = parseInt(arr1[0]);
  let apple2 = parseInt(arr2[0]);

  if (apple1 == 100) {
    return;
  }

  apple1++;
  apple2--;

  let s1 = apple1 + " Apples";
  let s2 = apple2 + " Apples";

  document.getElementById("counter1").innerHTML = s1;
  document.getElementById("counter2").innerHTML = s2;
}

function rightIncrement() {
    let str1 = document.getElementById("counter1").innerHTML;
    let str2 = document.getElementById("counter2").innerHTML;
    let arr1 = str1.split(" ");
    let arr2 = str2.split(" ");
  
    let apple1 = parseInt(arr1[0]);
    let apple2 = parseInt(arr2[0]);
  
    if (apple2 == 100) {
      return;
    }
  
    apple1--;
    apple2++;
  
    let s1 = apple1 + " Apples";
    let s2 = apple2 + " Apples";
  
    document.getElementById("counter1").innerHTML = s1;
    document.getElementById("counter2").innerHTML = s2;
  }
  
