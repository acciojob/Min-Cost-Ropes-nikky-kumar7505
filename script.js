function mincost(arr)
{ 
//write your code heres
// return the min cost
	let total = 0
	while (arr.length>1) {
		arr.sort((a,b)=>a-b);

		let first = arr.shift()
		let second = arr.shift()
		let cost = first+second
		total += cost
		arr.push(cost)
	}
	return total;
}

module.exports=mincost;
