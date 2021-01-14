describe('',()=>{
	digital_root = (n) => {
		sum = 0;
		while(n>0) {
			sum += n%10;
			n = Math.floor(n/10);
		}
		if(sum > 9) return digital_root(sum);
		else return sum;
	}
	it('',()=>{
		expect(digital_root(16)).toBe(7);
		expect(digital_root(942)).toBe(6);
		expect(digital_root(132189)).toBe(6);
		expect(digital_root(493193)).toBe(2);
	})
})
