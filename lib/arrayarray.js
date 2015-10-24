'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, m, n, k[, rand] )
*	Creates a multidimensional array of hypergeometric distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} m - number of white balls in urn
* @param {Number} n - number of black balls in urn
* @param {Number} k - number of draws
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with hypergeometric random numbers
*/
function random( dims, m, n, k, rand ) {
	var draw = partial( m, n, k, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
