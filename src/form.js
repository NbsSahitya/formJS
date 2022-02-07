function ageWeight(){
    a = document.getElementById('age').value
    n = document.getElementById('name').value
    w = document.getElementById('weights').value
    Validity(a,n,w)
}
function Validity(a,n,w)
{
    if(a == "")
    {
        document.getElementById("reconsider").innerHTML = " Please give age to get weight"
    }
    else
    {
        Condition(a,n,w)
    }
}
function Condition(a,n,w)
{
    if (a>=5 && a<=7)
    {
        if(w>=15 && w<= 20)
        {
            dis = "Hello "+n + " Your weight is perfect"
            display(dis)
        }
        else if(w>20)
        {
            dis = "Hello "+n + " Your weight is greater than recommended value "+w + " at an age of "+a
            display(dis)
        }
        else if(w<15)
        {
            dis = "Hello "+n + " Your weight is less than recommended value "+w + " at an age of "+a
            display(dis)
        }
    }
    else if (a>=8 && a<=10)
    {
        if(w>=21 && w<= 25)
        {
            dis = "Hello "+n + " Your weight is perfect"
            display(dis)
        }
        else if(w>25)
        {
            dis = "Hello "+n + " Your weight is greater than recommended value "+w + "at an age of "+a
            display(dis)
        }
        else if(w<21)
        {
            dis = "Hello "+n + " Your weighty is less than recommended value "+w + "at an age of "+a
            display(dis)
        }
    }
    if (a>=11 && a<=15)
    {
        if(w>=26 && w<= 30)
        {
            dis = "Hello "+n + " Your weight is perfect"
            display(dis)
        }
        else if(w>30)
        {
            dis = "Hello "+n + " Your weighty is greater than recommended value "+w + "at an age of "+a
            display(dis)
        }
        else if(w<26)
        {
            dis = "Hello "+n + " Your weight is less than recommended value "+w + "at an age of "+a
            display(dis)
        }
    }
    if (a>=16 && a<=20)
    {
        if(w>=31 && w<= 40)
        {
            dis = "Hello "+n + " Your weight is perfect"
            display(dis)
        }
        else if(w>40)
        {
            dis = "Hello "+n + " Your weight is greater than recommended value "+w + "at an age of "+a
            display(dis)
        }
        else if(w<31)
        {
            dis = "Hello "+n + " Your weight is less than recommended value "+w + "at an age of "+a
            display(dis)
        }
    }
}
function display(dis)
    {
        document.getElementById("reconsider").innerHTML = dis
    }
