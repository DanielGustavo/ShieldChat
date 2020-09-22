export default function checkIfTokenExpired(token: string): boolean {
  if (!token) return true;

  const payloadInBase64 = token.split('.')[1];
  const decodedPayload = atob(payloadInBase64);

  const { exp: expirationTimestamp } = JSON.parse(decodedPayload);

  if (!expirationTimestamp) return true;

  const timestamp = Math.floor(new Date().getTime() / 1000);

  const tokenExpired = expirationTimestamp <= timestamp;

  return tokenExpired;
}
