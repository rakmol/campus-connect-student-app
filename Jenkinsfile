pipeline {
    agent any

    environment {
        KUBECONFIG = credentials('kubeconfig') 
        // store your kubeconfig file as a Jenkins secret named "kubeconfig"
    }

    stages {
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh '''
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
}
