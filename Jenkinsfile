pipeline {

    agent any

    environment {
        FIREBASE_TOKEN = credentials('firebase-token')
    }

    stages {

        stage('Install Firebase') {
            steps {
                bat 'npm install -g firebase-tools'
            }
        }

        stage('Deploy') {
            steps {
                bat 'npx firebase-tools deploy --non-interactive --token %FIREBASE_TOKEN%'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }
        failure {
            echo 'Deployment Failed'
        }
    }
}
