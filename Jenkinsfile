pipeline {
    agent any

    
    environment {
    VAGRANT_MACHINE_IP = "192.168.149.200"
    JAVA_HOME = "C:\\Program Files\\Java\\jdk-17"
    PATH = "${JAVA_HOME}\\bin:${PATH};C:\\Program Files\\Docker\\cli-plugins"
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
            bat 'npm install -g npm@9.5.0'
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
                     //supression des images et containers de dernier build
                     bat "docker-compose -H tcp://${VAGRANT_MACHINE_IP}:2375 down"
                     bat " docker rmi $(docker images)"
                    dir('angular-project'){
                    // Build and tag Docker image for Angular project
                    bat "docker -H tcp://${VAGRANT_MACHINE_IP}:2375 build -t chetouiiftikhar/front-ang-image:${BUILD_ID} ./"
                  
                     //bat "docker push chetouiiftikhar/front-ang-image:${BUILD_ID}"
                }}
            }
        }

        stage('Build Spring Boot Project') {
            steps {
                script {
                    dir('backend') {
                        bat '.\\mvnw clean install'
                        // bat './mvnw clean install'
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
                       // bat 'docker --version'
                        bat 'docker -H tcp://${VAGRANT_MACHINE_IP}:2375 build -t chetouiiftikhar/spring-img ./'
                       
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    
                   
                    // Run Docker container using docker-compose
                    bat "docker-compose -H tcp://${VAGRANT_MACHINE_IP}:2375 up -d"
                }
            }
        }
    }

  
}