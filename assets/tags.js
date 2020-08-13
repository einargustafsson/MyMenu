export function getByTag (list, keyword) {
    const search = keyword.trim().toLowerCase();
    if (!search.length) return list;
    
    return list.filter(item => item.type.toLowerCase().indexOf(search) > -1);
}