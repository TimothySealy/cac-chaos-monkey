# cac-chaos-monkey
A 'light weight' chaos monkey test to play around with.

## Setup
To setup the application run:
```
npm install
```

## Configuration
Set the following environment variabels:
```
# A comma separated list of hosts to kill
export HOSTS='localhost:3000,localhost:3001'

# The path on the hosts to use
export DEFAULT_PATH='/internal/kill'

# The bounds for the random interval between kills (in milliseconds).
# Example below configure the app to kill a service between 1 and 5 seconds.
export DEFAULT_UPPER=5000
export DEFAULT_LOWER=1000
```

## Run
To run the application run:
```
npm run start
```
