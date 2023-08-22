# Local Development

## Configure Local Environment

### Requires

* [elasticsearch configuration](../README.md#elasticsearch-configuration)
* `pwd` is `backend/`

Add `app` directory as a module that can be found by the Python importer.

## Setup the local environment

```shell
cd backend/
```

Create the python virtual env
```shell
python3 -m venv venv
```

Activate the python virtual environment
```shell
. venv/bin/activate
```

Install application dependencies.

```shell
pip install poetry 
poetry export -f requirements.txt -o requirements.txt
pip install --no-cache-dir -r requirements.txt
```

Note: If you encounter any errors while installing packages, remove the **poetry.lock** file and repeat the above steps


Start backend application with hot reload.

```shell
./scripts/start-reload.sh
```