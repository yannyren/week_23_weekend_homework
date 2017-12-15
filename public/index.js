var app = function(){

  const button = document.querySelector('button');
  button.addEventListener('click', function(){
    makeRequest(requestComplete)
  })

  const center = {lat:55.953251, lng:-3.188267}
  const mapDiv = document.querySelector('.main-map')
  const mainMap = new MapWrapper(mapDiv, center, 10);
}

const renderSelect = function(){

}

const makeRequest = function(requestComplete){
  const select = document.querySelector('select');
  let url = `http://api.giphy.com/v1/gifs/search?q=${select.value}&api_key=UiS9uFBcSwaN17S05am68VHun3Xo5K0K&limit=4`;
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load',requestComplete);
  request.send()
}

const requestComplete = function(){

  if(this.status !== 200) {
    return;
  }
  const jsonString = this.responseText;
  const giphyList= JSON.parse(jsonString);

  const imgList = document.querySelector('.giphy-list');
  //remove all previous img
  while(imgList.firstChild) {
    imgList.removeChild(imgList.firstChild);
  }
  //render img
  for(let giphy of giphyList.data) {
    // console.log("giphy list", ryan.images.original.url);
    const img = document.createElement('img');
    img.src = giphy.images.original.url;
    img.classList.add('giphy');
    imgList.appendChild(img);
  }

  const input = document.querySelector('input');
  input.value

}

document.addEventListener('DOMContentLoaded', app);
