let queryString = location.search.substring(1);
console.log(queryString.split("&").map((item) => item.split("=")));
