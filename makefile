DIST = ./dist
NAME = neta
ARCH = x64
VERSION = 0.36.0
PLATFORM = 'linux'
pack = node_modules/.bin/electron-packager

all:
	$(pack) . $(NAME) --platform=$(PLATFORM) --arch=$(ARCH) --version=$(VERSION) --out=$(DIST) --prune --ignore="node_modules/.bin|dist"

zip: all
	tar -zcvf dist/neta-$(PLATFORM)-$(ARCH).tar.gz dist/neta-$(PLATFORM)-$(ARCH)

clean:
	rm -rf $(DIST)

install:
	mv $(dist)/neta-linux-x64 /usr/share/neta
	ln -s /usr/share/neta/neta /usr/bin/neta

uninstall:
	rm -rf /usr/share/neta
	rm /usr/bin/neta
