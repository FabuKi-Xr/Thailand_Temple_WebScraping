from urllib.request import urlopen
import re

class Scraper:
    def __init__(self, url,regex):
        self.url = url
        self.regex = regex
        self.content = None

    def crawl(self):
        """
        crawl the web page and return its instance.

        Returns:
            Scraper : its instance
        """
        webpage = urlopen(self.url)
        # print(webpage)
        self.html = self.read_and_decode_with_utf8_webpage(webpage)
        # print(self.html)
        return self
    
    def scrape(self,regex):
        """
        find string that accept regex and return it in form of list.
        parameters:
            regex (str) : the regex to find the string
        returns:
            list : the list of string that accept regex
        """
        self.content = re.findall(self.regex,self.html)[0]
        return re.findall(regex,self.content)

    def read_and_decode_with_utf8_webpage(self, webpage):
        """
        scrape the web page and return its content.

        Parameters:
            webpage (urllib.request.urlopen) : the web page

        Returns:
            str : the content of the web page
        """
        return webpage.read().decode("utf-8")