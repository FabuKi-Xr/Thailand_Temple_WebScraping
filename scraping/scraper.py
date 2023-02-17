from urllib.request import urlopen
import re

class Scraper:
    def __init__(self, url,regex):
        self.url = url
        self.regex = regex

    def scrape(self):
        #open the web page, pass url to urlopen():
        webpage = urlopen(self.url)
        html = self.read_and_decode_with_utf8_webpage(webpage)
        return self.find_all_string_with_regex_and_extract_data(html)

    def read_and_decode_with_utf8_webpage(self, webpage):
        return webpage.read().decode("utf-8")
    
    def find_all_string_with_regex_and_extract_data(self, html):
        return re.findall(self.regex, html)