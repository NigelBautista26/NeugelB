class Home {
    /* Define Elements */
    get homeScreenTitle() {return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')} // This is bad practice... Developers should always add a unique id to a selector.
    get search() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/item_search"]')}
    get thumbnail() {return $('//android.widget.ImageView[@resource-id="com.neugelb.challenge:id/tvPoster"]')}
    get movieTitle() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvTitle"]')}
    get movieReleaseDate() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvYear"]')}
    get movieScoreIMDB() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvImdbRating"]')}
    get movieList() {return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.neugelb.challenge:id/rvMovies"]').getSize('index')}
    get searchTab() {return $('//android.widget.EditText[@resource-id="com.neugelb.challenge:id/search_src_text"]')}
    get scoobTitle() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvTitle"]')}
    get scoobrelease() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvYear"]')}
    get scoobIMDB() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvImdbRating"]')}


    scrollDownTheMovieList() {
      driver.touchAction([
      {action: 'press', x: 933, y: 1587}, {action: 'moveTo', x: 898, y: 275}, 'release', 
      {action: 'press', x: 859, y: 1670}, {action: 'moveTo', x: 809, y: 248}, 'release',
      {action: 'press', x: 859, y: 1650}, {action: 'moveTo', x: 809, y: 248}, 'release'])
    }

  }
  module.exports = new Home()