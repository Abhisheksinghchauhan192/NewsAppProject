const getbtn = document.getElementById("getbtn");
const bnews = document.getElementById("breakingbtn");
const newsBox = document.getElementById("rightpanel");

let gdata = {} ;
// add event listener on the get news button. 
getbtn.addEventListener("click",(event)=>{

    event.preventDefault(); // prevent it from submitting the form

    const q = document.getElementById("Search").value;
    const country = document.getElementById("Country").value;
    const category = document.getElementById("Category").value;
    const from = document.getElementById("fromDate").value;
    const to = document.getElementById("toDate").value;
    const sortBy = document.getElementById("sortBy").value;
    const language  = document.getElementById("language");

    // TODO: build query for api endpoint. 
    
    // TODO: display the response data in the HOMEPAGE. 


});


// add event listener to the breaking news button 

bnews.addEventListener("click",()=>{

    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${localStorage.getItem("newsProjectUserApiKey")}`)
    .then(res=>res.json())
    .then(data=>{
        gdata = data;
        showData(data.articles);
    })
    .catch(err=>{
        console.log("Error Fetching news");
        showData([ {urlToImage:"",title:"News Not Found",source:{name:"NULL"},content:"NULL",publishedAt:"NULL",description:"NULL"}]);
    });
});


function showData(data){

    newsBox.textContent = '';
    for(let news of data){
        
        const  newsitem = document.createElement("div");
        newsitem.classList.add("news-container");
        // adding image 
        const image  = document.createElement("img");
        image.src= news.urlToImage || "./assests/images/noimage.webp";
        image.alt = "News Relevant Image";
        newsitem.appendChild(image);

        // Creating the heading part. 
        const heading = document.createElement("div");
        heading.classList.add("news-heading");
        const h2 = document.createElement("h2");
        h2.textContent = news.title;
        heading.appendChild(h2);
        const sourcep = document.createElement('p');
        sourcep.classList.add("source-info");
        const sourcelink = document.createElement('a');
        sourcelink.href= news.url || "#";
        sourcelink.textContent = news.source.name||"Not Found";
        sourcep.appendChild(sourcelink);
        heading.appendChild(sourcep);
        newsitem.appendChild(heading);
        // creating subheading part 

        const subheading = document.createElement("div");
        subheading.classList.add("sub-heading");
        const h3 = document.createElement("h3");
        h3.textContent = news.description || 'No Content';
        subheading.appendChild(h3);
        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = news.publishedAt.substring(0,10) || "NULL";
        subheading.appendChild(date);
        newsitem.appendChild(subheading);

        // creating news content box 
        const newsContent = document.createElement("div");
        newsContent.classList.add("news-content");
        const p = document.createElement("p");
        p.textContent = news.content;
        // adding read more link 
        const readmore = document.createElement("a");
        readmore.href = news.url;
        readmore.target = '_blank';
        readmore.textContent = 'More';
        p.appendChild(readmore);

        newsContent.appendChild(p);
        newsitem.appendChild(newsContent);

        // append the news item to the main box container
        newsBox.appendChild(newsitem);
    }
}