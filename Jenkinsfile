pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/rakmol/campus-connect-student-app.git'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                  echo "Applying Kubernetes manifests..."
                  kubectl apply -f k8s/mongo-deployment.yml
                  kubectl apply -f k8s/mongo-service.yml
                  kubectl apply -f k8s/backend-deployment.yml
                  kubectl apply -f k8s/backend-service.yml
                  kubectl apply -f k8s/frontend-deployment.yml
                  kubectl apply -f k8s/frontend-service.yml
                '''
            }
        }
    }
}
