REPORTER = spec
test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha test \
	--reporter $(REPORTER) \
	--recursive
.PHONY: test