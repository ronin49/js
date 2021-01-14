describe('',()=>{
	pairs = (arr,target) => {
		p = 0;
		for(i = 0; i < arr.length; i++)
			for(j = i + 1; j < arr.length; j++)
				if(arr[i]+arr[j]==target)
					p++;
		return p;
	}
	it('',()=>{
		expect(pairs([1,2,3,4,5,6,7,8],3)).toBe(1);
		expect(pairs([0,1,2,3,4,5,6,7,8],3)).toBe(2);
		expect(pairs([1,2,3,4,5,6,7,8],0)).toBe(0);
		expect(pairs([1,2,3,4,5,6,7,8],10)).toBe(3);
		expect(pairs([-1,1,2,3,4,5,6,7,8],4)).toBe(2);
		expect(pairs([2,1,2,3,4,5,6,7,8],4)).toBe(2);
	})
})
