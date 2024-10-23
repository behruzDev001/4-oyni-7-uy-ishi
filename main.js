
// 1
// function birthDatePrompt() {
//     const name = prompt("Ismingizni yozing:");
//     const birthYear = prompt("Tug'ilgan yilingizni yozing:");
//     const birthMonth = prompt("Tug'ilgan oyingizni yozing:");
//     const birthDay = prompt("Tug'ilgan kuningizni yozing:");
    
//     const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
//     const now = new Date();
  
//     const diffInMilliseconds = now - birthDate;
//     const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
//     const months = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
//     const days = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);
  
//     alert(`${name}, siz ${years} yil ${months} oy ${days} kun ${hours} soat ${minutes} minut ${seconds} sekund yashagansiz.`);
//   }
//   birthDatePrompt();
  


// 2
//   function findRandomNumber(menu,max) {
      
//     let randomNumber = Math.floor(Math.random() * (max - menu + 1)) + menu;
  
    
//     return randomNumber;
//   }
  
//   let resul = findRandomNumber(30, 70);
//   console.log(resul);
  
  


// 3
//   function capitalizeWords(sentence) {
//     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   }
  
//   console.log(capitalizeWords("Hello world!!!")); 
  
  
  



// // 4
//   function countUpperCase(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
//   }
  
//   let str = "JavaScript Develop's typ";
//   console.log(countUpperCase(str)); 
  