dist = ./dist
ver = "0.36.0"
name = "campfire"
pack = node_modules/electron-packager/cli.js

all: linux macos windows

linux:
	$(pack) . $(name) --platform=linux --arch=x64 --version=$(ver) --out=$(dist) --prune

macos:
	$(pack) . $(name) --platform=darwin --arch=x64 --version=$(ver) --out=$(dist) --prune

windows:
	$(pack) . $(name) --platform=win32 --arch=x64 --version=$(ver) --out=$(dist) --prune


clean:
	rm -rf $(dist)

install: linux
	mv $(dist)/campfire-linux-x64 /usr/share/campfire
	ln -s /usr/share/campfire/campfire /usr/bin/campfire

uninstall:
	rm -rf /usr/share/campfire
	rm /usr/bin/campfire
