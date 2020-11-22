build-lib:
	cd backend/libs/billogram_api_async/ && \
	  python setup.py build && \
	cd ../../../

install-lib:
	cd backend/libs/billogram_api_async/ && \
	  python setup.py install && \
	  pip install -r requirements.txt && \
	cd ../../../

run:
	python backend/main.py


install-tests:
	pip install -r backend/requirement-tests.txt

lint:
	flake8 backend/src && pylint backend/src
