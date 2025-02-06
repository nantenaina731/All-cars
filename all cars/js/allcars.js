
const cars =[
    {marque:'TOYOTA',
     categorie:'sportif',
     image:'./img/Fichier 4.png',
     couleur:'noir',
     prix:'$45.000',
     lien:'./img/Fichier 4.png',
    },
    {marque:'Twingo',
     categorie:'mini',
     image:'./img/Fichier 2.png',
     couleur:'orange',
     prix:'$20.000',
     lien:'./img/Fichier 2.png',
    },
    {marque:'Fiat',
     categorie:'plaisir',
     image:'./img/Fichier 3.png',
     couleur:'Blanc',
     prix:'$30.000',
     lien:'./img/Fichier 3.png',

    },
    {marque:'HIUNDAI',
    categorie:'familial',
    image:'./img/Fichier 5.png',
    couleur:'noir',
     prix:'$65.000',
     lien:'./img/Fichier 5.png',

   },
   {marque:'BMW',
   categorie:'plaisir',
   image:'./img/Fichier 6.png',
   couleur:'Blanc',
    prix:'$60.000',
    lien:'./img/Fichier 6.png',

  },
  {marque:'Land rover',
  categorie:'sportif',
  image:'./img/Fichier 7.png',
  couleur:'gris metallique',
     prix:'$80.000',
     lien:'./img/Fichier 7.png',

 },


 {marque:'bmw',
 categorie:'sportif',
 image:'./img/1x/Fichier 9.png',
 couleur:'blanc',
    prix:'$70.000',
    lien:'./img/1x/Fichier 9.png',

},

{marque:'bmw',
  categorie:'sportif',
  image:'./img/1x/Fichier 10.png',
  couleur:'blanc',
     prix:'$75.000',
     lien:'./img/1x/Fichier 10.png',

 },

 {marque:'Audi',
 categorie:'sportif',
 image:'./img/1x/Fichier 11.png',
 couleur:'noir',
    prix:'$80.000',
    lien:'./img/1x/Fichier 11.png',

},
{marque:'bmw',
 categorie:'familial',
 image:'./img/1x/Fichier 12.png',
 couleur:'gris',
    prix:'$76.000',
    lien:'./img/1x/Fichier 12.png',

},
{marque:'Bugatty',
 categorie:'sportif',
 image:'./img/1x/Fichier 13.png',
 couleur:'noir',
    prix:'$100.000',
    lien:'./img/1x/Fichier 13.png',

},
{marque:'Mclaren',
 categorie:'sportif',
 image:'./img/1x/Fichier 14.png',
 couleur:'orange',
    prix:'$90.000',
    lien:'./img/1x/Fichier 14.png',

},
{marque:'peugeot',
 categorie:'mini',
 image:'./img/1x/Fichier 15.png',
 couleur:'grena',
    prix:'$50.000',
    lien:'./img/1x/Fichier 15.png',

},




];
const affiche=document.getElementById('aseho')
function displaycars(carstodisplay){
  
    const carList =
    document.getElementById('carlist');
    carList.innerHTML='';
    carstodisplay.forEach(car => {
        const carCard = `
        <div class="card" style="width:250px;margin:2rem">
        <img  src="${car.image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${car.marque}</h5>
          <p class="card-text">prix: ${car.prix}</p>
          <p class="card-text">couleur: ${car.couleur}</p>

          <a href="${car.lien}" class="btn btn-primary">regarder</a>
        </div>
      </div>
      `;
      carList.innerHTML +=carCard;
    });
    
}
displaycars(cars)
tady=document.getElementById('tady');

//filter recherche
function filtercars(){
  const search= document.getElementById('search').value.toLowerCase();

  const filtercars=cars.filter(car => 
    car.marque.toLowerCase().includes(search) || car.categorie.toLowerCase().includes(search)
    );
 displaycars(filtercars);
}
document.getElementById('tady').addEventListener('click',filtercars);



