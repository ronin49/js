describe('',()=>{
	customize = (s) => {
		friends = s.split(';');
		for(i = 0; i < friends.length; i++) {
			words = friends[i].split(':')
			friends[i] = words[1] +', '+ words[0]
		}
		for(i = 0; i < friends.length; i++)
			for(j = i+1; j < friends.length; j++)
				if(friends[j]<friends[i])
					[friends[i],friends[j]]=[friends[j],friends[i]]
		c=''
		friends.forEach(friend=>
		c+='('+friend.toUpperCase()+')');
		return c;
	}
	it('',()=>{
		expect(customize("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")).toBe("(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)")
	})
})
