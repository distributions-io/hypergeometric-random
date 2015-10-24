'use strict';

// CONSTANTS //

var EPSILON = 1e-100;


// ALIAS //

/**
* FUNCTION: alias( p, F, A )
*	Initialization step of alias method as described by Kronmal & Peterson.
*
*	References:
*		Kronmal, R. A., & Peterson, A. V. (1979).
*		On the Alias Method for Generating Random Variables
*		from a Discrete Distribution.
*		The American Statistician, 33(4), 214.
*		doi:10.2307/2683739
*
* @param {Array} p - probalities of discrete distribution
* @param {Array} F - array to receive cut-off values
* @param {Array} A - array to receive alias values
* @returns {Void} function mutates `F` and `A`, does not return anything
*/
function alias( p, F, A ) {
	var i, ig, is,
		k, j,
		n = p.length,
		G = new Array( n ),
		S = new Array( n - 1 ),
		ig = 0,
		is = 0;

	for ( i = 0; i < n; i++ ) {
		F[ i ] = n * p[ i ];
		if ( F[ i ] < 1 ) {
			S[ is ] = i + 1;
			is += 1;
		} else {
			G[ ig ] = i + 1;
			ig += 1;
		}
	}
	do {
		if ( is == 0 ) {
			return;
		}
		k = G[ ig - 1 ];
		j = S[ is - 1 ];

		is = is - 1;
		A[ j - 1 ] = k;
		F[ k - 1 ] = F[ k - 1 ] - ( 1 - F[ j - 1 ] );
		if ( F[ k - 1 ] < 1 - EPSILON ) {
			ig = ig - 1;
			is = is + 1;
			S[ is - 1 ] = k;
		}
	} while ( true );

} // end FUNCTION alias()


// EXPORTS //

module.exports = alias;
