import base64 from 'base-64';

export default function tokenIsValid(token: string): boolean {
  if (!token) return false;

  const payloadInBase64 = token.split('.')[1];
  const decodedPayload = base64.decode(payloadInBase64);

  const { exp: expirationTimestamp } = JSON.parse(decodedPayload);

  if (!expirationTimestamp) return false;

  const timestamp = Math.floor(new Date().getTime() / 1000);
  const tokenExpired = expirationTimestamp <= timestamp;

  if (tokenExpired) return false;

  return true;
}
