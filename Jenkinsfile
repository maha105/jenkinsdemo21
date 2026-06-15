pipeline {

    agent any

    environment {
        PATH = "C:\\Users\\Mahesh\\AppData\\Roaming\\npm;${env.PATH}"
        FIREBASE_TOKEN = credentials('firebase-token')
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/maha105/jenkinsdemo2.git'
            }
        }

        stage('Install Firebase CLI') {
            steps {
                bat 'npm install -g firebase-tools'
            }
        }

        stage('Check Firebase Version') {
            steps {
                bat 'firebase --version'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                bat 'firebase deploy --non-interactive --token %FIREBASE_TOKEN%'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful to Firebase Hosting'
        }

        failure {
            echo 'Deployment Failed - Check Logs'
        }
    }
}