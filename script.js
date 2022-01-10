document.body.innerHTML+=`


<section class="user-list">

</section>
`;



async function getPopularAnime(){
    var data=await fetch(`https://api.thecatapi.com/v1/breeds`,{method:"GET"});
    const users=await data.json();
    console.log("a",users);
    const userContainer=document.querySelector(".user-list");
   
    userContainer.innerHTML="";
    var pic=document.createElement('img');
    userContainer.append(pic);
   
    users.forEach((a)=>{
        userContainer.innerHTML+=`
        <div class="user-container">
       <img src="${a.image.url}"class="user-pic"/>
       <h3>Name:${a.name}</h3>
        <p class="user-name">Origin:${a.origin}</p>
        <p class="user-name">Origin:${a.life_span}</p>
        <p class="user-name">Countrycode:${a.country_codes}</p>
        <p class="user-name">Countrycode:${a.description}</p>
       
</div>
        
        `;
    });
    

       
    console.log(users);
}
getPopularAnime();