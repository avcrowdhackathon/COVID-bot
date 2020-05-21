# version is to overwrite existing version, --no-promote is to not reroute traffic to this version
# --version=staging --no-promote
 

# use the no promote to have staging and production version in same service. staging (with no promotion) will not get the public traffic
 
#!/usr/bin/env bash
PROJECT_ID="[PROJECT_ID]"
echo "----------------------------------------------------------------------"
echo "Command started at: $(date)"
 
# pip install -r requirements.txt --upgrade
# rm hs_err_pid*.log
 
#gcloud beta app deploy app.yaml --project $PROJECT_ID -q --no-cache 
#gcloud app deploy app_cron.yaml --project $PROJECT_ID -q
#gcloud beta app deploy cron.yaml --project $PROJECT_ID -q --no-cache
 
#git commit -a -m "commit at $(date)" && git push
 


gcloud beta app deploy app.yaml --project $PROJECT_ID -q --no-cache --version=staging

echo "----------------------------------------------------------------------"
echo "Command finished at: $(date)"
