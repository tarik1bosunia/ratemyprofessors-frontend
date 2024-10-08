# in next.config.mgs
```sh
output: "standalone",
```

# install sharp librery
```sh
yarn add sharp
```

# build dokcer image
```sh
docker build . -t ghcr.io/tarik1bosunia/rt:latest
```

# generated gitbub token
```sh
    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
```

# login github in terminal
```sh
docker login ghcr.io
```

# push docker file to github
```
docker push ghcr.io/tarik1bosunia/rt:latest
```

# run docker file in production 
```sh
    sudo docker login ghcr.io
    sudo docker run -p 3000:3000 ghcr.io/tarik1bosunia/rt:latest
    sudo docker run -d -p 3000:3000 ghcr.io/tarik1bosunia/rt:latest

    to run the container in detached mode with an automatic restart policy:
    sudo docker run -d --restart unless-stopped -p 3000:3000 ghcr.io/tarik1bosunia/rt:latest
    sudo docker run --pull always -d --restart unless-stopped -p 3000:3000 ghcr.io/tarik1bosunia/rt:latest
    
    Verify the Container is Running: sudo docker ps
    Stop the container:sudo docker stop <container_id>
    Restart the container: sudo docker start <container_id>
```

// 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

// docker build . -t ghcr.io/tarik1bosunia/nextjs-example:latest
// docker login ghcr.io
// docker push ghcr.io/tarik1bosunia/nextjs-example:latest
// docker run -p 3000:3000 ghcr.io/tarik1bosunia/nextjs-example:latest


