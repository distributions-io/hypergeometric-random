'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, m, n, k[, rand] )
*	Creates a matrix of hypergeometric distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} m - number of white balls in urn
* @param {Number} n - number of black balls in urn
* @param {Number} k - number of draws
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with hypergeometric random numbers
*/
function random( dims, dt, m, n, k, rand ) {
	var out,
		draw,
		i;

	draw = partial( m, n, k, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
