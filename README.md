Magnificent Monitoring Solution:
  Prerequisites:
   1) Docker and Docker-compose
   2) Backend api: /monitor-api developed with nodejs http server
   3) Front End: /monitor-ui developed with react and chart.js
   
Steps to clone repository and run the solution: 
  Software requirements: we just need to have below three softwares installed on any machine 
    1) docker
    2) docker-compose
    3) git
    
  1) git clone git@github.com:pavanboyapati/monitorservicesolution.git
  2) cd monitorservicesolution
  3) sudo docker-compose up --build (Note that this step will take few mins as it builds docker images for the first time)
          or
     sudo docker-compose up -d --build (Runs in detached mode)
     Terminal output for above command:
        Starting monitorservicesolution_magnificent_1 ... done
        Starting monitorservicesolution_monitor-api_1 ... done
        Starting monitorservicesolution_monitor-ui_1 ... done
  4) lauch monitor-ui: http://localhost:3000
  
  

