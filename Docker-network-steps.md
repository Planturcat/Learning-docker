
# Running Two Node.js Servers with Docker (No Compose)

Follow these steps to build, run, and network your containers:

1. **Build the images:**
   ```bash
   cd server1 && docker build -t server1 .
   cd ../server2 && docker build -t server2 .
   ```

2. **Create a Docker network:**
   ```bash
   docker network create my-network
   ```

3. **Run the containers on the network:**
   ```bash
   docker run -d --name server1 --network my-network -p 5001:5001 server1
   docker run -d --name server2 --network my-network -p 5002:5002 server2
   ```

Now, the containers can communicate using their names (e.g., `http://server2:5002`).
