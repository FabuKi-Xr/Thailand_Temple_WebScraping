from urllib.request import urlopen
import re

class Scraper:
    def __init__(self, url,regex):
        self.url = url
        self.regex = regex
        self.content = None

    def crawl(self):
        #open the web page, pass url to urlopen():
        webpage = urlopen(self.url)
        self.html = self.read_and_decode_with_utf8_webpage(webpage)
        return self
    
    def scrape(self,regex,name=None):
        self.content = re.findall(self.regex,self.html)[0]
        return re.findall(regex,self.content)

    def read_and_decode_with_utf8_webpage(self, webpage):
        return webpage.read().decode("utf-8")