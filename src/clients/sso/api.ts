import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsoClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchRoleCredentials(input: shapes.SsoGetRoleCredentialsRequest): SSOResponsesFetchRoleCredentials {
    return new SSOResponsesFetchRoleCredentials(this, this.__resources, input);
  }

  public listAccountRoles(input: shapes.SsoListAccountRolesRequest): SSOResponsesListAccountRoles {
    return new SSOResponsesListAccountRoles(this, this.__resources, input);
  }

  public listAccounts(input: shapes.SsoListAccountsRequest): SSOResponsesListAccounts {
    return new SSOResponsesListAccounts(this, this.__resources, input);
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

export class SSOResponsesFetchRoleCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoGetRoleCredentialsRequest) {
  }

  public get roleCredentials(): SSOResponsesFetchRoleCredentialsRoleCredentials {
    return new SSOResponsesFetchRoleCredentialsRoleCredentials(this.__scope, this.__resources, this.__input);
  }

}

export class SSOResponsesFetchRoleCredentialsRoleCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoGetRoleCredentialsRequest) {
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
          roleName: this.__input.roleName,
          accountId: this.__input.accountId,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoleCredentials.roleCredentials.accessKeyId', props);
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
          roleName: this.__input.roleName,
          accountId: this.__input.accountId,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoleCredentials.roleCredentials.secretAccessKey', props);
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
          roleName: this.__input.roleName,
          accountId: this.__input.accountId,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoleCredentials.roleCredentials.sessionToken', props);
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
          roleName: this.__input.roleName,
          accountId: this.__input.accountId,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoleCredentials.roleCredentials.expiration', props);
    return resource.getResponseField('roleCredentials.expiration') as unknown as number;
  }

}

export class SSOResponsesListAccountRoles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoListAccountRolesRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          accessToken: this.__input.accessToken,
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountRoles.nextToken', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          accessToken: this.__input.accessToken,
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountRoles.roleList', props);
    return resource.getResponseField('roleList') as unknown as shapes.SsoRoleInfo[];
  }

}

export class SSOResponsesListAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoListAccountsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccounts.nextToken', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          accessToken: this.__input.accessToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccounts.accountList', props);
    return resource.getResponseField('accountList') as unknown as shapes.SsoAccountInfo[];
  }

}

