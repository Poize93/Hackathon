
getData()

async function find(){
    const txt=document.querySelector(".text").value;
    console.log(txt);

    const data= await fetch("https://anapioficeandfire.com/api/books");  // can't we use fetch in fetch???
    const result =await data.json()
    document.querySelector()
    result.forEach(element => {
        if(txt.toUpperCase()==(element.name).toUpperCase())
            display(element)
            // console.log("search")
    });
    
}

async function getData(){
        try{
            const data= await fetch("https://anapioficeandfire.com/api/books");  // can't we use fetch in fetch???
            const result_partial =await data.json()

            result=[...result_partial , ...result_partial ,...result_partial ,...result_partial ,...result_partial] 
            
            //console.log(result) 

        }
        catch{
           // console.log("API can not be refered")
            catch_error_API()
        }
        
        //Pagination Starts 
        const pagination =document.querySelector(".pagination");
        const noOfPages=Math.ceil(result.length/5)
        //console.log(noOfPages)

        for(let i=1;i<=noOfPages;i++){
                const bttn=document.createElement("button")

                bttn.innerText=i;
                pagination.append(bttn)
                bttn.onclick=()=>{

                    const showPage=result.slice((i-1)*5,(i*5))
                    document.querySelector(".dsply").innerHTML=""
                    //document.querySelector()
                    showPage.forEach(element => {

                        display(element)
                    });
                }
        }

        const homePage=result.slice(0,5)

       
        homePage.forEach(element => {

            display(element)
        });
        ///Pagination ends
}


function catch_error_API(){
    document.querySelector(".dsply").innerHTML +=`<div class="catch"> <span class="error">Error:</span>API can not be Fetched</div>`

}





async function display(x){
    
    let list=[]
    chr_list=[]
    for(var i=0;i<5;i++){
        
        //console.log(x.characters[i],"checking")
        const data1= await fetch(x.characters[i]);
        const result =await data1.json()
        try{
            
            chr_list.push(result.name)
            //console.log(chr_list,"Chra_l")
            //console.log(chr_list)
            list= [... new Set(chr_list)]
           // console.log(list,"characters")
       //////end of characters name
        }
        catch{
            list=["Characters can not be fetched"]
        }
    } 


    const date=new Date(x.released).toDateString();
    //console.log(x)
    document.querySelector(".dsply").innerHTML +=`<div class="book">
    <div class="content">
        <div class="detail"><span class="title">Name:</span> ${x.name}</div>
        <div class="detail"><span class="title">ISBN:</span> ${x.isbn}</div>
        <div class="detail"><span class="title">Pages:</span>${x.numberOfPages}</div>
        <div class="detail"><span class="title">Author:</span>${x.authors}</div>
        <div class="detail"><span class="title">Publisher:</span>${x.publisher}</div>
        <div class="detail"><span class="title">Released Date:</span>${date}</div>
        <div class="detail"><span class="title">Characters:</span>${list}</div>        
    </div>

      <div class="image_block">
          <img class="image" src="https://cdn5.vectorstock.com/i/1000x1000/91/09/modern-book-cover-page-or-brochure-design-vector-20429109.jpg">
      </div>
  </div>`
      
  
} 


