# Network Web
This is a web application built with Next.js that acts as the front-end for network utilities. The application allows users to perform network operations such as pinging a device, performing a traceroute, and checking the bandwidth utilization of network interfaces. The application retrieves data from various APIs and databases to perform these operations.
## Features
The following are the features of the application:
* Ping sweep network devices using ICMP protocol.
* Check bandwidth utilization of network interfaces on a device.
* View past bandwidth utilization records for a device.
* Add and edit devices to be monitored.

## Tech Stack
The following technologies were used in building the application:

* Next.js - a React framework for building server-side rendered web applications
* MongoDB - a NoSQL document database
* PySNMP - a Python library for SNMP operations
* Flask - a Python web framework
* Netbox - a source of truth SQl database for IPAM and DCIM

## Getting Started
* Clone this repository
* Install the required packages using `yarn add`
* Run the application using `yarn dev`
* The application will run on [http://localhost:3000](http://localhost:3000)

## Environmental Variables
Create a .env file in the root directory of the project and set the following environment variables:
```
AWS_ACCESS_KEY=<aws_access_key>
AWS_SECRET_KEY=<aws_secret_key>
NETBOXTOKEN=<netbox_token>
NETBOXURL=<netbox_url>
USERNAME=<network_device_username>
PASSWORD=<network_device_password>
SECRET=<network_device_secret>
```
