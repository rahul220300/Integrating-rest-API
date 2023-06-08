let nme=document.getElementById("name");
let price=document.getElementById("price");
let category=document.getElementById("category");
let sub=document.getElementById("submit");

window.addEventListener("DOMContentLoaded",()=>{
    axios
         .get("https://crudcrud.com/api/e49e719cc0864b53b9c81027378ec93b/AddData")
         .then((res)=>{
          let  arr=res.data||[];
            dispaly(arr);
         })
         .catch((er)=>{
           console.log("error")
         })
})

sub.addEventListener("click",(ex)=>{
    ex.preventDefault();
   
    axios
        .post("https://crudcrud.com/api/e49e719cc0864b53b9c81027378ec93b/AddData",{
           
            price:price.value,
            name:nme.value,
            category:category.value
        })
       
        .catch(er=>{
            console.log(er);
        })
        

       let arr;
   axios
         .get("https://crudcrud.com/api/e49e719cc0864b53b9c81027378ec93b/AddData")
         .then((res)=>{
            arr=res.data||[];
            dispaly(arr);
         })
         .catch((er)=>{console.log(er)})

        })  
       
       
      
   
  

   
    function dispaly(arr){
    let tbodyE=document.getElementById("tbodyE");
    let tbodyF=document.getElementById("tbodyF");
    let tbodyS=document.getElementById("tbodyS");
    tbodyE.innerHTML="";
    tbodyF.innerHTML="";
    tbodyS.innerHTML="";
    arr.forEach((e)=>{
  
    let row=document.createElement("tr");
    let col1=document.createElement("td");
    col1.innerText=e.price;
    let col2=document.createElement("td");
    col2.innerText=e.name;
    let col3=document.createElement("td");
    col3.innerText="Remove";
    //col3.className="btn btn-danger";
    
    col3.addEventListener("click",(el)=>{
        el.target.parentNode.parentNode.removeChild(el.target.parentNode);
       
        axios
            .delete(`https://crudcrud.com/api/e49e719cc0864b53b9c81027378ec93b/AddData/${e._id}`);
            
    })
   
   
    row.append(col1,col2,col3);
    if(e.category=="electronic"){
        tbodyE.append(row);
    }else if(e.category=="food"){
        tbodyF.append(row);
    }else{
        tbodyS.append(row);
    }
})
}
