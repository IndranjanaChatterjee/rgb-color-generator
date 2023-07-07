let col=document.querySelectorAll(".col");
const box=document.querySelector(".color-box");
const btn=document.querySelector(".copy");
const code=document.querySelector(".code");
let r,b,g;
col.forEach((e)=>
{
    e.addEventListener("input",()=>
    {
        
        changecolour();
    })
})
function changecolour()
{
    r=document.getElementById("red").value;
    b=document.getElementById("blue").value;
    g=document.getElementById("green").value;
    
    box.style.backgroundColor=`rgb(${r},${g},${b})`;
    code.innerHTML=`rgb(${r},${g},${b})`;

}
btn.addEventListener("click",()=>
{
    console.log(code.innerHTML);
    btn.innerText="Copied";
    let c=code.innerHTML;
    navigator.clipboard.writeText(c);
    setTimeout(()=>
    {
        btn.innerText="Copy";
    },2000);
    
    
    

})