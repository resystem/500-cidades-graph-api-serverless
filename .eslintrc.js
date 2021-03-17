module.exports = {
		"extends": "airbnb-base",
		"ignorePatterns": ["jest.config.js"],
    "rules": {
    	"no-underscore-dangle": [0, {
	    	"allow": ["_id"],
    	}],
    	"camelcase": [0, {
	    	"properties": "never"
			}],
			"class-methods-use-this": 0,
    },
};