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
```

// 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

// docker build . -t ghcr.io/tarik1bosunia/nextjs-example:latest
// docker login ghcr.io
// docker push ghcr.io/tarik1bosunia/nextjs-example:latest
// docker run -p 3000:3000 ghcr.io/tarik1bosunia/nextjs-example:latest
