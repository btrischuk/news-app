const url = {
  Cbc: https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=0746956d7d4247a0bd0b4c9e29fe60c4
}
 
exportgetCbcNews = () => {
  retunr axios({
    method: "GET",
    url: url.cbc
  })
  .then (res => res.data)
  
}