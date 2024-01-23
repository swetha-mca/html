val=document.getElementById('para')
 c=0
 count=0;
function inc()
{
    c++
    val.textContent=c
    if(c%2==0)
    {
        x=document.getElementById('inx');
        x.innerText="even"
}
else{
    x=document.getElementById('inx');
        x.innerText="odd"
}

count++;
q=document.getElementById('iny');
        q.innerText=count

}

function dec()
{
    c--
    val.innerText=c


    if(c%2==0)
    {
        x=document.getElementById('inx');
        x.innerText="even"
}
else{
    x=document.getElementById('inx');
        x.innerText="odd"
}

count++;
q=document.getElementById('iny');
        q.innerText=count
}


function clears()
{
    c=0
    
    val.textContent=c

    count=0;
    q=document.getElementById('iny');
            q.innerText=count
            x=document.getElementById('inx');
            x.innerText="even"


}