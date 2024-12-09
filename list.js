const list = ["51980276791", "51998913436"];
var number = null;

var sql = "insert into alteracao (number) values ("

for (x=0; x<list.length; x++){
    number = `'${list[x]}'`;
    if(x+2 > list.length){
        sql = sql + number;
    }
    else{
        sql = sql + number + ", ";
    }
}
sql = sql + ")"
console.log(sql);