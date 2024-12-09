const list = ['2','3','4','5'];

var sql = '1, ';

for(x = 0; x < list.length; x++){
    sql += x+2 > list.length ? list[x] : `${list[x]}, `;
}

console.log(sql);