(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Grades"] = factory();
	else
		root["Grades"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "4d3e1d26e8652257d607";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Grades": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/grades/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesUploadColumnChooser_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['assigntag', 'parts'],
  data: function data() {
    return {
      bulkFiles: null
    };
  },
  methods: {
    bulkUpload: function bulkUpload() {
      var _this = this;

      var site = this.$site;

      if (this.bulkFiles === null || this.bulkFiles.length < 1) {
        return;
      }

      var file = this.bulkFiles[0];
      var reader = new FileReader(); // Closure to capture the file information.

      reader.onload = function (e) {
        var member = _this.$store.state.user.user.member; // Data we will send to the server

        var data = {
          file: e.target.result,
          semester: member.semester,
          section: member.section,
          mapping: '',
          commentMapping: '',
          idcolumn: ''
        }; //
        // Read the first line of the CSV file to get the fields
        //

        var re = /^.*$/m;
        var match = e.target.result.match(re);

        if (match === null) {
          new site.Dialog.MessageBox('Invalid File', 'File does not contain grade data.', site.Dialog.MessageBox.OK, function () {});
          return;
        }

        var columns = match[0].split(',');
        var parts = _this.parts;
        var mapping = {};
        var commentMapping = {};
        var idColumn = {};
        new site.Dialog({
          title: 'Column Selection',
          content: '<div id="cl-column-chooser"></div>',
          addClass: 'cl-column-chooser-dlg',
          buttons: [{
            contents: 'Upload',
            focus: true,
            click: function click(dialog) {
              dialog.close();
              var any = false;

              var _iterator = _createForOfIteratorHelper(parts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var part = _step.value;

                  if (mapping[part.tag] !== '*none*') {
                    any = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!any) {
                site.toast(_this, "No columns selected to upload");
                return;
              }

              data.mapping = JSON.stringify(mapping);
              data.commentMapping = JSON.stringify(commentMapping);
              data.idcolumn = idColumn.id;
              site.api.post('/api/grade/bulk/upload/' + _this.assigntag, data).then(function (response) {
                if (!response.hasError()) {
                  var results = response.getData('results');
                  site.toast(_this, '' + results.attributes.grades + " grades successfully uploaded for " + results.attributes.users + ' users');
                  setTimeout(function () {
                    window.history.go();
                  }, 1000);
                } else {
                  console.log(response);
                  site.toast(_this, response);
                }
              })["catch"](function (error) {
                console.log(error);
                site.toast(_this, error);
              });
            }
          }, {
            contents: 'Cancel',
            focus: true,
            click: function click(dialog) {
              dialog.close();
            }
          }]
        }); // Create a Vue inside the dialog box

        new site.Vue({
          el: '#cl-column-chooser',
          data: function data() {
            return {
              parts: parts,
              columns: columns,
              mapping: mapping,
              commentMapping: commentMapping,
              idColumn: idColumn
            };
          },
          template: "<chooser :parts=\"parts\" :columns=\"columns\"></chooser>",
          components: {
            'chooser': _GradesUploadColumnChooser_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
          }
        });
      };

      reader.onerror = function (e) {
        site.toast(this, "Error reading file");
      };

      reader.onabort = function (e) {
        site.toast(this, "File read aborted");
      }; // Read in the file


      reader.readAsText(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Manual grade entry form.
 * @constructor GradeManualVue
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['item'],
  mounted: function mounted() {},
  methods: {
    fillInPoints: function fillInPoints() {
      this.item.manual.points = this.item.manual.available;
    },
    compute: function compute() {
      var lines = this.item.manual.comment.split(/\r?\n/);
      var pos = 0;
      var neg = 0;

      var _iterator = _createForOfIteratorHelper(lines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var line = _step.value;
          var tokens = line.match(/^\s*([+-]?)([1-9][0-9]*)([^0-9]|$)/);

          if (tokens !== null) {
            if (tokens[1] === '-') {
              neg -= +tokens[2];
            } else {
              pos += +tokens[2];
            }
          }
        }
        /*
         * If we only have negative values, that is subtracted from
         * the available points. If we only have positive values, they
         * are added to make up the points. If we have both, the values
         * are all added together to make up the total points.
         */

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (neg !== 0) {
        if (pos === 0) {
          this.item.manual.points = this.item.manual.available + neg;
        } else {
          this.item.manual.points = pos + neg;
        }
      } else {
        if (pos === 0) {
          this.item.manual.points = this.item.manual.available;
        } else {
          this.item.manual.points = pos;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * All grades for all members
 * /cl/console/grades/all
 * @constructor GradesAllVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      section: null,
      grades: null
    };
  },
  components: {
    'membersFetcher': MembersFetcherComponentVue
  },
  created: function created() {
    var user = this.$store.state.user.user;
    var member = user.member;
    this.section = this.$store.getters['course/section'](member.semester, member.section);
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.setTitle(': Grades');
    this.$site.api.get('/api/grade/all', {}).then(function (response) {
      if (!response.hasError()) {
        _this.grades = response.getData('grades-all').attributes;
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    assignmentGrade: function assignmentGrade(user, category, assignment) {
      if (this.grades === null) {
        return '?';
      }

      var userGrades = this.grades[user.member.id];
      var assignmentGrades = userGrades.categories[category.tag].assignments;

      var _iterator = _createForOfIteratorHelper(assignmentGrades),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var assignmentGrade = _step.value;

          if (assignmentGrade.tag === assignment.tag) {
            return assignmentGrade.grade;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return '';
    },
    categoryGrade: function categoryGrade(user, category) {
      if (this.grades === null) {
        return '?';
      }

      var userGrades = this.grades[user.member.id];
      var categoryGrade = userGrades.categories[category.tag];
      return categoryGrade.grade;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * All student grade links
 * /cl/console/grades/links
 * @constructor GradesLinksVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      grades: null,
      parts: []
    };
  },
  components: {
    'membersFetcher': MembersFetcherComponentVue
  },
  mounted: function mounted() {
    this.$parent.setTitle(': Grades');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var PrevNextMemberVue = Site.PrevNextMemberVue;
var MemberFetcherComponentVue = Site.MemberFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * Console grades presentation for a member
 * /cl/console/grades/:num
 * @constructor GradesMemberVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": ConsoleComponentBase,
  props: ['memberid'],
  data: function data() {
    return {
      course: this.$store.state.course.course,
      section: null,
      grade: null,
      per: ''
    };
  },
  components: {
    memberFetcher: MemberFetcherComponentVue,
    prevNext: PrevNextMemberVue
  },
  mounted: function mounted() {
    this.setTitle(': Grade');
  },
  methods: {
    fetched: function fetched(user) {
      var _this = this;

      this.section = user.member.getSection(this.$store);
      this.setTitle(': ' + user.name + ' Grades');
      this.$site.api.get("/api/grade/grade/".concat(this.memberid), {}).then(function (response) {
        if (!response.hasError()) {
          _this.grade = response.getData('grade').attributes;

          if (_this.grade.available > 0) {
            _this.per = '(' + (_this.grade.grade / _this.grade.available * 100).toFixed(1) + '%)';
          }
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Choose the CSV columns for each grade component we are going to upload.
 *
 * @constructor GradesUploadColumnChooserComponent
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['parts', 'columns'],
  data: function data() {
    return {
      memberIdColumn: {},
      columnSelect: [],
      mapping: {},
      commentMapping: {}
    };
  },
  methods: {},
  mounted: function mounted() {
    // See if there is an email column
    this.memberIdColumn = this.$parent.idColumn;
    this.memberIdColumn.id = this.columns[0];

    var _iterator = _createForOfIteratorHelper(this.columns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var column = _step.value;

        if (column.toLowerCase().indexOf('email') >= 0) {
          this.memberIdColumn.id = column;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.columnSelect = ['*none*'].concat(this.columns);
    this.mapping = this.$parent.mapping;
    this.commentMapping = this.$parent.commentMapping; // Set initially empty

    var _iterator2 = _createForOfIteratorHelper(this.parts),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var part = _step2.value;
        this.mapping[part.tag] = '*none*';
        this.commentMapping[part.tag] = '*none*';
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Member = Site.Member;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * The main grading page
 * /cl/console/grading
 * @constructor GradingVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      section: null,
      gradingLink: this.$site.root + '/cl/console/grading/',
      ta: Member.TA,
      downloadPermission: false,
      // Permission to download grades?
      rubricDumperPermission: false // Permission to dump rubrics?

    };
  },
  computed: {},
  created: function created() {
    this.$parent.setTitle(': Assignment Grading');
    var user = this.$store.state.user.user;
    var member = user.member;
    this.downloadPermission = user.atLeast(this.$site.permissions.atLeast('grades-download', Member.TA));
    this.rubricDumperPermission = user.atLeast(this.$site.permissions.atLeast('grades-rubric-dumper', Member.TA));
    this.section = this.$store.getters['course/section'](member.semester, member.section);
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeBulkUploadComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var SubmissionsLinksVue = Site.SubmissionsLinksVue;
var MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
var Member = Site.Member;
/**
 * The assignment grading page for the course.
 * /cl/console/grading/:assigntag
 * @constructor GradingAssignmentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      link: '/cl/console/grading/' + this.assigntag + '/',
      grades: null,
      parts: [],
      fetched: false,
      assignment: null,
      ta: false
    };
  },
  components: {
    'membersFetcher': MembersFetcherComponentVue,
    'submissionsLinks': SubmissionsLinksVue,
    'bulk-upload': _GradeBulkUploadComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.ta = this.user.atLeast(Member.TA);
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Grading');
    this.$site.api.get('/api/grade/grades/' + this.assigntag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.grades = response.getData('grades').attributes;
        _this.parts = response.getData('grade-parts').attributes;
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    partGrade: function partGrade(user, part) {
      var userGrades = this.grades[user.member.id];

      if (userGrades === undefined) {
        return '';
      }

      var partStatus = userGrades.grades[part.tag];

      if (partStatus === undefined) {
        return '';
      }

      return partStatus;
    },
    grade: function grade(user) {
      var userGrades = this.grades[user.member.id];

      if (userGrades === undefined) {
        return '';
      }

      return userGrades.grade !== null ? userGrades.grade : '';
    },
    partCount: function partCount(users, part) {
      var cnt = 0;

      var _iterator = _createForOfIteratorHelper(users),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var user = _step.value;

          if (this.partGrade(user, part) !== '') {
            cnt++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return cnt;
    },
    gradesCount: function gradesCount(users) {
      var cnt = 0;

      var _iterator2 = _createForOfIteratorHelper(users),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var user = _step2.value;

          if (this.grade(user) !== '') {
            cnt++;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return cnt;
    },
    partAverage: function partAverage(users, part) {
      var cnt = 0;
      var total = 0;

      var _iterator3 = _createForOfIteratorHelper(users),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var user = _step3.value;
          var grade = this.partGrade(user, part);

          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (cnt === 0) {
        return '';
      }

      return Math.round(total / cnt * 10) / 10;
    },
    gradeAverage: function gradeAverage(users) {
      var cnt = 0;
      var total = 0;

      var _iterator4 = _createForOfIteratorHelper(users),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var user = _step4.value;
          var grade = this.grade(user);

          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (cnt === 0) {
        return '';
      }

      return Math.round(total / cnt * 10) / 10;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/GradeHistoryComponent.vue */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue");
/* harmony import */ var _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handbook/Handbook.vue */ "./vendor/cl/grades/js/Handbook/Handbook.vue");
/* harmony import */ var _GradeManual_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeManual.vue */ "./vendor/cl/grades/js/Console/GradeManual.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ConsoleComponentBase = Site.ConsoleComponentBase;
var PrevNextMemberVue = Site.PrevNextMemberVue;
var MemberFetcherComponentVue = Site.MemberFetcherComponentVue;
var SubmissionsAssignmentMemberComponentVue = Site.SubmissionsAssignmentMemberComponentVue;
/**
 * /cl/console/grading/:assignment/:memberid
 * Assignment grading page for a course member
  * @constructor GradingAssignmentMemberVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag', 'memberid'],
  data: function data() {
    return {
      gradingLink: '/cl/console/grading/' + this.assigntag,
      assignment: null,
      graders: [],
      grade: null,
      due: null,
      handbookResult: null,
      reviewing: null
    };
  },
  components: {
    memberFetcher: MemberFetcherComponentVue,
    prevNext: PrevNextMemberVue,
    gradeHistory: _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    submissions: SubmissionsAssignmentMemberComponentVue,
    handbook: _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    gradeManual: _GradeManual_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.setTitle(': Grading');
    this.addNav2('Submit', 2, function () {
      _this.submit();
    });
    this.addNav2('Submit and Exit', 3, function () {
      _this.submit(true);
    });
    this.addNav2Link('Exit', 4, '/cl/console/grading/' + this.assigntag);
  },
  methods: {
    fetched: function fetched(user) {
      var _this2 = this;

      var section = user.member.getSection(this.$store);
      this.assignment = user.member.getAssignment(this.$store, this.assigntag);
      this.setTitle(': ' + user.name + ' ' + this.assignment.shortname + ' Grading');

      if (this.assignment.review === true) {
        this.reviewing = this.$site.console.Review.reviewsbyfor;
      }

      this.$site.api.get("/api/grade/grader/".concat(this.assigntag, "/").concat(this.memberid), {}).then(function (response) {
        if (!response.hasError()) {
          _this2.take(response);
        } else {
          _this2.$site.toast(_this2, response);
        }
      })["catch"](function (error) {
        _this2.$site.toast(_this2, error);
      });
    },
    submit: function submit(exit, callback) {
      var _this3 = this;

      var form = this.$refs['form'];
      var formData = new FormData(form);

      if (this.handbookResult !== null) {
        formData.append('_handbook', JSON.stringify(this.handbookResult));
      }

      this.$site.api.post("/api/grade/grader/".concat(this.assigntag, "/").concat(this.memberid), formData).then(function (response) {
        if (!response.hasError()) {
          _this3.take(response);

          if (exit) {
            _this3.$router.push(_this3.$site.root + '/cl/console/grading/' + _this3.assigntag);
          }

          if (callback !== undefined) {
            callback();
          }
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    },

    /**
     * Distribute grade item to all members of a team.
     * @param item
     */
    teamDistribute: function teamDistribute(item) {
      var _this4 = this;

      this.submit(false, function () {
        var data = {
          teaming: item.teaming,
          gradeTag: item.tag
        };

        _this4.$site.api.post("/api/team/distribute/".concat(_this4.assigntag, "/").concat(_this4.memberid), data).then(function (response) {
          if (!response.hasError()) {} else {
            _this4.$site.toast(_this4, response);
          }
        })["catch"](function (error) {
          _this4.$site.toast(_this4, error);
        });
      });
    },
    take: function take(response) {
      var _this5 = this;

      // Is there an existing locked grader?
      var locked = null;

      for (var i = 0; i < this.graders.length; i++) {
        if (this.graders[i].locked) {
          locked = i;
          break;
        }
      }

      var grader = response.getData('grader');
      this.due = grader.attributes.due !== undefined ? grader.attributes.due : null;

      var _iterator = _createForOfIteratorHelper(grader.attributes.graders),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _grader = _step.value;
          _grader.locked = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.graders = grader.attributes.graders;
      this.grade = grader.attributes.grade;

      if (locked !== null) {
        this.graders[locked].locked = true;
      }

      this.$forceUpdate();
      this.$nextTick(function () {
        _this5.installRubricClickers();

        _this5.$site.message('cl-grades-grader-installed');
      });
    },
    lock: function lock(item) {
      if (item.locked) {
        item.locked = false;
      } else {
        var _iterator2 = _createForOfIteratorHelper(this.graders),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var grader = _step2.value;
            grader.locked = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        item.locked = true;
      }
    },
    /// Install clickers for Rubric items that will autofill them.
    installRubricClickers: function installRubricClickers() {
      var _this6 = this;

      var selectors = ['div.cl-clickable li.item', 'div.cl-clickable ul.items li', 'div.cl-clickable p.item'];

      for (var _i = 0, _selectors = selectors; _i < _selectors.length; _i++) {
        var selector = _selectors[_i];
        var clickables = document.querySelectorAll(selector);

        var _iterator3 = _createForOfIteratorHelper(clickables),
            _step3;

        try {
          var _loop = function _loop() {
            var element = _step3.value;

            if (element.dataset.clickable === undefined) {
              element.addEventListener('click', function () {
                _this6.addContent(element);
              });
              element.setAttribute('data-clickable', 'yes');
            }
          };

          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    },
    /// Add rubric content to the element comment textarea
    addContent: function addContent(element) {
      var content = element.textContent; // Work up until we find the cl-grader-item div

      element = element.parentNode;

      while (element !== null) {
        if (element.classList.contains('cl-grader-item')) {
          break;
        }

        element = element.parentNode;
      }

      if (element === null) {
        return;
      } // Find the item this does with


      var tag = element.dataset.tag;

      var _iterator4 = _createForOfIteratorHelper(this.graders),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;

          if (item.tag === tag) {
            if (item.manual !== undefined) {
              if (item.manual.comment.length > 0 && item.manual.comment.match(/\n$/) === null) {
                item.manual.comment += "\n";
              }

              item.manual.comment += content;
            }

            break;
          }
        } // Find a textarea inside this

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(element.querySelectorAll('textarea')),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var textarea = _step5.value;
          textarea.value = textarea.value + content + "\n";
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    time: function time(t) {
      return this.$site.TimeFormatter.absoluteUNIX(t, 'short');
    },
    email: function email(user) {
      window.location = 'mailto:' + user.email;
    },
    handbookData: function handbookData(data) {
      this.handbookResult = data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//

/**
  * Editor for a single Rubric
  * Component in /cl/console/rubric/:assigntag
  * @constructor RubricEditorVue
  */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['assigntag', 'rubric'],
  mounted: function mounted() {
    var _this = this;

    var element = this.$refs['editor'];
    this.editor = new this.$site.Editor(element, {
      value: this.rubric.rubric,
      tab: true,
      autoIndent: true
    });
    this.editor.textarea.addEventListener('keydown', function () {
      _this.changed();
    });
  },
  methods: {
    changed: function changed() {
      var _this2 = this;

      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this2.timer = null;
        _this2.rubric.show = _this2.$site.Sanitize.sanitize(_this2.editor.textarea.value);
      }, 100);
    },
    submit: function submit() {
      var _this3 = this;

      this.$site.api.post('/api/grade/rubrics/' + this.assigntag + '/' + this.rubric.tag, {
        rubric: this.rubric.show
      }).then(function (response) {
        if (!response.hasError()) {
          _this3.$site.toast(_this3, 'Rubric successfully saved');
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RubricEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue */ "./vendor/cl/grades/js/Console/RubricEditor.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ConsoleComponentBase = Site.ConsoleComponentBase;
var Member = Site.Member;
/**
 * Editor page for all rubrics for an assignment
 * /cl/console/rubric/:assigntag
 * @constructor RubricsEditorVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      ta: Member.TA,
      rubrics: []
    };
  },
  components: {
    rubricEditor: _RubricEditor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var _this = this;

    this.$parent.setTitle(': Assignment Grading');
    this.timer = null;
    var user = this.$store.state.user.user;
    var member = user.member;
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Rubrics');
    this.$site.api.get('/api/grade/rubrics/' + this.assignment.tag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.rubrics = response.getData('rubrics').attributes;

        var _iterator = _createForOfIteratorHelper(_this.rubrics),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var rubric = _step.value;

            _this.$set(rubric, 'show', rubric.rubric);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
  * Handbook editor/viewing Vue component
  *
  * Use by both the student grade presentation page and the
  * assignment grading page.
  * @constructor HandbookVue
  */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      "default": {}
    },
    readonly: {
      "default": false
    }
  },
  watch: {
    item: function item(value) {
      this.take();
    }
  },
  data: function data() {
    return {
      metadata: {},
      total: 0
    };
  },
  mounted: function mounted() {
    this.take();
  },
  methods: {
    take: function take() {
      this.metadata = {};

      var _iterator = _createForOfIteratorHelper(this.item.handbook.categories),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var category = _step.value;
          var _catPoints = this.item.metadata[category.tag];

          if (_catPoints === undefined) {
            _catPoints = 0;
          }

          this.$set(this.metadata, category.tag, _catPoints);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var catPoints = this.item.metadata['_manual'];

      if (catPoints === undefined) {
        catPoints = 0;
      }

      this.$set(this.metadata, '_manual', catPoints);
      var manualText = this.item.metadata['_manual_text'];

      if (manualText === undefined) {
        manualText = '';
      }

      this.$set(this.metadata, '_manual_text', manualText);
      var comment = this.item.metadata['_comment'];

      if (comment === undefined) {
        comment = '';
      }

      this.$set(this.metadata, '_comment', comment);
      this.compute();
    },
    compute: function compute() {
      var total = -this.metadata['_manual'];

      var _iterator2 = _createForOfIteratorHelper(this.item.handbook.categories),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var category = _step2.value;
          total -= this.metadata[category.tag];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      total += this.item.handbook.free;

      if (total > 0) {
        total = 0;
      }

      total *= this.item.multiplier;
      this.total = total;
      this.$emit('handbook-data', {
        'metadata': this.metadata,
        'total': this.total
      });
    },
    deduction: function deduction(deduct) {
      if (deduct === 0) {
        return '';
      } else {
        return -deduct;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/GradeHistoryComponent.vue */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue");
/* harmony import */ var _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handbook/Handbook.vue */ "./vendor/cl/grades/js/Handbook/Handbook.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var UserVueBase = Site.UserVueBase;
/**
 * The assignment grading page for presentation for a user
 *
 * /cl/grade/:assignment
 * @constructor GradeAssignmentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': UserVueBase,
  props: ['json'],
  components: {
    gradeHistory: _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    handbook: _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.setTitle(':  ' + this.json.assignment.shortName + ' Grade for ' + this.user.displayName());
    var menu = [{
      name: 'Grades',
      click: function click() {
        window.location = _this.$site.root + '/cl/grades';
      }
    }];
    this.$parent.setMenu(menu);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var UserVueBase = Site.UserVueBase;
/**
 * The course grading page for presentation of all grades for a user
 *
 * /cl/grades
 * @constructor GradesVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': UserVueBase,
  props: ['json'],
  data: function data() {
    return {
      grade: null,
      per: ''
    };
  },
  mounted: function mounted() {
    this.setTitle('Grades for ' + this.user.displayName()); //  this.setTitle(': Grades ');

    this.grade = this.json;

    if (this.grade.available > 0) {
      this.per = ' (' + (this.grade.grade / this.grade.available * 100).toFixed(1) + '%)';
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['history'],
  data: function data() {
    return {
      history2: []
    };
  },
  watch: {
    history: function history(to, fm) {
      this.history2 = this.history.slice().reverse();
    }
  },
  mounted: function mounted() {
    if (this.history !== undefined) {
      this.history2 = this.history.slice().reverse();
    }
  },
  methods: {
    display: function display(history) {
      var grader = this.$store.getters['course/staff'](history.grader);
      var graderName = grader !== null ? grader.displayName() : "Invalid";
      var str = this.$site.TimeFormatter.absoluteUNIX(history.time, 'short') + ' by ' + graderName;
      return str;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['menu'],
  data: function data() {
    return {
      homeLink: Site.root + '/'
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/grades/_grades.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/grades/_grades.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../site/img/yellowpad.png */ "./vendor/cl/site/img/yellowpad.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment, div.cl-grader table.cl-handbook div.comment, div.cl-grader div.cl-rubric div.cl-show {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc; }\n\ndiv.cl-grades td.role {\n  white-space: nowrap; }\n\ndiv.cl-grader form {\n  position: relative; }\n\ndiv.cl-grader div.cl-grader-item {\n  position: relative;\n  background: white;\n  padding-bottom: 0.25em; }\n  div.cl-grader div.cl-grader-item h2 {\n    margin-top: -0.25em; }\n\ndiv.cl-grader div.cl-grader-item-locked {\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  top: 50px;\n  z-index: 100;\n  background: #f8fff8; }\n\ndiv.cl-grader a.link-button {\n  display: inline-block;\n  font-size: 0.85em;\n  padding: 0 2px; }\n\ndiv.cl-grader p.cl-title {\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin: 1em 0 0 0; }\n\ndiv.cl-grader p.cl-dispute {\n  text-align: center;\n  margin: 0; }\n\ndiv.cl-grader p.cl-role {\n  text-align: center; }\n\ndiv.cl-grader p.cl-role-staff {\n  color: #c41425; }\n\ndiv.cl-grader p.cl-due {\n  text-align: center;\n  font-style: italic;\n  font-weight: normal;\n  color: #c41425; }\n\ndiv.cl-grader button.cl-grader-button {\n  font-style: italic;\n  font-size: 0.9em;\n  color: black; }\n\ndiv.cl-grader a.cl-extra-link {\n  display: block;\n  float: right;\n  font-size: 0.5em;\n  padding-top: 1em; }\n\ndiv.cl-grader tr.cl-category td {\n  text-align: right; }\n\ndiv.cl-grader tr.cl-category td:first-child {\n  text-align: left; }\n\ndiv.cl-grader tr.cl-assignment td {\n  text-align: right; }\n\ndiv.cl-grader tr.cl-assignment td:first-child {\n  text-align: left;\n  padding-left: 3em; }\n\ndiv.cl-grader div.cl-grade, div.cl-grader div.grader {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start; }\n  div.cl-grader div.cl-grade label, div.cl-grader div.cl-grade div.label, div.cl-grader div.grader label, div.cl-grader div.grader div.label {\n    font-style: italic; }\n    div.cl-grader div.cl-grade label a, div.cl-grader div.cl-grade div.label a, div.cl-grader div.grader label a, div.cl-grader div.grader div.label a {\n      font-size: 0.85em;\n      text-decoration: none;\n      padding-left: 1em; }\n  div.cl-grader div.cl-grade div.comment, div.cl-grader div.grader div.comment {\n    flex: 1 1 auto;\n    padding: 0 20px 0 0; }\n    div.cl-grader div.cl-grade div.comment textarea, div.cl-grader div.grader div.comment textarea {\n      display: block;\n      width: 100%; }\n    div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n      white-space: pre-wrap;\n      background: #f0f0f0;\n      font-style: normal;\n      border: 1px solid #a9a9a9;\n      height: 120px;\n      overflow: auto;\n      padding: 2px; }\n  div.cl-grader div.cl-grade div.points, div.cl-grader div.grader div.points {\n    flex: 0 0 auto;\n    width: 5em;\n    text-align: center;\n    padding: 45px 5px 0 0; }\n    div.cl-grader div.cl-grade div.points input, div.cl-grader div.cl-grade div.points div.value, div.cl-grader div.grader div.points input, div.cl-grader div.grader div.points div.value {\n      display: block;\n      width: 100%;\n      text-align: center;\n      font-style: normal;\n      font-weight: bold; }\n    div.cl-grader div.cl-grade div.points span.not, div.cl-grader div.grader div.points span.not {\n      font-size: 0.8em;\n      font-style: italic; }\n  div.cl-grader div.cl-grade div.value, div.cl-grader div.grader div.value {\n    padding: 2px 1px; }\n    div.cl-grader div.cl-grade div.value a, div.cl-grader div.grader div.value a {\n      text-decoration: none;\n      color: black; }\n\ndiv.cl-grader table.cl-handbook {\n  width: 90%; }\n  div.cl-grader table.cl-handbook td:last-child, div.cl-grader table.cl-handbook th:last-child {\n    width: 1px;\n    white-space: nowrap; }\n  div.cl-grader table.cl-handbook input[type=radio] {\n    display: inline-block;\n    padding: 0 2px;\n    margin: 0 2px; }\n  div.cl-grader table.cl-handbook input[type=text] {\n    width: 100%; }\n  div.cl-grader table.cl-handbook textarea {\n    width: 100%; }\n  div.cl-grader table.cl-handbook td.cl-deduct {\n    text-align: center;\n    font-size: 1.5em; }\n  div.cl-grader table.cl-handbook div.comment {\n    white-space: pre;\n    background: #f0f0f0;\n    font-style: normal;\n    border: 1px solid #a9a9a9;\n    height: 80px;\n    overflow: auto;\n    padding: 2px;\n    margin: 0.3em 0; }\n\ndiv.cl-grader p.cl-rubric-expand {\n  margin-bottom: 0.1em; }\n\ndiv.cl-grader div.cl-rubricblock {\n  background: #e8f7f3;\n  padding: 5px;\n  border: 1px #808080 solid;\n  word-wrap: normal;\n  font-size: 0.9em; }\n  div.cl-grader div.cl-rubricblock p:first-child, div.cl-grader div.cl-rubricblock ul:first-child {\n    margin-top: 0; }\n  div.cl-grader div.cl-rubricblock p:last-child, div.cl-grader div.cl-rubricblock ul:last-child {\n    margin-bottom: 0; }\n  div.cl-grader div.cl-rubricblock li.item, div.cl-grader div.cl-rubricblock p.item, div.cl-grader div.cl-rubricblock ul.items li {\n    color: #900000;\n    cursor: pointer; }\n  div.cl-grader div.cl-rubricblock li.item:hover, div.cl-grader div.cl-rubricblock p.item:hover, div.cl-grader div.cl-rubricblock ul.items li:hover {\n    color: #c00000; }\n\ndiv.cl-grader textarea {\n  background: #f0f0f0;\n  font-style: normal; }\n\ndiv.cl-grader textarea.yellow-pad {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\ndiv.cl-grader div.grade {\n  border-top: 1px solid black; }\n  div.cl-grader div.grade p:first-child {\n    text-align: center;\n    font-size: 1.2em; }\n\ndiv.cl-grader div.cl-rubric div.cl-show {\n  margin: 1em 0;\n  word-wrap: normal;\n  min-height: 8em; }\n\ndiv.cl-grader div.cl-rubric textarea {\n  font-size: 0.9em;\n  margin: 1em 0;\n  background: #f0f0f0;\n  font-style: normal;\n  width: 100%;\n  min-height: 8em; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.cl-bulk-upload form {\n  margin-bottom: 1em;\n}\ndiv.cl-bulk-upload fieldset > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\ndiv.cl-bulk-upload fieldset > div > div {\n    padding-right: 1em;\n}\ndiv.cl-bulk-upload fieldset > div > div p {\n      margin: 0 0 0.5em 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child {\n      margin: 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child input {\n        width: 6.5em;\n}\ndiv.cl-bulk-upload-dlg {\n  width: 400px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "td[data-v-5cf9cddd] {\n  min-width: 30px;\n}\ndiv.category[data-v-5cf9cddd] {\n  color: #fcaf17;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div#cl-column-chooser-component[data-v-56b05980] {\n  padding: 1em;\n}\ndiv#cl-column-chooser-component p[data-v-56b05980] {\n    text-align: left;\n}\ndiv#cl-column-chooser-component div.cl-parts[data-v-56b05980] {\n    display: table;\n    margin: auto;\n}\ndiv#cl-column-chooser-component div.cl-parts > div[data-v-56b05980] {\n      display: table-row;\n}\ndiv#cl-column-chooser-component div.cl-parts > div > div[data-v-56b05980]:first-child {\n        padding-right: 1em;\n        text-align: right;\n}\ndiv#cl-column-chooser-component div.cl-parts > div > div[data-v-56b05980] {\n        display: table-cell;\n        height: 2em;\n}\ndiv#cl-column-chooser-component div.cl-parts div.cl-comment[data-v-56b05980] {\n      font-style: italic;\n      font-size: 0.85em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.cl-grade-history[data-v-177faa53] {\n  max-width: 600px;\n  margin: 1em 0;\n}\np[data-v-177faa53] {\n  font-style: italic;\n  font-size: 0.85em;\n}\np.expander[data-v-177faa53] {\n  margin-bottom: 0;\n}\ndiv.grades[data-v-177faa53] {\n  padding: 2px 0 2px 18px;\n  background-color: #ddffdd;\n}\ndiv.grades p[data-v-177faa53] {\n    margin: 0;\n    padding: 2px 0 0 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-bulk-upload" }, [
    _c("h2", { attrs: { id: "bulk" } }, [_vm._v("Bulk grade uploading")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "This option accepts files in CSV format as produced by CrowdMark and other systems. "
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "full",
        attrs: { method: "post", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.bulkUpload()
          }
        }
      },
      [
        _c("fieldset", [
          _c("legend", [_vm._v("Bulk Upload File")]),
          _vm._v(" "),
          _c("div", [
            _c("div", [_vm._v("File to upload: ")]),
            _vm._v(" "),
            _c("div", [
              _c("p", [
                _c("input", {
                  attrs: { name: "bulkfile", type: "file" },
                  on: {
                    change: function($event) {
                      _vm.bulkFiles = $event.target.files
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("input", { attrs: { type: "submit", value: "Press" } }),
      _vm._v(" to upload the file!")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-grade" }, [
    _c("div", { staticClass: "comment" }, [
      _c("label", [
        _vm._v("Comment "),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.compute()
              }
            }
          },
          [_vm._v("compute")]
        ),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.item.manual.comment,
              expression: "item.manual.comment"
            }
          ],
          staticClass: "comment",
          attrs: { rows: "6", name: _vm.item.tag + "-comment" },
          domProps: { value: _vm.item.manual.comment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.item.manual, "comment", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "points" }, [
      _c("label", [
        _vm._v("Points\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.item.manual.points,
              expression: "item.manual.points"
            }
          ],
          staticClass: "points",
          attrs: {
            type: "number",
            id: _vm.item.tag + "-points",
            name: _vm.item.tag + "-points"
          },
          domProps: { value: _vm.item.manual.points },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.item.manual, "points", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "points" }, [
      _c("div", { staticClass: "label" }, [_vm._v("Available")]),
      _vm._v(" "),
      _c("div", { staticClass: "value" }, [
        _c(
          "a",
          {
            attrs: {
              "data-id": _vm.item.tag + "-points",
              title: "Click to fill in points"
            },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.fillInPoints()
              }
            }
          },
          [_vm._v(_vm._s(_vm.item.manual.available))]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("members-fetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c(
                        "tr",
                        { staticClass: "vertical" },
                        [
                          _c("th", [_vm._v("User")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Role")]),
                          _vm._v(" "),
                          _vm._l(_vm.section.assignments.categories, function(
                            category
                          ) {
                            return [
                              _vm._l(category.assignments, function(
                                assignment
                              ) {
                                return [
                                  _c("th", [
                                    _c("div", { staticClass: "small" }, [
                                      _vm._v(_vm._s(assignment.shortname))
                                    ])
                                  ])
                                ]
                              }),
                              _vm._v(" "),
                              _c("th", [
                                _c("div", { staticClass: "small category" }, [
                                  _vm._v(_vm._s(category.name))
                                ])
                              ])
                            ]
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user) {
                        return _c(
                          "tr",
                          { class: user.role() !== "T" ? "ignore" : "" },
                          [
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.userId))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.name))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.roleName()))]),
                            _vm._v(" "),
                            _vm._l(_vm.section.assignments.categories, function(
                              category
                            ) {
                              return [
                                _vm._l(category.assignments, function(
                                  assignment
                                ) {
                                  return [
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.assignmentGrade(
                                            user,
                                            category,
                                            assignment
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                }),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.categoryGrade(user, category))
                                  )
                                ])
                              ]
                            })
                          ],
                          2
                        )
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("members-fetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c("tr", [
                        _c("th", [_vm._v("User")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Role")])
                      ]),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user) {
                        return _c(
                          "tr",
                          { class: user.role() !== "T" ? "ignore" : "" },
                          [
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.userId))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.name))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.roleName()))])
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("member-fetcher", {
          attrs: {
            id: _vm.memberid,
            faillink: _vm.root + "/cl/console/grades/links"
          },
          on: { fetched: _vm.fetched },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c("prev-next", { attrs: { user: fetcher.user } }),
                  _vm._v(" "),
                  fetcher.user !== null && _vm.grade !== null
                    ? _c("div", [
                        _c(
                          "table",
                          [
                            _c("tr", [
                              _c("th", [_vm._v("Assignment")]),
                              _c("th", [_vm._v(" ")]),
                              _c("th", [_vm._v("Grade")]),
                              _c("th", [_vm._v(" ")]),
                              _c("th", [_vm._v("Grade")])
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.grade.categories, function(category) {
                              return [
                                _c("tr", { staticClass: "cl-category" }, [
                                  _c("td", { attrs: { colspan: "3" } }, [
                                    _vm._v(_vm._s(category.name))
                                  ]),
                                  _c("td", [
                                    _vm._v(_vm._s(category.points) + "%")
                                  ]),
                                  _c("td", [_vm._v(_vm._s(category.grade))])
                                ]),
                                _vm._v(" "),
                                _vm._l(category.assignments, function(
                                  assignment
                                ) {
                                  return _c(
                                    "tr",
                                    {
                                      key: assignment.tag,
                                      staticClass: "cl-assignment"
                                    },
                                    [
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to:
                                                  _vm.root +
                                                  "/cl/console/grading/" +
                                                  assignment.tag +
                                                  "/" +
                                                  fetcher.user.member.id
                                              }
                                            },
                                            [_vm._v(_vm._s(assignment.name))]
                                          )
                                        ],
                                        1
                                      ),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            Math.round(assignment.points * 10) /
                                              10
                                          ) + "%"
                                        )
                                      ]),
                                      _c("td", [
                                        _vm._v(_vm._s(assignment.grade))
                                      ]),
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _vm._v(" ")
                                      ])
                                    ]
                                  )
                                })
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "center" }, [
                          _vm._v(
                            "Click on each assignment for more grading detail"
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "center" }, [
                          _vm._v(
                            "Computed Grade: " +
                              _vm._s(_vm.grade.grade) +
                              " out of " +
                              _vm._s(_vm.grade.available) +
                              " available points" +
                              _vm._s(_vm.per)
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "cl-column-chooser-component" } }, [
    _c("p", [
      _vm._v("Member identifier column:\n    "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.memberIdColumn.id,
              expression: "memberIdColumn.id"
            }
          ],
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.$set(
                _vm.memberIdColumn,
                "id",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        _vm._l(_vm.columns, function(column) {
          return _c("option", [_vm._v(_vm._s(column))])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("p", [_vm._v("Member identifier can be an email address or user ID.")]),
    _vm._v(" "),
    _c("p", { staticClass: "center" }, [
      _vm._v("Select column for each grade item")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cl-parts" },
      [
        _vm._l(_vm.parts, function(part, index) {
          return [
            _c("div", [
              _c("div", [_vm._v(_vm._s(part.name) + ":")]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mapping[part.tag],
                        expression: "mapping[part.tag]"
                      }
                    ],
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.mapping,
                          part.tag,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.columnSelect, function(column) {
                    return _c("option", [_vm._v(_vm._s(column))])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "cl-comment" }, [_vm._v("comment:")]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.commentMapping[part.tag],
                        expression: "commentMapping[part.tag]"
                      }
                    ],
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.commentMapping,
                          part.tag,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.columnSelect, function(column) {
                    return _c("option", [_vm._v(_vm._s(column))])
                  }),
                  0
                )
              ])
            ])
          ]
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("h2", [_vm._v("Grades Summary")]),
        _vm._v(" "),
        _c("ul", [
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: _vm.root + "/cl/console/grades/all" } },
                [_vm._v("All Students")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: _vm.root + "/cl/console/grades/links" } },
                [_vm._v("All Students Grade Links")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.downloadPermission
            ? _c("li", [
                _c("a", { attrs: { href: _vm.root + "/cl/grades/csv" } }, [
                  _vm._v("Download Student Grades")
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.rubricDumperPermission
            ? _c("li", [
                _c(
                  "a",
                  { attrs: { href: _vm.root + "/cl/grades/rubric-dumper" } },
                  [_vm._v("Rubric Dumper")]
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm._l(_vm.section.assignments.categories, function(category) {
          return _c("div", [
            _c("h2", [_vm._v(_vm._s(category.name))]),
            _vm._v(" "),
            _c(
              "ul",
              [
                category.assignments.length === 0
                  ? _c("li", [_c("em", [_vm._v("Pending...")])])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(category.assignments, function(assignment) {
                  return _c(
                    "li",
                    { key: assignment.tag },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: _vm.gradingLink + assignment.tag } },
                        [_vm._v(_vm._s(assignment.name))]
                      ),
                      _vm._v(" "),
                      _vm.user.atLeast(_vm.ta)
                        ? _c(
                            "router-link",
                            {
                              staticClass: "link-button",
                              attrs: {
                                to:
                                  _vm.root +
                                  "/cl/console/rubric/" +
                                  assignment.tag
                              }
                            },
                            [_vm._v("rubrics")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                })
              ],
              2
            )
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grades" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("submissions-links", { attrs: { assignment: _vm.assignment } }),
        _vm._v(" "),
        _c("members-fetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _vm.grades !== null
                    ? _c(
                        "table",
                        { staticClass: "small" },
                        [
                          _c(
                            "tr",
                            { staticClass: "vertical" },
                            [
                              _c("th", [_vm._v("User")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Name")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Role")]),
                              _vm._v(" "),
                              _vm._l(_vm.parts, function(part) {
                                return _c("th", { staticClass: "small" }, [
                                  _c("div", [_vm._v(_vm._s(part.name))])
                                ])
                              }),
                              _vm._v(" "),
                              _vm.grades !== null
                                ? _c("th", { staticClass: "small" }, [
                                    _c("div", [_vm._v("Grade")])
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm._l(fetcher.users, function(user) {
                            return _c(
                              "tr",
                              { class: user.role() !== "T" ? "ignore" : "" },
                              [
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to:
                                            _vm.root + _vm.link + user.member.id
                                        }
                                      },
                                      [_vm._v(_vm._s(user.userId))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to:
                                            _vm.root + _vm.link + user.member.id
                                        }
                                      },
                                      [_vm._v(_vm._s(user.name))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "role" }, [
                                  _vm._v(_vm._s(user.roleName()))
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.parts, function(part) {
                                  return _c("td", { staticClass: "right" }, [
                                    _vm._v(_vm._s(_vm.partGrade(user, part)))
                                  ])
                                }),
                                _vm._v(" "),
                                _vm.grades !== null
                                  ? _c("td", { staticClass: "right" }, [
                                      _vm._v(_vm._s(_vm.grade(user)))
                                    ])
                                  : _vm._e()
                              ],
                              2
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "tr",
                            { staticClass: "divider" },
                            [
                              _c(
                                "td",
                                {
                                  staticClass: "center",
                                  attrs: { colspan: "2" }
                                },
                                [_c("em", [_vm._v("counts")])]
                              ),
                              _vm._v(" "),
                              _c("td", { staticClass: "center" }, [
                                _vm._v(_vm._s(fetcher.users.length))
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.parts, function(part) {
                                return _c("td", { staticClass: "right" }, [
                                  _vm._v(
                                    _vm._s(_vm.partCount(fetcher.users, part))
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _vm.grades !== null
                                ? _c("td", { staticClass: "right" }, [
                                    _vm._v(
                                      _vm._s(_vm.gradesCount(fetcher.users))
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "tr",
                            [
                              _c(
                                "td",
                                {
                                  staticClass: "center",
                                  attrs: { colspan: "2" }
                                },
                                [_c("em", [_vm._v("averages")])]
                              ),
                              _vm._v(" "),
                              _c("td", { staticClass: "center" }, [
                                _vm._v(" ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.parts, function(part) {
                                return _c("td", { staticClass: "right" }, [
                                  _vm._v(
                                    _vm._s(_vm.partAverage(fetcher.users, part))
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _vm.grades !== null
                                ? _c("td", { staticClass: "right" }, [
                                    _vm._v(
                                      _vm._s(_vm.gradeAverage(fetcher.users))
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          )
                        ],
                        2
                      )
                    : _vm._e()
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _vm.parts.length > 0 && _vm.ta
          ? _c("bulk-upload", {
              attrs: { assigntag: _vm.assigntag, parts: _vm.parts }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("member-fetcher", {
          attrs: { id: _vm.memberid, faillink: _vm.gradingLink },
          on: { fetched: _vm.fetched },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c("prev-next", { attrs: { user: fetcher.user } }),
                  _vm._v(" "),
                  fetcher.user !== null
                    ? _c("div", [
                        _c(
                          "form",
                          {
                            ref: "form",
                            attrs: { method: "post" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.submit($event)
                              }
                            }
                          },
                          [
                            _c(
                              "p",
                              {
                                class:
                                  fetcher.user.role() === "T"
                                    ? "cl-role"
                                    : "cl-role cl-role-staff"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(fetcher.user.roleName()) +
                                    ": " +
                                    _vm._s(fetcher.user.name) +
                                    " " +
                                    _vm._s(fetcher.user.role()) +
                                    "\n              "
                                ),
                                _c("em", { staticClass: "small" }, [
                                  _vm._v(_vm._s(fetcher.user.userId))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "cl-grader-button",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.email(fetcher.user)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                email " +
                                        _vm._s(
                                          fetcher.user.roleName().toLowerCase()
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "cl-grader-button",
                                    attrs: {
                                      tag: "button",
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        fetcher.user.member.id
                                    }
                                  },
                                  [_vm._v("student grades\n              ")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.due !== null
                              ? _c("p", { staticClass: "cl-due" }, [
                                  _vm._v(
                                    "Assignment due " +
                                      _vm._s(_vm.time(_vm.due)) +
                                      " "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.graders, function(item) {
                              return _c(
                                "div",
                                {
                                  class:
                                    "cl-grader-item" +
                                    (item.locked
                                      ? " cl-grader-item-locked"
                                      : ""),
                                  attrs: { "data-tag": item.tag }
                                },
                                [
                                  _c("h2", [
                                    _c(
                                      "span",
                                      { staticClass: "cl-grader-item-lock" },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: { title: "Lock/Unlock" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.lock(item)
                                              }
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  _vm.root +
                                                  (item.locked
                                                    ? "/cl/img/lock-on.png"
                                                    : "/cl/img/lock-off.png"),
                                                alt: "Unlocked"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(
                                      "\n              " + _vm._s(item.name)
                                    ),
                                    item.teaming !== undefined
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "cl-extra-link",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.teamDistribute(item)
                                              }
                                            }
                                          },
                                          [_vm._v("Team Distribute")]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  item.rubric !== undefined
                                    ? [
                                        _c(
                                          "div",
                                          { staticClass: "cl-toggle" },
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass: "cl-rubric-expand"
                                              },
                                              [
                                                _c("a", [
                                                  _vm._v("Expand for rubric")
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "cl-rubricblock cl-clickable"
                                              },
                                              [
                                                _c("div", {
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      item.rubric
                                                    )
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.manual !== undefined
                                    ? _c("grade-manual", {
                                        attrs: { item: item }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.html !== undefined
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(item.html)
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.handbook !== undefined
                                    ? _c("handbook", {
                                        attrs: { item: item },
                                        on: {
                                          "handbook-data": _vm.handbookData
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("grade-history", {
                                    attrs: { history: item.history }
                                  })
                                ],
                                2
                              )
                            }),
                            _vm._v(" "),
                            _c("submissions", {
                              attrs: {
                                user: fetcher.user,
                                assigntag: _vm.assigntag
                              }
                            }),
                            _vm._v(" "),
                            _vm.reviewing !== null
                              ? _c(_vm.reviewing, {
                                  tag: "component",
                                  attrs: {
                                    assigntag: _vm.assigntag,
                                    user: fetcher.user
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "grade" },
                              [
                                _vm.grade !== null
                                  ? _c("p", [
                                      _vm._v(
                                        "Computed Grade: " + _vm._s(_vm.grade)
                                      )
                                    ])
                                  : [
                                      _c("p", [_vm._v("Grade Not Available")]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "center small notice" },
                                        [
                                          _vm._v(
                                            "Grades are not available until all parts of the assignment have been\n                  graded."
                                          )
                                        ]
                                      )
                                    ]
                              ],
                              2
                            )
                          ],
                          2
                        )
                      ])
                    : _vm._e()
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v(_vm._s(_vm.rubric.name))]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit()
          }
        }
      },
      [
        _c("div", {
          staticClass: "cl-rubricblock cl-show",
          domProps: { innerHTML: _vm._s(_vm.rubric.show) }
        }),
        _vm._v(" "),
        _c("div", { ref: "editor" }),
        _vm._v(" "),
        _c("button", { attrs: { type: "submit" } }, [_vm._v("Submit")])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content cl-grader" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.rubrics, function(rubric) {
        return _c(
          "div",
          { staticClass: "cl-rubric" },
          [
            _c("rubric-editor", {
              attrs: { assigntag: _vm.assigntag, rubric: rubric }
            })
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cl-toggle" }, [
      _c("p", [
        _c("a", [_vm._v("Expand for instructions on creating rubrics.")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cl-toggleblock" }, [
        _c("p", [
          _vm._v(
            "Rubrics are entered as HTML. A common format is to\n        create lists using <ul> and <li> tags."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Contents of an <li> or <p> tag can be make\n        clickable so they automatically appear in the comment\n        window by adding the class 'item'. All <li> children\n        of a <ul> can be made clickable by adding the\n        class 'items':"
          )
        ]),
        _vm._v(" "),
        _c("pre", { staticClass: "code" }, [
          _vm._v(
            '<ul>\n   <li class="item">This item will be clickable</li>\n   <li>This item will not be clickable</li>\n</ul>\n\n<p class="item">And this will be clickable</p>\n\n<ul class="items">\n   <li>All of these items will be clickable</li>\n   <li>This one, too!</li>\n</ul>\n      '
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "table",
      { staticClass: "cl-handbook" },
      [
        _c("tr", [
          _c("th", [
            _vm._v("Category"),
            _c("br"),
            _vm._v("Multiplier: " + _vm._s(_vm.item.multiplier))
          ]),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _vm._l(_vm.item.handbook.categories, function(category) {
          return _c("tr", [
            _c(
              "td",
              [
                category.rubric !== undefined
                  ? [
                      _c("div", { staticClass: "cl-toggle cl-single-space" }, [
                        _c("span", [_c("a", [_vm._v(_vm._s(category.name))])]),
                        _vm._v(" "),
                        _c("div", { staticClass: "cl-rubricblock" }, [
                          _c("div", {
                            domProps: { innerHTML: _vm._s(category.rubric) }
                          })
                        ])
                      ])
                    ]
                  : [_vm._v(_vm._s(category.name))]
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "center" },
              [
                !_vm.readonly
                  ? _vm._l(category.deduct + 1, function(deduct) {
                      return _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.metadata[category.tag],
                            expression: "metadata[category.tag]"
                          }
                        ],
                        attrs: { type: "radio" },
                        domProps: {
                          value: deduct - 1,
                          checked: _vm._q(
                            _vm.metadata[category.tag],
                            deduct - 1
                          )
                        },
                        on: {
                          change: [
                            function($event) {
                              return _vm.$set(
                                _vm.metadata,
                                category.tag,
                                deduct - 1
                              )
                            },
                            _vm.compute
                          ]
                        }
                      })
                    })
                  : _c("span", [
                      _vm._v(_vm._s(_vm.deduction(_vm.metadata[category.tag])))
                    ])
              ],
              2
            )
          ])
        }),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            !_vm.readonly
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.metadata["_manual_text"],
                      expression: "metadata['_manual_text']"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.metadata["_manual_text"] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.metadata,
                        "_manual_text",
                        $event.target.value
                      )
                    }
                  }
                })
              : _c("span", [_vm._v(_vm._s(_vm.metadata["_manual_text"]))])
          ]),
          _vm._v(" "),
          _c(
            "td",
            { staticClass: "center" },
            [
              !_vm.readonly
                ? _vm._l(5, function(deduct) {
                    return _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.metadata["_manual"],
                          expression: "metadata['_manual']"
                        }
                      ],
                      attrs: { type: "radio" },
                      domProps: {
                        value: deduct - 1,
                        checked: _vm._q(_vm.metadata["_manual"], deduct - 1)
                      },
                      on: {
                        change: [
                          function($event) {
                            return _vm.$set(_vm.metadata, "_manual", deduct - 1)
                          },
                          _vm.compute
                        ]
                      }
                    })
                  })
                : _c("span", [
                    _vm._v(_vm._s(_vm.deduction(_vm.metadata["_manual"])))
                  ])
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            !_vm.readonly
              ? _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.metadata["_comment"],
                      expression: "metadata['_comment']"
                    }
                  ],
                  attrs: { rows: "3" },
                  domProps: { value: _vm.metadata["_comment"] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.metadata, "_comment", $event.target.value)
                    }
                  }
                })
              : _c("div", { staticClass: "comment" }, [
                  _vm._v(_vm._s(_vm.metadata["_comment"]))
                ])
          ]),
          _c("td", { staticClass: "cl-deduct" }, [_vm._v(_vm._s(_vm.total))])
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_vm._v("Deduction"), _c("br"), _vm._v("0 to max")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "cl-internal" }, [
      _c("th", [_vm._v("Comment")]),
      _c("th", [_vm._v("Deduction")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("div", { staticClass: "cl-autoback" }),
        _vm._v(" "),
        _c("p", { staticClass: "cl-title" }, [
          _vm._v(_vm._s(_vm.json.assignment.name))
        ]),
        _vm._v(" "),
        _vm.json.dispute !== null
          ? _c("p", { staticClass: "cl-dispute" }, [
              _vm._v("Please direct all grading issues to "),
              _c("span", { domProps: { innerHTML: _vm._s(_vm.json.dispute) } })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.json.grades, function(item) {
          return item.html !== undefined
            ? _c(
                "div",
                [
                  _c("h2", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  item.handbook === undefined
                    ? _c("div", { domProps: { innerHTML: _vm._s(item.html) } })
                    : _c("handbook", {
                        attrs: { item: item, readonly: "true" }
                      }),
                  _vm._v(" "),
                  _c("grade-history", { attrs: { history: item.history } })
                ],
                1
              )
            : _vm._e()
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "grade" },
          [
            _vm.json.grade !== null
              ? _c("p", [_vm._v("Computed Grade: " + _vm._s(_vm.json.grade))])
              : [
                  _c("p", [_vm._v("Grade Not Available")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "center small notice" }, [
                    _vm._v(
                      "Grades are not available until all parts of the assignment have been graded."
                    )
                  ])
                ]
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "cl-autoback" })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c("div", { staticClass: "full" }, [
      _vm.grade !== null
        ? _c("div", [
            _c(
              "table",
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.grade.categories, function(category) {
                  return [
                    _c("tr", { staticClass: "cl-category" }, [
                      _c("td", { attrs: { colspan: "3" } }, [
                        _vm._v(_vm._s(category.name))
                      ]),
                      _c("td", [_vm._v(_vm._s(category.points) + "%")]),
                      _c("td", [_vm._v(_vm._s(category.grade))])
                    ]),
                    _vm._v(" "),
                    _vm._l(category.assignments, function(assignment) {
                      return _c(
                        "tr",
                        { key: assignment.tag, staticClass: "cl-assignment" },
                        [
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.root + "/cl/grade/" + assignment.tag
                                }
                              },
                              [_vm._v(_vm._s(assignment.name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(Math.round(assignment.points * 10) / 10) +
                                "%"
                            )
                          ]),
                          _c("td", [_vm._v(_vm._s(assignment.grade))]),
                          _c("td", { attrs: { colspan: "2" } }, [_vm._v(" ")])
                        ]
                      )
                    })
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("p", { staticClass: "center" }, [
              _vm._v("Click on each assignment for more grading detail")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "center" }, [
              _vm._v(
                "Computed Grade: " +
                  _vm._s(_vm.grade.grade) +
                  " out of " +
                  _vm._s(_vm.grade.available) +
                  " available points" +
                  _vm._s(_vm.per)
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Assignment")]),
      _c("th", [_vm._v(" ")]),
      _c("th", [_vm._v("Grade")]),
      _c("th", [_vm._v(" ")]),
      _c("th", [_vm._v("Grade")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-grade-history" }, [
    _vm.history2.length > 0
      ? _c("div", [
          _vm.history2.length > 1
            ? _c("div", { staticClass: "cl-toggle" }, [
                _c("p", { staticClass: "expander" }, [
                  _c("a", [
                    _vm._v(
                      _vm._s(_vm.display(_vm.history2[0])) +
                        " / Expand for additional grading history"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "grades" },
                  _vm._l(_vm.history2, function(h) {
                    return _c("p", [_vm._v(_vm._s(_vm.display(h)))])
                  }),
                  0
                )
              ])
            : _c("div", [
                _c("p", [_vm._v(_vm._s(_vm.display(_vm.history2[0])))])
              ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "cl-nav" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "dividers" },
        [
          _c("li", [
            _c("a", { attrs: { href: _vm.homeLink } }, [
              _c("span", { staticClass: "home" }, [_vm._v("Home")])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.menu, function(item) {
            return _c("li", [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return item.click()
                    }
                  }
                },
                [_vm._v(_vm._s(item.name))]
              )
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2cf5eec8", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b1150026", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a4d1e56c", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8ab1f9ce", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/grades/_grades.scss":
/*!***************************************!*\
  !*** ./vendor/cl/grades/_grades.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_grades.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/grades/_grades.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6b465c2e", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_grades.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/grades/_grades.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_grades.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./vendor/cl/grades/_grades.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/grades/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/grades/index.js ***!
  \***********************************/
/*! exports provided: Grades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grades", function() { return Grades; });
/* harmony import */ var _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/GradesFactory */ "./vendor/cl/grades/js/GradesFactory.js");
/* harmony import */ var _js_Console_GradesConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/GradesConsole */ "./vendor/cl/grades/js/Console/GradesConsole.js");
/* harmony import */ var _grades_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_grades.scss */ "./vendor/cl/grades/_grades.scss");
/* harmony import */ var _grades_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grades_scss__WEBPACK_IMPORTED_MODULE_2__);



var Grades = _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__["GradesFactory"].create(Site.Site);

if (Site.Site.console !== undefined) {
  _js_Console_GradesConsole__WEBPACK_IMPORTED_MODULE_1__["GradesConsole"].install(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue":
/*!******************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('42d68b0b')) {
      api.createRecord('42d68b0b', component.options)
    } else {
      api.reload('42d68b0b', component.options)
    }
    module.hot.accept(/*! ./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");
(function () {
      api.rerender('42d68b0b', {
        render: _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&":
/*!*************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");
/* harmony import */ var _GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4d9993d5')) {
      api.createRecord('4d9993d5', component.options)
    } else {
      api.reload('4d9993d5', component.options)
    }
    module.hot.accept(/*! ./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");
(function () {
      api.rerender('4d9993d5', {
        render: _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradeManual.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeManual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
/* harmony import */ var _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cf9cddd",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5cf9cddd')) {
      api.createRecord('5cf9cddd', component.options)
    } else {
      api.reload('5cf9cddd', component.options)
    }
    module.hot.accept(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
(function () {
      api.rerender('5cf9cddd', {
        render: _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesAll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesConsole.js":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesConsole.js ***!
  \******************************************************/
/*! exports provided: GradesConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesConsole", function() { return GradesConsole; });
/* harmony import */ var _Grading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue */ "./vendor/cl/grades/js/Console/Grading.vue");
/* harmony import */ var _GradingAssignment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignment.vue */ "./vendor/cl/grades/js/Console/GradingAssignment.vue");
/* harmony import */ var _GradingAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradingAssignmentMember.vue */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue");
/* harmony import */ var _GradesLinks_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradesLinks.vue */ "./vendor/cl/grades/js/Console/GradesLinks.vue");
/* harmony import */ var _GradesAll_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GradesAll.vue */ "./vendor/cl/grades/js/Console/GradesAll.vue");
/* harmony import */ var _GradesMember_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GradesMember.vue */ "./vendor/cl/grades/js/Console/GradesMember.vue");
/* harmony import */ var _RubricsEditor_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RubricsEditor.vue */ "./vendor/cl/grades/js/Console/RubricsEditor.vue");







var Member = Site.Member;
/**
 * The grades console component.
 *
 * Handles installations in the console system.
 * @constructor
 */

var GradesConsole = function GradesConsole() {};
/**
 * Install functionality into the console system.
 * @param Console
 */

GradesConsole.install = function (Console) {
  Console.components.addOption({
    atLeast: Member.GRADER,
    page: {
      atLeast: Member.GRADER,
      title: 'Grading',
      route: '/grading',
      order: 4,
      component: _Grading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
  });
  Console.components.addRoutes([{
    route: '/grading/:assigntag',
    component: _GradingAssignment_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    props: true
  }, {
    route: '/grading/:assigntag/:memberid',
    component: _GradingAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    props: true
  }, {
    route: '/rubric/:assigntag',
    component: _RubricsEditor_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    props: true
  }, {
    route: '/grades/links',
    component: _GradesLinks_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    route: '/grades/all',
    component: _GradesAll_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    route: '/grades/:memberid',
    component: _GradesMember_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    props: true
  }]);
  Console.tables.add({
    title: 'Grades',
    order: 40,
    api: '/api/grade/tables'
  });
};

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
/* harmony import */ var _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('02b64216')) {
      api.createRecord('02b64216', component.options)
    } else {
      api.reload('02b64216', component.options)
    }
    module.hot.accept(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
(function () {
      api.rerender('02b64216', {
        render: _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesLinks.vue?vue&type=template&id=02b64216& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
/* harmony import */ var _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('20ef238e')) {
      api.createRecord('20ef238e', component.options)
    } else {
      api.reload('20ef238e', component.options)
    }
    module.hot.accept(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
(function () {
      api.rerender('20ef238e', {
        render: _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesMember.vue?vue&type=template&id=20ef238e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue":
/*!*******************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56b05980",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('56b05980')) {
      api.createRecord('56b05980', component.options)
    } else {
      api.reload('56b05980', component.options)
    }
    module.hot.accept(/*! ./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");
(function () {
      api.rerender('56b05980', {
        render: _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue":
/*!*************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
/* harmony import */ var _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grading.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7fd146a8')) {
      api.createRecord('7fd146a8', component.options)
    } else {
      api.reload('7fd146a8', component.options)
    }
    module.hot.accept(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
(function () {
      api.rerender('7fd146a8', {
        render: _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/Grading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grading.vue?vue&type=template&id=7fd146a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
/* harmony import */ var _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2030f819')) {
      api.createRecord('2030f819', component.options)
    } else {
      api.reload('2030f819', component.options)
    }
    module.hot.accept(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
(function () {
      api.rerender('2030f819', {
        render: _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue":
/*!*****************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('01669d13')) {
      api.createRecord('01669d13', component.options)
    } else {
      api.reload('01669d13', component.options)
    }
    module.hot.accept(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
(function () {
      api.rerender('01669d13', {
        render: _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignmentMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
/* harmony import */ var _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('df15235c')) {
      api.createRecord('df15235c', component.options)
    } else {
      api.reload('df15235c', component.options)
    }
    module.hot.accept(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
(function () {
      api.rerender('df15235c', {
        render: _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/RubricEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricEditor.vue?vue&type=template&id=df15235c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
/* harmony import */ var _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5566d74b')) {
      api.createRecord('5566d74b', component.options)
    } else {
      api.reload('5566d74b', component.options)
    }
    module.hot.accept(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
(function () {
      api.rerender('5566d74b', {
        render: _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Console/RubricsEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricsEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/GradesFactory.js":
/*!**********************************************!*\
  !*** ./vendor/cl/grades/js/GradesFactory.js ***!
  \**********************************************/
/*! exports provided: GradesFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesFactory", function() { return GradesFactory; });
/* harmony import */ var site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVue */ "./vendor/cl/site/js/Vue/PageVue.js");
/* harmony import */ var _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User/GradeAssignment.vue */ "./vendor/cl/grades/js/User/GradeAssignment.vue");
/* harmony import */ var _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User/Grades.vue */ "./vendor/cl/grades/js/User/Grades.vue");
/* harmony import */ var site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! site-cl/js/Vue/PageNav.vue */ "./vendor/cl/site/js/Vue/PageNav.vue");




var GradesFactory = function GradesFactory() {};

GradesFactory.create = function (site) {
  var Grades = function Grades() {};

  site.ready(function () {
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__["PageVue"].create('div.cl-grade-assignment', 'Assignment Grade', _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__["PageVue"].create('div.cl-grades', 'Grades', _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });
  return Grades;
};

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
/* harmony import */ var _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Handbook.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('62dab77f')) {
      api.createRecord('62dab77f', component.options)
    } else {
      api.reload('62dab77f', component.options)
    }
    module.hot.accept(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
(function () {
      api.rerender('62dab77f', {
        render: _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Handbook/Handbook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Handbook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Handbook.vue?vue&type=template&id=62dab77f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
/* harmony import */ var _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5f2b0b20')) {
      api.createRecord('5f2b0b20', component.options)
    } else {
      api.reload('5f2b0b20', component.options)
    }
    module.hot.accept(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
(function () {
      api.rerender('5f2b0b20', {
        render: _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/User/GradeAssignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
/* harmony import */ var _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grades.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('270419e0')) {
      api.createRecord('270419e0', component.options)
    } else {
      api.reload('270419e0', component.options)
    }
    module.hot.accept(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
(function () {
      api.rerender('270419e0', {
        render: _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/User/Grades.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grades.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grades.vue?vue&type=template&id=270419e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue":
/*!************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "177faa53",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('177faa53')) {
      api.createRecord('177faa53', component.options)
    } else {
      api.reload('177faa53', component.options)
    }
    module.hot.accept(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
(function () {
      api.rerender('177faa53', {
        render: _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/grades/js/Util/GradeHistoryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/img/yellowpad.png":
/*!******************************************!*\
  !*** ./vendor/cl/site/img/yellowpad.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAIAAACtjN7AAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAHlJREFUOI3t0rENg0AUA1D7n+EqKpQZMkFmZDtKNkiTHiECucsKbhBC4tdPLvzNbR7gHHNYDgBwDBVQPVlVIDNUisWjRevWOZDMGt8vh0YkPR+TQytb9d3HoQVZ+954qY1o93r6Bm6qiK8nea29/uhQkGJNFkU6/Vt/PUghIGwDWDIAAAAASUVORK5CYII=");

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony import */ var _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNav.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0dbf4cb0')) {
      api.createRecord('0dbf4cb0', component.options)
    } else {
      api.reload('0dbf4cb0', component.options)
    }
    module.hot.accept(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
(function () {
      api.rerender('0dbf4cb0', {
        render: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVue.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVue.js ***!
  \******************************************/
/*! exports provided: PageVue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVue", function() { return PageVue; });
/**
 * Basic Vue-based site page starter
 *
 * How to use:
 * @code
 * site.ready(() => {
 *    PageVue.create('div.cl-grade-assignment', 'Assignment Grade', GradeAssignmentVue);
 *    PageVue.create('div.cl-grades', 'Grades', GradesVue);
 * });
 * @endcode
 *
 * @constructor PageVue
 */
var PageVue = function PageVue() {};
/**
 * Create a page in a given component, replacing the provided
 * selector. The selector is assumed to contain JSON data that is
 * then provided to the component in the json property.
 *
 * @param sel Selector for a div to replace with the view.
 * @param title Initial title to apply to the page
 * @param component Component to display (Vue)
 * @param nav Optional navigation component, like PageNav
 */

PageVue.create = function (sel, title, component, nav) {
  var element = document.querySelector(sel);

  if (element === null) {
    return;
  }

  var navtag = nav !== undefined ? '<page-nav :menu="menu"></page-nav>' : '';
  var template = "<div><site-header :title=\"title\">".concat(navtag, "</site-header>\n<page-vue :json=\"json\"></page-vue><site-footer></site-footer>\n</div>");
  var Header = Site.info.header.component();
  var Footer = Site.info.footer.component();
  var json = JSON.parse(element.textContent);
  var store = Site.store;
  var site = Site.Site;
  var components = {
    'site-header': Header,
    'site-footer': Footer,
    'page-vue': component
  };

  if (nav !== undefined) {
    components['page-nav'] = nav;
  }

  new Site.Vue({
    el: element,
    site: site,
    store: store,
    data: {
      title: title,
      json: json,
      menu: []
    },
    template: template,
    components: components,
    methods: {
      /**
       * Set the site title. This can be used from
       * the child Vue's using this.$parent.setTitle('')
       * @memberof PageVue
       * @instance
       * @param {string} title Title to set
       */
      setTitle: function setTitle(title) {
        this.title = title;
        document.title = Site.info.siteName + ' ' + title;
      },
      setMenu: function setMenu(menu) {
        this.menu = menu;
      },
      getMenu: function getMenu() {
        return this.menu;
      }
    }
  });
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZU1hbnVhbC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9fZ3JhZGVzLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/YTA2NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT82NzhiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT81M2VjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlPzZhYmQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/YWQzNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVNYW51YWwudnVlP2RiMGYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0FsbC52dWU/MDdlZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlP2E2ZDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc01lbWJlci52dWU/NzZkYSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/ODU4NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWU/ODk0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnQudnVlPzU5NTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT85NTg2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlPzI2ZGUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY3NFZGl0b3IudnVlPzFiMWIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWU/ZTkxYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZT9lOTZlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlP2JhNzIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/M2YxMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/ZTQ0MiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT85ZmE4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlP2VhOTYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP2UwNWQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/Mzg4NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL19ncmFkZXMuc2Nzcz9iYzYzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/MmI0OSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT9lOTEzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlPzQ1OTgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlTWFudWFsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVNYW51YWwudnVlP2Q5NmUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlTWFudWFsLnZ1ZT81YzA5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlP2Y4YTAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0FsbC52dWU/Y2ZlNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT8zZTAxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNDb25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0xpbmtzLnZ1ZT85NGRmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNMaW5rcy52dWU/MjA0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZT81YWFjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlP2Y5YzIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT9kZWVjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT81OGQ2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT9lNTE2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWU/YWZlMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWU/MmNhNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWU/NWYxNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnQudnVlPzAxNTgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlPzQwMzYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT8zMDFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlPzc0NTIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY0VkaXRvci52dWU/ZjUzZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY3NFZGl0b3IudnVlPzQwMzAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY3NFZGl0b3IudnVlPzJkZTIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9HcmFkZXNGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlPzM5NjkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWU/NDg1YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZT9kNThiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlP2YzZjkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWU/MDU4MCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVzLnZ1ZT8xMzA2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlPzAzZWQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/M2UwMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT9hYWZhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2ltZy95ZWxsb3dwYWQucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/ZDNhZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/YTJmMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZS5qcyJdLCJuYW1lcyI6WyJHcmFkZXMiLCJHcmFkZXNGYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsImNvbnNvbGUiLCJ1bmRlZmluZWQiLCJHcmFkZXNDb25zb2xlIiwiaW5zdGFsbCIsIk1lbWJlciIsIkNvbnNvbGUiLCJjb21wb25lbnRzIiwiYWRkT3B0aW9uIiwiYXRMZWFzdCIsIkdSQURFUiIsInBhZ2UiLCJ0aXRsZSIsInJvdXRlIiwib3JkZXIiLCJjb21wb25lbnQiLCJHcmFkaW5nVnVlIiwiYWRkUm91dGVzIiwiR3JhZGluZ0Fzc2lnbm1lbnRWdWUiLCJwcm9wcyIsIkdyYWRpbmdBc3NpZ25tZW50TWVtYmVyVnVlIiwiUnVicmljc0VkaXRvclZ1ZSIsIkdyYWRlc0xpbmtzVnVlIiwiR3JhZGVzQWxsVnVlIiwiR3JhZGVzTWVtYmVyVnVlIiwidGFibGVzIiwiYWRkIiwiYXBpIiwic2l0ZSIsInJlYWR5IiwiUGFnZVZ1ZSIsIkdyYWRlQXNzaWdubWVudFZ1ZSIsIlBhZ2VOYXYiLCJHcmFkZXNWdWUiLCJzZWwiLCJuYXYiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2dGFnIiwidGVtcGxhdGUiLCJIZWFkZXIiLCJpbmZvIiwiaGVhZGVyIiwiRm9vdGVyIiwiZm9vdGVyIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50Iiwic3RvcmUiLCJWdWUiLCJlbCIsImRhdGEiLCJtZW51IiwibWV0aG9kcyIsInNldFRpdGxlIiwic2l0ZU5hbWUiLCJzZXRNZW51IiwiZ2V0TWVudSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0Esa0JBQWtCLDhCQUE4QjtRQUNoRDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLGlDQURBO0FBRUEsc0JBRkE7QUFHQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUZBO0FBSUEsR0FSQTtBQVNBO0FBQ0E7QUFEQSxHQVRBO0FBWUEsU0FaQSxxQkFZQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEsd0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTs7QUFEQSxtREFFQSxhQUZBO0FBQUE7O0FBQUE7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsT0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUVBLEtBWEEsV0FZQTtBQUNBO0FBQ0EsS0FkQTtBQWVBO0FBdkNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSxLQURBO0FBRUE7QUFBQTtBQUFBO0FBRkEsR0FEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEEsR0FMQTtBQVVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQSxHQWZBO0FBZ0JBLFNBaEJBLHFCQWdCQTtBQUNBO0FBQ0EsR0FsQkE7QUFtQkE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7O0FBREEsaURBRUEsNkJBRkE7QUFBQTs7QUFBQTtBQUVBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQSxLQWhDQTtBQWlDQSxXQWpDQSxxQkFpQ0E7QUFDQTs7QUFEQSxrREFFQSw2QkFGQTtBQUFBOztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFK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QixTQUFLLEVBQUxBLEtBSFM7QUFJVEcsUUFBSSxFQUFFO0FBQ0Z6QyxXQUFLLEVBQUVBLEtBREw7QUFFRmtDLFVBQUksRUFBRUEsSUFGSjtBQUdGUSxVQUFJLEVBQUU7QUFISixLQUpHO0FBU1RkLFlBQVEsRUFBRUEsUUFURDtBQVVUakMsY0FBVSxFQUFFQSxVQVZIO0FBV1RnRCxXQUFPLEVBQUU7QUFDTDtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNZQyxjQUFRLEVBQUUsa0JBQVM1QyxLQUFULEVBQWdCO0FBQ3RCLGFBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBeUIsZ0JBQVEsQ0FBQ3pCLEtBQVQsR0FBaUJaLElBQUksQ0FBQzBDLElBQUwsQ0FBVWUsUUFBVixHQUFxQixHQUFyQixHQUEyQjdDLEtBQTVDO0FBQ0gsT0FYSTtBQVlMOEMsYUFBTyxFQUFFLGlCQUFTSixJQUFULEVBQWU7QUFDcEIsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0gsT0FkSTtBQWVMSyxhQUFPLEVBQUUsbUJBQVc7QUFDaEIsZUFBTyxLQUFLTCxJQUFaO0FBQ0g7QUFqQkk7QUFYQSxHQUFiO0FBK0JILENBM0RELEMiLCJmaWxlIjoiZ3JhZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR3JhZGVzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdyYWRlc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI0ZDNlMWQyNmU4NjUyMjU3ZDYwN1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJHcmFkZXNcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvZ3JhZGVzL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLWJ1bGstdXBsb2FkXCI+XHJcbiAgICA8aDIgaWQ9XCJidWxrXCI+QnVsayBncmFkZSB1cGxvYWRpbmc8L2gyPlxyXG4gICAgPHA+VGhpcyBvcHRpb24gYWNjZXB0cyBmaWxlcyBpbiBDU1YgZm9ybWF0IGFzIHByb2R1Y2VkIGJ5IENyb3dkTWFyayBhbmQgb3RoZXIgc3lzdGVtcy4gPC9wPlxyXG5cclxuICAgIDxmb3JtIGNsYXNzPVwiZnVsbFwiIEBzdWJtaXQucHJldmVudD1cImJ1bGtVcGxvYWQoKVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgPGxlZ2VuZD5CdWxrIFVwbG9hZCBGaWxlPC9sZWdlbmQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+RmlsZSB0byB1cGxvYWQ6IDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+PGlucHV0IG5hbWU9XCJidWxrZmlsZVwiIHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cImJ1bGtGaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcIj48L3A+XHJcbiAgICAgICAgICAgIDxwPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQcmVzc1wiPiB0byB1cGxvYWQgdGhlIGZpbGUhPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBHcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyQ29tcG9uZW50IGZyb20gJy4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWUnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydhc3NpZ250YWcnLCAncGFydHMnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBidWxrRmlsZXM6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgYnVsa1VwbG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNpdGUgPSB0aGlzLiRzaXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5idWxrRmlsZXMgPT09IG51bGwgfHwgdGhpcy5idWxrRmlsZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmJ1bGtGaWxlc1swXTtcclxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc3VyZSB0byBjYXB0dXJlIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWVtYmVyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyLm1lbWJlcjtcclxuXHJcbiAgICAgICAgICAvLyBEYXRhIHdlIHdpbGwgc2VuZCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgZmlsZTogZS50YXJnZXQucmVzdWx0LFxyXG4gICAgICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvbixcclxuICAgICAgICAgICAgbWFwcGluZzogJycsXHJcbiAgICAgICAgICAgIGNvbW1lbnRNYXBwaW5nOiAnJyxcclxuICAgICAgICAgICAgaWRjb2x1bW46ICcnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9cclxuICAgICAgICAgIC8vIFJlYWQgdGhlIGZpcnN0IGxpbmUgb2YgdGhlIENTViBmaWxlIHRvIGdldCB0aGUgZmllbGRzXHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgY29uc3QgcmUgPSAvXi4qJC9tO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2ggPSBlLnRhcmdldC5yZXN1bHQubWF0Y2gocmUpO1xyXG4gICAgICAgICAgaWYgKG1hdGNoID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ldyBzaXRlLkRpYWxvZy5NZXNzYWdlQm94KCdJbnZhbGlkIEZpbGUnLCAnRmlsZSBkb2VzIG5vdCBjb250YWluIGdyYWRlIGRhdGEuJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXRlLkRpYWxvZy5NZXNzYWdlQm94Lk9LLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBjb2x1bW5zID0gbWF0Y2hbMF0uc3BsaXQoJywnKTtcclxuICAgICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wYXJ0cztcclxuICAgICAgICAgIGxldCBtYXBwaW5nID0ge307XHJcbiAgICAgICAgICBsZXQgY29tbWVudE1hcHBpbmcgPSB7fTtcclxuICAgICAgICAgIGxldCBpZENvbHVtbiA9IHt9O1xyXG5cclxuICAgICAgICAgIG5ldyBzaXRlLkRpYWxvZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ29sdW1uIFNlbGVjdGlvbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtY29sdW1uLWNob29zZXJcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICBhZGRDbGFzczogJ2NsLWNvbHVtbi1jaG9vc2VyLWRsZycsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50czogJ1VwbG9hZCcsXHJcbiAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IGFueSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcHBpbmdbcGFydC50YWddICE9PSAnKm5vbmUqJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW55ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKCFhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaXRlLnRvYXN0KHRoaXMsIFwiTm8gY29sdW1ucyBzZWxlY3RlZCB0byB1cGxvYWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBkYXRhLm1hcHBpbmcgPSBKU09OLnN0cmluZ2lmeShtYXBwaW5nKTtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5jb21tZW50TWFwcGluZyA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRNYXBwaW5nKTtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5pZGNvbHVtbiA9IGlkQ29sdW1uLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2l0ZS5hcGkucG9zdCgnL2FwaS9ncmFkZS9idWxrL3VwbG9hZC8nICsgdGhpcy5hc3NpZ250YWcsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gcmVzcG9uc2UuZ2V0RGF0YSgncmVzdWx0cycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZS50b2FzdCh0aGlzLCAnJyArIHJlc3VsdHMuYXR0cmlidXRlcy5ncmFkZXMgKyBcIiBncmFkZXMgc3VjY2Vzc2Z1bGx5IHVwbG9hZGVkIGZvciBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5hdHRyaWJ1dGVzLnVzZXJzICsgJyB1c2VycycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG5cclxuXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBDcmVhdGUgYSBWdWUgaW5zaWRlIHRoZSBkaWFsb2cgYm94XHJcbiAgICAgICAgICBuZXcgc2l0ZS5WdWUoe1xyXG4gICAgICAgICAgICBlbDogJyNjbC1jb2x1bW4tY2hvb3NlcicsXHJcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGFydHM6IHBhcnRzLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgICAgICAgICAgIG1hcHBpbmc6IG1hcHBpbmcsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50TWFwcGluZzogY29tbWVudE1hcHBpbmcsXHJcbiAgICAgICAgICAgICAgICBpZENvbHVtbjogaWRDb2x1bW5cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxjaG9vc2VyIDpwYXJ0cz1cInBhcnRzXCIgOmNvbHVtbnM9XCJjb2x1bW5zXCI+PC9jaG9vc2VyPmAsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAnY2hvb3Nlcic6IEdyYWRlc1VwbG9hZENvbHVtbkNob29zZXJDb21wb25lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgc2l0ZS50b2FzdCh0aGlzLCBcIkVycm9yIHJlYWRpbmcgZmlsZVwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZWFkZXIub25hYm9ydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBzaXRlLnRvYXN0KHRoaXMsIFwiRmlsZSByZWFkIGFib3J0ZWRcIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBpbiB0aGUgZmlsZVxyXG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbi8vIE5vdGljZTogTm90IHNjb3BlZCFcclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgZGl2LmNsLWJ1bGstdXBsb2FkIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGRzZXQge1xyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNi41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdi5jbC1idWxrLXVwbG9hZC1kbGcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG5cclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLWdyYWRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkNvbW1lbnQgPGEgQGNsaWNrLnByZXZlbnQ9XCJjb21wdXRlKClcIj5jb21wdXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJpdGVtLm1hbnVhbC5jb21tZW50XCIgcm93cz1cIjZcIiBjbGFzcz1cImNvbW1lbnRcIiA6bmFtZT1cIml0ZW0udGFnICsgJy1jb21tZW50J1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50c1wiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UG9pbnRzXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJwb2ludHNcIiB2LW1vZGVsPVwiaXRlbS5tYW51YWwucG9pbnRzXCIgdHlwZT1cIm51bWJlclwiIDppZD1cIml0ZW0udGFnICsgJy1wb2ludHMnXCIgOm5hbWU9XCJpdGVtLnRhZyArICctcG9pbnRzJ1wiPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+QXZhaWxhYmxlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPjxhIEBjbGljay5wcmV2ZW50PVwiZmlsbEluUG9pbnRzKClcIiA6ZGF0YS1pZD1cIml0ZW0udGFnICsgJy1wb2ludHMnXCIgdGl0bGU9XCJDbGljayB0byBmaWxsIGluIHBvaW50c1wiPnt7aXRlbS5tYW51YWwuYXZhaWxhYmxlfX08L2E+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYW51YWwgZ3JhZGUgZW50cnkgZm9ybS5cclxuICAgICAqIEBjb25zdHJ1Y3RvciBHcmFkZU1hbnVhbFZ1ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsnaXRlbSddLFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZpbGxJblBvaW50cygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5tYW51YWwucG9pbnRzID0gdGhpcy5pdGVtLm1hbnVhbC5hdmFpbGFibGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXB1dGUoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuaXRlbS5tYW51YWwuY29tbWVudC5zcGxpdCgvXFxyP1xcbi8pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5lZyA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9eXFxzKihbKy1dPykoWzEtOV1bMC05XSopKFteMC05XXwkKS8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRva2VucyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b2tlbnNbMV0gPT09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVnIC09ICt0b2tlbnNbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gK3Rva2Vuc1syXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICogSWYgd2Ugb25seSBoYXZlIG5lZ2F0aXZlIHZhbHVlcywgdGhhdCBpcyBzdWJ0cmFjdGVkIGZyb21cclxuICAgICAgICAgICAgICAgICAqIHRoZSBhdmFpbGFibGUgcG9pbnRzLiBJZiB3ZSBvbmx5IGhhdmUgcG9zaXRpdmUgdmFsdWVzLCB0aGV5XHJcbiAgICAgICAgICAgICAgICAgKiBhcmUgYWRkZWQgdG8gbWFrZSB1cCB0aGUgcG9pbnRzLiBJZiB3ZSBoYXZlIGJvdGgsIHRoZSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAqIGFyZSBhbGwgYWRkZWQgdG9nZXRoZXIgdG8gbWFrZSB1cCB0aGUgdG90YWwgcG9pbnRzLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZihuZWcgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwb3MgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLm1hbnVhbC5wb2ludHMgPSB0aGlzLml0ZW0ubWFudWFsLmF2YWlsYWJsZSArIG5lZztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubWFudWFsLnBvaW50cyA9IHBvcyArIG5lZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBvcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubWFudWFsLnBvaW50cyA9IHRoaXMuaXRlbS5tYW51YWwuYXZhaWxhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5tYW51YWwucG9pbnRzID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8bWVtYmVycy1mZXRjaGVyPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoPjxkaXYgY2xhc3M9XCJzbWFsbFwiPnt7YXNzaWdubWVudC5zaG9ydG5hbWV9fTwvZGl2PjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPHRoPjxkaXYgY2xhc3M9XCJzbWFsbCBjYXRlZ29yeVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9kaXY+PC90aD5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIiA6Y2xhc3M9XCJ1c2VyLnJvbGUoKSAhPT0gJ1QnID8gJ2lnbm9yZScgOiAnJ1wiPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS9ncmFkZXMvJyArIHVzZXIubWVtYmVyLmlkXCI+e3t1c2VyLnVzZXJJZH19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS9ncmFkZXMvJyArIHVzZXIubWVtYmVyLmlkXCI+e3t1c2VyLm5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLnJvbGVOYW1lKCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiY2F0ZWdvcnkgaW4gc2VjdGlvbi5hc3NpZ25tZW50cy5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57e2Fzc2lnbm1lbnRHcmFkZSh1c2VyLCBjYXRlZ29yeSwgYXNzaWdubWVudCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7Y2F0ZWdvcnlHcmFkZSh1c2VyLCBjYXRlZ29yeSl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzLWZldGNoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuXHRjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFsbCBncmFkZXMgZm9yIGFsbCBtZW1iZXJzXHJcblx0ICogL2NsL2NvbnNvbGUvZ3JhZGVzL2FsbFxyXG5cdCAqIEBjb25zdHJ1Y3RvciBHcmFkZXNBbGxWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNlY3Rpb246IG51bGwsXHJcblx0XHRcdFx0Z3JhZGVzOiBudWxsLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHQnbWVtYmVyc0ZldGNoZXInOiBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG5cdFx0XHRsZXQgbWVtYmVyID0gdXNlci5tZW1iZXI7XHJcblx0XHRcdHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IEdyYWRlcycpO1xyXG5cclxuXHRcdFx0dGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL2dyYWRlL2FsbCcsIHt9KVxyXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ3JhZGVzID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGVzLWFsbCcpLmF0dHJpYnV0ZXM7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRhc3NpZ25tZW50R3JhZGUodXNlciwgY2F0ZWdvcnksIGFzc2lnbm1lbnQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5ncmFkZXMgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJldHVybiAnPyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgdXNlckdyYWRlcyA9IHRoaXMuZ3JhZGVzW3VzZXIubWVtYmVyLmlkXTtcclxuXHRcdFx0XHRsZXQgYXNzaWdubWVudEdyYWRlcyA9IHVzZXJHcmFkZXMuY2F0ZWdvcmllc1tjYXRlZ29yeS50YWddLmFzc2lnbm1lbnRzO1xyXG5cdFx0XHRcdGZvciAobGV0IGFzc2lnbm1lbnRHcmFkZSBvZiBhc3NpZ25tZW50R3JhZGVzKSB7XHJcblx0XHRcdFx0XHRpZiAoYXNzaWdubWVudEdyYWRlLnRhZyA9PT0gYXNzaWdubWVudC50YWcpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGFzc2lnbm1lbnRHcmFkZS5ncmFkZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2F0ZWdvcnlHcmFkZSh1c2VyLCBjYXRlZ29yeSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmdyYWRlcyA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICc/JztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCB1c2VyR3JhZGVzID0gdGhpcy5ncmFkZXNbdXNlci5tZW1iZXIuaWRdO1xyXG5cdFx0XHRcdGxldCBjYXRlZ29yeUdyYWRlID0gdXNlckdyYWRlcy5jYXRlZ29yaWVzW2NhdGVnb3J5LnRhZ107XHJcblx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5R3JhZGUuZ3JhZGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJ35zaXRlLWNsL3Nhc3MvbW9kdWxlcy9jb2xvcnMnO1xyXG5cclxudGQge1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxufVxyXG5cclxuICBkaXYuY2F0ZWdvcnkge1xyXG4gICAgY29sb3I6ICRzZWNvbmRiO1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXJzLWZldGNoZXI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gZmV0Y2hlci51c2Vyc1wiIDpjbGFzcz1cInVzZXIucm9sZSgpICE9PSAnVCcgPyAnaWdub3JlJyA6ICcnXCI+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIudXNlcklkfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzLWZldGNoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuXHRjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFsbCBzdHVkZW50IGdyYWRlIGxpbmtzXHJcblx0ICogL2NsL2NvbnNvbGUvZ3JhZGVzL2xpbmtzXHJcblx0ICogQGNvbnN0cnVjdG9yIEdyYWRlc0xpbmtzVnVlXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0J2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRncmFkZXM6IG51bGwsXHJcblx0XHRcdFx0cGFydHM6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdtZW1iZXJzRmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IEdyYWRlcycpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXItZmV0Y2hlciB2LW9uOmZldGNoZWQ9XCJmZXRjaGVkXCIgOmlkPVwibWVtYmVyaWRcIiA6ZmFpbGxpbms9XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy9saW5rcydcIj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDxwcmV2LW5leHQgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIj48L3ByZXYtbmV4dD5cclxuICAgICAgICAgIDxkaXYgdi1pZj1cImZldGNoZXIudXNlciAhPT0gbnVsbCAmJiBncmFkZSAhPT0gbnVsbFwiPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkFzc2lnbm1lbnQ8L3RoPjx0aD4mbmJzcDs8L3RoPjx0aD5HcmFkZTwvdGg+PHRoPiZuYnNwOzwvdGg+PHRoPkdyYWRlPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBncmFkZS5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJjbC1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj57e2NhdGVnb3J5Lm5hbWV9fTwvdGQ+PHRkPnt7Y2F0ZWdvcnkucG9pbnRzfX0lPC90ZD48dGQ+e3tjYXRlZ29yeS5ncmFkZX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiY2wtYXNzaWdubWVudFwiIHYtZm9yPVwiYXNzaWdubWVudCBpbiBjYXRlZ29yeS5hc3NpZ25tZW50c1wiIDprZXk9XCJhc3NpZ25tZW50LnRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cImAke3Jvb3R9L2NsL2NvbnNvbGUvZ3JhZGluZy8ke2Fzc2lnbm1lbnQudGFnfS8ke2ZldGNoZXIudXNlci5tZW1iZXIuaWR9YFwiPnt7YXNzaWdubWVudC5uYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+PHRkPnt7TWF0aC5yb3VuZChhc3NpZ25tZW50LnBvaW50cyAqIDEwKSAvIDEwfX0lPC90ZD48dGQ+e3thc3NpZ25tZW50LmdyYWRlfX08L3RkPjx0ZCBjb2xzcGFuPVwiMlwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGVhY2ggYXNzaWdubWVudCBmb3IgbW9yZSBncmFkaW5nIGRldGFpbDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj5Db21wdXRlZCBHcmFkZToge3tncmFkZS5ncmFkZX19IG91dCBvZiB7e2dyYWRlLmF2YWlsYWJsZX19IGF2YWlsYWJsZSBwb2ludHN7e3Blcn19PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXItZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgUHJldk5leHRNZW1iZXJWdWUgPSBTaXRlLlByZXZOZXh0TWVtYmVyVnVlO1xyXG5cdGNvbnN0IE1lbWJlckZldGNoZXJDb21wb25lbnRWdWUgPSBTaXRlLk1lbWJlckZldGNoZXJDb21wb25lbnRWdWU7XHJcblx0Y29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zb2xlIGdyYWRlcyBwcmVzZW50YXRpb24gZm9yIGEgbWVtYmVyXHJcblx0ICogL2NsL2NvbnNvbGUvZ3JhZGVzLzpudW1cclxuXHQgKiBAY29uc3RydWN0b3IgR3JhZGVzTWVtYmVyVnVlXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZXh0ZW5kczogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRwcm9wczogWydtZW1iZXJpZCddLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNvdXJzZTogdGhpcy4kc3RvcmUuc3RhdGUuY291cnNlLmNvdXJzZSxcclxuXHRcdFx0XHRzZWN0aW9uOiBudWxsLFxyXG5cdFx0XHRcdGdyYWRlOiBudWxsLFxyXG5cdFx0XHRcdHBlcjogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0bWVtYmVyRmV0Y2hlcjogTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZSxcclxuXHRcdFx0cHJldk5leHQ6IFByZXZOZXh0TWVtYmVyVnVlLFxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuc2V0VGl0bGUoJzogR3JhZGUnKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGZldGNoZWQodXNlcikge1xyXG5cdFx0XHRcdHRoaXMuc2VjdGlvbiA9IHVzZXIubWVtYmVyLmdldFNlY3Rpb24odGhpcy4kc3RvcmUpO1xyXG5cdFx0XHRcdHRoaXMuc2V0VGl0bGUoJzogJyArIHVzZXIubmFtZSArICcgR3JhZGVzJyk7XHJcblxyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS9ncmFkZS9ncmFkZS8ke3RoaXMubWVtYmVyaWR9YCwge30pXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ncmFkZSA9IHJlc3BvbnNlLmdldERhdGEoJ2dyYWRlJykuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5ncmFkZS5hdmFpbGFibGUgPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBlciA9ICcoJyArICh0aGlzLmdyYWRlLmdyYWRlIC8gdGhpcy5ncmFkZS5hdmFpbGFibGUgKiAxMDApLnRvRml4ZWQoMSkgKyAnJSknO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50XCI+XHJcbiAgICAgICAgPHA+TWVtYmVyIGlkZW50aWZpZXIgY29sdW1uOlxyXG4gICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cIm1lbWJlcklkQ29sdW1uLmlkXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjb2x1bW4gaW4gY29sdW1uc1wiPnt7Y29sdW1ufX08L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD48L3A+XHJcblxyXG4gICAgICAgIDxwPk1lbWJlciBpZGVudGlmaWVyIGNhbiBiZSBhbiBlbWFpbCBhZGRyZXNzIG9yIHVzZXIgSUQuPC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPlNlbGVjdCBjb2x1bW4gZm9yIGVhY2ggZ3JhZGUgaXRlbTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtcGFydHNcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKHBhcnQsIGluZGV4KSBpbiBwYXJ0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7cGFydC5uYW1lfX06PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwibWFwcGluZ1twYXJ0LnRhZ11cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjb2x1bW4gaW4gY29sdW1uU2VsZWN0XCI+e3tjb2x1bW59fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtY29tbWVudFwiPmNvbW1lbnQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiY29tbWVudE1hcHBpbmdbcGFydC50YWddXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiY29sdW1uIGluIGNvbHVtblNlbGVjdFwiPnt7Y29sdW1ufX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICAvKipcclxuICAgICAqIENob29zZSB0aGUgQ1NWIGNvbHVtbnMgZm9yIGVhY2ggZ3JhZGUgY29tcG9uZW50IHdlIGFyZSBnb2luZyB0byB1cGxvYWQuXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0cnVjdG9yIEdyYWRlc1VwbG9hZENvbHVtbkNob29zZXJDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbJ3BhcnRzJywgJ2NvbHVtbnMnXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZW1iZXJJZENvbHVtbjoge30sXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5TZWxlY3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgbWFwcGluZzoge30sXHJcbiAgICAgICAgICAgICAgICBjb21tZW50TWFwcGluZzoge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge30sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgLy8gU2VlIGlmIHRoZXJlIGlzIGFuIGVtYWlsIGNvbHVtblxyXG4gICAgICAgICAgICB0aGlzLm1lbWJlcklkQ29sdW1uID0gdGhpcy4kcGFyZW50LmlkQ29sdW1uO1xyXG4gICAgICAgICAgICB0aGlzLm1lbWJlcklkQ29sdW1uLmlkID0gdGhpcy5jb2x1bW5zWzBdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uIG9mIHRoaXMuY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2VtYWlsJykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVtYmVySWRDb2x1bW4uaWQgPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uU2VsZWN0ID0gWycqbm9uZSonXS5jb25jYXQodGhpcy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgdGhpcy5tYXBwaW5nID0gdGhpcy4kcGFyZW50Lm1hcHBpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudE1hcHBpbmcgPSB0aGlzLiRwYXJlbnQuY29tbWVudE1hcHBpbmc7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaW5pdGlhbGx5IGVtcHR5XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnQgb2YgdGhpcy5wYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBwaW5nW3BhcnQudGFnXSA9ICcqbm9uZSonO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50TWFwcGluZ1twYXJ0LnRhZ10gPSAnKm5vbmUqJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5kaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmNsLXBhcnRzIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcblxyXG4gICAgICAgICAgICA+ZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmNsLWNvbW1lbnQge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgPGgyPkdyYWRlcyBTdW1tYXJ5PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS9ncmFkZXMvYWxsJ1wiPkFsbCBTdHVkZW50czwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICA8bGk+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzL2xpbmtzJ1wiPkFsbCBTdHVkZW50cyBHcmFkZSBMaW5rczwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICA8bGkgdi1pZj1cImRvd25sb2FkUGVybWlzc2lvblwiPjxhIDpocmVmPVwicm9vdCArICcvY2wvZ3JhZGVzL2NzdidcIj5Eb3dubG9hZCBTdHVkZW50IEdyYWRlczwvYT48L2xpPlxyXG4gICAgICAgIDxsaSB2LWlmPVwicnVicmljRHVtcGVyUGVybWlzc2lvblwiPjxhIDpocmVmPVwicm9vdCArICcvY2wvZ3JhZGVzL3J1YnJpYy1kdW1wZXInXCI+UnVicmljIER1bXBlcjwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiY2F0ZWdvcnkgaW4gc2VjdGlvbi5hc3NpZ25tZW50cy5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgPGgyPnt7Y2F0ZWdvcnkubmFtZX19PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGkgdi1pZj1cImNhdGVnb3J5LmFzc2lnbm1lbnRzLmxlbmd0aCA9PT0gMFwiPjxlbT5QZW5kaW5nLi4uPC9lbT48L2xpPlxyXG4gICAgICAgICAgPGxpIHYtZm9yPVwiYXNzaWdubWVudCBpbiBjYXRlZ29yeS5hc3NpZ25tZW50c1wiIDprZXk9XCJhc3NpZ25tZW50LnRhZ1wiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiZ3JhZGluZ0xpbmsgKyBhc3NpZ25tZW50LnRhZ1wiPnt7YXNzaWdubWVudC5uYW1lfX08L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJsaW5rLWJ1dHRvblwiIHYtaWY9XCJ1c2VyLmF0TGVhc3QodGEpXCIgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS9ydWJyaWMvJyArIGFzc2lnbm1lbnQudGFnXCI+cnVicmljczwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGNvbnN0IE1lbWJlciA9IFNpdGUuTWVtYmVyO1xyXG4gIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG1haW4gZ3JhZGluZyBwYWdlXHJcbiAgICogL2NsL2NvbnNvbGUvZ3JhZGluZ1xyXG4gICAqIEBjb25zdHJ1Y3RvciBHcmFkaW5nVnVlXHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgICdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGluZ0xpbms6IHRoaXMuJHNpdGUucm9vdCArICcvY2wvY29uc29sZS9ncmFkaW5nLycsXHJcbiAgICAgICAgICAgICAgICB0YTogTWVtYmVyLlRBLFxyXG5cclxuICAgICAgICAgICAgICAgIGRvd25sb2FkUGVybWlzc2lvbjogZmFsc2UsICAgICAgLy8gUGVybWlzc2lvbiB0byBkb3dubG9hZCBncmFkZXM/XHJcbiAgICAgICAgICAgICAgICBydWJyaWNEdW1wZXJQZXJtaXNzaW9uOiBmYWxzZSAgIC8vIFBlcm1pc3Npb24gdG8gZHVtcCBydWJyaWNzP1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQXNzaWdubWVudCBHcmFkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuICAgICAgICAgICAgbGV0IG1lbWJlciA9IHVzZXIubWVtYmVyO1xyXG5cclxuXHQgICAgICAgICAgdGhpcy5kb3dubG9hZFBlcm1pc3Npb24gPSB1c2VyLmF0TGVhc3QodGhpcy4kc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KCdncmFkZXMtZG93bmxvYWQnLCBNZW1iZXIuVEEpKTtcclxuICAgICAgICAgICAgdGhpcy5ydWJyaWNEdW1wZXJQZXJtaXNzaW9uID0gdXNlci5hdExlYXN0KHRoaXMuJHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdCgnZ3JhZGVzLXJ1YnJpYy1kdW1wZXInLCBNZW1iZXIuVEEpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8c3VibWlzc2lvbnMtbGlua3MgOmFzc2lnbm1lbnQ9XCJhc3NpZ25tZW50XCI+PC9zdWJtaXNzaW9ucy1saW5rcz5cclxuICAgICAgPG1lbWJlcnMtZmV0Y2hlcj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDx0YWJsZSB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWZvcj1cInBhcnQgaW4gcGFydHNcIiBjbGFzcz1cInNtYWxsXCI+PGRpdj57e3BhcnQubmFtZX19PC9kaXY+PC90aD5cclxuICAgICAgICAgICAgICA8dGggdi1pZj1cImdyYWRlcyAhPT0gbnVsbFwiIGNsYXNzPVwic21hbGxcIj48ZGl2PkdyYWRlPC9kaXY+PC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCIgOmNsYXNzPVwidXNlci5yb2xlKCkgIT09ICdUJyA/ICdpZ25vcmUnIDogJydcIj5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyBsaW5rICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIudXNlcklkfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgbGluayArIHVzZXIubWVtYmVyLmlkXCI+e3t1c2VyLm5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb2xlXCI+e3t1c2VyLnJvbGVOYW1lKCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtZm9yPVwicGFydCBpbiBwYXJ0c1wiIGNsYXNzPVwicmlnaHRcIj57e3BhcnRHcmFkZSh1c2VyLCBwYXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImdyYWRlcyAhPT0gbnVsbFwiIGNsYXNzPVwicmlnaHRcIj57e2dyYWRlKHVzZXIpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJkaXZpZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJjZW50ZXJcIj48ZW0+Y291bnRzPC9lbT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlclwiPnt7ZmV0Y2hlci51c2Vycy5sZW5ndGh9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtZm9yPVwicGFydCBpbiBwYXJ0c1wiIGNsYXNzPVwicmlnaHRcIj57e3BhcnRDb3VudChmZXRjaGVyLnVzZXJzLCBwYXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImdyYWRlcyAhPT0gbnVsbFwiIGNsYXNzPVwicmlnaHRcIj57e2dyYWRlc0NvdW50KGZldGNoZXIudXNlcnMpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJjZW50ZXJcIj48ZW0+YXZlcmFnZXM8L2VtPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2VudGVyXCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJwYXJ0IGluIHBhcnRzXCIgY2xhc3M9XCJyaWdodFwiPnt7cGFydEF2ZXJhZ2UoZmV0Y2hlci51c2VycywgcGFydCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJncmFkZXMgIT09IG51bGxcIiBjbGFzcz1cInJpZ2h0XCI+e3tncmFkZUF2ZXJhZ2UoZmV0Y2hlci51c2Vycyl9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWVtYmVycy1mZXRjaGVyPlxyXG4gICAgICA8YnVsay11cGxvYWQgdi1pZj1cInBhcnRzLmxlbmd0aCA+IDAgJiYgdGFcIiA6YXNzaWdudGFnPVwiYXNzaWdudGFnXCIgOnBhcnRzPVwicGFydHNcIj48L2J1bGstdXBsb2FkPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBHcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQgZnJvbSAnLi9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlJztcclxuXHJcbiAgY29uc3QgU3VibWlzc2lvbnNMaW5rc1Z1ZSA9IFNpdGUuU3VibWlzc2lvbnNMaW5rc1Z1ZTtcclxuICBjb25zdCBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZSA9IFNpdGUuTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWU7XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG4gIGNvbnN0IE1lbWJlciA9IFNpdGUuTWVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYXNzaWdubWVudCBncmFkaW5nIHBhZ2UgZm9yIHRoZSBjb3Vyc2UuXHJcbiAgICogL2NsL2NvbnNvbGUvZ3JhZGluZy86YXNzaWdudGFnXHJcbiAgICogQGNvbnN0cnVjdG9yIEdyYWRpbmdBc3NpZ25tZW50VnVlXHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZXh0ZW5kczogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICBwcm9wczogWydhc3NpZ250YWcnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiAnL2NsL2NvbnNvbGUvZ3JhZGluZy8nICsgdGhpcy5hc3NpZ250YWcgKyAnLycsXHJcbiAgICAgICAgZ3JhZGVzOiBudWxsLFxyXG4gICAgICAgIHBhcnRzOiBbXSxcclxuICAgICAgICBmZXRjaGVkOiBmYWxzZSxcclxuICAgICAgICBhc3NpZ25tZW50OiBudWxsLFxyXG4gICAgICAgIHRhOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAnbWVtYmVyc0ZldGNoZXInOiBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZSxcclxuICAgICAgJ3N1Ym1pc3Npb25zTGlua3MnOiBTdWJtaXNzaW9uc0xpbmtzVnVlLFxyXG4gICAgICAnYnVsay11cGxvYWQnOiBHcmFkZUJ1bGtVcGxvYWRDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG4gICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy50YSA9IHRoaXMudXNlci5hdExlYXN0KE1lbWJlci5UQSk7XHJcbiAgICAgIHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcbiAgICAgIHRoaXMuYXNzaWdubWVudCA9IHRoaXMuc2VjdGlvbi5nZXRBc3NpZ25tZW50KHRoaXMuYXNzaWdudGFnKTtcclxuXHJcbiAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiAnICsgdGhpcy5hc3NpZ25tZW50LnNob3J0bmFtZSArICcgR3JhZGluZycpO1xyXG5cclxuICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL2dyYWRlL2dyYWRlcy8nICsgdGhpcy5hc3NpZ250YWcsIHt9KVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGVzID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGVzJykuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cyA9IHJlc3BvbnNlLmdldERhdGEoJ2dyYWRlLXBhcnRzJykuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBwYXJ0R3JhZGUodXNlciwgcGFydCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJHcmFkZXMgPSB0aGlzLmdyYWRlc1t1c2VyLm1lbWJlci5pZF07XHJcbiAgICAgICAgaWYgKHVzZXJHcmFkZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFydFN0YXR1cyA9IHVzZXJHcmFkZXMuZ3JhZGVzW3BhcnQudGFnXTtcclxuICAgICAgICBpZiAocGFydFN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFydFN0YXR1cztcclxuICAgICAgfSxcclxuICAgICAgZ3JhZGUodXNlcikge1xyXG4gICAgICAgIGNvbnN0IHVzZXJHcmFkZXMgPSB0aGlzLmdyYWRlc1t1c2VyLm1lbWJlci5pZF07XHJcbiAgICAgICAgaWYgKHVzZXJHcmFkZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXJHcmFkZXMuZ3JhZGUgIT09IG51bGwgPyB1c2VyR3JhZGVzLmdyYWRlIDogJyc7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBhcnRDb3VudCh1c2VycywgcGFydCkge1xyXG4gICAgICAgIGxldCBjbnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcnRHcmFkZSh1c2VyLCBwYXJ0KSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY250O1xyXG4gICAgICB9LFxyXG4gICAgICBncmFkZXNDb3VudCh1c2Vycykge1xyXG4gICAgICAgIGxldCBjbnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmdyYWRlKHVzZXIpICE9PSAnJykge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBhcnRBdmVyYWdlKHVzZXJzLCBwYXJ0KSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGxldCB1c2VyIG9mIHVzZXJzKSB7XHJcbiAgICAgICAgICBsZXQgZ3JhZGUgPSB0aGlzLnBhcnRHcmFkZSh1c2VyLCBwYXJ0KTtcclxuICAgICAgICAgIGlmIChncmFkZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGdyYWRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNudCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodG90YWwgLyBjbnQgKiAxMCkgLyAxMDtcclxuICAgICAgfSxcclxuICAgICAgZ3JhZGVBdmVyYWdlKHVzZXJzKSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGxldCB1c2VyIG9mIHVzZXJzKSB7XHJcbiAgICAgICAgICBsZXQgZ3JhZGUgPSB0aGlzLmdyYWRlKHVzZXIpO1xyXG4gICAgICAgICAgaWYgKGdyYWRlICE9PSAnJykge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgdG90YWwgKz0gZ3JhZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY250ID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbCAvIGNudCAqIDEwKSAvIDEwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWdyYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlci1mZXRjaGVyIHYtb246ZmV0Y2hlZD1cImZldGNoZWRcIiA6aWQ9XCJtZW1iZXJpZFwiIDpmYWlsbGluaz1cImdyYWRpbmdMaW5rXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8cHJldi1uZXh0IDp1c2VyPVwiZmV0Y2hlci51c2VyXCI+PC9wcmV2LW5leHQ+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJmZXRjaGVyLnVzZXIgIT09IG51bGxcIj5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIHJlZj1cImZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgPHAgOmNsYXNzPVwiZmV0Y2hlci51c2VyLnJvbGUoKSA9PT0gJ1QnID8gJ2NsLXJvbGUnIDogJ2NsLXJvbGUgY2wtcm9sZS1zdGFmZidcIj5cclxuICAgICAgICAgICAgICAgIHt7ZmV0Y2hlci51c2VyLnJvbGVOYW1lKCl9fToge3tmZXRjaGVyLnVzZXIubmFtZX19IHt7ZmV0Y2hlci51c2VyLnJvbGUoKX19XHJcbiAgICAgICAgICAgICAgICA8ZW0gY2xhc3M9XCJzbWFsbFwiPnt7ZmV0Y2hlci51c2VyLnVzZXJJZH19PC9lbT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbC1ncmFkZXItYnV0dG9uXCIgQGNsaWNrLnByZXZlbnQ9XCJlbWFpbChmZXRjaGVyLnVzZXIpXCI+XHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsIHt7ZmV0Y2hlci51c2VyLnJvbGVOYW1lKCkudG9Mb3dlckNhc2UoKX19XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImNsLWdyYWRlci1idXR0b25cIiB0YWc9XCJidXR0b25cIiA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nICsgZmV0Y2hlci51c2VyLm1lbWJlci5pZFwiPnN0dWRlbnQgZ3JhZGVzXHJcbiAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNsLWR1ZVwiIHYtaWY9XCJkdWUgIT09IG51bGxcIj5Bc3NpZ25tZW50IGR1ZSB7e3RpbWUoZHVlKX19IDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBHcmFkaW5nIGl0ZW1zIC0tPlxyXG4gICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGdyYWRlcnNcIiA6Y2xhc3M9XCInY2wtZ3JhZGVyLWl0ZW0nICsgKGl0ZW0ubG9ja2VkID8gJyBjbC1ncmFkZXItaXRlbS1sb2NrZWQnIDogJycpXCIgIDpkYXRhLXRhZz1cIml0ZW0udGFnXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3M9XCJjbC1ncmFkZXItaXRlbS1sb2NrXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJsb2NrKGl0ZW0pXCIgdGl0bGU9XCJMb2NrL1VubG9ja1wiPjxpbWcgOnNyYz1cInJvb3QgKyAoaXRlbS5sb2NrZWQgPyAnL2NsL2ltZy9sb2NrLW9uLnBuZycgOiAnL2NsL2ltZy9sb2NrLW9mZi5wbmcnKVwiIGFsdD1cIlVubG9ja2VkXCI+PC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5uYW1lfX08YSB2LWlmPVwiaXRlbS50ZWFtaW5nICE9PSB1bmRlZmluZWRcIiBjbGFzcz1cImNsLWV4dHJhLWxpbmtcIiBAY2xpY2sucHJldmVudD1cInRlYW1EaXN0cmlidXRlKGl0ZW0pXCI+VGVhbSBEaXN0cmlidXRlPC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW0ucnVicmljICE9PSB1bmRlZmluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZVwiPjxwIGNsYXNzPVwiY2wtcnVicmljLWV4cGFuZFwiPjxhPkV4cGFuZCBmb3IgcnVicmljPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtcnVicmljYmxvY2sgY2wtY2xpY2thYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaHRtbD1cIml0ZW0ucnVicmljXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxncmFkZS1tYW51YWwgdi1pZj1cIml0ZW0ubWFudWFsICE9PSB1bmRlZmluZWRcIiA6aXRlbT1cIml0ZW1cIj48L2dyYWRlLW1hbnVhbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIml0ZW0uaHRtbCAhPT0gdW5kZWZpbmVkXCIgdi1odG1sPVwiaXRlbS5odG1sXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aGFuZGJvb2sgdi1pZj1cIml0ZW0uaGFuZGJvb2sgIT09IHVuZGVmaW5lZFwiIDppdGVtPVwiaXRlbVwiIHYtb246aGFuZGJvb2stZGF0YT1cImhhbmRib29rRGF0YVwiPjwvaGFuZGJvb2s+XHJcbiAgICAgICAgICAgICAgICA8Z3JhZGUtaGlzdG9yeSA6aGlzdG9yeT1cIml0ZW0uaGlzdG9yeVwiPjwvZ3JhZGUtaGlzdG9yeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBTdWJtaXNzaW9ucyAtLT5cclxuICAgICAgICAgICAgICA8c3VibWlzc2lvbnMgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIiA6YXNzaWdudGFnPVwiYXNzaWdudGFnXCI+PC9zdWJtaXNzaW9ucz5cclxuICAgICAgICAgICAgICA8Y29tcG9uZW50IHYtaWY9XCJyZXZpZXdpbmcgIT09IG51bGxcIiA6aXM9XCJyZXZpZXdpbmdcIiA6YXNzaWdudGFnPVwiYXNzaWdudGFnXCIgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIj48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGVcIj5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJncmFkZSAhPT0gbnVsbFwiPkNvbXB1dGVkIEdyYWRlOiB7e2dyYWRlfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICA8cD5HcmFkZSBOb3QgQXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlciBzbWFsbCBub3RpY2VcIj5HcmFkZXMgYXJlIG5vdCBhdmFpbGFibGUgdW50aWwgYWxsIHBhcnRzIG9mIHRoZSBhc3NpZ25tZW50IGhhdmUgYmVlblxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXItZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IEdyYWRlSGlzdG9yeUNvbXBvbmVudFZ1ZSBmcm9tICcuLi9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWUnO1xyXG5cdGltcG9ydCBIYW5kYm9va1Z1ZSBmcm9tICcuLi9IYW5kYm9vay9IYW5kYm9vay52dWUnO1xyXG5cdGltcG9ydCBHcmFkZU1hbnVhbFZ1ZSBmcm9tICcuL0dyYWRlTWFudWFsLnZ1ZSc7XHJcblxyXG5cdGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHRjb25zdCBQcmV2TmV4dE1lbWJlclZ1ZSA9IFNpdGUuUHJldk5leHRNZW1iZXJWdWU7XHJcblx0Y29uc3QgTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZSA9IFNpdGUuTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuXHRjb25zdCBTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnRWdWUgPSBTaXRlLlN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZTtcclxuXHJcblx0LyoqXHJcblx0ICogL2NsL2NvbnNvbGUvZ3JhZGluZy86YXNzaWdubWVudC86bWVtYmVyaWRcclxuXHQgKiBBc3NpZ25tZW50IGdyYWRpbmcgcGFnZSBmb3IgYSBjb3Vyc2UgbWVtYmVyXHJcbiAgICogQGNvbnN0cnVjdG9yIEdyYWRpbmdBc3NpZ25tZW50TWVtYmVyVnVlXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0J2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuXHRcdHByb3BzOiBbJ2Fzc2lnbnRhZycsICdtZW1iZXJpZCddLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGdyYWRpbmdMaW5rOiAnL2NsL2NvbnNvbGUvZ3JhZGluZy8nICsgdGhpcy5hc3NpZ250YWcsXHJcblx0XHRcdFx0YXNzaWdubWVudDogbnVsbCxcclxuXHRcdFx0XHRncmFkZXJzOiBbXSxcclxuXHRcdFx0XHRncmFkZTogbnVsbCxcclxuXHRcdFx0XHRkdWU6IG51bGwsXHJcblx0XHRcdFx0aGFuZGJvb2tSZXN1bHQ6IG51bGwsXHJcblx0XHRcdFx0cmV2aWV3aW5nOiBudWxsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1lbWJlckZldGNoZXI6IE1lbWJlckZldGNoZXJDb21wb25lbnRWdWUsXHJcblx0XHRcdHByZXZOZXh0OiBQcmV2TmV4dE1lbWJlclZ1ZSxcclxuXHRcdFx0Z3JhZGVIaXN0b3J5OiBHcmFkZUhpc3RvcnlDb21wb25lbnRWdWUsXHJcblx0XHRcdHN1Ym1pc3Npb25zOiBTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnRWdWUsXHJcblx0XHRcdGhhbmRib29rOiBIYW5kYm9va1Z1ZSxcclxuICAgICAgICAgIGdyYWRlTWFudWFsOiBHcmFkZU1hbnVhbFZ1ZVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuc2V0VGl0bGUoJzogR3JhZGluZycpO1xyXG5cdFx0XHR0aGlzLmFkZE5hdjIoJ1N1Ym1pdCcsIDIsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuYWRkTmF2MignU3VibWl0IGFuZCBFeGl0JywgMywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3VibWl0KHRydWUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuYWRkTmF2MkxpbmsoJ0V4aXQnLCA0LCAnL2NsL2NvbnNvbGUvZ3JhZGluZy8nICsgdGhpcy5hc3NpZ250YWcpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZmV0Y2hlZCh1c2VyKSB7XHJcblx0XHRcdFx0bGV0IHNlY3Rpb24gPSB1c2VyLm1lbWJlci5nZXRTZWN0aW9uKHRoaXMuJHN0b3JlKTtcclxuXHRcdFx0XHR0aGlzLmFzc2lnbm1lbnQgPSB1c2VyLm1lbWJlci5nZXRBc3NpZ25tZW50KHRoaXMuJHN0b3JlLCB0aGlzLmFzc2lnbnRhZyk7XHJcblx0XHRcdFx0dGhpcy5zZXRUaXRsZSgnOiAnICsgdXNlci5uYW1lICsgJyAnICsgdGhpcy5hc3NpZ25tZW50LnNob3J0bmFtZSArICcgR3JhZGluZycpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmFzc2lnbm1lbnQucmV2aWV3ID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJldmlld2luZyA9IHRoaXMuJHNpdGUuY29uc29sZS5SZXZpZXcucmV2aWV3c2J5Zm9yO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL2dyYWRlL2dyYWRlci8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMubWVtYmVyaWR9YCwge30pXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KGV4aXQsIGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y29uc3QgZm9ybSA9IHRoaXMuJHJlZnNbJ2Zvcm0nXTtcclxuXHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHRcdFx0XHRpZiAodGhpcy5oYW5kYm9va1Jlc3VsdCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdfaGFuZGJvb2snLCBKU09OLnN0cmluZ2lmeSh0aGlzLmhhbmRib29rUmVzdWx0KSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLiRzaXRlLmFwaS5wb3N0KGAvYXBpL2dyYWRlL2dyYWRlci8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMubWVtYmVyaWR9YCwgZm9ybURhdGEpXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGV4aXQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHRoaXMuJHNpdGUucm9vdCArICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0ICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERpc3RyaWJ1dGUgZ3JhZGUgaXRlbSB0byBhbGwgbWVtYmVycyBvZiBhIHRlYW0uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBpdGVtXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0ZWFtRGlzdHJpYnV0ZShpdGVtKSB7XHJcblx0XHRcdCAgICB0aGlzLnN1Ym1pdChmYWxzZSwgKCkgPT4ge1xyXG5cdFx0XHQgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGVhbWluZzogaXRlbS50ZWFtaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZ3JhZGVUYWc6IGl0ZW0udGFnXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KGAvYXBpL3RlYW0vZGlzdHJpYnV0ZS8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMubWVtYmVyaWR9YCwgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHRcdFx0dGFrZShyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgdGhlcmUgYW4gZXhpc3RpbmcgbG9ja2VkIGdyYWRlcj9cclxuICAgICAgICAgICAgICAgIGxldCBsb2NrZWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5ncmFkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ3JhZGVyc1tpXS5sb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NrZWQgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdGNvbnN0IGdyYWRlciA9IHJlc3BvbnNlLmdldERhdGEoJ2dyYWRlcicpO1xyXG5cdFx0XHRcdHRoaXMuZHVlID0gZ3JhZGVyLmF0dHJpYnV0ZXMuZHVlICE9PSB1bmRlZmluZWQgPyBncmFkZXIuYXR0cmlidXRlcy5kdWUgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBncmFkZXIgb2YgZ3JhZGVyLmF0dHJpYnV0ZXMuZ3JhZGVycykge1xyXG4gICAgICAgICAgICAgICAgICBncmFkZXIubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdHRoaXMuZ3JhZGVycyA9IGdyYWRlci5hdHRyaWJ1dGVzLmdyYWRlcnM7XHJcblx0XHRcdFx0dGhpcy5ncmFkZSA9IGdyYWRlci5hdHRyaWJ1dGVzLmdyYWRlO1xyXG5cclxuXHRcdFx0XHRpZihsb2NrZWQgIT09IG51bGwpIHtcclxuXHRcdFx0XHQgICAgdGhpcy5ncmFkZXJzW2xvY2tlZF0ubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0dGhpcy4kZm9yY2VVcGRhdGUoKTtcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmluc3RhbGxSdWJyaWNDbGlja2VycygpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2l0ZS5tZXNzYWdlKCdjbC1ncmFkZXMtZ3JhZGVyLWluc3RhbGxlZCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHJcblx0XHRcdH0sXHJcbiAgICAgICAgICAgIGxvY2soaXRlbSkge1xyXG4gICAgICAgICAgICAgIGlmKGl0ZW0ubG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgZ3JhZGVyIG9mIHRoaXMuZ3JhZGVycykge1xyXG4gICAgICAgICAgICAgICAgICBncmFkZXIubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHRcdFx0Ly8vIEluc3RhbGwgY2xpY2tlcnMgZm9yIFJ1YnJpYyBpdGVtcyB0aGF0IHdpbGwgYXV0b2ZpbGwgdGhlbS5cclxuXHRcdFx0aW5zdGFsbFJ1YnJpY0NsaWNrZXJzKCkge1xyXG5cdFx0XHRcdGNvbnN0IHNlbGVjdG9ycyA9IFsnZGl2LmNsLWNsaWNrYWJsZSBsaS5pdGVtJywgJ2Rpdi5jbC1jbGlja2FibGUgdWwuaXRlbXMgbGknLCAnZGl2LmNsLWNsaWNrYWJsZSBwLml0ZW0nXTtcclxuXHRcdFx0XHRmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycykge1xyXG5cdFx0XHRcdFx0Y29uc3QgY2xpY2thYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBjbGlja2FibGVzKSB7XHJcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmRhdGFzZXQuY2xpY2thYmxlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hZGRDb250ZW50KGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZScsICd5ZXMnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8vIEFkZCBydWJyaWMgY29udGVudCB0byB0aGUgZWxlbWVudCBjb21tZW50IHRleHRhcmVhXHJcblx0XHRcdGFkZENvbnRlbnQoZWxlbWVudCkge1xyXG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHQvLyBXb3JrIHVwIHVudGlsIHdlIGZpbmQgdGhlIGNsLWdyYWRlci1pdGVtIGRpdlxyXG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcblx0XHRcdFx0d2hpbGUgKGVsZW1lbnQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2wtZ3JhZGVyLWl0ZW0nKSkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGVsZW1lbnQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIEZpbmQgdGhlIGl0ZW0gdGhpcyBkb2VzIHdpdGhcclxuXHRcdFx0XHRjb25zdCB0YWcgPSBlbGVtZW50LmRhdGFzZXQudGFnO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIHRoaXMuZ3JhZGVycykge1xyXG4gICAgICAgICAgICAgICAgICBpZihpdGVtLnRhZyA9PT0gdGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5tYW51YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5tYW51YWwuY29tbWVudC5sZW5ndGggPiAwICYmIGl0ZW0ubWFudWFsLmNvbW1lbnQubWF0Y2goL1xcbiQvKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1hbnVhbC5jb21tZW50ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1hbnVhbC5jb21tZW50ICs9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdC8vIEZpbmQgYSB0ZXh0YXJlYSBpbnNpZGUgdGhpc1xyXG5cdFx0XHRcdGZvciAobGV0IHRleHRhcmVhIG9mIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKSkge1xyXG5cdFx0XHRcdFx0dGV4dGFyZWEudmFsdWUgPSB0ZXh0YXJlYS52YWx1ZSArIGNvbnRlbnQgKyBcIlxcblwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZSh0KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgodCwgJ3Nob3J0Jyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVtYWlsKHVzZXIpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24gPSAnbWFpbHRvOicgKyB1c2VyLmVtYWlsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYW5kYm9va0RhdGEoZGF0YSkge1xyXG5cdFx0XHRcdHRoaXMuaGFuZGJvb2tSZXN1bHQgPSBkYXRhO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDI+e3tydWJyaWMubmFtZX19PC9oMj5cclxuXHJcbiAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0KClcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsLXJ1YnJpY2Jsb2NrIGNsLXNob3dcIiB2LWh0bWw9XCJydWJyaWMuc2hvd1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IHJlZj1cImVkaXRvclwiPjwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcbiAgICogRWRpdG9yIGZvciBhIHNpbmdsZSBSdWJyaWNcclxuICAgKiBDb21wb25lbnQgaW4gL2NsL2NvbnNvbGUvcnVicmljLzphc3NpZ250YWdcclxuICAgKiBAY29uc3RydWN0b3IgUnVicmljRWRpdG9yVnVlXHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFsnYXNzaWdudGFnJywgJ3J1YnJpYyddLFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ2VkaXRvciddO1xyXG5cdFx0XHR0aGlzLmVkaXRvciA9IG5ldyB0aGlzLiRzaXRlLkVkaXRvcihlbGVtZW50LCB7XHJcblx0XHRcdFx0dmFsdWU6IHRoaXMucnVicmljLnJ1YnJpYyxcclxuXHRcdFx0XHR0YWI6IHRydWUsXHJcblx0XHRcdFx0YXV0b0luZGVudDogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuZWRpdG9yLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jaGFuZ2VkKCk7XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ2VkKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnRpbWVyICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdFx0dGhpcy5ydWJyaWMuc2hvdyA9IHRoaXMuJHNpdGUuU2FuaXRpemUuc2FuaXRpemUodGhpcy5lZGl0b3IudGV4dGFyZWEudmFsdWUpO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Ym1pdCgpIHtcclxuXHRcdFx0XHR0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL2dyYWRlL3J1YnJpY3MvJyArIHRoaXMuYXNzaWdudGFnICsgJy8nICsgdGhpcy5ydWJyaWMudGFnLCB7XHJcblx0XHRcdFx0XHRydWJyaWM6IHRoaXMucnVicmljLnNob3dcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgJ1J1YnJpYyBzdWNjZXNzZnVsbHkgc2F2ZWQnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWdyYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZVwiPjxwPjxhPkV4cGFuZCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNyZWF0aW5nIHJ1YnJpY3MuPC9hPjwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJjbC10b2dnbGVibG9ja1wiPlxyXG4gICAgICA8cD5SdWJyaWNzIGFyZSBlbnRlcmVkIGFzIEhUTUwuIEEgY29tbW9uIGZvcm1hdCBpcyB0b1xyXG4gICAgICAgIGNyZWF0ZSBsaXN0cyB1c2luZyAmbHQ7dWwmZ3Q7IGFuZCAmbHQ7bGkmZ3Q7IHRhZ3MuPC9wPlxyXG4gICAgICA8cD5Db250ZW50cyBvZiBhbiAmbHQ7bGkmZ3Q7IG9yICZsdDtwJmd0OyB0YWcgY2FuIGJlIG1ha2VcclxuICAgICAgICBjbGlja2FibGUgc28gdGhleSBhdXRvbWF0aWNhbGx5IGFwcGVhciBpbiB0aGUgY29tbWVudFxyXG4gICAgICAgIHdpbmRvdyBieSBhZGRpbmcgdGhlIGNsYXNzICdpdGVtJy4gQWxsICZsdDtsaSZndDsgY2hpbGRyZW5cclxuICAgICAgICBvZiBhICZsdDt1bCZndDsgY2FuIGJlIG1hZGUgY2xpY2thYmxlIGJ5IGFkZGluZyB0aGVcclxuICAgICAgICBjbGFzcyAnaXRlbXMnOjwvcD5cclxuICAgICAgPHByZSBjbGFzcz1cImNvZGVcIj5cclxuJmx0O3VsJmd0O1xyXG4gICAmbHQ7bGkgY2xhc3M9XCJpdGVtXCImZ3Q7VGhpcyBpdGVtIHdpbGwgYmUgY2xpY2thYmxlJmx0Oy9saSZndDtcclxuICAgJmx0O2xpJmd0O1RoaXMgaXRlbSB3aWxsIG5vdCBiZSBjbGlja2FibGUmbHQ7L2xpJmd0O1xyXG4mbHQ7L3VsJmd0O1xyXG5cclxuJmx0O3AgY2xhc3M9XCJpdGVtXCImZ3Q7QW5kIHRoaXMgd2lsbCBiZSBjbGlja2FibGUmbHQ7L3AmZ3Q7XHJcblxyXG4mbHQ7dWwgY2xhc3M9XCJpdGVtc1wiJmd0O1xyXG4gICAmbHQ7bGkmZ3Q7QWxsIG9mIHRoZXNlIGl0ZW1zIHdpbGwgYmUgY2xpY2thYmxlJmx0Oy9saSZndDtcclxuICAgJmx0O2xpJmd0O1RoaXMgb25lLCB0b28hJmx0Oy9saSZndDtcclxuJmx0Oy91bCZndDtcclxuICAgICAgPC9wcmU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWZvcj1cInJ1YnJpYyBpbiBydWJyaWNzXCIgY2xhc3M9XCJjbC1ydWJyaWNcIj5cclxuICAgICAgPHJ1YnJpYy1lZGl0b3IgOmFzc2lnbnRhZz1cImFzc2lnbnRhZ1wiIDpydWJyaWM9XCJydWJyaWNcIj48L3J1YnJpYy1lZGl0b3I+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IFJ1YnJpY0VkaXRvclZ1ZSBmcm9tICcuL1J1YnJpY0VkaXRvci52dWUnO1xyXG5cclxuXHRjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblx0Y29uc3QgTWVtYmVyID0gU2l0ZS5NZW1iZXI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEVkaXRvciBwYWdlIGZvciBhbGwgcnVicmljcyBmb3IgYW4gYXNzaWdubWVudFxyXG5cdCAqIC9jbC9jb25zb2xlL3J1YnJpYy86YXNzaWdudGFnXHJcblx0ICogQGNvbnN0cnVjdG9yIFJ1YnJpY3NFZGl0b3JWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0cHJvcHM6IFsnYXNzaWdudGFnJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGE6IE1lbWJlci5UQSxcclxuXHRcdFx0XHRydWJyaWNzOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRydWJyaWNFZGl0b3I6IFJ1YnJpY0VkaXRvclZ1ZVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBBc3NpZ25tZW50IEdyYWRpbmcnKTtcclxuXHRcdFx0dGhpcy50aW1lciA9IG51bGw7XHJcblxyXG5cdFx0XHRsZXQgdXNlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuXHRcdFx0bGV0IG1lbWJlciA9IHVzZXIubWVtYmVyO1xyXG5cclxuXHRcdFx0dGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuXHRcdFx0dGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBSdWJyaWNzJyk7XHJcblxyXG5cdFx0XHR0aGlzLiRzaXRlLmFwaS5nZXQoJy9hcGkvZ3JhZGUvcnVicmljcy8nICsgdGhpcy5hc3NpZ25tZW50LnRhZywge30pXHJcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ydWJyaWNzID0gcmVzcG9uc2UuZ2V0RGF0YSgncnVicmljcycpLmF0dHJpYnV0ZXM7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IHJ1YnJpYyBvZiB0aGlzLnJ1YnJpY3MpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRzZXQocnVicmljLCAnc2hvdycsIHJ1YnJpYy5ydWJyaWMpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dGFibGUgY2xhc3M9XCJjbC1oYW5kYm9va1wiPlxyXG4gICAgICA8dHI+PHRoPkNhdGVnb3J5PGJyPk11bHRpcGxpZXI6IHt7aXRlbS5tdWx0aXBsaWVyfX08L3RoPjx0aD5EZWR1Y3Rpb248YnI+MCB0byBtYXg8L3RoPjwvdHI+XHJcbiAgICAgIDx0ciB2LWZvcj1cImNhdGVnb3J5IGluIGl0ZW0uaGFuZGJvb2suY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY2F0ZWdvcnkucnVicmljICE9PSB1bmRlZmluZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZSBjbC1zaW5nbGUtc3BhY2VcIj48c3Bhbj48YT57e2NhdGVnb3J5Lm5hbWV9fTwvYT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsLXJ1YnJpY2Jsb2NrXCI+PGRpdiB2LWh0bWw9XCJjYXRlZ29yeS5ydWJyaWNcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57e2NhdGVnb3J5Lm5hbWV9fTwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIXJlYWRvbmx5XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2LWZvcj1cImRlZHVjdCBpbiAoY2F0ZWdvcnkuZGVkdWN0KzEpXCIgdi1tb2RlbD1cIm1ldGFkYXRhW2NhdGVnb3J5LnRhZ11cIiA6dmFsdWU9XCJkZWR1Y3QtMVwiIHR5cGU9XCJyYWRpb1wiIEBjaGFuZ2U9XCJjb21wdXRlXCI+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPHNwYW4gdi1lbHNlPnt7ZGVkdWN0aW9uKG1ldGFkYXRhW2NhdGVnb3J5LnRhZ10pfX08L3NwYW4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxpbnB1dCB2LWlmPVwiIXJlYWRvbmx5XCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibWV0YWRhdGFbJ19tYW51YWxfdGV4dCddXCI+XHJcbiAgICAgICAgICA8c3BhbiB2LWVsc2U+e3ttZXRhZGF0YVsnX21hbnVhbF90ZXh0J119fTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIXJlYWRvbmx5XCI+XHJcbiAgICAgICAgICA8aW5wdXQgdi1mb3I9XCJkZWR1Y3QgaW4gNVwiIHYtbW9kZWw9XCJtZXRhZGF0YVsnX21hbnVhbCddXCIgOnZhbHVlPVwiZGVkdWN0LTFcIiB0eXBlPVwicmFkaW9cIiBAY2hhbmdlPVwiY29tcHV0ZVwiPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHNwYW4gdi1lbHNlPnt7ZGVkdWN0aW9uKG1ldGFkYXRhWydfbWFudWFsJ10pfX08L3NwYW4+XHJcbiAgICAgIDwvdGQ+PC90cj5cclxuICAgICAgPHRyIGNsYXNzPVwiY2wtaW50ZXJuYWxcIj48dGg+Q29tbWVudDwvdGg+PHRoPkRlZHVjdGlvbjwvdGg+PC90cj5cclxuICAgICAgPHRyPjx0ZD5cclxuICAgICAgICA8dGV4dGFyZWEgdi1pZj1cIiFyZWFkb25seVwiIHJvd3M9XCIzXCIgdi1tb2RlbD1cIm1ldGFkYXRhWydfY29tbWVudCddXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiIHYtZWxzZT57e21ldGFkYXRhWydfY29tbWVudCddfX08L2Rpdj5cclxuICAgICAgPC90ZD48dGQgY2xhc3M9XCJjbC1kZWR1Y3RcIj57e3RvdGFsfX08L3RkPjwvdHI+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuICAgKiBIYW5kYm9vayBlZGl0b3Ivdmlld2luZyBWdWUgY29tcG9uZW50XHJcbiAgICpcclxuICAgKiBVc2UgYnkgYm90aCB0aGUgc3R1ZGVudCBncmFkZSBwcmVzZW50YXRpb24gcGFnZSBhbmQgdGhlXHJcbiAgICogYXNzaWdubWVudCBncmFkaW5nIHBhZ2UuXHJcbiAgICogQGNvbnN0cnVjdG9yIEhhbmRib29rVnVlXHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aXRlbToge2RlZmF1bHQ6IHt9fSxcclxuXHRcdFx0cmVhZG9ubHk6IHtkZWZhdWx0OiBmYWxzZX1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRpdGVtOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLnRha2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZXRhZGF0YToge30sXHJcblx0XHRcdFx0dG90YWw6IDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMudGFrZSgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0dGFrZSgpIHtcclxuXHRcdFx0XHR0aGlzLm1ldGFkYXRhID0ge307XHJcblx0XHRcdFx0Zm9yIChsZXQgY2F0ZWdvcnkgb2YgdGhpcy5pdGVtLmhhbmRib29rLmNhdGVnb3JpZXMpIHtcclxuXHRcdFx0XHRcdGxldCBjYXRQb2ludHMgPSB0aGlzLml0ZW0ubWV0YWRhdGFbY2F0ZWdvcnkudGFnXTtcclxuXHRcdFx0XHRcdGlmIChjYXRQb2ludHMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRjYXRQb2ludHMgPSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLm1ldGFkYXRhLCBjYXRlZ29yeS50YWcsIGNhdFBvaW50cyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgY2F0UG9pbnRzID0gdGhpcy5pdGVtLm1ldGFkYXRhWydfbWFudWFsJ107XHJcblx0XHRcdFx0aWYgKGNhdFBvaW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRjYXRQb2ludHMgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy4kc2V0KHRoaXMubWV0YWRhdGEsICdfbWFudWFsJywgY2F0UG9pbnRzKTtcclxuXHJcblx0XHRcdFx0bGV0IG1hbnVhbFRleHQgPSB0aGlzLml0ZW0ubWV0YWRhdGFbJ19tYW51YWxfdGV4dCddO1xyXG5cdFx0XHRcdGlmIChtYW51YWxUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdG1hbnVhbFRleHQgPSAnJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kc2V0KHRoaXMubWV0YWRhdGEsICdfbWFudWFsX3RleHQnLCBtYW51YWxUZXh0KTtcclxuXHJcblx0XHRcdFx0bGV0IGNvbW1lbnQgPSB0aGlzLml0ZW0ubWV0YWRhdGFbJ19jb21tZW50J107XHJcblx0XHRcdFx0aWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0Y29tbWVudCA9ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5tZXRhZGF0YSwgJ19jb21tZW50JywgY29tbWVudCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuY29tcHV0ZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21wdXRlKCkge1xyXG5cdFx0XHRcdGxldCB0b3RhbCA9IC10aGlzLm1ldGFkYXRhWydfbWFudWFsJ107XHJcblx0XHRcdFx0Zm9yIChsZXQgY2F0ZWdvcnkgb2YgdGhpcy5pdGVtLmhhbmRib29rLmNhdGVnb3JpZXMpIHtcclxuXHRcdFx0XHRcdHRvdGFsIC09IHRoaXMubWV0YWRhdGFbY2F0ZWdvcnkudGFnXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRvdGFsICs9IHRoaXMuaXRlbS5oYW5kYm9vay5mcmVlO1xyXG5cdFx0XHRcdGlmICh0b3RhbCA+IDApIHtcclxuXHRcdFx0XHRcdHRvdGFsID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG90YWwgKj0gdGhpcy5pdGVtLm11bHRpcGxpZXI7XHJcblx0XHRcdFx0dGhpcy50b3RhbCA9IHRvdGFsO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdoYW5kYm9vay1kYXRhJywgeydtZXRhZGF0YSc6IHRoaXMubWV0YWRhdGEsICd0b3RhbCc6IHRoaXMudG90YWx9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVkdWN0aW9uKGRlZHVjdCkge1xyXG5cdFx0XHRcdGlmIChkZWR1Y3QgPT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC1kZWR1Y3Q7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2wtYXV0b2JhY2tcIj48L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJjbC10aXRsZVwiPnt7anNvbi5hc3NpZ25tZW50Lm5hbWV9fTwvcD5cclxuICAgICAgPHAgdi1pZj1cImpzb24uZGlzcHV0ZSAhPT0gbnVsbFwiIGNsYXNzPVwiY2wtZGlzcHV0ZVwiPlBsZWFzZSBkaXJlY3QgYWxsIGdyYWRpbmcgaXNzdWVzIHRvIDxzcGFuIHYtaHRtbD1cImpzb24uZGlzcHV0ZVwiPjwvc3Bhbj48L3A+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGpzb24uZ3JhZGVzXCIgdi1pZj1cIml0ZW0uaHRtbCAhPT0gdW5kZWZpbmVkXCI+XHJcbiAgICAgICAgPGgyPnt7aXRlbS5uYW1lfX08L2gyPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIml0ZW0uaGFuZGJvb2sgPT09IHVuZGVmaW5lZFwiIHYtaHRtbD1cIml0ZW0uaHRtbFwiPjwvZGl2PlxyXG4gICAgICAgIDxoYW5kYm9vayB2LWVsc2UgOml0ZW09XCJpdGVtXCIgcmVhZG9ubHk9XCJ0cnVlXCI+PC9oYW5kYm9vaz5cclxuICAgICAgIDxncmFkZS1oaXN0b3J5IDpoaXN0b3J5PVwiaXRlbS5oaXN0b3J5XCI+PC9ncmFkZS1oaXN0b3J5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdyYWRlXCI+XHJcbiAgICAgICAgPHAgdi1pZj1cImpzb24uZ3JhZGUgIT09IG51bGxcIj5Db21wdXRlZCBHcmFkZToge3tqc29uLmdyYWRlfX08L3A+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgIDxwPkdyYWRlIE5vdCBBdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlciBzbWFsbCBub3RpY2VcIj5HcmFkZXMgYXJlIG5vdCBhdmFpbGFibGUgdW50aWwgYWxsIHBhcnRzIG9mIHRoZSBhc3NpZ25tZW50IGhhdmUgYmVlbiBncmFkZWQuPC9wPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2wtYXV0b2JhY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgR3JhZGVIaXN0b3J5Q29tcG9uZW50IGZyb20gJy4uL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZSc7XHJcblx0aW1wb3J0IEhhbmRib29rVnVlIGZyb20gJy4uL0hhbmRib29rL0hhbmRib29rLnZ1ZSc7XHJcblxyXG5cdGNvbnN0IFVzZXJWdWVCYXNlID0gU2l0ZS5Vc2VyVnVlQmFzZTtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGFzc2lnbm1lbnQgZ3JhZGluZyBwYWdlIGZvciBwcmVzZW50YXRpb24gZm9yIGEgdXNlclxyXG5cdCAqXHJcblx0ICogL2NsL2dyYWRlLzphc3NpZ25tZW50XHJcblx0ICogQGNvbnN0cnVjdG9yIEdyYWRlQXNzaWdubWVudFZ1ZVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogVXNlclZ1ZUJhc2UsXHJcblx0XHRwcm9wczogWydqc29uJ10sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGdyYWRlSGlzdG9yeTogR3JhZGVIaXN0b3J5Q29tcG9uZW50LFxyXG5cdFx0XHRoYW5kYm9vazogSGFuZGJvb2tWdWVcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogICcgKyB0aGlzLmpzb24uYXNzaWdubWVudC5zaG9ydE5hbWUgKyAnIEdyYWRlIGZvciAnICsgdGhpcy51c2VyLmRpc3BsYXlOYW1lKCkpO1xyXG5cclxuXHRcdFx0Y29uc3QgbWVudSA9IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnR3JhZGVzJywgY2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gdGhpcy4kc2l0ZS5yb290ICsgJy9jbC9ncmFkZXMnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XTtcclxuXHJcblx0XHRcdHRoaXMuJHBhcmVudC5zZXRNZW51KG1lbnUpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWdyYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPGRpdiB2LWlmPVwiZ3JhZGUgIT09IG51bGxcIj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5Bc3NpZ25tZW50PC90aD48dGg+Jm5ic3A7PC90aD48dGg+R3JhZGU8L3RoPjx0aD4mbmJzcDs8L3RoPjx0aD5HcmFkZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNhdGVnb3J5IGluIGdyYWRlLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiY2wtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj57e2NhdGVnb3J5Lm5hbWV9fTwvdGQ+PHRkPnt7Y2F0ZWdvcnkucG9pbnRzfX0lPC90ZD48dGQ+e3tjYXRlZ29yeS5ncmFkZX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImNsLWFzc2lnbm1lbnRcIiB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIiA6a2V5PVwiYXNzaWdubWVudC50YWdcIj5cclxuICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XCJyb290ICsgJy9jbC9ncmFkZS8nICsgYXNzaWdubWVudC50YWdcIj57e2Fzc2lnbm1lbnQubmFtZX19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7TWF0aC5yb3VuZChhc3NpZ25tZW50LnBvaW50cyAqIDEwKSAvIDEwfX0lPC90ZD48dGQ+e3thc3NpZ25tZW50LmdyYWRlfX08L3RkPjx0ZCBjb2xzcGFuPVwiMlwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q29tcHV0ZWQgR3JhZGU6IHt7Z3JhZGUuZ3JhZGV9fSBvdXQgb2Yge3tncmFkZS5hdmFpbGFibGV9fSBhdmFpbGFibGUgcG9pbnRze3twZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgY29uc3QgVXNlclZ1ZUJhc2UgPSBTaXRlLlVzZXJWdWVCYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvdXJzZSBncmFkaW5nIHBhZ2UgZm9yIHByZXNlbnRhdGlvbiBvZiBhbGwgZ3JhZGVzIGZvciBhIHVzZXJcclxuICAgICAqXHJcbiAgICAgKiAvY2wvZ3JhZGVzXHJcbiAgICAgKiBAY29uc3RydWN0b3IgR3JhZGVzVnVlXHJcbiAgICAgKi9cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgJ2V4dGVuZHMnOiBVc2VyVnVlQmFzZSxcclxuICAgICAgICBwcm9wczogWydqc29uJ10sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBncmFkZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBlcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnR3JhZGVzIGZvciAnICsgdGhpcy51c2VyLmRpc3BsYXlOYW1lKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gIHRoaXMuc2V0VGl0bGUoJzogR3JhZGVzICcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ncmFkZSA9IHRoaXMuanNvbjtcclxuICAgICAgICAgICAgaWYodGhpcy5ncmFkZS5hdmFpbGFibGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlciA9ICcgKCcgKyAodGhpcy5ncmFkZS5ncmFkZSAvIHRoaXMuZ3JhZGUuYXZhaWxhYmxlICogMTAwKS50b0ZpeGVkKDEpICsgJyUpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtZ3JhZGUtaGlzdG9yeVwiPlxyXG4gICAgPGRpdiB2LWlmPVwiaGlzdG9yeTIubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJoaXN0b3J5Mi5sZW5ndGggPiAxXCIgY2xhc3M9XCJjbC10b2dnbGVcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImV4cGFuZGVyXCI+PGE+e3tkaXNwbGF5KGhpc3RvcnkyWzBdKX19IC8gRXhwYW5kIGZvciBhZGRpdGlvbmFsIGdyYWRpbmcgaGlzdG9yeTwvYT48L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyYWRlc1wiPlxyXG4gICAgICAgICAgPHAgdi1mb3I9XCJoIGluIGhpc3RvcnkyXCI+e3tkaXNwbGF5KGgpfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICA8cD57e2Rpc3BsYXkoaGlzdG9yeTJbMF0pfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydoaXN0b3J5J10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBoaXN0b3J5MjogW11cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgIGhpc3Rvcnk6IGZ1bmN0aW9uKHRvLCBmbSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGlzdG9yeTIgPSB0aGlzLmhpc3Rvcnkuc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5oaXN0b3J5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5oaXN0b3J5MiA9IHRoaXMuaGlzdG9yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGRpc3BsYXkoaGlzdG9yeSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGdyYWRlciA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zdGFmZiddKGhpc3RvcnkuZ3JhZGVyKTtcclxuICAgICAgICAgICAgICBjb25zdCBncmFkZXJOYW1lID0gZ3JhZGVyICE9PSBudWxsID8gZ3JhZGVyLmRpc3BsYXlOYW1lKCkgOiBcIkludmFsaWRcIjtcclxuICAgICAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIuYWJzb2x1dGVVTklYKGhpc3RvcnkudGltZSwgJ3Nob3J0JykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJyBieSAnICtcclxuICAgICAgICAgICAgICAgICAgICAgIGdyYWRlck5hbWU7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuICBkaXYuY2wtZ3JhZGUtaGlzdG9yeSB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxuICB9XHJcblxyXG4gIHAuZXhwYW5kZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgZGl2LmdyYWRlcyB7XHJcbiAgICBwYWRkaW5nOiAycHggMCAycHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGZmZGQ7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgMCAwO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxuYXYgY2xhc3M9XCJjbC1uYXZcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImRpdmlkZXJzXCI+XHJcbiAgICAgICAgPGxpPjxhIDpocmVmPVwiaG9tZUxpbmtcIj48c3BhbiBjbGFzcz1cImhvbWVcIj5Ib21lPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cIml0ZW0gaW4gbWVudVwiPjxhIEBjbGljay5wcmV2ZW50PVwiaXRlbS5jbGljaygpXCI+e3tpdGVtLm5hbWV9fTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnbWVudSddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaG9tZUxpbms6IFNpdGUucm9vdCArICcvJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL3NpdGUvaW1nL3llbGxvd3BhZC5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpYyBkaXYuY2wtc2hvdyB7XFxuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjY2NjOyB9XFxuXFxuZGl2LmNsLWdyYWRlcyB0ZC5yb2xlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIGZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGVyLWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNWVtOyB9XFxuICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZXItaXRlbSBoMiB7XFxuICAgIG1hcmdpbi10b3A6IC0wLjI1ZW07IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZXItaXRlbS1sb2NrZWQge1xcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgLyogU2FmYXJpICovXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA1MHB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZDogI2Y4ZmZmODsgfVxcblxcbmRpdi5jbC1ncmFkZXIgYS5saW5rLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIHBhZGRpbmc6IDAgMnB4OyB9XFxuXFxuZGl2LmNsLWdyYWRlciBwLmNsLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMWVtIDAgMCAwOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBwLmNsLWRpc3B1dGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBwLmNsLXJvbGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBwLmNsLXJvbGUtc3RhZmYge1xcbiAgY29sb3I6ICNjNDE0MjU7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtZHVlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogI2M0MTQyNTsgfVxcblxcbmRpdi5jbC1ncmFkZXIgYnV0dG9uLmNsLWdyYWRlci1idXR0b24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGNvbG9yOiBibGFjazsgfVxcblxcbmRpdi5jbC1ncmFkZXIgYS5jbC1leHRyYS1saW5rIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIHBhZGRpbmctdG9wOiAxZW07IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWNhdGVnb3J5IHRkIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuZGl2LmNsLWdyYWRlciB0ci5jbC1jYXRlZ29yeSB0ZDpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuZGl2LmNsLWdyYWRlciB0ci5jbC1hc3NpZ25tZW50IHRkIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuZGl2LmNsLWdyYWRlciB0ci5jbC1hc3NpZ25tZW50IHRkOmZpcnN0LWNoaWxkIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDNlbTsgfVxcblxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcbiAgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgbGFiZWwsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5sYWJlbCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGxhYmVsLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmxhYmVsIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAgIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGxhYmVsIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5sYWJlbCBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgbGFiZWwgYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5sYWJlbCBhIHtcXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAxZW07IH1cXG4gIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMDsgfVxcbiAgICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYuY29tbWVudCB0ZXh0YXJlYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IHRleHRhcmVhIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYuY29tbWVudCBkaXYuY29tbWVudCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IGRpdi5jb21tZW50IHtcXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDJweDsgfVxcbiAgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cywgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5wb2ludHMge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0NXB4IDVweCAwIDA7IH1cXG4gICAgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBpbnB1dCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBkaXYudmFsdWUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIGlucHV0LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBkaXYudmFsdWUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBzcGFuLm5vdCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5wb2ludHMgc3Bhbi5ub3Qge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYudmFsdWUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYudmFsdWUge1xcbiAgICBwYWRkaW5nOiAycHggMXB4OyB9XFxuICAgIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi52YWx1ZSBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnZhbHVlIGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHtcXG4gIHdpZHRoOiA5MCU7IH1cXG4gIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGQ6bGFzdC1jaGlsZCwgZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0aDpsYXN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMCAycHg7XFxuICAgIG1hcmdpbjogMCAycHg7IH1cXG4gIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGQuY2wtZGVkdWN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtOyB9XFxuICBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGRpdi5jb21tZW50IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIG1hcmdpbjogMC4zZW0gMDsgfVxcblxcbmRpdi5jbC1ncmFkZXIgcC5jbC1ydWJyaWMtZXhwYW5kIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sge1xcbiAgYmFja2dyb3VuZDogI2U4ZjdmMztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHA6Zmlyc3QtY2hpbGQsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHVsOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgbGkuaXRlbSwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcC5pdGVtLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bC5pdGVtcyBsaSB7XFxuICAgIGNvbG9yOiAjOTAwMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIGxpLml0ZW06aG92ZXIsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHAuaXRlbTpob3ZlciwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWwuaXRlbXMgbGk6aG92ZXIge1xcbiAgICBjb2xvcjogI2MwMDAwMDsgfVxcblxcbmRpdi5jbC1ncmFkZXIgdGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbmRpdi5jbC1ncmFkZXIgdGV4dGFyZWEueWVsbG93LXBhZCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGUge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZSBwOmZpcnN0LWNoaWxkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIGRpdi5jbC1zaG93IHtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIG1pbi1oZWlnaHQ6IDhlbTsgfVxcblxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpYyB0ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDhlbTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWJ1bGstdXBsb2FkIGZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHtcXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYgPiBkaXYgcCB7XFxuICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHA6bGFzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYgPiBkaXYgcDpsYXN0LWNoaWxkIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA2LjVlbTtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkLWRsZyB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidGRbZGF0YS12LTVjZjljZGRkXSB7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxufVxcbmRpdi5jYXRlZ29yeVtkYXRhLXYtNWNmOWNkZGRdIHtcXG4gIGNvbG9yOiAjZmNhZjE3O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnRbZGF0YS12LTU2YjA1OTgwXSB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgcFtkYXRhLXYtNTZiMDU5ODBdIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuZGl2I2NsLWNvbHVtbi1jaG9vc2VyLWNvbXBvbmVudCBkaXYuY2wtcGFydHNbZGF0YS12LTU2YjA1OTgwXSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgZGl2LmNsLXBhcnRzID4gZGl2W2RhdGEtdi01NmIwNTk4MF0ge1xcbiAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuZGl2I2NsLWNvbHVtbi1jaG9vc2VyLWNvbXBvbmVudCBkaXYuY2wtcGFydHMgPiBkaXYgPiBkaXZbZGF0YS12LTU2YjA1OTgwXTpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuZGl2I2NsLWNvbHVtbi1jaG9vc2VyLWNvbXBvbmVudCBkaXYuY2wtcGFydHMgPiBkaXYgPiBkaXZbZGF0YS12LTU2YjA1OTgwXSB7XFxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgZGl2LmNsLXBhcnRzIGRpdi5jbC1jb21tZW50W2RhdGEtdi01NmIwNTk4MF0ge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtZ3JhZGUtaGlzdG9yeVtkYXRhLXYtMTc3ZmFhNTNdIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDFlbSAwO1xcbn1cXG5wW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcbnAuZXhwYW5kZXJbZGF0YS12LTE3N2ZhYTUzXSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5kaXYuZ3JhZGVzW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgcGFkZGluZzogMnB4IDAgMnB4IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmRkO1xcbn1cXG5kaXYuZ3JhZGVzIHBbZGF0YS12LTE3N2ZhYTUzXSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMnB4IDAgMCAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWJ1bGstdXBsb2FkXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgeyBhdHRyczogeyBpZDogXCJidWxrXCIgfSB9LCBbX3ZtLl92KFwiQnVsayBncmFkZSB1cGxvYWRpbmdcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVGhpcyBvcHRpb24gYWNjZXB0cyBmaWxlcyBpbiBDU1YgZm9ybWF0IGFzIHByb2R1Y2VkIGJ5IENyb3dkTWFyayBhbmQgb3RoZXIgc3lzdGVtcy4gXCJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZ1bGxcIixcbiAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiwgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uYnVsa1VwbG9hZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImZpZWxkc2V0XCIsIFtcbiAgICAgICAgICBfYyhcImxlZ2VuZFwiLCBbX3ZtLl92KFwiQnVsayBVcGxvYWQgRmlsZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIkZpbGUgdG8gdXBsb2FkOiBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImJ1bGtmaWxlXCIsIHR5cGU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5idWxrRmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJQcmVzc1wiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgdG8gdXBsb2FkIHRoZSBmaWxlIVwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWdyYWRlXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudFwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICBfdm0uX3YoXCJDb21tZW50IFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb21wdXRlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcImNvbXB1dGVcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLm1hbnVhbC5jb21tZW50LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubWFudWFsLmNvbW1lbnRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tbWVudFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNlwiLCBuYW1lOiBfdm0uaXRlbS50YWcgKyBcIi1jb21tZW50XCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLml0ZW0ubWFudWFsLmNvbW1lbnQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbS5tYW51YWwsIFwiY29tbWVudFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50c1wiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICBfdm0uX3YoXCJQb2ludHNcXG4gICAgICAgICAgICBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLm1hbnVhbC5wb2ludHMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5tYW51YWwucG9pbnRzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvaW50c1wiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgaWQ6IF92bS5pdGVtLnRhZyArIFwiLXBvaW50c1wiLFxuICAgICAgICAgICAgbmFtZTogX3ZtLml0ZW0udGFnICsgXCItcG9pbnRzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uaXRlbS5tYW51YWwucG9pbnRzIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0ubWFudWFsLCBcInBvaW50c1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50c1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiQXZhaWxhYmxlXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJkYXRhLWlkXCI6IF92bS5pdGVtLnRhZyArIFwiLXBvaW50c1wiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJDbGljayB0byBmaWxsIGluIHBvaW50c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maWxsSW5Qb2ludHMoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5tYW51YWwuYXZhaWxhYmxlKSldXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnMtZmV0Y2hlclwiLCB7XG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZlcnRpY2FsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoYXNzaWdubWVudC5zaG9ydG5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbCBjYXRlZ29yeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHVzZXIucm9sZSgpICE9PSBcIlRcIiA/IFwiaWdub3JlXCIgOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2dyYWRlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VjdGlvbi5hc3NpZ25tZW50cy5jYXRlZ29yaWVzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFzc2lnbm1lbnRHcmFkZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jYXRlZ29yeUdyYWRlKHVzZXIsIGNhdGVnb3J5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJzLWZldGNoZXJcIiwge1xuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmZXRjaGVyLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogdXNlci5yb2xlKCkgIT09IFwiVFwiID8gXCJpZ25vcmVcIiA6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkZXMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlci1mZXRjaGVyXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IF92bS5tZW1iZXJpZCxcbiAgICAgICAgICAgIGZhaWxsaW5rOiBfdm0ucm9vdCArIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL2xpbmtzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGZldGNoZWQ6IF92bS5mZXRjaGVkIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldi1uZXh0XCIsIHsgYXR0cnM6IHsgdXNlcjogZmV0Y2hlci51c2VyIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyICE9PSBudWxsICYmIF92bS5ncmFkZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFzc2lnbm1lbnRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJHcmFkZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkdyYWRlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ3JhZGUuY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jYXRlZ29yeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5wb2ludHMpICsgXCIlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5ncmFkZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChjYXRlZ29yeS5hc3NpZ25tZW50cywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYXNzaWdubWVudC50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWFzc2lnbm1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkaW5nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudC50YWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoYXNzaWdubWVudC5wb2ludHMgKiAxMCkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQuZ3JhZGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDbGljayBvbiBlYWNoIGFzc2lnbm1lbnQgZm9yIG1vcmUgZ3JhZGluZyBkZXRhaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXB1dGVkIEdyYWRlOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdyYWRlLmdyYWRlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBvdXQgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZS5hdmFpbGFibGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGF2YWlsYWJsZSBwb2ludHNcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnRcIiB9IH0sIFtcbiAgICBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFwiTWVtYmVyIGlkZW50aWZpZXIgY29sdW1uOlxcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW1iZXJJZENvbHVtbi5pZCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZW1iZXJJZENvbHVtbi5pZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgX3ZtLm1lbWJlcklkQ29sdW1uLFxuICAgICAgICAgICAgICAgIFwiaWRcIixcbiAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgW192bS5fdihfdm0uX3MoY29sdW1uKSldKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJNZW1iZXIgaWRlbnRpZmllciBjYW4gYmUgYW4gZW1haWwgYWRkcmVzcyBvciB1c2VyIElELlwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiU2VsZWN0IGNvbHVtbiBmb3IgZWFjaCBncmFkZSBpdGVtXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXBhcnRzXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5wYXJ0cywgZnVuY3Rpb24ocGFydCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhwYXJ0Lm5hbWUpICsgXCI6XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZ1twYXJ0LnRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmdbcGFydC50YWddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXBwaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0LnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29sdW1uU2VsZWN0LCBmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoX3ZtLl9zKGNvbHVtbikpXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jb21tZW50XCIgfSwgW192bS5fdihcImNvbW1lbnQ6XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tbWVudE1hcHBpbmdbcGFydC50YWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21tZW50TWFwcGluZ1twYXJ0LnRhZ11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1lbnRNYXBwaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0LnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29sdW1uU2VsZWN0LCBmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoX3ZtLl9zKGNvbHVtbikpXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkdyYWRlcyBTdW1tYXJ5XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLnJvb3QgKyBcIi9jbC9jb25zb2xlL2dyYWRlcy9hbGxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkFsbCBTdHVkZW50c1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0ucm9vdCArIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL2xpbmtzXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBbGwgU3R1ZGVudHMgR3JhZGUgTGlua3NcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kb3dubG9hZFBlcm1pc3Npb25cbiAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnJvb3QgKyBcIi9jbC9ncmFkZXMvY3N2XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEb3dubG9hZCBTdHVkZW50IEdyYWRlc1wiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnJ1YnJpY0R1bXBlclBlcm1pc3Npb25cbiAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnJvb3QgKyBcIi9jbC9ncmFkZXMvcnVicmljLWR1bXBlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSdWJyaWMgRHVtcGVyXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uc2VjdGlvbi5hc3NpZ25tZW50cy5jYXRlZ29yaWVzLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hc3NpZ25tZW50cy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbX2MoXCJlbVwiLCBbX3ZtLl92KFwiUGVuZGluZy4uLlwiKV0pXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogYXNzaWdubWVudC50YWcgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLmdyYWRpbmdMaW5rICsgYXNzaWdubWVudC50YWcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoYXNzaWdubWVudC5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmF0TGVhc3QoX3ZtLnRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluay1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL3J1YnJpYy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudC50YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJydWJyaWNzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlc1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInN1Ym1pc3Npb25zLWxpbmtzXCIsIHsgYXR0cnM6IHsgYXNzaWdubWVudDogX3ZtLmFzc2lnbm1lbnQgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJtZW1iZXJzLWZldGNoZXJcIiwge1xuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfdm0uZ3JhZGVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmVydGljYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGFydHMsIGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhwYXJ0Lm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ3JhZGVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIkdyYWRlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmZXRjaGVyLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogdXNlci5yb2xlKCkgIT09IFwiVFwiID8gXCJpZ25vcmVcIiA6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICsgX3ZtLmxpbmsgKyB1c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICsgX3ZtLmxpbmsgKyB1c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyb2xlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGFydHMsIGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFydEdyYWRlKHVzZXIsIHBhcnQpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdyYWRlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ncmFkZSh1c2VyKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGl2aWRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiZW1cIiwgW192bS5fdihcImNvdW50c1wiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZldGNoZXIudXNlcnMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGFydHMsIGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBhcnRDb3VudChmZXRjaGVyLnVzZXJzLCBwYXJ0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ3JhZGVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdyYWRlc0NvdW50KGZldGNoZXIudXNlcnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImVtXCIsIFtfdm0uX3YoXCJhdmVyYWdlc1wiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJ0cywgZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGFydEF2ZXJhZ2UoZmV0Y2hlci51c2VycywgcGFydCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdyYWRlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZUF2ZXJhZ2UoZmV0Y2hlci51c2VycykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0ucGFydHMubGVuZ3RoID4gMCAmJiBfdm0udGFcbiAgICAgICAgICA/IF9jKFwiYnVsay11cGxvYWRcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBhc3NpZ250YWc6IF92bS5hc3NpZ250YWcsIHBhcnRzOiBfdm0ucGFydHMgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXItZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5tZW1iZXJpZCwgZmFpbGxpbms6IF92bS5ncmFkaW5nTGluayB9LFxuICAgICAgICAgIG9uOiB7IGZldGNoZWQ6IF92bS5mZXRjaGVkIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldi1uZXh0XCIsIHsgYXR0cnM6IHsgdXNlcjogZmV0Y2hlci51c2VyIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnVzZXIucm9sZSgpID09PSBcIlRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNsLXJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNsLXJvbGUgY2wtcm9sZS1zdGFmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmZXRjaGVyLnVzZXIucm9sZU5hbWUoKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmZXRjaGVyLnVzZXIubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZldGNoZXIudXNlci5yb2xlKCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImVtXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmZXRjaGVyLnVzZXIudXNlcklkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtZ3JhZGVyLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWFpbChmZXRjaGVyLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgZW1haWwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlci5yb2xlTmFtZSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1ncmFkZXItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2dyYWRlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInN0dWRlbnQgZ3JhZGVzXFxuICAgICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kdWUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXNzaWdubWVudCBkdWUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRpbWUoX3ZtLmR1ZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ncmFkZXJzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2wtZ3JhZGVyLWl0ZW1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5sb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiBjbC1ncmFkZXItaXRlbS1sb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10YWdcIjogaXRlbS50YWcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtZ3JhZGVyLWl0ZW0tbG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJMb2NrL1VubG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jayhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0ubG9ja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi9jbC9pbWcvbG9jay1vbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvY2wvaW1nL2xvY2stb2ZmLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJVbmxvY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0ubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRlYW1pbmcgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWV4dHJhLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50ZWFtRGlzdHJpYnV0ZShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUZWFtIERpc3RyaWJ1dGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1YnJpYyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXRvZ2dsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLXJ1YnJpYy1leHBhbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXhwYW5kIGZvciBydWJyaWNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsLXJ1YnJpY2Jsb2NrIGNsLWNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1YnJpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1hbnVhbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZ3JhZGUtbWFudWFsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmh0bWwgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKGl0ZW0uaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5oYW5kYm9vayAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaGFuZGJvb2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYW5kYm9vay1kYXRhXCI6IF92bS5oYW5kYm9va0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJncmFkZS1oaXN0b3J5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpc3Rvcnk6IGl0ZW0uaGlzdG9yeSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdWJtaXNzaW9uc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBmZXRjaGVyLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbnRhZzogX3ZtLmFzc2lnbnRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJldmlld2luZyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhfdm0ucmV2aWV3aW5nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ250YWc6IF92bS5hc3NpZ250YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBmZXRjaGVyLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmFkZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcHV0ZWQgR3JhZGU6IFwiICsgX3ZtLl9zKF92bS5ncmFkZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJHcmFkZSBOb3QgQXZhaWxhYmxlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyIHNtYWxsIG5vdGljZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdyYWRlcyBhcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBhbGwgcGFydHMgb2YgdGhlIGFzc2lnbm1lbnQgaGF2ZSBiZWVuXFxuICAgICAgICAgICAgICAgICAgZ3JhZGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucnVicmljLm5hbWUpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLXJ1YnJpY2Jsb2NrIGNsLXNob3dcIixcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucnVicmljLnNob3cpIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcImVkaXRvclwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LFxuICAgIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnJ1YnJpY3MsIGZ1bmN0aW9uKHJ1YnJpYykge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXJ1YnJpY1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJydWJyaWMtZWRpdG9yXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgYXNzaWdudGFnOiBfdm0uYXNzaWdudGFnLCBydWJyaWM6IHJ1YnJpYyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRvZ2dsZVwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KFwiRXhwYW5kIGZvciBpbnN0cnVjdGlvbnMgb24gY3JlYXRpbmcgcnVicmljcy5cIildKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC10b2dnbGVibG9ja1wiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlJ1YnJpY3MgYXJlIGVudGVyZWQgYXMgSFRNTC4gQSBjb21tb24gZm9ybWF0IGlzIHRvXFxuICAgICAgICBjcmVhdGUgbGlzdHMgdXNpbmcgPHVsPiBhbmQgPGxpPiB0YWdzLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIkNvbnRlbnRzIG9mIGFuIDxsaT4gb3IgPHA+IHRhZyBjYW4gYmUgbWFrZVxcbiAgICAgICAgY2xpY2thYmxlIHNvIHRoZXkgYXV0b21hdGljYWxseSBhcHBlYXIgaW4gdGhlIGNvbW1lbnRcXG4gICAgICAgIHdpbmRvdyBieSBhZGRpbmcgdGhlIGNsYXNzICdpdGVtJy4gQWxsIDxsaT4gY2hpbGRyZW5cXG4gICAgICAgIG9mIGEgPHVsPiBjYW4gYmUgbWFkZSBjbGlja2FibGUgYnkgYWRkaW5nIHRoZVxcbiAgICAgICAgY2xhc3MgJ2l0ZW1zJzpcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29kZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAnPHVsPlxcbiAgIDxsaSBjbGFzcz1cIml0ZW1cIj5UaGlzIGl0ZW0gd2lsbCBiZSBjbGlja2FibGU8L2xpPlxcbiAgIDxsaT5UaGlzIGl0ZW0gd2lsbCBub3QgYmUgY2xpY2thYmxlPC9saT5cXG48L3VsPlxcblxcbjxwIGNsYXNzPVwiaXRlbVwiPkFuZCB0aGlzIHdpbGwgYmUgY2xpY2thYmxlPC9wPlxcblxcbjx1bCBjbGFzcz1cIml0ZW1zXCI+XFxuICAgPGxpPkFsbCBvZiB0aGVzZSBpdGVtcyB3aWxsIGJlIGNsaWNrYWJsZTwvbGk+XFxuICAgPGxpPlRoaXMgb25lLCB0b28hPC9saT5cXG48L3VsPlxcbiAgICAgICdcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLWhhbmRib29rXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJDYXRlZ29yeVwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCJNdWx0aXBsaWVyOiBcIiArIF92bS5fcyhfdm0uaXRlbS5tdWx0aXBsaWVyKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uaXRlbS5oYW5kYm9vay5jYXRlZ29yaWVzLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5ydWJyaWMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC10b2dnbGUgY2wtc2luZ2xlLXNwYWNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfYyhcImFcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXJ1YnJpY2Jsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoY2F0ZWdvcnkucnVicmljKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogW192bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9sKGNhdGVnb3J5LmRlZHVjdCArIDEsIGZ1bmN0aW9uKGRlZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1ldGFkYXRhW2NhdGVnb3J5LnRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRhZGF0YVtjYXRlZ29yeS50YWddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicmFkaW9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlZHVjdCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0YWRhdGFbY2F0ZWdvcnkudGFnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWR1Y3QgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZHVjdCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21wdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlZHVjdGlvbihfdm0ubWV0YWRhdGFbY2F0ZWdvcnkudGFnXSkpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgIV92bS5yZWFkb25seVxuICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfbWFudWFsX3RleHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRhZGF0YVsnX21hbnVhbF90ZXh0J11cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfbWFudWFsX3RleHRcIl0gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX21hbnVhbF90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLm1ldGFkYXRhW1wiX21hbnVhbF90ZXh0XCJdKSldKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICA/IF92bS5fbCg1LCBmdW5jdGlvbihkZWR1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRhZGF0YVtcIl9tYW51YWxcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0YWRhdGFbJ19tYW51YWwnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlZHVjdCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoX3ZtLm1ldGFkYXRhW1wiX21hbnVhbFwiXSwgZGVkdWN0IC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS5tZXRhZGF0YSwgXCJfbWFudWFsXCIsIGRlZHVjdCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21wdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlZHVjdGlvbihfdm0ubWV0YWRhdGFbXCJfbWFudWFsXCJdKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgIV92bS5yZWFkb25seVxuICAgICAgICAgICAgICA/IF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfY29tbWVudFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldGFkYXRhWydfY29tbWVudCddXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiM1wiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm1ldGFkYXRhW1wiX2NvbW1lbnRcIl0gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWV0YWRhdGEsIFwiX2NvbW1lbnRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21tZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubWV0YWRhdGFbXCJfY29tbWVudFwiXSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZGVkdWN0XCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRvdGFsKSldKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoXCIsIFtfdm0uX3YoXCJEZWR1Y3Rpb25cIiksIF9jKFwiYnJcIiksIF92bS5fdihcIjAgdG8gbWF4XCIpXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWludGVybmFsXCIgfSwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ29tbWVudFwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRGVkdWN0aW9uXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWF1dG9iYWNrXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmpzb24uYXNzaWdubWVudC5uYW1lKSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5qc29uLmRpc3B1dGUgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWRpc3B1dGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlBsZWFzZSBkaXJlY3QgYWxsIGdyYWRpbmcgaXNzdWVzIHRvIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmpzb24uZGlzcHV0ZSkgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLmpzb24uZ3JhZGVzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaHRtbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIGl0ZW0uaGFuZGJvb2sgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoaXRlbS5odG1sKSB9IH0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJoYW5kYm9va1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtLCByZWFkb25seTogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZ3JhZGUtaGlzdG9yeVwiLCB7IGF0dHJzOiB7IGhpc3Rvcnk6IGl0ZW0uaGlzdG9yeSB9IH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmFkZVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLmpzb24uZ3JhZGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW192bS5fdihcIkNvbXB1dGVkIEdyYWRlOiBcIiArIF92bS5fcyhfdm0uanNvbi5ncmFkZSkpXSlcbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkdyYWRlIE5vdCBBdmFpbGFibGVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXIgc21hbGwgbm90aWNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJHcmFkZXMgYXJlIG5vdCBhdmFpbGFibGUgdW50aWwgYWxsIHBhcnRzIG9mIHRoZSBhc3NpZ25tZW50IGhhdmUgYmVlbiBncmFkZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtYXV0b2JhY2tcIiB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sIFtcbiAgICAgIF92bS5ncmFkZSAhPT0gbnVsbFxuICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdyYWRlLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY2F0ZWdvcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LnBvaW50cykgKyBcIiVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LmdyYWRlKSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGNhdGVnb3J5LmFzc2lnbm1lbnRzLCBmdW5jdGlvbihhc3NpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGFzc2lnbm1lbnQudGFnLCBzdGF0aWNDbGFzczogXCJjbC1hc3NpZ25tZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0ucm9vdCArIFwiL2NsL2dyYWRlL1wiICsgYXNzaWdubWVudC50YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhNYXRoLnJvdW5kKGFzc2lnbm1lbnQucG9pbnRzICogMTApIC8gMTApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQuZ3JhZGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIkNvbXB1dGVkIEdyYWRlOiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdyYWRlLmdyYWRlKSArXG4gICAgICAgICAgICAgICAgICBcIiBvdXQgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZS5hdmFpbGFibGUpICtcbiAgICAgICAgICAgICAgICAgIFwiIGF2YWlsYWJsZSBwb2ludHNcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBlcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQXNzaWdubWVudFwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkdyYWRlXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiR3JhZGVcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWdyYWRlLWhpc3RvcnlcIiB9LCBbXG4gICAgX3ZtLmhpc3RvcnkyLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5oaXN0b3J5Mi5sZW5ndGggPiAxXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImV4cGFuZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheShfdm0uaGlzdG9yeTJbMF0pKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAvIEV4cGFuZCBmb3IgYWRkaXRpb25hbCBncmFkaW5nIGhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmFkZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5oaXN0b3J5MiwgZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KGgpKSldKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KF92bS5oaXN0b3J5MlswXSkpKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW5hdlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhvbWVMaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW192bS5fdihcIkhvbWVcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ubWVudSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmNmNWVlYzhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjZjljZGRkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjExNTAwMjZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNmOWNkZGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjZjljZGRkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NmIwNTk4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImE0ZDFlNTZjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NmIwNTk4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2YjA1OTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOGFiMWY5Y2VcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTc3ZmFhNTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9fZ3JhZGVzLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNmI0NjVjMmVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL19ncmFkZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9fZ3JhZGVzLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7R3JhZGVzRmFjdG9yeX0gZnJvbSAnLi9qcy9HcmFkZXNGYWN0b3J5JztcclxuaW1wb3J0IHtHcmFkZXNDb25zb2xlfSBmcm9tICcuL2pzL0NvbnNvbGUvR3JhZGVzQ29uc29sZSdcclxuaW1wb3J0ICcuL19ncmFkZXMuc2Nzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhZGVzID0gR3JhZGVzRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuXHJcbmlmKFNpdGUuU2l0ZS5jb25zb2xlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIEdyYWRlc0NvbnNvbGUuaW5zdGFsbChTaXRlLlNpdGUuY29uc29sZSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyZDY4YjBiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDJkNjhiMGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDJkNjhiMGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDJkNjhiMGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDJkNjhiMGImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDJkNjhiMGInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDJkNjhiMGImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDk5OTNkNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZU1hbnVhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGQ5OTkzZDUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGQ5OTkzZDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGQ5OTkzZDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDk5OTNkNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZDk5OTNkNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlTWFudWFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVNYW51YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDk5OTNkNSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Y2Y5Y2RkZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01Y2Y5Y2RkZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVjZjljZGRkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWNmOWNkZGQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWNmOWNkZGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWNmOWNkZGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNmOWNkZGQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWNmOWNkZGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNmOWNkZGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNmOWNkZGQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgR3JhZGluZ1Z1ZSBmcm9tICcuL0dyYWRpbmcudnVlJztcclxuaW1wb3J0IEdyYWRpbmdBc3NpZ25tZW50VnVlIGZyb20gJy4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlJztcclxuaW1wb3J0IEdyYWRpbmdBc3NpZ25tZW50TWVtYmVyVnVlIGZyb20gJy4vR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlJ1xyXG5pbXBvcnQgR3JhZGVzTGlua3NWdWUgZnJvbSAnLi9HcmFkZXNMaW5rcy52dWUnO1xyXG5pbXBvcnQgR3JhZGVzQWxsVnVlIGZyb20gJy4vR3JhZGVzQWxsLnZ1ZSc7XHJcbmltcG9ydCBHcmFkZXNNZW1iZXJWdWUgZnJvbSAnLi9HcmFkZXNNZW1iZXIudnVlJztcclxuaW1wb3J0IFJ1YnJpY3NFZGl0b3JWdWUgZnJvbSAnLi9SdWJyaWNzRWRpdG9yLnZ1ZSc7XHJcblxyXG5jb25zdCBNZW1iZXIgPSBTaXRlLk1lbWJlcjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JhZGVzIGNvbnNvbGUgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBIYW5kbGVzIGluc3RhbGxhdGlvbnMgaW4gdGhlIGNvbnNvbGUgc3lzdGVtLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBHcmFkZXNDb25zb2xlID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnN0YWxsIGZ1bmN0aW9uYWxpdHkgaW50byB0aGUgY29uc29sZSBzeXN0ZW0uXHJcbiAqIEBwYXJhbSBDb25zb2xlXHJcbiAqL1xyXG5HcmFkZXNDb25zb2xlLmluc3RhbGwgPSBmdW5jdGlvbihDb25zb2xlKSB7XHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBNZW1iZXIuR1JBREVSLFxyXG4gICAgICAgIHBhZ2U6IHtcclxuICAgICAgICAgICAgYXRMZWFzdDogTWVtYmVyLkdSQURFUixcclxuICAgICAgICAgICAgdGl0bGU6ICdHcmFkaW5nJyxcclxuICAgICAgICAgICAgcm91dGU6ICcvZ3JhZGluZycsXHJcbiAgICAgICAgICAgIG9yZGVyOiA0LFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IEdyYWRpbmdWdWVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkUm91dGVzKFtcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGluZy86YXNzaWdudGFnJywgY29tcG9uZW50OiBHcmFkaW5nQXNzaWdubWVudFZ1ZSwgcHJvcHM6IHRydWV9LFxyXG4gICAgICAgIHtyb3V0ZTogJy9ncmFkaW5nLzphc3NpZ250YWcvOm1lbWJlcmlkJywgY29tcG9uZW50OiBHcmFkaW5nQXNzaWdubWVudE1lbWJlclZ1ZSwgcHJvcHM6IHRydWV9LFxyXG4gICAgICAgIHtyb3V0ZTogJy9ydWJyaWMvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogUnVicmljc0VkaXRvclZ1ZSwgcHJvcHM6IHRydWV9LFxyXG4gICAgICAgIHtyb3V0ZTogJy9ncmFkZXMvbGlua3MnLCBjb21wb25lbnQ6IEdyYWRlc0xpbmtzVnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGVzL2FsbCcsIGNvbXBvbmVudDogR3JhZGVzQWxsVnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGVzLzptZW1iZXJpZCcsIGNvbXBvbmVudDogR3JhZGVzTWVtYmVyVnVlLCBwcm9wczogdHJ1ZX1cclxuICAgIF0pO1xyXG5cclxuICAgIENvbnNvbGUudGFibGVzLmFkZCh7XHJcbiAgICAgICAgdGl0bGU6ICdHcmFkZXMnLFxyXG4gICAgICAgIG9yZGVyOiA0MCxcclxuICAgICAgICBhcGk6ICcvYXBpL2dyYWRlL3RhYmxlcydcclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlc0xpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2NDIxNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlc0xpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDJiNjQyMTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDJiNjQyMTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDJiNjQyMTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlc0xpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2NDIxNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMmI2NDIxNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0xpbmtzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc0xpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc0xpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2NDIxNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGVmMjM4ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMGVmMjM4ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMGVmMjM4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMGVmMjM4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGVmMjM4ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMGVmMjM4ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc01lbWJlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBlZjIzOGUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2YjA1OTgwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2YjA1OTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTZiMDU5ODBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NmIwNTk4MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NmIwNTk4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NmIwNTk4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTZiMDU5ODAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTZiMDU5ODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2YjA1OTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NmIwNTk4MCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZkMTQ2YTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZmQxNDZhOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZmQxNDZhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZmQxNDZhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZkMTQ2YTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2ZkMTQ2YTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZmQxNDZhOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMzBmODE5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMDMwZjgxOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMDMwZjgxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMDMwZjgxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMzBmODE5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwMzBmODE5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMzBmODE5JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE2NjlkMTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAxNjY5ZDEzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAxNjY5ZDEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAxNjY5ZDEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE2NjlkMTMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDE2NjlkMTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE2NjlkMTMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1J1YnJpY0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGYxNTIzNWMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGYxNTIzNWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGYxNTIzNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGYxNTIzNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1J1YnJpY0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGYxNTIzNWMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGYxNTIzNWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMTUyMzVjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTY2ZDc0YiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU1NjZkNzRiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU1NjZkNzRiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU1NjZkNzRiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTY2ZDc0YiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NTY2ZDc0YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY3NFZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjZkNzRiJlwiIiwiaW1wb3J0IHtQYWdlVnVlfSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlVnVlJztcclxuaW1wb3J0IEdyYWRlQXNzaWdubWVudFZ1ZSBmcm9tICcuL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSc7XHJcbmltcG9ydCBHcmFkZXNWdWUgZnJvbSAnLi9Vc2VyL0dyYWRlcy52dWUnO1xyXG5pbXBvcnQgUGFnZU5hdiBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhZGVzRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5HcmFkZXNGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcbiAgICBjb25zdCBHcmFkZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzaXRlLnJlYWR5KCgpID0+IHtcclxuICAgICAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlLWFzc2lnbm1lbnQnLCAnQXNzaWdubWVudCBHcmFkZScsIEdyYWRlQXNzaWdubWVudFZ1ZSwgUGFnZU5hdik7XHJcbiAgICAgICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1ncmFkZXMnLCAnR3JhZGVzJywgR3JhZGVzVnVlLCBQYWdlTmF2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBHcmFkZXM7XHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmRhYjc3ZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IYW5kYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjJkYWI3N2YnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjJkYWI3N2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjJkYWI3N2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmRhYjc3ZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MmRhYjc3ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IYW5kYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IYW5kYm9vay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJkYWI3N2YmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYyYjBiMjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWYyYjBiMjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWYyYjBiMjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWYyYjBiMjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYyYjBiMjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWYyYjBiMjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMmIwYjIwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MDQxOWUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI3MDQxOWUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3MDQxOWUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3MDQxOWUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MDQxOWUwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3MDQxOWUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzA0MTllMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzdmYWE1MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzdmYWE1MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE3N2ZhYTUzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTc3ZmFhNTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTc3ZmFhNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTc3ZmFhNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc3ZmFhNTMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTc3ZmFhNTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTc3ZmFhNTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc3ZmFhNTMmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBZ0NBSUFBQUN0ak43QUFBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBSGxKUkVGVU9JM3QwckVOZzBBVUExRDduK0VxS3BRWk1rRm1aRHRLTmtpVEhpRUN1Y3NLYmhCQzR0ZFBMdnpOYlI3Z0hITllEZ0J3REJWUVBWbFZJRE5VaXNXalJldldPWkRNR3Q4dmgwWWtQUitUUXl0YjlkM0hvUVZaKzk1NHFZMW85M3I2Qm02cWlLOG5lYTI5L3VoUWtHSk5Ga1U2L1Z0L1BVZ2hJR3dEV0RJQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnZU5hdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRiZjRjYjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZGJmNGNiMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZGJmNGNiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZGJmNGNiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnZU5hdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRiZjRjYjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGRiZjRjYjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGJmNGNiMCZcIiIsIi8qKlxyXG4gKiBCYXNpYyBWdWUtYmFzZWQgc2l0ZSBwYWdlIHN0YXJ0ZXJcclxuICpcclxuICogSG93IHRvIHVzZTpcclxuICogQGNvZGVcclxuICogc2l0ZS5yZWFkeSgoKSA9PiB7XHJcbiAqICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtZ3JhZGUtYXNzaWdubWVudCcsICdBc3NpZ25tZW50IEdyYWRlJywgR3JhZGVBc3NpZ25tZW50VnVlKTtcclxuICogICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1ncmFkZXMnLCAnR3JhZGVzJywgR3JhZGVzVnVlKTtcclxuICogfSk7XHJcbiAqIEBlbmRjb2RlXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvciBQYWdlVnVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFnZVZ1ZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgcGFnZSBpbiBhIGdpdmVuIGNvbXBvbmVudCwgcmVwbGFjaW5nIHRoZSBwcm92aWRlZFxyXG4gKiBzZWxlY3Rvci4gVGhlIHNlbGVjdG9yIGlzIGFzc3VtZWQgdG8gY29udGFpbiBKU09OIGRhdGEgdGhhdCBpc1xyXG4gKiB0aGVuIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaW4gdGhlIGpzb24gcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIGEgZGl2IHRvIHJlcGxhY2Ugd2l0aCB0aGUgdmlldy5cclxuICogQHBhcmFtIHRpdGxlIEluaXRpYWwgdGl0bGUgdG8gYXBwbHkgdG8gdGhlIHBhZ2VcclxuICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgdG8gZGlzcGxheSAoVnVlKVxyXG4gKiBAcGFyYW0gbmF2IE9wdGlvbmFsIG5hdmlnYXRpb24gY29tcG9uZW50LCBsaWtlIFBhZ2VOYXZcclxuICovXHJcblBhZ2VWdWUuY3JlYXRlID0gZnVuY3Rpb24oc2VsLCB0aXRsZSwgY29tcG9uZW50LCBuYXYpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICBpZihlbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuYXZ0YWcgPSBuYXYgIT09IHVuZGVmaW5lZCA/ICc8cGFnZS1uYXYgOm1lbnU9XCJtZW51XCI+PC9wYWdlLW5hdj4nIDogJyc7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBgPGRpdj48c2l0ZS1oZWFkZXIgOnRpdGxlPVwidGl0bGVcIj4ke25hdnRhZ308L3NpdGUtaGVhZGVyPlxyXG48cGFnZS12dWUgOmpzb249XCJqc29uXCI+PC9wYWdlLXZ1ZT48c2l0ZS1mb290ZXI+PC9zaXRlLWZvb3Rlcj5cclxuPC9kaXY+YDtcclxuXHJcbiAgICBjb25zdCBIZWFkZXIgPSBTaXRlLmluZm8uaGVhZGVyLmNvbXBvbmVudCgpO1xyXG4gICAgY29uc3QgRm9vdGVyID0gU2l0ZS5pbmZvLmZvb3Rlci5jb21wb25lbnQoKTtcclxuXHJcbiAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IFNpdGUuc3RvcmU7XHJcbiAgICBjb25zdCBzaXRlID0gU2l0ZS5TaXRlO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgICdzaXRlLWhlYWRlcic6IEhlYWRlcixcclxuICAgICAgICAgICAgJ3NpdGUtZm9vdGVyJzogRm9vdGVyLFxyXG4gICAgICAgICAgICAncGFnZS12dWUnOiBjb21wb25lbnRcclxuICAgICAgICB9O1xyXG4gICAgaWYobmF2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb21wb25lbnRzWydwYWdlLW5hdiddID0gbmF2O1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBTaXRlLlZ1ZSh7XHJcbiAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgc2l0ZSxcclxuICAgICAgICBzdG9yZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAganNvbjoganNvbixcclxuICAgICAgICAgICAgbWVudTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNldCB0aGUgc2l0ZSB0aXRsZS4gVGhpcyBjYW4gYmUgdXNlZCBmcm9tXHJcbiAgICAgICAgICAgICAqIHRoZSBjaGlsZCBWdWUncyB1c2luZyB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJycpXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBQYWdlVnVlXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRUaXRsZTogZnVuY3Rpb24odGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gU2l0ZS5pbmZvLnNpdGVOYW1lICsgJyAnICsgdGl0bGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldE1lbnU6IGZ1bmN0aW9uKG1lbnUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldE1lbnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9