import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsoClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchRoleCredentials(input: shapes.SsoGetRoleCredentialsRequest): SSOFetchRoleCredentials {
    return new SSOFetchRoleCredentials(this, 'FetchRoleCredentials', this.__resources, input);
  }

  public listAccountRoles(input: shapes.SsoListAccountRolesRequest): SSOListAccountRoles {
    return new SSOListAccountRoles(this, 'ListAccountRoles', this.__resources, input);
  }

  public listAccounts(input: shapes.SsoListAccountsRequest): SSOListAccounts {
    return new SSOListAccounts(this, 'ListAccounts', this.__resources, input);
  }

  public logout(input: shapes.SsoLogoutRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'logout',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.Logout'),
        parameters: {
          accessToken: input.accessToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'Logout', props);
  }

}

export class SSOFetchRoleCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoGetRoleCredentialsRequest) {
    super(scope, id);
  }

  public get roleCredentials(): SSOFetchRoleCredentialsRoleCredentials {
    return new SSOFetchRoleCredentialsRoleCredentials(this, 'RoleCredentials', this.__resources, this.input);
  }

}

export class SSOFetchRoleCredentialsRoleCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoGetRoleCredentialsRequest) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoleCredentials',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.GetRoleCredentials.roleCredentials.accessKeyId'),
        outputPath: 'roleCredentials.accessKeyId',
        parameters: {
          roleName: this.input.roleName,
          accountId: this.input.accountId,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoleCredentials.roleCredentials.accessKeyId', props);
    return resource.getResponseField('roleCredentials.accessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoleCredentials',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.GetRoleCredentials.roleCredentials.secretAccessKey'),
        outputPath: 'roleCredentials.secretAccessKey',
        parameters: {
          roleName: this.input.roleName,
          accountId: this.input.accountId,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoleCredentials.roleCredentials.secretAccessKey', props);
    return resource.getResponseField('roleCredentials.secretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoleCredentials',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.GetRoleCredentials.roleCredentials.sessionToken'),
        outputPath: 'roleCredentials.sessionToken',
        parameters: {
          roleName: this.input.roleName,
          accountId: this.input.accountId,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoleCredentials.roleCredentials.sessionToken', props);
    return resource.getResponseField('roleCredentials.sessionToken') as unknown as string;
  }

  public get expiration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoleCredentials',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.GetRoleCredentials.roleCredentials.expiration'),
        outputPath: 'roleCredentials.expiration',
        parameters: {
          roleName: this.input.roleName,
          accountId: this.input.accountId,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoleCredentials.roleCredentials.expiration', props);
    return resource.getResponseField('roleCredentials.expiration') as unknown as number;
  }

}

export class SSOListAccountRoles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoListAccountRolesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountRoles',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.ListAccountRoles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          accessToken: this.input.accessToken,
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountRoles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get roleList(): shapes.SsoRoleInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountRoles',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.ListAccountRoles.roleList'),
        outputPath: 'roleList',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          accessToken: this.input.accessToken,
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountRoles.roleList', props);
    return resource.getResponseField('roleList') as unknown as shapes.SsoRoleInfo[];
  }

}

export class SSOListAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoListAccountsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccounts',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.ListAccounts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccounts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get accountList(): shapes.SsoAccountInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccounts',
        service: 'SSO',
        physicalResourceId: cr.PhysicalResourceId.of('SSO.ListAccounts.accountList'),
        outputPath: 'accountList',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          accessToken: this.input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccounts.accountList', props);
    return resource.getResponseField('accountList') as unknown as shapes.SsoAccountInfo[];
  }

}

