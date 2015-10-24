'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, m, n, k[, rand] )
*	Creates an array of binomial distributed random numbers.
*
* @param {Number} len - array length
* @param {Number} m - number of white balls in urn
* @param {Number} n - number of black balls in urn
* @param {Number} k - number of draws
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with binomial random numbers
*/
function random( len, m, n, k, rand ) {
	var out,
		draw,
		i;

	draw = partial( m, n, k, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
