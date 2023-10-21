import admin from 'firebase-admin';

const serviceAccount = {
  "type": "service_account",
  "project_id": "emart-bcbb1",
  "private_key_id": "9f1fa6bf4c6eb8edb16eafc3f9b7cf9d21d91bc3",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDpMhLXEIOIgvGl\nJilHVZW9PL26y2SGOWuIkHcFvAWrZjRtTb8OpK6Y+HzMrEdf6I5PaBbCYird87Jt\nsAKW2cpPjc74EgJ6wTMSjba7m2+xKhJrMCouuhbqOWxheqAar+be5T1AGVaZyX9w\nHwG8Nre9foMUvMuuYiMkao51jPKmyfUiHY2AdDQdPkZCFxVp1jS0BbaYqDfcadOJ\n6rnQ+RFsMsQ3gmRiSJMUP7+FyoGVMmUycvN9Wyi/ZQSmhreSA6aA31v0t1dwO4FZ\n1h2MoEVyROCSkhmufJ+876C4/Dly5r+2NULIUxttqyizRZA6LvcHc/v5Xmai/8QE\nxScPss8jAgMBAAECgf8q0wP+m51x4KdLQIWVvrWJKJSbdDTDXc6tIX6s9KlD0/qL\nHrIbi3FkDzd5f5lnaUPZ9WEXx5NznrmSAh/nMY3lPBu8Pj0cEtt/bzgpabqzfD47\nAWWPxi06mz1V5IEf/HxsrZjQUMM3Zw6AKXMx+Sk7I2zbXsnhdCrSBTWnevyEVZRe\nnGn8+7eiyaSlD+W7bRK7KQr4EeCb9JzWzIJU393wEFz1glEBjDqE10mwEpVmIY5B\nAiOO75b2wwbsLSSL1pDvPRbpPOLMLPLaJ2sHdRG0DeXViCU95JpqLv9UKpA3k/qL\n5DGSKgSjdD/ZNZ6xpgWDYck58FuiAD9HCMInXUkCgYEA/GvuNHgEc6La6wWJkdE2\nRL1h/mMiAsoDP9NSBcjcGr0FKwtrelQZlk9jV2VCEFfVUlGFq1plRlCn9/rY3SL3\nWW/JDlAhX72d/44uL8F767NeIAYxb8lZcw9VlNYPXwcthJEUBocSrSS+1RXIGjhK\nxSZUlfkhJ7s8zRgPX93D4AkCgYEA7IBemh2o/syrR23E/onPAOjfLHCHrAihILwa\n0lFr0T2NRxaV3j6soKxTykP9S7I/F5+nNzpb6ULeDMiXOkKcsC5IyTt7W4uaxScK\nFCuaN1x+HK3r6OlTfajUMHhoqJT6+YrJAyT8BNOmovMGL2UrETv8DMALSlAhcfPn\nf4WY6MsCgYAw/Aj36aqDfkEZhrORtpXfdRkFMtuwyt8ijbHHKZl9Ht1X4xlyXcux\nXaqblSzi2wistuFHxX0Nzi0qdGWNVHHHy2eq/WXcnIGCzGauIdAYh3Bmqo0BcoOH\nTpx/C6Nj/5KXvUezlJbNPupBk76HSBFKfQvBJt2GRlGgQ2EIa5LNcQKBgFhfa3o5\nRRHZFtN9EBRxGFnlqqcncXr2Soc54ufeJuSsFGOQ6/V9A/KSEklNeJPVij/gl5JK\ni1exddnfBqttgrFOykHvqRu/Idkzyk9ZL6oqNLGwx6tjrKAS+x8Vjz4XVWTz2EMF\nieqfz++p0hDZw+sPuBJnnJBrOuQi2MlM+aNbAoGBANak+D1S5NCn2IuRe7XRaGRi\nmQDR+DOYF8UqT4esbpswDXGvSW8lM4Gmrw64gCN9RZFHZrqZUwZH0cATqI6+myPo\nBeTj2fl6KsAjttXj+aQNYTIXn7x6m0VgL6Na4zy+00Ku7E/QGFEuFwNmoBYpHLgL\naj6lrcG19CMkarZppEjD\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-632og@emart-bcbb1.iam.gserviceaccount.com",
  "client_id": "112538342320997568612",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-632og%40emart-bcbb1.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emart-bcbb1-default-rtdb.firebaseio.com"
});

export default firebase;