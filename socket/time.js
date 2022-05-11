let a = [
    {
        id: "12",
        name: "GIFT"
    },
    {
        id: "09",
        name: "GIFT"
    },
    {
        id: "09",
        name: "GIFT"
    }
];

a.map(n=>{
    if(n.id === "12"){
        n.name ="mgm"
    }
})

const b = a.filter(n=>n.id==="192")
if(!b.length)a.push("a")

console.log(a);
