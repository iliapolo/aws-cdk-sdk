import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class StsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public assumeRole(input: shapes.StsAssumeRoleRequest): STSAssumeRole {
    return new STSAssumeRole(this, 'AssumeRole', this.__resources, input);
  }

  public assumeRoleWithSaml(input: shapes.StsAssumeRoleWithSamlRequest): STSAssumeRoleWithSaml {
    return new STSAssumeRoleWithSaml(this, 'AssumeRoleWithSaml', this.__resources, input);
  }

  public assumeRoleWithWebIdentity(input: shapes.StsAssumeRoleWithWebIdentityRequest): STSAssumeRoleWithWebIdentity {
    return new STSAssumeRoleWithWebIdentity(this, 'AssumeRoleWithWebIdentity', this.__resources, input);
  }

  public decodeAuthorizationMessage(input: shapes.StsDecodeAuthorizationMessageRequest): STSDecodeAuthorizationMessage {
    return new STSDecodeAuthorizationMessage(this, 'DecodeAuthorizationMessage', this.__resources, input);
  }

  public fetchAccessKeyInfo(input: shapes.StsGetAccessKeyInfoRequest): STSFetchAccessKeyInfo {
    return new STSFetchAccessKeyInfo(this, 'FetchAccessKeyInfo', this.__resources, input);
  }

  public fetchCallerIdentity(): STSFetchCallerIdentity {
    return new STSFetchCallerIdentity(this, 'FetchCallerIdentity', this.__resources);
  }

  public fetchFederationToken(input: shapes.StsGetFederationTokenRequest): STSFetchFederationToken {
    return new STSFetchFederationToken(this, 'FetchFederationToken', this.__resources, input);
  }

  public fetchSessionToken(input: shapes.StsGetSessionTokenRequest): STSFetchSessionToken {
    return new STSFetchSessionToken(this, 'FetchSessionToken', this.__resources, input);
  }

}

export class STSAssumeRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleRequest) {
    super(scope, id);
  }

  public get credentials(): STSAssumeRoleCredentials {
    return new STSAssumeRoleCredentials(this, 'Credentials', this.__resources, this.input);
  }

  public get assumedRoleUser(): STSAssumeRoleAssumedRoleUser {
    return new STSAssumeRoleAssumedRoleUser(this, 'AssumedRoleUser', this.__resources, this.input);
  }

  public get packedPolicySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.PackedPolicySize'),
        outputPath: 'PackedPolicySize',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
          TransitiveTagKeys: this.input.transitiveTagKeys,
          ExternalId: this.input.externalId,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRole.PackedPolicySize', props);
    return resource.getResponseField('PackedPolicySize') as unknown as number;
  }

}

export class STSAssumeRoleCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleRequest) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.Credentials.AccessKeyId'),
        outputPath: 'Credentials.AccessKeyId',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
          TransitiveTagKeys: this.input.transitiveTagKeys,
          ExternalId: this.input.externalId,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRole.Credentials.AccessKeyId', props);
    return resource.getResponseField('Credentials.AccessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.Credentials.SecretAccessKey'),
        outputPath: 'Credentials.SecretAccessKey',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
          TransitiveTagKeys: this.input.transitiveTagKeys,
          ExternalId: this.input.externalId,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRole.Credentials.SecretAccessKey', props);
    return resource.getResponseField('Credentials.SecretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.Credentials.SessionToken'),
        outputPath: 'Credentials.SessionToken',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
          TransitiveTagKeys: this.input.transitiveTagKeys,
          ExternalId: this.input.externalId,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRole.Credentials.SessionToken', props);
    return resource.getResponseField('Credentials.SessionToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.Credentials.Expiration'),
        outputPath: 'Credentials.Expiration',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
          TransitiveTagKeys: this.input.transitiveTagKeys,
          ExternalId: this.input.externalId,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRole.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSAssumeRoleAssumedRoleUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleRequest) {
    super(scope, id);
  }

  public get assumedRoleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.AssumedRoleUser.AssumedRoleId'),
        outputPath: 'AssumedRoleUser.AssumedRoleId',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
          TransitiveTagKeys: this.input.transitiveTagKeys,
          ExternalId: this.input.externalId,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRole.AssumedRoleUser.AssumedRoleId', props);
    return resource.getResponseField('AssumedRoleUser.AssumedRoleId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.AssumedRoleUser.Arn'),
        outputPath: 'AssumedRoleUser.Arn',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
          TransitiveTagKeys: this.input.transitiveTagKeys,
          ExternalId: this.input.externalId,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRole.AssumedRoleUser.Arn', props);
    return resource.getResponseField('AssumedRoleUser.Arn') as unknown as string;
  }

}

export class STSAssumeRoleWithSaml extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleWithSamlRequest) {
    super(scope, id);
  }

  public get credentials(): STSAssumeRoleWithSamlCredentials {
    return new STSAssumeRoleWithSamlCredentials(this, 'Credentials', this.__resources, this.input);
  }

  public get assumedRoleUser(): STSAssumeRoleWithSamlAssumedRoleUser {
    return new STSAssumeRoleWithSamlAssumedRoleUser(this, 'AssumedRoleUser', this.__resources, this.input);
  }

  public get packedPolicySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.PackedPolicySize'),
        outputPath: 'PackedPolicySize',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.PackedPolicySize', props);
    return resource.getResponseField('PackedPolicySize') as unknown as number;
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.Subject'),
        outputPath: 'Subject',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.Subject', props);
    return resource.getResponseField('Subject') as unknown as string;
  }

  public get subjectType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.SubjectType'),
        outputPath: 'SubjectType',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.SubjectType', props);
    return resource.getResponseField('SubjectType') as unknown as string;
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.Issuer'),
        outputPath: 'Issuer',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.Issuer', props);
    return resource.getResponseField('Issuer') as unknown as string;
  }

  public get audience(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.Audience'),
        outputPath: 'Audience',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.Audience', props);
    return resource.getResponseField('Audience') as unknown as string;
  }

  public get nameQualifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.NameQualifier'),
        outputPath: 'NameQualifier',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.NameQualifier', props);
    return resource.getResponseField('NameQualifier') as unknown as string;
  }

}

export class STSAssumeRoleWithSamlCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleWithSamlRequest) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.Credentials.AccessKeyId'),
        outputPath: 'Credentials.AccessKeyId',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.Credentials.AccessKeyId', props);
    return resource.getResponseField('Credentials.AccessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.Credentials.SecretAccessKey'),
        outputPath: 'Credentials.SecretAccessKey',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.Credentials.SecretAccessKey', props);
    return resource.getResponseField('Credentials.SecretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.Credentials.SessionToken'),
        outputPath: 'Credentials.SessionToken',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.Credentials.SessionToken', props);
    return resource.getResponseField('Credentials.SessionToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.Credentials.Expiration'),
        outputPath: 'Credentials.Expiration',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSAssumeRoleWithSamlAssumedRoleUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleWithSamlRequest) {
    super(scope, id);
  }

  public get assumedRoleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.AssumedRoleUser.AssumedRoleId'),
        outputPath: 'AssumedRoleUser.AssumedRoleId',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.AssumedRoleUser.AssumedRoleId', props);
    return resource.getResponseField('AssumedRoleUser.AssumedRoleId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.AssumedRoleUser.Arn'),
        outputPath: 'AssumedRoleUser.Arn',
        parameters: {
          RoleArn: this.input.roleArn,
          PrincipalArn: this.input.principalArn,
          SAMLAssertion: this.input.samlAssertion,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithSAML.AssumedRoleUser.Arn', props);
    return resource.getResponseField('AssumedRoleUser.Arn') as unknown as string;
  }

}

export class STSAssumeRoleWithWebIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleWithWebIdentityRequest) {
    super(scope, id);
  }

  public get credentials(): STSAssumeRoleWithWebIdentityCredentials {
    return new STSAssumeRoleWithWebIdentityCredentials(this, 'Credentials', this.__resources, this.input);
  }

  public get subjectFromWebIdentityToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.SubjectFromWebIdentityToken'),
        outputPath: 'SubjectFromWebIdentityToken',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.SubjectFromWebIdentityToken', props);
    return resource.getResponseField('SubjectFromWebIdentityToken') as unknown as string;
  }

  public get assumedRoleUser(): STSAssumeRoleWithWebIdentityAssumedRoleUser {
    return new STSAssumeRoleWithWebIdentityAssumedRoleUser(this, 'AssumedRoleUser', this.__resources, this.input);
  }

  public get packedPolicySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.PackedPolicySize'),
        outputPath: 'PackedPolicySize',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.PackedPolicySize', props);
    return resource.getResponseField('PackedPolicySize') as unknown as number;
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.Provider'),
        outputPath: 'Provider',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.Provider', props);
    return resource.getResponseField('Provider') as unknown as string;
  }

  public get audience(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.Audience'),
        outputPath: 'Audience',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.Audience', props);
    return resource.getResponseField('Audience') as unknown as string;
  }

}

export class STSAssumeRoleWithWebIdentityCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleWithWebIdentityRequest) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.Credentials.AccessKeyId'),
        outputPath: 'Credentials.AccessKeyId',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.Credentials.AccessKeyId', props);
    return resource.getResponseField('Credentials.AccessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.Credentials.SecretAccessKey'),
        outputPath: 'Credentials.SecretAccessKey',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.Credentials.SecretAccessKey', props);
    return resource.getResponseField('Credentials.SecretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.Credentials.SessionToken'),
        outputPath: 'Credentials.SessionToken',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.Credentials.SessionToken', props);
    return resource.getResponseField('Credentials.SessionToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.Credentials.Expiration'),
        outputPath: 'Credentials.Expiration',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSAssumeRoleWithWebIdentityAssumedRoleUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsAssumeRoleWithWebIdentityRequest) {
    super(scope, id);
  }

  public get assumedRoleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.AssumedRoleUser.AssumedRoleId'),
        outputPath: 'AssumedRoleUser.AssumedRoleId',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.AssumedRoleUser.AssumedRoleId', props);
    return resource.getResponseField('AssumedRoleUser.AssumedRoleId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.AssumedRoleUser.Arn'),
        outputPath: 'AssumedRoleUser.Arn',
        parameters: {
          RoleArn: this.input.roleArn,
          RoleSessionName: this.input.roleSessionName,
          WebIdentityToken: this.input.webIdentityToken,
          ProviderId: this.input.providerId,
          PolicyArns: this.input.policyArns,
          Policy: this.input.policy,
          DurationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssumeRoleWithWebIdentity.AssumedRoleUser.Arn', props);
    return resource.getResponseField('AssumedRoleUser.Arn') as unknown as string;
  }

}

export class STSDecodeAuthorizationMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsDecodeAuthorizationMessageRequest) {
    super(scope, id);
  }

  public get decodedMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decodeAuthorizationMessage',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.DecodeAuthorizationMessage.DecodedMessage'),
        outputPath: 'DecodedMessage',
        parameters: {
          EncodedMessage: this.input.encodedMessage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecodeAuthorizationMessage.DecodedMessage', props);
    return resource.getResponseField('DecodedMessage') as unknown as string;
  }

}

export class STSFetchAccessKeyInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsGetAccessKeyInfoRequest) {
    super(scope, id);
  }

  public get account(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessKeyInfo',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetAccessKeyInfo.Account'),
        outputPath: 'Account',
        parameters: {
          AccessKeyId: this.input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessKeyInfo.Account', props);
    return resource.getResponseField('Account') as unknown as string;
  }

}

export class STSFetchCallerIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCallerIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetCallerIdentity.UserId'),
        outputPath: 'UserId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCallerIdentity.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

  public get account(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCallerIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetCallerIdentity.Account'),
        outputPath: 'Account',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCallerIdentity.Account', props);
    return resource.getResponseField('Account') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCallerIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetCallerIdentity.Arn'),
        outputPath: 'Arn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCallerIdentity.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class STSFetchFederationToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsGetFederationTokenRequest) {
    super(scope, id);
  }

  public get credentials(): STSFetchFederationTokenCredentials {
    return new STSFetchFederationTokenCredentials(this, 'Credentials', this.__resources, this.input);
  }

  public get federatedUser(): STSFetchFederationTokenFederatedUser {
    return new STSFetchFederationTokenFederatedUser(this, 'FederatedUser', this.__resources, this.input);
  }

  public get packedPolicySize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetFederationToken.PackedPolicySize'),
        outputPath: 'PackedPolicySize',
        parameters: {
          Name: this.input.name,
          Policy: this.input.policy,
          PolicyArns: this.input.policyArns,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.PackedPolicySize', props);
    return resource.getResponseField('PackedPolicySize') as unknown as number;
  }

}

export class STSFetchFederationTokenCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsGetFederationTokenRequest) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetFederationToken.Credentials.AccessKeyId'),
        outputPath: 'Credentials.AccessKeyId',
        parameters: {
          Name: this.input.name,
          Policy: this.input.policy,
          PolicyArns: this.input.policyArns,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.AccessKeyId', props);
    return resource.getResponseField('Credentials.AccessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetFederationToken.Credentials.SecretAccessKey'),
        outputPath: 'Credentials.SecretAccessKey',
        parameters: {
          Name: this.input.name,
          Policy: this.input.policy,
          PolicyArns: this.input.policyArns,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.SecretAccessKey', props);
    return resource.getResponseField('Credentials.SecretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetFederationToken.Credentials.SessionToken'),
        outputPath: 'Credentials.SessionToken',
        parameters: {
          Name: this.input.name,
          Policy: this.input.policy,
          PolicyArns: this.input.policyArns,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.SessionToken', props);
    return resource.getResponseField('Credentials.SessionToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetFederationToken.Credentials.Expiration'),
        outputPath: 'Credentials.Expiration',
        parameters: {
          Name: this.input.name,
          Policy: this.input.policy,
          PolicyArns: this.input.policyArns,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSFetchFederationTokenFederatedUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsGetFederationTokenRequest) {
    super(scope, id);
  }

  public get federatedUserId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetFederationToken.FederatedUser.FederatedUserId'),
        outputPath: 'FederatedUser.FederatedUserId',
        parameters: {
          Name: this.input.name,
          Policy: this.input.policy,
          PolicyArns: this.input.policyArns,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.FederatedUser.FederatedUserId', props);
    return resource.getResponseField('FederatedUser.FederatedUserId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFederationToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetFederationToken.FederatedUser.Arn'),
        outputPath: 'FederatedUser.Arn',
        parameters: {
          Name: this.input.name,
          Policy: this.input.policy,
          PolicyArns: this.input.policyArns,
          DurationSeconds: this.input.durationSeconds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFederationToken.FederatedUser.Arn', props);
    return resource.getResponseField('FederatedUser.Arn') as unknown as string;
  }

}

export class STSFetchSessionToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsGetSessionTokenRequest) {
    super(scope, id);
  }

  public get credentials(): STSFetchSessionTokenCredentials {
    return new STSFetchSessionTokenCredentials(this, 'Credentials', this.__resources, this.input);
  }

}

export class STSFetchSessionTokenCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StsGetSessionTokenRequest) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSessionToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetSessionToken.Credentials.AccessKeyId'),
        outputPath: 'Credentials.AccessKeyId',
        parameters: {
          DurationSeconds: this.input.durationSeconds,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSessionToken.Credentials.AccessKeyId', props);
    return resource.getResponseField('Credentials.AccessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSessionToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetSessionToken.Credentials.SecretAccessKey'),
        outputPath: 'Credentials.SecretAccessKey',
        parameters: {
          DurationSeconds: this.input.durationSeconds,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSessionToken.Credentials.SecretAccessKey', props);
    return resource.getResponseField('Credentials.SecretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSessionToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetSessionToken.Credentials.SessionToken'),
        outputPath: 'Credentials.SessionToken',
        parameters: {
          DurationSeconds: this.input.durationSeconds,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSessionToken.Credentials.SessionToken', props);
    return resource.getResponseField('Credentials.SessionToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSessionToken',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.GetSessionToken.Credentials.Expiration'),
        outputPath: 'Credentials.Expiration',
        parameters: {
          DurationSeconds: this.input.durationSeconds,
          SerialNumber: this.input.serialNumber,
          TokenCode: this.input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSessionToken.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

