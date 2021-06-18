import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsooidcClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createToken(input: shapes.SsooidcCreateTokenRequest): SSOOIDCCreateToken {
    return new SSOOIDCCreateToken(this, 'CreateToken', this.__resources, input);
  }

  public registerClient(input: shapes.SsooidcRegisterClientRequest): SSOOIDCRegisterClient {
    return new SSOOIDCRegisterClient(this, 'RegisterClient', this.__resources, input);
  }

  public startDeviceAuthorization(input: shapes.SsooidcStartDeviceAuthorizationRequest): SSOOIDCStartDeviceAuthorization {
    return new SSOOIDCStartDeviceAuthorization(this, 'StartDeviceAuthorization', this.__resources, input);
  }

}

export class SSOOIDCCreateToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsooidcCreateTokenRequest) {
    super(scope, id);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          grantType: this.input.grantType,
          deviceCode: this.input.deviceCode,
          code: this.input.code,
          refreshToken: this.input.refreshToken,
          scope: this.input.scope,
          redirectUri: this.input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateToken.accessToken', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          grantType: this.input.grantType,
          deviceCode: this.input.deviceCode,
          code: this.input.code,
          refreshToken: this.input.refreshToken,
          scope: this.input.scope,
          redirectUri: this.input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateToken.tokenType', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          grantType: this.input.grantType,
          deviceCode: this.input.deviceCode,
          code: this.input.code,
          refreshToken: this.input.refreshToken,
          scope: this.input.scope,
          redirectUri: this.input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateToken.expiresIn', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          grantType: this.input.grantType,
          deviceCode: this.input.deviceCode,
          code: this.input.code,
          refreshToken: this.input.refreshToken,
          scope: this.input.scope,
          redirectUri: this.input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateToken.refreshToken', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          grantType: this.input.grantType,
          deviceCode: this.input.deviceCode,
          code: this.input.code,
          refreshToken: this.input.refreshToken,
          scope: this.input.scope,
          redirectUri: this.input.redirectUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateToken.idToken', props);
    return resource.getResponseField('idToken') as unknown as string;
  }

}

export class SSOOIDCRegisterClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsooidcRegisterClientRequest) {
    super(scope, id);
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
          clientName: this.input.clientName,
          clientType: this.input.clientType,
          scopes: this.input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterClient.clientId', props);
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
          clientName: this.input.clientName,
          clientType: this.input.clientType,
          scopes: this.input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterClient.clientSecret', props);
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
          clientName: this.input.clientName,
          clientType: this.input.clientType,
          scopes: this.input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterClient.clientIdIssuedAt', props);
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
          clientName: this.input.clientName,
          clientType: this.input.clientType,
          scopes: this.input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterClient.clientSecretExpiresAt', props);
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
          clientName: this.input.clientName,
          clientType: this.input.clientType,
          scopes: this.input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterClient.authorizationEndpoint', props);
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
          clientName: this.input.clientName,
          clientType: this.input.clientType,
          scopes: this.input.scopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterClient.tokenEndpoint', props);
    return resource.getResponseField('tokenEndpoint') as unknown as string;
  }

}

export class SSOOIDCStartDeviceAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsooidcStartDeviceAuthorizationRequest) {
    super(scope, id);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          startUrl: this.input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeviceAuthorization.deviceCode', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          startUrl: this.input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeviceAuthorization.userCode', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          startUrl: this.input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeviceAuthorization.verificationUri', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          startUrl: this.input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeviceAuthorization.verificationUriComplete', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          startUrl: this.input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeviceAuthorization.expiresIn', props);
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
          clientId: this.input.clientId,
          clientSecret: this.input.clientSecret,
          startUrl: this.input.startUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeviceAuthorization.interval', props);
    return resource.getResponseField('interval') as unknown as number;
  }

}

