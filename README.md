# beers-criteria

Search the Beers Criteria for Potentially Inappropriate Medication Use in Older Adults.

It performs the following functions with ClojureScript:

1. Query ElasticSearch with user input search terms. This is accomplished with core.async channels, which are the ClojureScript version of Go channels. Channels are also known as co-routines in other languages.

2. Template from valid HTML markup with kioo. Since the main template is valid HTML, kioo provides the site with simple graceful degradation if JavaScript isn't available.

3. The above features are implemented with the help of Reagent, a ClojureScript React wrapper. Reagent provides great performance while taking care of view updates as you change your application state.
