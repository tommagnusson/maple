export function runAgainstEmulators() {
  Object.assign(process.env, {
    NEXT_PUBLIC_PROJECT_ID: "demo-dtp",
    GCLOUD_PROJECT: "demo-dtp",
    NEXT_PUBLIC_USE_EMULATOR: "true",
    FIRESTORE_EMULATOR_HOST: "localhost:8080",
    FIREBASE_AUTH_EMULATOR_HOST: "localhost:9099"
  })
}

export function runAgainstDevProject() {
  const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (!serviceAccount) {
    console.error(
      "Specify the path to the service account in GOOGLE_APPLICATION_CREDENTIALS"
    )
    process.exit(1)
  }

  const testUserPassword = process.env.SYSTEM_TEST_USER_PASSWORD
  if (!testUserPassword) {
    console.error(
      "Specify the password for systemtestuser@example.com in SYSTEM_TEST_USER_PASSWORD"
    )
    process.exit(1)
  }

  Object.assign(process.env, {
    NEXT_PUBLIC_PROJECT_ID: "digital-testimony-dev",
    GOOGLE_APPLICATION_CREDENTIALS: serviceAccount,
    SYSTEM_TEST_USER_PASSWORD: testUserPassword
  })
}
