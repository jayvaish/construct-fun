function Product(n,c,i,p,)
{
    this.name=n;
    this.category=c;
    this.image=i;
    this.price=p;
    
    
    



}




// document.getElementById("sub").addEventListener("click".myFunction) 


function myFunction(event){
    event.preventDefault()
    // console.log("sabc")

    let form=document.getElementById("data")
    let name=form.name.value;
    let category=form.category.value;
    let image=form.image.value;
    let price=form.price.value;
    // let gender=form.gender.value;
    
    



    let s1=new Product(name,category,image,price,)

    let bio=JSON.parse(localStorage.getItem("data")) || []

    bio.push(s1);

    localStorage.setItem("data",JSON.stringify(bio))

    console.log(s1);


}