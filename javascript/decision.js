let product = prompt("Enter laptop/mobiles/pen");
let userdata = Number(prompt("Enter the cost"));

let cost = userdata;
if (product=="laptop")
{
    userdata*=20/100;
    let totalpay = cost - userdata;
    console.log(`the total pay after the discount is ${totalpay}`);
}
else if (product == 'mobile')
{
    userdata *= 30/100;
    let totalpay = cost - userdata;
    console.log(`the total pay is ${totalpay}`);
}
else if(product == 'pen')
{
    userdata *= 25/100;
    let totalpay = cost - userdata;
    console.log(`the total pay is ${totalpay}`);
}
else
{
    console.log('you didnt buy anything');
}