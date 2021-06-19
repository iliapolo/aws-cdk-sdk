import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsooidcClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createToken(input: shapes.SsooidcCreateTokenRequest): SSOOIDCResponsesCreateToken {
    return new SSOOIDCResponsesCreateToken(this, this.__resources, input);
  }

  public registerClient(input: shapes.SsooidcRegisterClientRequest): SSOOIDCResponsesRegisterClient {
    return new SSOOIDCResponsesRegisterClient(this, this.__resources, input);
  }

  public startDeviceAuthorization(input: shapes.SsooidcStartDeviceAuthorizationRequest): SSOOIDCResponsesStartDeviceAuthorization {
    return new SSOOIDCResponsesStartDeviceAuthorization(this, this.__resources, input);
  }

}

export class SSOOIDCResponsesCreateToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsooidcCreateTokenRequest) {
  }

  public get accessToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.CreateToken.accessToken'),
        outputPath: 'accessToken',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          grantType: this.__input.grantType,
          deviceCode: this.__input.deviceCode,
          code: this.__input.code,
          refreshToken: this.__input.refreshToken,
          scope: this.__input.scope,
          redirectUri: this.__input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.accessToken', props);
    return resource.getResponseField('accessToken') as unknown as string;
  }

  public get tokenType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.CreateToken.tokenType'),
        outputPath: 'tokenType',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          grantType: this.__input.grantType,
          deviceCode: this.__input.deviceCode,
          code: this.__input.code,
          refreshToken: this.__input.refreshToken,
          scope: this.__input.scope,
          redirectUri: this.__input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.tokenType', props);
    return resource.getResponseField('tokenType') as unknown as string;
  }

  public get expiresIn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.CreateToken.expiresIn'),
        outputPath: 'expiresIn',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          grantType: this.__input.grantType,
          deviceCode: this.__input.deviceCode,
          code: this.__input.code,
          refreshToken: this.__input.refreshToken,
          scope: this.__input.scope,
          redirectUri: this.__input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.expiresIn', props);
    return resource.getResponseField('expiresIn') as unknown as number;
  }

  public get refreshToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.CreateToken.refreshToken'),
        outputPath: 'refreshToken',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          grantType: this.__input.grantType,
          deviceCode: this.__input.deviceCode,
          code: this.__input.code,
          refreshToken: this.__input.refreshToken,
          scope: this.__input.scope,
          redirectUri: this.__input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.refreshToken', props);
    return resource.getResponseField('refreshToken') as unknown as string;
  }

  public get idToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.CreateToken.idToken'),
        outputPath: 'idToken',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          grantType: this.__input.grantType,
          deviceCode: this.__input.deviceCode,
          code: this.__input.code,
          refreshToken: this.__input.refreshToken,
          scope: this.__input.scope,
          redirectUri: this.__input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.idToken', props);
    return resource.getResponseField('idToken') as unknown as string;
  }

}

export class SSOOIDCResponsesRegisterClient {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsooidcRegisterClientRequest) {
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerClient',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.RegisterClient.clientId'),
        outputPath: 'clientId',
        parameters: {
          clientName: this.__input.clientName,
          clientType: this.__input.clientType,
          scopes: this.__input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterClient.clientId', props);
    return resource.getResponseField('clientId') as unknown as string;
  }

  public get clientSecret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerClient',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.RegisterClient.clientSecret'),
        outputPath: 'clientSecret',
        parameters: {
          clientName: this.__input.clientName,
          clientType: this.__input.clientType,
          scopes: this.__input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterClient.clientSecret', props);
    return resource.getResponseField('clientSecret') as unknown as string;
  }

  public get clientIdIssuedAt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerClient',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.RegisterClient.clientIdIssuedAt'),
        outputPath: 'clientIdIssuedAt',
        parameters: {
          clientName: this.__input.clientName,
          clientType: this.__input.clientType,
          scopes: this.__input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterClient.clientIdIssuedAt', props);
    return resource.getResponseField('clientIdIssuedAt') as unknown as number;
  }

  public get clientSecretExpiresAt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerClient',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.RegisterClient.clientSecretExpiresAt'),
        outputPath: 'clientSecretExpiresAt',
        parameters: {
          clientName: this.__input.clientName,
          clientType: this.__input.clientType,
          scopes: this.__input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterClient.clientSecretExpiresAt', props);
    return resource.getResponseField('clientSecretExpiresAt') as unknown as number;
  }

  public get authorizationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerClient',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.RegisterClient.authorizationEndpoint'),
        outputPath: 'authorizationEndpoint',
        parameters: {
          clientName: this.__input.clientName,
          clientType: this.__input.clientType,
          scopes: this.__input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterClient.authorizationEndpoint', props);
    return resource.getResponseField('authorizationEndpoint') as unknown as string;
  }

  public get tokenEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerClient',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.RegisterClient.tokenEndpoint'),
        outputPath: 'tokenEndpoint',
        parameters: {
          clientName: this.__input.clientName,
          clientType: this.__input.clientType,
          scopes: this.__input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterClient.tokenEndpoint', props);
    return resource.getResponseField('tokenEndpoint') as unknown as string;
  }

}

export class SSOOIDCResponsesStartDeviceAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsooidcStartDeviceAuthorizationRequest) {
  }

  public get deviceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeviceAuthorization',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.StartDeviceAuthorization.deviceCode'),
        outputPath: 'deviceCode',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          startUrl: this.__input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeviceAuthorization.deviceCode', props);
    return resource.getResponseField('deviceCode') as unknown as string;
  }

  public get userCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeviceAuthorization',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.StartDeviceAuthorization.userCode'),
        outputPath: 'userCode',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          startUrl: this.__input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeviceAuthorization.userCode', props);
    return resource.getResponseField('userCode') as unknown as string;
  }

  public get verificationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeviceAuthorization',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.StartDeviceAuthorization.verificationUri'),
        outputPath: 'verificationUri',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          startUrl: this.__input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeviceAuthorization.verificationUri', props);
    return resource.getResponseField('verificationUri') as unknown as string;
  }

  public get verificationUriComplete(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeviceAuthorization',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.StartDeviceAuthorization.verificationUriComplete'),
        outputPath: 'verificationUriComplete',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          startUrl: this.__input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeviceAuthorization.verificationUriComplete', props);
    return resource.getResponseField('verificationUriComplete') as unknown as string;
  }

  public get expiresIn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeviceAuthorization',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.StartDeviceAuthorization.expiresIn'),
        outputPath: 'expiresIn',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          startUrl: this.__input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeviceAuthorization.expiresIn', props);
    return resource.getResponseField('expiresIn') as unknown as number;
  }

  public get interval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeviceAuthorization',
        service: 'SSOOIDC',
        physicalResourceId: cr.PhysicalResourceId.of('SSOOIDC.StartDeviceAuthorization.interval'),
        outputPath: 'interval',
        parameters: {
          clientId: this.__input.clientId,
          clientSecret: this.__input.clientSecret,
          startUrl: this.__input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeviceAuthorization.interval', props);
    return resource.getResponseField('interval') as unknown as number;
  }

}

