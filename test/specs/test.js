const { expect } = require('chai')
const home = require('../../components/homeScreen')
const movieDetail = require('../../components/movieDetail')
const homeFixtureData = require('../../fixtures/homeFixtureData.json')
const scoobFixtureData = require('../../fixtures/scoobFixtureData.json')
const detailFixtureData = require('../../fixtures/detailFixtureData.json')

describe("Test The Application...", () => {
    beforeEach(() => { 
        driver.launchApp() 
    })
    it("Home screen check...", () => {
        expect(home.homeScreenTitle.getText()).to.equal(homeFixtureData.homeScreenTitleValue)
        home.search.isDisplayed()
        home.thumbnail.isDisplayed()
        expect(home.movieTitle.getText()).to.equal(homeFixtureData.movieTitleValue)
        expect(home.movieReleaseDate.getText()).to.equal(homeFixtureData.releaseDateValue)
        expect(home.movieScoreIMDB.getText()).to.include(homeFixtureData.movieScoreIMDBValue)
    })
    it("Scroll down to view the first 20 movies...", () => {
        home.scrollDownTheMovieList()
        expect(home.movieTitle.getText()).to.equal(homeFixtureData.movieTitle2Value) // This asserts the 15th movie after we scrolled 3 times to see the first 20 movies that are on the list...
    })
    it("Movie detail screen check...", () => {
        home.thumbnail.click()
        movieDetail.backButton.isDisplayed()
        expect(movieDetail.detailScreenTitle.getText()).to.equal(detailFixtureData.detailScreenTitleValue)
        movieDetail.detailThumbnail.isDisplayed()
        expect(movieDetail.detailMovieTitle.getText()).to.equal(detailFixtureData.detailMovieTitleValue)
        expect(movieDetail.detailMovieScoreIMDB.getText()).to.include(detailFixtureData.detailMovieScoreIMDBValue)
        expect(movieDetail.detailMovieInformationTitle.getText()).to.equal(detailFixtureData.detailMovieInformationTitleValue)
        expect(movieDetail.detailMovieRuntime.getText()).to.equal(detailFixtureData.detailMovieRuntimeValue)
        expect(movieDetail.detailMovieRated.getText()).to.equal(detailFixtureData.detailMovieRatedValue)
        expect(movieDetail.detailMovieRelease.getText()).to.equal(detailFixtureData.detailMovieReleaseValue)
        expect(movieDetail.detailMovieGenre.getText()).to.equal(detailFixtureData.detailMovieGenreValue)
        expect(movieDetail.movieDetail.getText()).to.equal(detailFixtureData.movieDetailValue)
    })
    it("Search for a movie...", () => {
        home.search.click()
        home.searchTab.setValue('Scoob!')
        driver.pause(2000) // This is a temporary workaround as the implicit wait for the element to be visible isnt working for some reason...      
        expect(home.scoobTitle.getText()).to.equal(scoobFixtureData.scoobTitleValue)
        expect(home.scoobrelease.getText()).to.equal(scoobFixtureData.scoobReleaseValue)
        expect(home.scoobIMDB.getText()).to.equal(scoobFixtureData.scoobScoreIMDBValue)
    })
    afterEach(() => { 
        driver.closeApp()
    })

})
