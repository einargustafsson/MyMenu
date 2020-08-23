export function getByTitle (list, keyword) {
    const search = keyword.trim().toLowerCase();
    if (!search.length) return list;
    
    //return list.filter(item => item.title.toLowerCase().indexOf(search) > -1);
    var byTitle = list.filter(item => item.title.toLowerCase().indexOf(search) > -1);
    var byDescription = list.filter(item => item.description.toLowerCase().indexOf(search) > -1);
    console.log([byDescription, byTitle]);
    var combined = arrayUnique(byTitle.concat(byDescription));
    return combined;
}

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}