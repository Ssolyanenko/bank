FROM nexus-dockerhub.andersenlab.dev/node:16.14.2-alpine
WORKDIR ./app
ENV PATH ./app/node_modules/.bin:$PATH
COPY ["package.json", "package-lock.json", "./"]
RUN npm i
RUN npm dedupe
COPY . ./
RUN npm run build-storybook
ENTRYPOINT ["npm", "run", "storybook"]
