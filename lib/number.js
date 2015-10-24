'use strict';

// GENERATE HYPERGEOMETRIC RANDOM NUMBERS //

/**
* FUNCTION random( m, n, k[, rand] )
*	Generates a random draw from a hypergeometric distribution with parameters `m`, `n` and `k`.
*	Uses HBU algorithm as HALIAS has large initialization cost. TODO: this is efficient, revise later.
*	Algorithm described in [1].
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
* @returns {Number} random draw from the specified distribution
*/
function random( m, n, k, randp ) {
	var rand,
		ntotal,
		t, t1,
		x = 0,
		j, u;

	rand = randp ? randp : Math.random;
	ntotal = m + n;
	t = ntotal;
	t1 = m;
	for ( j = 0; j <= k; j++ ) {
		u = rand();
		if ( u < t1/t ) {
			x += 1;
			if ( x === m ) {
				return x;
			}
			t1 -= 1;
		}
		t -= 1;
	}
	return x;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
