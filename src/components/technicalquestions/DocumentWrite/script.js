function documentWrite(){
    document.write("<h2>Hello World!</h2><p>Have a nice day!</p>")
    console.log(document)
}

/*
    Document write is dangerous because it will overwite all HTML if the html file is already loaded and replace it with the new document
    Only use document write when HTML is loading

    Document write will also block loading since we can't call it after it loads since it rewrites the entire page we must call it during load
    since loading is done synchronously it will block other tasks until it finishes writing
*/