#!/usr/bin/env bash

RANCHER_URL="https://rancher.andigital.com"
PROJECT_ID="1a10"
RANCHER_ACCESS_KEY=$USERNAME
RANCHER_SECRET_KEY=$PASSWORD

#Check to see if we got the name of the service
#$1 service name in Rancher
#$2 tag number
if [[ ! -z $1 ]] ; then
    temp=${RANCHER_URL#*//}
    #Check if Rancher is responding
    if nc -z -w5 $temp 80 ; then
        #Getting the id of the service we want to upgrade in rancher
        SERVICE_ID=$(docker run --rm -i -e RANCHER_URL=$RANCHER_URL -e RANCHER_ACCESS_KEY=$RANCHER_ACCESS_KEY -e RANCHER_SECRET_KEY=$RANCHER_SECRET_KEY -e PROJECT_ID=$PROJECT_ID andigital/gaucho id_of $1)
        #Upgrading the service in Rancher
        #Checking for specific tag
        if [[ -z $2 ]] ; then
            echo "No specific tag provided to upgrade the service"
            docker run --rm -i -e RANCHER_URL=$RANCHER_URL -e RANCHER_ACCESS_KEY=$RANCHER_ACCESS_KEY -e RANCHER_SECRET_KEY=$RANCHER_SECRET_KEY -e PROJECT_ID=$PROJECT_ID andigital/gaucho upgrade $SERVICE_ID --start_first --auto_complete
        else
            echo "Upgrading the service to tag version: " $2
            docker run --rm -i -e RANCHER_URL=$RANCHER_URL -e RANCHER_ACCESS_KEY=$RANCHER_ACCESS_KEY -e RANCHER_SECRET_KEY=$RANCHER_SECRET_KEY -e PROJECT_ID=$PROJECT_ID andigital/gaucho upgrade $SERVICE_ID --start_first --auto_complete --imageUuid docker:andigital/$1:$2
        fi
    else
        echo "Rancher is Unavailable"
        exit $?
    fi
else
    echo "You need to provide the service name"
    exit $?
fi
exit 0