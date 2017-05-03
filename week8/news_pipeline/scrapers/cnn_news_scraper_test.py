import cnn_news_scraper as scraper

EXPECTED_STRING = "The body of a 72-year-old woman was recovered after floodwater washed away her car in southwestern Missouri"
CNN_NEWS_URL = "http://www.cnn.com/2017/04/30/us/severe-weather-tornadoes-flooding/index.html"

def test_basic():
    news = scraper.extract_news(CNN_NEWS_URL)
    print news
    assert EXPECTED_STRING in news
    print 'test_basic passed!'

if __name__ ==  "__main__":
    test_basic()