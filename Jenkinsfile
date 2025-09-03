pipeline {
    agent any

    environment {
        KUBECONFIG = "/root/.kube/config"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/rakmol/campus-connect-student-app.git'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods -n default'
            }
        }
    }
}
