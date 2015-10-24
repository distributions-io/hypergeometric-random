'use strict';

// MODULES //

var hyperPMF = require( 'distributions-hypergeometric-pmf/lib/array.js' ),
	incrspace = require("compute-incrspace");


// FUNCTIONS //

var alias = require( './alias.js' ),
	floor = Math.floor,
	max = Math.max,
	min = Math.min;


// PARTIAL //

/**
* FUNCTION: partial( m, n, k[, rand] )
*	Partially applies `m`, `n` and `k` and returns a function to generate random variables from a hypergeometric distribution.
*	The function uses the HALIAS algorithm described in [1].
*	Reference:
*		[1] Kachitvichyanukul, V., & Schmeiser, B. (2007).
*		Computer generation of hypergeometric random variates.
*		Journal of Statistical Computation and Simulation,
*		22(2), 127–145. doi:10.1080/00949658508810839
*
* @param {Number} m - number of white balls in urn
* @param {Number} n - number of black balls in urn
* @param {Number} k - number of draws
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( m, n, k, rand ) {
	var random,
		probs,
		il = max( 0, k - n ),
		iu = min( m, k ),
		vals,
		out,
		A, F;

	random = rand ? rand : Math.random;

	vals = incrspace( 0, iu + 1, 1 );

	probs = new Array( vals.length );
	hyperPMF( probs, vals, m, n, k );


	A = new Array( vals.length );
	F = new Array( vals.length );
	alias( probs, F, A );

	/**
	* FUNCTION: draw()
	*	Generates a random draw for a hypergeometric with parameters `m`, `n` and `k`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var x;
		x = floor( random() * ( iu + 1 ) );
		if ( random() > F[ x ] ) {
			x = A[ x ] - 1;
		}
		return x;
	}; // end FUNCTION draw()

} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
