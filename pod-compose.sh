#!/bin/sh

podman rm -f front back
podman build --tag ocpp-back --file "$PWD/backend/backend.containerfile"
podman build --tag ocpp-front --file "$PWD/frontend/frontend.containerfile"
podman run -d --name=back -p 8000:8000  ocpp-back

podman run -d --name=front -p 3000:3000 ocpp-front
