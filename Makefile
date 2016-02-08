babel=node_modules/.bin/babel
pug=node_modules/.bin/jade
stylus=node_modules/.bin/stylus

all: reset javascript pug stylus

reset:
	rm -rf out
	mkdir out

javascript:
	$(babel) src -d out

pug:
	mkdir out/view
	$(pug) src/view -o out/view

stylus:
	mkdir out/style
	$(stylus) src/style -o out/style
