var currentPage = 1;


function loadPage(page){
    currentPage = page;
    
    $.ajax({
        url: '/api/user?page=' + page,
        type: 'GET'
    })
    .then(data => {

        $('#content').html('');

        for(let i = 0; i < data.data.length; i++){
    
            var item = $(`
    
                <h1>${data.data[i].email} : ${data.data[i].username} : ${data.data[i].password}</h1>
            
            `)
            
            $('#content').append(item);
    
        }
    })
    .catch(error => {
        console.log('api error');
    })
}



function nextPage(){
    currentPage++;
    
    
    $.ajax({
        url: '/api/user?page=' + currentPage,
        type: 'GET'
    })
    .then(data => {

        $('#content').html('');

        for(let i = 0; i < data.data.length; i++){
    
            var item = $(`
    
                <h1>${data.data[i].email} : ${data.data[i].username} : ${data.data[i].password}</h1>
            
            `)
            
            $('#content').append(item);
    
        }
    })
    .catch(error => {
        console.log('api error');
    })
}


function previousPage(){
    currentPage--;
    if(currentPage < 1){
        currentPage = 1;
    }

    $.ajax({
        url: '/api/user?page=' + currentPage,
        type: 'GET'
    })
    .then(data => {

        $('#content').html('');

        for(let i = 0; i < data.data.length; i++){
    
            var item = $(`
    
                <h1>${data.data[i].email} : ${data.data[i].username} : ${data.data[i].password}</h1>
            
            `)
            
            $('#content').append(item);
    
        }
    })
    .catch(error => {
        console.log('api error');
    })
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function edit(){
    var token = getCookie("token");
    $.ajax({
    url: "/edit",
    // headers: {
    // },
    type: "POST"
    })
    .then(data => {
        console.log(data);
        if(data != 'NOT PERMISSTION!'){
            alert("edit successfully!!!");
        }
        else{
            alert("NOT PERMISSTION!");
        }
    })
    .catch(error => {
        alert("edit fail!!!");
    })
}