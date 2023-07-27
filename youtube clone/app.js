const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyBV3AUdkIybPq5f-jWsOxWbXtWNkQj4um4";//api kry from google cloud
let video_http = "https://www.googleapis.com/youtube/v3/videos?";//http request for channel details
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";//http request for channel icon

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChIcon(item);
    })
})
.catch(err => console.log(err));

// we are not getting channel icon directly so we fetch it sepretly
const getChIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

//create video card of each video
const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="chicon" alt="">
            <div class="accinfo">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

// action on search bar

const searchInput = document.querySelector('.searchBar');
const searchBtn = document.querySelector('.searchBtn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})