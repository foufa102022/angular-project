pipeline {
    agent any

    environment {
        JAVA_HOME = "C:\\Program Files\\Java\\jdk-17"
        PATH = "${JAVA_HOME}\\bin:${PATH};${DOCKER_PATH}"
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        DOCKERHUB_CREDENTIALS = credentials('DockerHub')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    dir('dreamdrop') {
                         bat '.\\mvnw clean install'
                        // bat './mvnw clean install'
                    }
                }
            }
        }

        stage('Docker Build and Push') {
            steps {
                script {
                    dir('dreamdrop') {
                        // Login to Docker Hub
                        bat "docker login -u ${DOCKERHUB_CREDENTIALS_USR} -p ${DOCKERHUB_CREDENTIALS_PSW}"
                        // Build Docker image
                        bat 'docker --version'
                        bat 'docker build -t spring-img .'
                        // Tag Docker image
                        bat "docker tag spring-img:latest chetouiiftikhar/spring-img:%BUILD_ID%"
                        // Push Docker image to Docker Hub
                        // bat "docker push chetouiiftikhar/spring-img:%BUILD_ID%"
                    }
                }
            }
        }

        // stage('Run Docker Container') {
        //     steps {
        //         script {
        //             bat "docker run -d -p 8877:8080 --name backend_cont_${BUILD_ID}-sprint3 chetouiiftikhar/spring-img:${BUILD_ID}"
        //         }
        //     }
        // }
         stage('Run Docker Container') {
            steps {
                script {
                      dir('dreamdrop'){
                      bat "docker-compose down"
                      bat "docker-compose up -d"
                }}
            }
        }
    }
}