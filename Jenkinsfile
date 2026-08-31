pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t mern-backend .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker stop mern-backend || true
                    docker rm mern-backend || true
                    docker run -d --name mern-backend -p 3004:3000 mern-backend
                '''
            }
        }
    }
}
