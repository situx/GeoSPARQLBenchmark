#!/bin/bash

mvn package

docker build -f docker/gsb-benchmarkcontroller.docker -t git.project-hobbit.eu:4567/mjovanovik/gsb-benchmarkcontroller-v2 .
docker build -f docker/gsb-datagenerator.docker -t git.project-hobbit.eu:4567/mjovanovik/gsb-datagenerator-v2 .
docker build -f docker/gsb-seqtaskgenerator.docker -t git.project-hobbit.eu:4567/mjovanovik/gsb-seqtaskgenerator-v2 .
docker build -f docker/gsb-evaluationmodule.docker -t git.project-hobbit.eu:4567/mjovanovik/gsb-evaluationmodule-v2 .

docker push git.project-hobbit.eu:4567/mjovanovik/gsb-benchmarkcontroller-v2
docker push git.project-hobbit.eu:4567/mjovanovik/gsb-datagenerator-v2
docker push git.project-hobbit.eu:4567/mjovanovik/gsb-seqtaskgenerator-v2
docker push git.project-hobbit.eu:4567/mjovanovik/gsb-evaluationmodule-v2
