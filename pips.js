// const regDie = [ ...Array(6).keys() ].reduce( ( a, k ) => ( { ...a, [ k ]: k + 1 } ), {} )
// const myDie = {
// 	'0': 0,
// 	'1': 0,
// 	'2': 3,
// 	'3': 5,
// 	'4': 6,
// 	'5': 7,
// }
const regDie = {
	'0': 0,
	'1': 0,
	'2': 2,
	'3': 6,
	'4': 6,
	'5': 7,
}
const myDie = {
	'0': 0,
	'1': 0,
	'2': 3,
	'3': 6,
	'4': 6,
	'5': 6,
}

const numPips = 21
console.assert( Object.keys( regDie ).reduce( ( a, k ) => a + regDie[ k ], 0 ) === numPips )
console.assert( Object.keys( myDie ).reduce( ( a, k ) => a + myDie[ k ], 0 ) === numPips )

const wld = {
	wins: 0,
	losses: 0,
	draws: 0,
}

const maxRollCount = 1000 * 1000

for( let rollCount = 0 ; rollCount < maxRollCount ; rollCount++ ) {
	const regRoll = Math.floor( Math.random() * 6 )
	const myRoll = Math.floor( Math.random() * 6 )
	const regVal = regDie[ regRoll ];
	const myVal = myDie[ myRoll ];

	if( myVal > regVal ) {
		wld.wins++
	} else if( myVal < regVal ) {
		wld.losses++
	} else {
		wld.draws++
	}

	// console.log( 'wld', wld );
}

const rolls = wld.wins + wld.losses + wld.draws
const winRate = wld.wins / ( wld.wins + wld.losses )
const winPercentage = `${Math.round( winRate * 100 * 100 ) / 100}%`
const winDrawRate = wld.wins / ( wld.wins + wld.losses + wld.draws )
const winDrawPercentage = `${Math.round( winDrawRate * 100 * 100 ) / 100}%`

console.assert( rolls === maxRollCount )

console.log( winPercentage, winDrawPercentage, 'after', rolls )
