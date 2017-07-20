document.getElementById("luke-button").addEventListener("click", ()=>{
axios.get(`http://swapi.co/api/people/${document.getElementById("luke-input").value}`).then((response)=> {
    document.getElementById("name").innerHTML = response.data.name;
    document.getElementById("birth-year").innerHTML = response.data.birth_year;
    document.getElementById("gender").innerHTML = response.data.gender;
});
});