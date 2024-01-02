pipeline {
    agent any

    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:\\Program Files (x86)\\nodejs"
    }
    stages{

   stage('Install Node.js and npm') {
    steps {
        script {
            def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
            env.PATH = "${nodejs}/bin:${env.PATH}"
            // Check and update npm
            bat 'npm install -g npm@10.2.5'
        }
    }
}


        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build & rename Docker Image') {
            steps {
                script {
                    dir('angular-project'){
                    // Build and tag Docker image for Angular project
                    bat "docker build -t front-ang-image:${BUILD_ID} ./"
                    bat "docker tag front-ang-image:${BUILD_ID} chetouiiftikhar/front-ang-image:${BUILD_ID}"
                }}
            }
        }

        stage('Build Spring Boot Project') {
            steps {
                script {
                    dir('dreamdrop') {
                        bat '.\\mvnw clean install'
                    }
                }
            }
        }

        stage('Docker Build and Push') {
            steps {
                script {
                    dir('backend') {
                        // Login to Docker Hub
                        withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'DOCKERHUB_CREDENTIALS_PSW', usernameVariable: 'DOCKERHUB_CREDENTIALS_USR')]) {
                            bat "docker login -u ${DOCKERHUB_CREDENTIALS_USR} -p ${DOCKERHUB_CREDENTIALS_PSW}"
                        }
                        // Build, tag, and push Docker image for Spring Boot project
                        bat 'docker --version'
                        bat 'docker build -t spring-img ./'
                        bat "docker tag spring-img:latest chetouiiftikhar/spring-img:${BUILD_ID}"
                        // Push Docker image to Docker Hub
                        bat "docker push chetouiiftikhar/spring-img:${BUILD_ID}"
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container using docker-compose
                    bat "docker-compose up -d"
                }
            }
        }
    }

  
}
