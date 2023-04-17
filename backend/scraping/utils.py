class CSVWriter:
    def __init__(self, filename, fieldnames:str,delimiter=","):
        self.delimiter = delimiter
        self.filename = filename
        self.fieldnames = fieldnames
        self.csv_file = None

    def write(self, data:list):
        """
        write datalist to csv file.
        
        parameters:
            data (list) : the list of data to write
        """
        _uniqueKey = []
        with open(self.filename, 'w+', encoding='utf8', newline='') as csv_file:
            raw = ""
            for d in data:
                if d not in _uniqueKey:
                    _uniqueKey.append(d)
                    raw += d + '\n'
            csv_file.write(raw[:-1])
            self.csv_file = csv_file

    def close(self):
        self.csv_file.close()