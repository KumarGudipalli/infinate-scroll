let mainwrapper = document.getElementById("wrapepr")
var load = document.querySelector('.loader');
var limit = 24
var page = 1
async function getPhotos() {

    let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
 
     const data = await res.json()
     return data;
 
   }

async function  show() {
   let photos = await getPhotos();
   photos.forEach((e)=>{
   let photo = document.createElement('div');
   photo.classList.add('alubums')
   photo.innerHTML = `
 
        <div class="img-album">
            <img src="${e.thumbnailUrl}" alt="">
        </div>
       <div class="album-info">
           <p >
              ${e.title}
           </p>
       </div>
</div>
   `;
   mainwrapper.appendChild(photo)
   })
}
show()

function showLoading() {
    load.classList.add('show')

    setTimeout(() => {
        load.classList.remove('show');

        setTimeout(() => {
          page++
               show();
           },3000);
    },2000)
}


window.addEventListener('scroll',()=>{
   const { scrollTop , scrollHeight,clientHeight} = document.documentElement;

   if(scrollTop +clientHeight >= scrollHeight -10) {
       showLoading();
   }
})