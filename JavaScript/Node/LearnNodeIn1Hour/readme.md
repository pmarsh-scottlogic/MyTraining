<h3>Tutorial video:</h3>
https://www.youtube.com/watch?v=TlB_eWDSMt4

<h3>Notes</h3>
Node is not a lanugage, nor a framework.
Node is a runtime environment for executing JavaScript code.
	Browsers contain a JavaScript engine which interprets code at runtime. Chrome's one is called v8.
	Node is a local version of v8, embedded in a c++ system so that code can be run out of the browser.
	Since it is not in the browser, we have features and functionality not available to us in the browser, such as filesystem (for reading and writing files) and access to ports.

Node is Non-blocking and Asynchronous.
	This means a single thread event loop may handle more than one request, rather than each request being assigned a single request.
	This is relevant when a request might involve a time-intensive task, such as querying a database.
		In a blocking, or synchronous application, one thread would need to query the database, then wait around for the response before going on to handle something else.
		In Node, a thread can go on to do other things while the database is dealing with a query. When the database returns information, it adds a message to the event queue, which the thread monitors.
		- When the thread finds an event in the event queue, it takes it out and processes it.
	This makes it ideal for I/O-intensive apps (but not for CPU-intensive apps).
	This makes it very fast and scalable.

The Global Object
Functionality in regular browser-based JavaScript includes
		-console.log();
		-setTimeout();
		-clearTimeout();
		-setInterval();
		-clearInterval();
	These secretly belong to the window object. The JavaScript engine will prepend 'windows.' to each of these at runtime.
	But Node doesn't have this windows object!
Instead Node has the *Global* object, which handles these things.

Node has a module system
In node each script, when run, becomes a module. By default things declared within the script exist only within the scope of the module (private, in OOP terms).
At runtime the module object (accessible from within the relevant module) contains metadata about itself.
Modules are a smart way to seperate-out code, and reuse it in other applications.

At runtime, every module is secretly wrapped in the 'Module Wrapper Function'. I don't honestly understand the implications of this.
The module wrapper function has these arguments:
	-exports
	-require
	-module
	-__filename
	-__dirname
My understanding is that these are attributes that are accessible about the module.

Node comes with many useful modules, such as:
	-os (operating system)
	-fs (file system)
	-events
	-http

Node has some real good docs: https://nodejs.org/docs/latest-v17.x/api/
