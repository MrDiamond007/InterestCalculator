let myData = [
	{
		principal: "2500" ,
		time: 1.8
	},
	{
		principal: "1000" ,
		time: 5
	},
	{
		principal:"3000" , 
		time: 1 
	},
	{
		principal: "2000" , 
		time: 3
	}
];
console.log(myData);
let rate;
const InterestCalculator = (array) => {
	const interestData = array.map(item => {
		const {
			principal,
			time
		} = item;
		if (obj.principal>=2500 && obj.time>1 && obj.time<3) {
			 rate = 3;
		} else if (obj.principal>=2500 && obj.time>=3){
			rate = 4;
		}else if(obj.principal<2500 && obj.time<=1){
			rate = 2;
		} else{
		rate = 1
	}
	const interest =(principal * rate * time) /100;

	item.interest=interest;
	item.rate =rate;
	return item;
});

return interestData;
}
console.log(InterestCalculator(myData));