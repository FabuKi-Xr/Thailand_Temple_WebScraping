From python:3.9-slim-buster

WORKDIR /usr/src/app

COPY ./data ./data
COPY .env ./
COPY app.py app.py
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 3000
ENTRYPOINT [ "python" ]
CMD ["app.py"]