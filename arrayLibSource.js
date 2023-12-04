let arraySort = (ar) => {   
    ar.sort((a,b)=>b-a)    
    return ar;
}

let arrayReverse = (ar) => {   
    let tempArr = ar.slice().reverse();
    return tempArr;
}

let arrayInclude = (ar, num) => { 
    let tempArr = ar.includes(num);
    return tempArr;      
}

let arraynoOfOccurance = (ar, num) => {  
    let tempArr = [], count=0;
    ar.forEach(function(item,index,array){
        tempArr.push((item===num)?true:false);
    })    
    tempArr.map(function(item){
        if (item===true){count++}
    })    
    return count;
}

let arraynoDuplicate = (arr) => {
// let tempArr = [];
const duplicates = arr.filter((value, index, self) => self.indexOf(value) !== index);
return duplicates;
}

export default arraySort;
export {arrayReverse, arrayInclude, arraynoOfOccurance, arraynoDuplicate};