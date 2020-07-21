!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/web_project_4/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t._id,o=t.name,i=t.link,a=t.likes,c=t.owner,u=t.handleCardClick,s=t.handleDeleteClick,l=t.userId,f=t.userLikedCard,d=t.handleCardLikeBtnClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o,this._link=i,this._id=r,this._likes=a,this._owner=c._id,this._user=l,this._userLikedCard=f,this._card=document.querySelector(n),this._handleCardClick=u,this._handleDeleteClick=s,this._handleCardLikeBtnClick=d}var t,n,o;return t=e,(n=[{key:"id",value:function(){this._id}},{key:"_getTemplate",value:function(){return this._card.content.querySelector(".element").cloneNode(!0)}},{key:"_likeCard",value:function(e){this.likes=e,this._cardElement.querySelector(".element__likes").textContent=e.length,this._cardElement.querySelector(".button__like").classList.toggle("button__like_status_selected")}},{key:"_handleCardLikeClick",value:function(e){var t=this;this._handleCardLikeBtnClick({cardIsLiked:!e.classList.contains("button__like_status_selected"),_id:this._id}).then((function(e){t._likeCard(e)}))}},{key:"_setEventListeners",value:function(){var e=this;this._cardElement.querySelector(".button__delete").addEventListener("click",(function(){var t=e._cardElement.querySelector(".button__delete").closest(".element");e._handleDeleteClick(t)})),this._cardElement.querySelector(".element__image").addEventListener("click",(function(){return e._handleCardClick({name:e._name,link:e._link})}));var t=this._cardElement.querySelector(".button__like");t.addEventListener("click",(function(){return e._handleCardLikeClick(t)}))}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".element__image"),this._cardImage.style.backgroundImage="url(".concat(this._link,")"),this._cardElement.querySelector(".element__image").alt=this._name,this._cardElement.querySelector(".element__title").textContent=this._name,this._cardElement.querySelector(".element__likes").textContent=this._likes.length,this._owner===this._user&&this._cardElement.querySelector(".button__delete").classList.remove("button__delete_hidden"),this._userLikedCard&&this._cardElement.querySelector(".button__like").classList.add("button__like_status_selected"),this._setEventListeners(),this._cardElement}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),r&&i(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._formElement=n}var t,n,r;return t=e,(n=[{key:"_hideInputError",value:function(e,t){e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t,n){e.classList.add(this._settings.inputErrorClass),n.classList.add(this._settings.errorClass),n.textContent=t}},{key:"_hasInvalidInput",value:function(e){return!e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(t)?(e.classList.remove(this._settings.inactiveButtonClass),e.removeAttribute("disabled",!1)):(e.classList.add(this._settings.inactiveButtonClass),e.setAttribute("disabled",!0))}},{key:"_isValid",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.validity.valid?this._hideInputError(e,t):this._showInputError(e,e.validationMessage,t)}},{key:"_setEventListeners",value:function(e,t){var n=this;t.forEach((function(r){r.addEventListener("input",(function(){n._isValid(r),n._toggleButtonState(e,t)}))}))}},{key:"enableValidation",value:function(){var e=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),t=this._formElement.querySelector(this._settings.submitButtonSelector);this._setEventListeners(t,e)}},{key:"resetErrorMsgsOnPopup",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._settings.inputSelector)),r=e.querySelector(this._settings.submitButtonSelector);this._toggleButtonState(r,n),n.forEach((function(n){var r=e.querySelector("#".concat(n.id,"-error"));t._hideInputError(n,r)}))}}])&&c(t.prototype,n),r&&c(t,r),e}(),s=document.querySelector(".popup_type_avatar").querySelector(".form"),l=document.querySelector(".popup_type_edit-profile").querySelector(".form"),f=document.querySelector(".popup_type_add-place").querySelector(".form"),d=document.querySelector(".form__input_type_name"),p=document.querySelector(".form__input_type_about"),h=document.querySelector(".button__avatar"),_=document.querySelector(".button__edit"),y=document.querySelector(".button__add"),v={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},m=Array.from(document.querySelectorAll(v.formSelector));function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._modal=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n,r;return t=e,(n=[{key:"open",value:function(){this._modal.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._modal.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){27==e.keyCode&&this.close()}},{key:"handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&(this.close(),e.preventDefault())}},{key:"setEventListeners",value:function(){var e=this;this._modal.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._modal.addEventListener("click",(function(t){return e.handleOverlayClose(t)}))}}])&&b(t.prototype,n),r&&b(t,r),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(i,e);var t,n,r,o=w(i);function i(){return E(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"open",value:function(e){var t=e.name,n=e.link,r=this._modal.querySelector(".popup__image");r.src=n,r.alt=t,this._modal.querySelector(".popup__image-label").textContent=t,O(P(i.prototype),"open",this).call(this)}}])&&S(t.prototype,n),r&&S(t,r),i}(g);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return(U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(i,e);var t,n,r,o=D(i);function i(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t))._callback=e,r._form=r._modal.querySelector(".form"),r._button=r._form.querySelector(".form__submit-button"),r._buttonText=r._button.textContent,r._buttonLoadText=n,r}return t=i,(n=[{key:"_getInputValues",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this._callBackParameters),t=Object.fromEntries(new FormData(this._form));return Object.assign(t,e),t}},{key:"open",value:function(e){this._callBackParameters=e||{},U(B(i.prototype),"open",this).call(this)}},{key:"close",value:function(){this._form.reset(),U(B(i.prototype),"close",this).call(this)}},{key:"rendering",value:function(e){this._button.textContent=e?this._buttonLoadText:this._buttonText}},{key:"setEventListeners",value:function(){var e=this;U(B(i.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callback(e._getInputValues(t)),e.rendering(!0),t.stopPropagation()}))}}])&&T(t.prototype,n),r&&T(t,r),i}(g);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){d.value=this._name.textContent,p.value=this._about.textContent}},{key:"setUserAvatar",value:function(e){var t=e.avatar;console.log(t),this._avatar.src=t}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._about.textContent=n}}])&&V(t.prototype,n),r&&V(t,r),e}();function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=n,this.headers=r}var t,n,r;return t=e,(n=[{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserProfile()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getUserProfile",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{headers:this.headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setUserProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers,method:"PATCH",body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){var t=e._id;return fetch("".concat(this.baseUrl,"/cards/").concat(t),{headers:this.headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"updateLike",value:function(e){var t=e.cardIsLiked,n=e._id;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(n),{headers:this.headers,method:t?"PUT":"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&J(t.prototype,n),r&&J(t,r),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-1",headers:{authorization:"59b76db9-8593-4042-9d89-647c9c96a94c","Content-Type":"application/json"}});function Q(e){re.open(e)}function W(e){var t=e.cardIsLiked,n=e._id;return K.updateLike({cardIsLiked:t,_id:n}).then((function(e){return e.likes}))}function X(e,t){var n=e.likes.map((function(e){return e._id})).includes(t),r=new o($($({},e),{},{popup:re,handleCardClick:Q,handleDeleteClick:function(e){ee.open({_id:r._id,element:e})},userLikedCard:n,userId:t,handleCardLikeBtnClick:W}),"#element");return r.generateCard()}var Y=new N({nameSelector:".profile__name",aboutSelector:".profile__about-me",avatarSelector:".profile__avatar"}),Z=new M((function(e){K.setUserAvatar({avatar:e.link}).then((function(e){Y.setUserAvatar({avatar:e.avatar}),Z.close(),Z.rendering(!1)}))}),".popup_type_avatar","Saving..."),ee=new M((function(e){return K.deleteCard({_id:e._id}).then((function(){e.element.remove(),ee.close(),ee.rendering(!1)}))}),".popup_type_delete","Deleting..."),te=new M((function(e){K.setUserProfile({name:e.name,about:e.about}).then((function(){Y.setUserInfo(e),te.close(),te.rendering(!1)}))}),".popup_type_edit-profile","Saving..."),ne=new M((function(e){K.addCard({name:e.name,link:e.link}).then((function(e){oe.addItem(X($($({},e),{},{owner:e.owner._id,likes:e.likes,_id:e._id,handleDeleteClick:function(){return ee.open({_id:cardItem._id})}}))),ne.close(),ne.rendering(!1)}))}),".popup_type_add-place","Saving..."),re=new L(".popup_type_image"),oe=new a({items:[],renderer:function(){}},".elements__container");K.getAppInfo().then((function(e){var t=H(e,2),n=t[0],r=t[1],o=r._id;n.forEach((function(e){oe.addItem(X(e,o))})),Y.setUserInfo({name:r.name,about:r.about}),Y.setUserAvatar({avatar:r.avatar})})),m.forEach((function(e){new u(v,e).enableValidation()}));var ie=new u(v);ee.setEventListeners(),re.setEventListeners(),Z.setEventListeners(),h.addEventListener("click",(function(){Z.open(),ie.resetErrorMsgsOnPopup(s)})),te.setEventListeners(),_.addEventListener("click",(function(){Y.getUserInfo(),te.open(),ie.resetErrorMsgsOnPopup(l)})),ne.setEventListeners(),y.addEventListener("click",(function(){ne.open(),ie.resetErrorMsgsOnPopup(f)}))}]);