pipeline {
    agent any

    environment {
        MAJOR_VERSION = 2
    }

    stages {
        stage('Unit Tests'){
            agent { docker 'kkarczmarczyk/node-yarn:latest' }
            steps {
                sh 'yarn test'
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
                sh "ssh ${PROD_USER}@${PROD_IP} -i ${PROD_SSH_KEY_FILE} 'rm -rf /var/www/${RELEASE_DOMAIN}/*'"
                sh "scp -i ${PROD_SSH_KEY_FILE} ${PROD_USER}@${PROD_IP}:/var/www/${RELEASE_DOMAIN}/ ${WORKSPACE}/* "
            }
        }
    }
}
