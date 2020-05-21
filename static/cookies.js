// Made with milk and cookies by Nicholas Ruggeri and Gianmarco Simone
// https://github.com/nicholasruggeri/cookies-enabler
// https://github.com/nicholasruggeri
// https://github.com/gsimone



window.COOKIES_ENABLER = window.COOKIES_ENABLER || (function () {

    'use strict'

    var defaults = {

        scriptClass: 'ce-script',
        script2Class: 'ce-script2',
        iframeClass: 'ce-iframe',

        acceptClass: 'ce-accept',
        acceptlessClass: 'ce-accept-less',
        disableClass: 'ce-disable',
        dismissClass: 'ce-dismiss',

        bannerClass: 'ce-banner',
        bannerHTML:

            document.getElementById('ce-banner-html') !== null ?

                document.getElementById('ce-banner-html').innerHTML :

                '<p>This website uses cookies. '
                    +'<a href="#" class="ce-accept">'
                    +'Enable Cookies'
                    +'</a>'
                    +'</p>',
        eventScroll: false,
        scrollOffset: 200,
        clickOutside: false,
        cookieName: 'ce-cookie',
        cookieDuration: '365',
        wildcardDomain: false,

        iframesPlaceholder: true,
        iframesPlaceholderHTML:

            document.getElementById('ce-iframePlaceholder-html') !== null ?

                document.getElementById('ce-iframePlaceholder-html').innerHTML :

                '<p>To view this content you need to'
                    +'<a href="#" class="ce-accept">Enable Cookies</a>'
                +'</p>',

        iframesPlaceholderClass: 'ce-iframe-placeholder',

        onEnable: '',
        onEnable2: '',
        onDismiss: '',
        onDisable: ''

    },
    opts, domElmts, start_Y;

    function _extend() {

        var i, key;
        for (i=1; i<arguments.length; i++)
            for (key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];

    }

    function _debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function _getClosestParentWithClass(el, parentClass) {

        do {
            if (_hasClass(el, parentClass)) {
                // tag name is found! let's return it. :)
                return el;
            }
        } while (el = el.parentNode);

        return null;
    }

    function _hasClass(el, cls) {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    var handleScroll = function() {

        if (Math.abs(window.pageYOffset - start_Y) > opts.scrollOffset) enableCookies();

    };

    var bindUI = function() {

        domElmts = {
            accept:  document.getElementsByClassName(opts.acceptClass),
            acceptless:  document.getElementsByClassName(opts.acceptlessClass),
            disable: document.getElementsByClassName(opts.disableClass),
            banner: document.getElementsByClassName(opts.bannerClass),
            dismiss: document.getElementsByClassName(opts.dismissClass)
        }

        var i,
            accept = domElmts.accept,
            accept_l = accept.length,
            acceptless = domElmts.acceptless,
            acceptless_l = acceptless.length,
            disable = domElmts.disable,
            disable_l = disable.length,
            dismiss = domElmts.dismiss,
            dismiss_l = dismiss.length;

        if (opts.eventScroll) {
            window.addEventListener('load', function(){

                start_Y = window.pageYOffset;
                window.addEventListener('scroll', handleScroll);

            });
        }

        if (opts.clickOutside) {

            document.addEventListener("click", function(e){

                var element = e.target;

                // ignore the click if it is inside of any of the elements created by this plugin
                if(
                    _getClosestParentWithClass(element, opts.iframesPlaceholderClass) ||
                    _getClosestParentWithClass(element, opts.disableClass) ||
                    _getClosestParentWithClass(element, opts.bannerClass) ||
                    _getClosestParentWithClass(element, opts.dismissClass) ||
                    _getClosestParentWithClass(element, opts.disableClass)
               ){
                    return false;
                }

                enableCookies();

            });
        }
        
        for (i = 0; i < accept_l; i++) {

            accept[i].addEventListener("click", function(ev) {
                ev.preventDefault();
                enableCookies(ev);
                console.log('enabled');
            });

        }

        for (i = 0; i < acceptless_l; i++) {

            acceptless[i].addEventListener("click", function(ev) {
                ev.preventDefault();
                enable2Cookies(ev);
                console.log('enabled min');
            });

        }

        for (i = 0; i < disable_l; i++) {

            disable[i].addEventListener("click", function(ev) {
                ev.preventDefault();
                disableCookies(ev);
                console.log('disabled');
            });

        }

        for (i = 0; i < dismiss_l; i++) {

            dismiss[i].addEventListener("click", function (ev) {
                ev.preventDefault();
                banner.dismiss();
            });

        }

    };

    var init = function(options) {

        opts = _extend({}, defaults, options);

        if (cookie.get() == 'EST') {

            if (typeof opts.onEnable === "function") opts.onEnable();

            scripts.get();
            scripts2.get();
            iframes.get();
            iframes.removePlaceholders();

        } else if (cookie.get() == 'E'){
            if (typeof opts.onEnable2 === "function") opts.onEnable2();
            scripts2.get();
            bindUI(); //give them a chance to come back and accept all ;)
            banner.create();
        } 
         else if (cookie.get() == 'N'){

            if (typeof opts.onDisable === "function") opts.onDisable();

            iframes.hide();
            //bindUI();

        } else {

            banner.create();
            iframes.hide();
            bindUI();

        }
    };

  /*  var enableCookies = _debounce(function(event) {

        if (typeof event != "undefined" && event.type === 'click'){

            event.preventDefault();

        }

        if (cookie.get() == 'E') {

            cookie.set();
            scripts.get();

            iframes.get();
            iframes.removePlaceholders();

            banner.dismiss();
            window.removeEventListener('scroll', handleScroll);

            if (typeof opts.onEnable2 === "function") opts.onEnable2();

        } else if (cookie.get() != 'EST'){
            cookie.set();
            scripts.get();
            scripts2.get();

            iframes.get();
            iframes.removePlaceholders();

            banner.dismiss();
            window.removeEventListener('scroll', handleScroll);

            if (typeof opts.onEnable === "function") opts.onEnable();

        }

    }, 250, false); */


    var enableCookies = _debounce(function(event) {

        if (typeof event != "undefined" && event.type === 'click'){

            event.preventDefault();

        }

        if (cookie.get() != 'EST') {

            cookie.set('EST');
            scripts.get();
            scripts2.get();

            iframes.get();
            iframes.removePlaceholders();

            banner.dismiss();
            window.removeEventListener('scroll', handleScroll);

            if (typeof opts.onEnable === "function") opts.onEnable();

        }

    }, 250, false);

    var enable2Cookies = _debounce(function(event) {

        if (typeof event != "undefined" && event.type === 'click'){

            event.preventDefault();

        }

        if (cookie.get() != 'E') {

            cookie.set('E');
            scripts2.get();


            banner.dismiss();
            window.removeEventListener('scroll', handleScroll);

            if (typeof opts.onEnable2 === "function") opts.onEnable2();

        }

    }, 250, false);

    var disableCookies = function(event){

        if (typeof event != "undefined" && event.type === 'click'){

            event.preventDefault();

        }

        if (cookie.get() != 'N'){

            cookie.set('N');

            banner.dismiss();
            window.removeEventListener('scroll', handleScroll);

            if (typeof opts.onDisable === "function") opts.onDisable();

        }

    }

    var banner = (function() {

        function create() {

            var el = '<div class="'+ opts.bannerClass +'">'
                    + opts.bannerHTML
                    +'</div>';

            document.body.insertAdjacentHTML('beforeend', el);

        }

        function dismiss(){

            domElmts.banner[0].style.display = 'none';

            if (typeof opts.onDismiss === "function") opts.onDismiss();

        }

        return{

            create: create,
            dismiss: dismiss

        }

    })();

    var cookie = (function() {

        function set(val){
            
            var value = typeof val !== "undefined" || typeof val == 'EST' ? val : "EST",
                date, expires, host, domainParts, domain;

            if (opts.cookieDuration) {
                date = new Date();
                date.setTime(date.getTime()+(opts.cookieDuration*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            } else {
                expires = "";
            }
            
            host = location.hostname;
            // Means localhost or that the user does not want to enable cookies for all subdomains
            if(host.split('.') === 1 || !opts.wildcardDomain) {
                document.cookie = opts.cookieName +"="+ value+expires +"; path=/";
            } else {
                // We start by stying to set a cookie from a subdomain eg foo.bar.com -> .bar.com
                // If that does not work we try to set it for the top domain instead 
                domainParts = host.split('.');
                domainParts.shift();
                domain = '.' + domainParts.join('.');
                
                document.cookie = opts.cookieName +"="+ value+expires +"; path=/; domain="+domain;
                
                // Check if we managed to set the cookie, if not we where on a top-domain
                if( cookie.get() == null ) {
                    domain = '.'+host;
                    document.cookie = opts.cookieName +"="+ value+expires +"; path=/; domain="+domain;
                }
            }
            
            
        }




        function get(){

            var cookies = document.cookie.split(";"),
                l = cookies.length,
                i, x, y;

            for (i = 0; i < l; i++){
                x = cookies[i].substr(0,cookies[i].indexOf("="));
                y = cookies[i].substr(cookies[i].indexOf("=")+1);
                x = x.replace(/^\s+|\s+$/g,"");
                if (x == opts.cookieName) {
                    return unescape(y);
                }
            }

        }

        return{
            set: set,
            get: get
        }

    })();

    var cookie2 = (function() {

        function set(val){

            var value = typeof val !== "undefined" ? val : "E",
                date, expires, host, domainParts, domain;

            if (opts.cookieDuration) {
                date = new Date();
                date.setTime(date.getTime()+(opts.cookieDuration*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            } else {
                expires = "";
            }
            
            host = location.hostname;
            // Means localhost or that the user does not want to enable cookies for all subdomains
            if(host.split('.') === 1 || !opts.wildcardDomain) {
                document.cookie = opts.cookieName +"="+ value+expires +"; path=/";
            } else {
                // We start by stying to set a cookie from a subdomain eg foo.bar.com -> .bar.com
                // If that does not work we try to set it for the top domain instead 
                domainParts = host.split('.');
                domainParts.shift();
                domain = '.' + domainParts.join('.');
                
                document.cookie = opts.cookieName +"="+ value+expires +"; path=/; domain="+domain;
                
                // Check if we managed to set the cookie, if not we where on a top-domain
                if( cookie.get() == null ) {
                    domain = '.'+host;
                    document.cookie = opts.cookieName +"="+ value+expires +"; path=/; domain="+domain;
                }
            }
            
            
        }




        function get(){

            var cookies = document.cookie.split(";"),
                l = cookies.length,
                i, x, y;

            for (i = 0; i < l; i++){
                x = cookies[i].substr(0,cookies[i].indexOf("="));
                y = cookies[i].substr(cookies[i].indexOf("=")+1);
                x = x.replace(/^\s+|\s+$/g,"");
                if (x == opts.cookieName) {
                    return unescape(y);
                }
            }

        }

        return{
            set: set,
            get: get
        }

    })();

    var iframes = (function() {

        function makePlaceholder(iframe) {

            var placeholderElement = document.createElement('div');

            placeholderElement.className = opts.iframesPlaceholderClass;

            placeholderElement.innerHTML = opts.iframesPlaceholderHTML;

            iframe.parentNode.insertBefore(placeholderElement, iframe);

        }

        function removePlaceholders() {

            var iframePlaceholders = document.getElementsByClassName(opts.iframesPlaceholderClass),
                n = iframePlaceholders.length,
                i;

            for (i = n - 1; i >= 0; i--){

                iframePlaceholders[i].parentNode.removeChild(iframePlaceholders[i]);
                
            }

        }

        function hide() {

            var iframes = document.getElementsByClassName(opts.iframeClass),
                n = iframes.length,
                src, iframe, i;

            for (i = 0; i < n; i++){

                iframe = iframes[i];
                iframe.style.display = 'none';

                if (opts.iframesPlaceholder) makePlaceholder(iframe);

            }

        }

        function get() {

            var iframes = document.getElementsByClassName(opts.iframeClass),
                n = iframes.length,
                src, iframe, i;

            for (i = 0; i < n; i++){

                iframe = iframes[i];

                src = iframe.attributes[ 'data-ce-src' ].value;
                iframe.src = src;
                iframe.style.display = 'block';

            }

        }

        return{
            hide: hide,
            get: get,
            removePlaceholders: removePlaceholders
        }

    })();

    var scripts = (function() {

        function get() {

            var scripts = document.getElementsByClassName(opts.scriptClass),
                n = scripts.length,
                documentFragment = document.createDocumentFragment(),
                i, y, s, attrib, el;

            for (i = 0; i < n; i++){

                if (scripts[i].hasAttribute('data-ce-src')){

                    if (typeof postscribe !== "undefined"){
                        postscribe(scripts[i].parentNode, '<script src="' + scripts[i].getAttribute("data-ce-src") + '"></script>');
                    }

                } else {

                    s = document.createElement('script');
                    s.type = 'text/javascript';
                    for (y = 0; y < scripts[i].attributes.length; y++) {
                        attrib = scripts[i].attributes[y];
                        if (attrib.specified) {
                            if ((attrib.name != 'type') && (attrib.name != 'class')){
                                s.setAttribute(attrib.name, attrib.value);
                            }
                        }
                    }
                    s.innerHTML = scripts[i].innerHTML;
                    documentFragment.appendChild(s);

                }

            }

            document.body.appendChild(documentFragment);

        }

        return{
            get: get
        }

    })();

    var scripts2 = (function() {

        function get() {

            var scripts = document.getElementsByClassName(opts.script2Class),
                n = scripts2.length,
                documentFragment = document.createDocumentFragment(),
                i, y, s, attrib, el;

            for (i = 0; i < n; i++){

                if (scripts[i].hasAttribute('data-ce-src')){

                    if (typeof postscribe !== "undefined"){
                        postscribe(scripts[i].parentNode, '<script src="' + scripts[i].getAttribute("data-ce-src") + '"></script>');
                    }

                } else {

                    s = document.createElement('script');
                    s.type = 'text/javascript';
                    for (y = 0; y < scripts[i].attributes.length; y++) {
                        attrib = scripts[i].attributes[y];
                        if (attrib.specified) {
                            if ((attrib.name != 'type') && (attrib.name != 'class')){
                                s.setAttribute(attrib.name, attrib.value);
                            }
                        }
                    }
                    s.innerHTML = scripts[i].innerHTML;
                    documentFragment.appendChild(s);

                }

            }

            document.body.appendChild(documentFragment);

        }

        return{
            get: get
        }

    })();

    return {
        init: init,
        enableCookies: enableCookies,
        enable2Cookies: enable2Cookies,
        dismissBanner: banner.dismiss
    };

}());