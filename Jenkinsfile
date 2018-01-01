

pipeline {
    agent any
    withCredentials([
        string(credentialsId: 'PROD_HOST_IP', variable: 'PROD_HOST_IP'),
        string(credentialsId: 'PROD_SSH_KEY_PATH', variable: 'PROD_SSH_KEY_PATH'),
        string(credentialsId: 'PROD_USER', variable: 'PROD_USER')
    ]) {}

    environment {
        MAJOR_VERSION = 2
    }

    stages {
        stage('Unit Tests'){
            agent { docker 'kkarczmarczyk/node-yarn:latest' }
            steps {
                sh './node_modules/jest/bin/jest.js --coverage'
                junit 'coverage/clover.xml'
            }
        }

        stage('build'){
            agent { docker 'kkarczmarczyk/node-yarn:latest' }
            steps {
                sh 'yarn build'
            }
        }

        stage('deploy'){
            steps {
                sh "ssh ${PROD_USER}@${PROD_IP} -i ${PROD_SSH_KEY_PATH} 'rm -rf /var/www/${RELEASE_DOMAIN}/*'"
                sh "scp -i ${PROD_SSH_KEY_PATH} ${PROD_USER}@${PROD_IP}:/var/www/${RELEASE_DOMAIN}/ ${WORKSPACE}/* "
            }
        }
    }
}
