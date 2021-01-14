describe('',()=>{
	first_non_repeating_letter = (str) => {
		for(i = 0; i < str.length; i++) {
			unique = true;
			for(j = 0; j < str.length; j++)
				if(i!=j&&str[j]==str[i]) {
					unique=false;
					break;
				}
			if(unique) return str[i];
		}
		return '';
	}
	it('',()=>{
		expect(first_non_repeating_letter('stress')).toBe('t');
		expect(first_non_repeating_letter('lol')).toBe('o');
		expect(first_non_repeating_letter('s')).toBe('s');
		expect(first_non_repeating_letter('')).toBe('');
		expect(first_non_repeating_letter('aa')).toBe('');
	});
});
