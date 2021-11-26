
let person = [
    {
        'firstName': 'Kapil',
        'lastName': 'Sharma',
        'Office-Address': 'Mumbai'
    },
    {
        'firstName': 'Steve',
        'lastName': 'Rogers',
        'Office-Address': 'New-York'
    },
    {
        'firstName': 'Keanu',
        'lastName': 'reeves',
        'Office-Address': 'Canada'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log("|-"+key + " " + val[key]);
}

}
