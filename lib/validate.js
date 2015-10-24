'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' ),
	isNumber = require( 'validate.io-number-primitive' ),
	isPositiveInteger = require( 'validate.io-positive-integer' ),
	isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination for validated options
* @param {Object} options - function options
* @param {Number} [options.m] - number of white balls in urn
* @param {Number} [options.n] - number of black balls in urn
* @param {Number} [options.k] - number of draws
* @param {String} [options.dtype] - output data type
* @param {Number} [options.seed] - integer-valued seed
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'random()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'm' ) ) {
		opts.m = options.m;
		if ( !isNonNegativeInteger( opts.m ) ) {
			return new TypeError( 'random()::invalid option. `m` parameter must be a non-negative integer. Option: `' + opts.m + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'n' ) ) {
		opts.n = options.n;
		if ( !isNonNegativeInteger( opts.n ) ) {
			return new TypeError( 'random()::invalid option. `n` parameter must be a non-negative integer. Option: `' + opts.n + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'k' ) ) {
		opts.k = options.k;
		if ( !isNonNegativeInteger( opts.k ) ) {
			return new TypeError( 'random()::invalid option. `k` parameter must be a non-negative integer. Option: `' + opts.k + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !isString( opts.dtype ) ) {
			return new TypeError( 'random()::invalid option. Data type option must be a string primitive. Option: `' + opts.dtype + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'seed' ) ) {
		opts.seed = options.seed;
		if ( !isPositiveInteger( opts.seed ) ) {
			return new TypeError( 'random()::invalid option. Seed option must be a positive integer. Option: `' + opts.seed + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
