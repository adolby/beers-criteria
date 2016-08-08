# beers-criteria

Search the Beers Criteria for Potentially Inappropriate Medication Use in Older Adults.

**Demo:** https://adolby.github.io/beers-criteria

It performs the following functions with ClojureScript:

1. Query ElasticSearch with user input search terms. This is accomplished with core.async channels assembled in a pipeline, which are the ClojureScript version of Go channels. Channels are also known as co-routines in other languages.

2. Store the search results for each request in a cache keyed by search term to prevent duplicate XHR.

3. Use templates to generate cards from valid HTML markup with kioo.

4. The above features are implemented with the help of Reagent, a ClojureScript React wrapper. Reagent provides great performance while taking care of view updates as you change your application state.

5. The currently used ElasticSearch cluster is only one node in size, which means that searches can sometimes be slow.
