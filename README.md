<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

![template logo](logo.png "template logo")

# Vuetify - Webpack Cordova Template
You can start your new cordova project perfectly with this template.

This template uses:
* [Vuetify.js](https://next.vuetifyjs.com/)
* [Vue Js 2](https://vuejs.org/)
* [Webpack 2](https://webpack.github.io/)

**Thanks to: centrual [cordova-template-framework7-vue-webpack](https://github.com/centrual/cordova-template-framework7-vue-webpack)**

## Minimum Requirements
* **Cordova:** _7.0.0_
* **Node.js:** _8.0.0_ (Supports ES6)

## Features

Hooks are smart. They can fix some problems for you. Fix list:
* `npm install` Automatically checks node js dependencies.
* `package.json` Renames `name` variable if it has a space characters and auto saves. (It needed for npm install)
* `www` Automatically manages `www` folder. You don't need to think about www folder. Your target is always `src` folder.
* `static` Static assets automatically sync on live reload!
* `CordovaHtmlOutputPlugin` Automatically adds `cordova.js` to html. You don't need to add to your file manually. It's helpful for webpack.
* `manifest.json` Some cordova plugins needs manifest.json in root folder. If you add manifest.json file to your `src` folder, our smart hooks automagically copy it to `www` folder!

###### Live Reload Related
* `config.xml` Live reload needs `<allow-navigation href="*"/>` in development mode. So our smart hooks manages this too. You don't need to think about it.
* `live-reload` Manages live-reload dependencies automatically. Just write your code, and don't think about dependencies.
* `device_router.html` Smart router in live-reload mode. It searches for best available ip for connect server. if it can't find, you can write ip:port manually.
* `CordovaDeviceRouter.js` In live-reload mode, you can connect to server from multiple devices. This file inject right `cordova.js` file to page. So you can connect to webpack-dev-server from multiple devices at same time.

## Installation

This template need cordova or phonegap, 
```
npm install -g phonegap
```
for more information, please check [cordova installation](https://cordova.apache.org/docs/en/latest/guide/cli/) or [phonegap installation](http://docs.phonegap.com/getting-started/1-install-phonegap/desktop/).

Our Magic words:

``` bash
cordova create <project_create_dir> [com.example.projectname] [ProjectClassName] --template cordova-template-vuetify-webpack
phonegap create <project_create_dir> [com.example.projectname] [ProjectClassName] --template cordova-template-vuetify-webpack
```

Now you have your brand new cordova / phonegap project with Vuetify, Vue 2 and webpack 2!

---

## Usage

You can use every cordova | phonegap commands.
You just have one more command option: `-- --lr` to start live reload.

Example usage:
```
cd <project_create_dir>
npm i
phonegap platform add browser
cordova run android -- --lr
cordova run browser -- --live-reload
phonegap run ios -- --lr
```

And your first App is ready! Check your App in web browser http://localhost:8000 or http://localhost:8081.

## build
```
phonegap build --release
```
The build outputs (.js, .css) are in /www directory.
If you're using other Web Framework (Django, Flask, etc.), make sure to update their index.html to correctly refer these outputs.

You can check:
* [hookers.js](template_src/hooks/hookers.js),
* [beforedep.js](template_src/hooks/beforedep.js),
* [CordovaDeviceRouter.js](template_src/webpack/dev_helpers/CordovaDeviceRouter.js),
* [device_router.html](template_src/webpack/dev_helpers/device_router.html)

for more information.
