node {
  properties([disableConcurrentBuilds(), [$class: 'GithubProjectProperty', displayName: '', projectUrlStr: 'https://github.com/ANDigital/andigital-skills-mosaic-web/']])

  wrap([$class: 'AnsiColorBuildWrapper', colorMapName: 'xterm']) {
    stage('Clear workspace') {
      step([$class: 'WsCleanup'])
    }

    try {
      stage('Pull') {
        checkout scm
      }


      docker.image("node:6-alpine").inside("-u root") {
        stage('Build') {

          sh 'npm install --silent'
          sh 'npm run build'
        }

//        stage('Test Lint') {
//          sh 'npm run test:lint'
//        }

        stage('Unit test') {
          sh 'npm run test:unit'
          sh 'npm run test:coverage'
          step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 0, thresholds: [[$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: ''], [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: '']], tools: [[$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'xunit.xml', skipNoTestFiles: true, stopProcessingIfError: false]]])
          publishHTML(target: [
            allowMissing         : true,
            alwaysLinkToLastBuild: true,
            keepAll              : true,
            reportDir            : 'coverage/lcov-report',
            reportFiles          : 'index.html',
            reportName           : "RCov Report"
            ])

        }
      }


      def tagId = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
      def web_image_name = "andigital/skills-mosaic-web:" + tagId.replaceAll(/\//, "-")
      def web_app

      stage('Build webapp image') {
        web_app = docker.build("${web_image_name}", '.')
      }



      if (env.BRANCH_NAME == 'master') {
        stage('Push webapp') {
          web_app.push()
          web_app.push("latest")
          currentBuild.description = "Tagged: ${web_image_name}"
        }

        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'rancher-api-keys-dev',
                          usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {

          stage ('Deploy WEB image') {
            sh "bash deploy.sh skills-mosaic-web master-${env.BUILD_NUMBER}"
          }
        }
      }

      stage('Notify Slack') {
        withCredentials([[$class: 'StringBinding', credentialsId: 'ci-slack-url', variable: 'SLACK_URL']]) {
          sh "curl -XPOST -d 'payload={ \"color\": \"good\", \"text\": \":white_check_mark: Build succeeded for ${env.JOB_NAME} ${env.BRANCH_NAME}\" }' ${env.SLACK_URL}"
        }
      }

    } catch (error) {
      withCredentials([[$class: 'StringBinding', credentialsId: 'ci-slack-url', variable: 'SLACK_URL']]) {
        sh "curl -XPOST -d 'payload={ \"color\": \"danger\", \"text\": \":warning: Build failed for ${env.JOB_NAME} ${env.BRANCH_NAME}: $error (see <${env.BUILD_URL}|the build logs>)\" }' ${env.SLACK_URL}"
      }

      throw error
    }
  }
}
