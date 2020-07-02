class Detail {
        /* Define Elements */
        get backButton() {return $("~Navigate up")}
        get detailScreenTitle() {return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')} // This is bad practice... Developers should always add a unique id to a selector.
        get detailThumbnail() {return $('//android.widget.ImageView[@resource-id="com.neugelb.challenge:id/imCover"]')}
        get detailMovieTitle() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvTitle"]')}
        get detailMovieScoreIMDB() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvImdb"]')}
        get detailMovieInformationTitle() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/tvInformation"]')}
        get detailMovieRuntime() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/label_runtime"]')}
        get detailMovieRated() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/label_rated"]')}
        get detailMovieRelease() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/label_releaseDate"]')}
        get detailMovieGenre() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/label_genre"]')}
        get movieDetail() {return $('//android.widget.TextView[@resource-id="com.neugelb.challenge:id/label_details"]')}

    
      }
      module.exports = new Detail()