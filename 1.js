describe("",()=>{
	filter_list = (arr)=>{
		fl = [];
		arr.forEach(element=>{if(typeof(element)=="number") fl.push(element);});
		return fl;
	}
	it("",()=>{
		expect(filter_list([1,2,'a','b'])).toEqual([1,2]);
		expect(filter_list([1,'a','b',0,15])).toEqual([1,0,15]);
		expect(filter_list([1,2,'aasf','1','123',123])).toEqual([1,2,123]);
	});
});
