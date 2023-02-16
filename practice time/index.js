const projectArr = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

function loadcontent() {
  const myContent = document.querySelector("#card");
  const showInHtml = projectArr.map((index, name, username, email) => {
    return `
   <divi id="card" >
      <div > <img id="img" src="https://tse3.mm.bing.net/th?id=OIP.B_atDrr4RpLoeIJmNsOCxgHaHa&pid=Api&P=0" alt="user image"></div>
      <h3>Id:  <span> 1</span></h3>
      <h4>Name:  <span> Preetika Bhardwaj</span></h4>
      <h5>User Name:  <span> Preetika</span></h5>
      <h6>E-mail:  <span> preetikabhardwaj2001@gmail.com</span></h6>
    </div>
  `;
  });
}
