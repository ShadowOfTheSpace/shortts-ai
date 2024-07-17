import { type Google } from "arctic";
import { type GoogleAuthResponseDto } from "./libs/types/types";

class GoogleAuth {
  private google: Google;

  constructor(google: Google) {
    this.google = google;
  }

  async getAccessToken(code: string, codeVerifier: string) {
    const { accessToken } = await this.google.validateAuthorizationCode(
      code,
      codeVerifier
    );

    return accessToken;
  }

  async getAuthorizationUrl(state: string, codeVerifier: string) {
    const url = await this.google.createAuthorizationURL(state, codeVerifier, {
      scopes: ["email"],
    });

    return url.toString();
  }

  async getGoogleUser(accessToken: string) {
    const response = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return (await response.json()) as GoogleAuthResponseDto;
  }
}

export { GoogleAuth };
