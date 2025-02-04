const whatGender = 'The gender of your child would be: ';
const genders = ['Girl', 'Boy'];

const choosegender = (arr) => {
    let randNum1 = Math.floor(Math.random() * 2); 
    let userGender = arr[randNum1];
    console.log(whatGender);
    console.log(userGender);
}
choosegender(genders);

const whatName = 'The name of this child would be: ';
const babyNames = ['Love', 'wolf', 'Kim', 'Alexis', 'Eli', 'Billie', 'Mika', 'Louie', 'Robin']; 

const chooseName = (arr) => {
    let randNum = Math.floor(Math.random() * 9); 
    let userName = arr[randNum];
    console.log(whatName);
    console.log(userName);

 }; 
chooseName(babyNames);
