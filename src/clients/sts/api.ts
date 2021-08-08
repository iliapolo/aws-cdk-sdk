import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class StsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public assumeRole(input: shapes.StsAssumeRoleRequest): STSResponsesAssumeRole {
    return new STSResponsesAssumeRole(this, this.__resources, input);
  }

  public assumeRoleWithSaml(input: shapes.StsAssumeRoleWithSamlRequest): STSResponsesAssumeRoleWithSaml {
    return new STSResponsesAssumeRoleWithSaml(this, this.__resources, input);
  }

  public assumeRoleWithWebIdentity(input: shapes.StsAssumeRoleWithWebIdentityRequest): STSResponsesAssumeRoleWithWebIdentity {
    return new STSResponsesAssumeRoleWithWebIdentity(this, this.__resources, input);
  }

  public decodeAuthorizationMessage(input: shapes.StsDecodeAuthorizationMessageRequest): STSResponsesDecodeAuthorizationMessage {
    return new STSResponsesDecodeAuthorizationMessage(this, this.__resources, input);
  }

  public fetchAccessKeyInfo(input: shapes.StsGetAccessKeyInfoRequest): STSResponsesFetchAccessKeyInfo {
    return new STSResponsesFetchAccessKeyInfo(this, this.__resources, input);
  }

  public fetchCallerIdentity(): STSResponsesFetchCallerIdentity {
    return new STSResponsesFetchCallerIdentity(this, this.__resources);
  }

  public fetchFederationToken(input: shapes.StsGetFederationTokenRequest): STSResponsesFetchFederationToken {
    return new STSResponsesFetchFederationToken(this, this.__resources, input);
  }

  public fetchSessionToken(input: shapes.StsGetSessionTokenRequest): STSResponsesFetchSessionToken {
    return new STSResponsesFetchSessionToken(this, this.__resources, input);
  }

}

export class STSResponsesAssumeRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleRequest) {
  }

  public get credentials(): STSResponsesAssumeRoleCredentials {
    return new STSResponsesAssumeRoleCredentials(this.__scope, this.__resources, this.__input);
  }

  public get assumedRoleUser(): STSResponsesAssumeRoleAssumedRoleUser {
    return new STSResponsesAssumeRoleAssumedRoleUser(this.__scope, this.__resources, this.__input);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.PackedPolicySize', props);
    return resource.getResponseField('PackedPolicySize') as unknown as number;
  }

  public get sourceIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRole',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRole.SourceIdentity'),
        outputPath: 'SourceIdentity',
        parameters: {
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.SourceIdentity', props);
    return resource.getResponseField('SourceIdentity') as unknown as string;
  }

}

export class STSResponsesAssumeRoleCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleRequest) {
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.Credentials.AccessKeyId', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.Credentials.SecretAccessKey', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.Credentials.SessionToken', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSResponsesAssumeRoleAssumedRoleUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleRequest) {
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.AssumedRoleUser.AssumedRoleId', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
          TransitiveTagKeys: this.__input.transitiveTagKeys,
          ExternalId: this.__input.externalId,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
          SourceIdentity: this.__input.sourceIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRole.AssumedRoleUser.Arn', props);
    return resource.getResponseField('AssumedRoleUser.Arn') as unknown as string;
  }

}

export class STSResponsesAssumeRoleWithSaml {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleWithSamlRequest) {
  }

  public get credentials(): STSResponsesAssumeRoleWithSamlCredentials {
    return new STSResponsesAssumeRoleWithSamlCredentials(this.__scope, this.__resources, this.__input);
  }

  public get assumedRoleUser(): STSResponsesAssumeRoleWithSamlAssumedRoleUser {
    return new STSResponsesAssumeRoleWithSamlAssumedRoleUser(this.__scope, this.__resources, this.__input);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.PackedPolicySize', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.Subject', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.SubjectType', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.Issuer', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.Audience', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.NameQualifier', props);
    return resource.getResponseField('NameQualifier') as unknown as string;
  }

  public get sourceIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithSaml',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithSAML.SourceIdentity'),
        outputPath: 'SourceIdentity',
        parameters: {
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.SourceIdentity', props);
    return resource.getResponseField('SourceIdentity') as unknown as string;
  }

}

export class STSResponsesAssumeRoleWithSamlCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleWithSamlRequest) {
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.Credentials.AccessKeyId', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.Credentials.SecretAccessKey', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.Credentials.SessionToken', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSResponsesAssumeRoleWithSamlAssumedRoleUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleWithSamlRequest) {
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.AssumedRoleUser.AssumedRoleId', props);
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
          RoleArn: this.__input.roleArn,
          PrincipalArn: this.__input.principalArn,
          SAMLAssertion: this.__input.samlAssertion,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithSAML.AssumedRoleUser.Arn', props);
    return resource.getResponseField('AssumedRoleUser.Arn') as unknown as string;
  }

}

export class STSResponsesAssumeRoleWithWebIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleWithWebIdentityRequest) {
  }

  public get credentials(): STSResponsesAssumeRoleWithWebIdentityCredentials {
    return new STSResponsesAssumeRoleWithWebIdentityCredentials(this.__scope, this.__resources, this.__input);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.SubjectFromWebIdentityToken', props);
    return resource.getResponseField('SubjectFromWebIdentityToken') as unknown as string;
  }

  public get assumedRoleUser(): STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser {
    return new STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser(this.__scope, this.__resources, this.__input);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.PackedPolicySize', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.Provider', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.Audience', props);
    return resource.getResponseField('Audience') as unknown as string;
  }

  public get sourceIdentity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assumeRoleWithWebIdentity',
        service: 'STS',
        physicalResourceId: cr.PhysicalResourceId.of('STS.AssumeRoleWithWebIdentity.SourceIdentity'),
        outputPath: 'SourceIdentity',
        parameters: {
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.SourceIdentity', props);
    return resource.getResponseField('SourceIdentity') as unknown as string;
  }

}

export class STSResponsesAssumeRoleWithWebIdentityCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleWithWebIdentityRequest) {
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.Credentials.AccessKeyId', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.Credentials.SecretAccessKey', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.Credentials.SessionToken', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsAssumeRoleWithWebIdentityRequest) {
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.AssumedRoleUser.AssumedRoleId', props);
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
          RoleArn: this.__input.roleArn,
          RoleSessionName: this.__input.roleSessionName,
          WebIdentityToken: this.__input.webIdentityToken,
          ProviderId: this.__input.providerId,
          PolicyArns: this.__input.policyArns,
          Policy: this.__input.policy,
          DurationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssumeRoleWithWebIdentity.AssumedRoleUser.Arn', props);
    return resource.getResponseField('AssumedRoleUser.Arn') as unknown as string;
  }

}

export class STSResponsesDecodeAuthorizationMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsDecodeAuthorizationMessageRequest) {
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
          EncodedMessage: this.__input.encodedMessage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecodeAuthorizationMessage.DecodedMessage', props);
    return resource.getResponseField('DecodedMessage') as unknown as string;
  }

}

export class STSResponsesFetchAccessKeyInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsGetAccessKeyInfoRequest) {
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
          AccessKeyId: this.__input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessKeyInfo.Account', props);
    return resource.getResponseField('Account') as unknown as string;
  }

}

export class STSResponsesFetchCallerIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCallerIdentity.UserId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCallerIdentity.Account', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCallerIdentity.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class STSResponsesFetchFederationToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsGetFederationTokenRequest) {
  }

  public get credentials(): STSResponsesFetchFederationTokenCredentials {
    return new STSResponsesFetchFederationTokenCredentials(this.__scope, this.__resources, this.__input);
  }

  public get federatedUser(): STSResponsesFetchFederationTokenFederatedUser {
    return new STSResponsesFetchFederationTokenFederatedUser(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Policy: this.__input.policy,
          PolicyArns: this.__input.policyArns,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.PackedPolicySize', props);
    return resource.getResponseField('PackedPolicySize') as unknown as number;
  }

}

export class STSResponsesFetchFederationTokenCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsGetFederationTokenRequest) {
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
          Name: this.__input.name,
          Policy: this.__input.policy,
          PolicyArns: this.__input.policyArns,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.AccessKeyId', props);
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
          Name: this.__input.name,
          Policy: this.__input.policy,
          PolicyArns: this.__input.policyArns,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.SecretAccessKey', props);
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
          Name: this.__input.name,
          Policy: this.__input.policy,
          PolicyArns: this.__input.policyArns,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.SessionToken', props);
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
          Name: this.__input.name,
          Policy: this.__input.policy,
          PolicyArns: this.__input.policyArns,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class STSResponsesFetchFederationTokenFederatedUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsGetFederationTokenRequest) {
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
          Name: this.__input.name,
          Policy: this.__input.policy,
          PolicyArns: this.__input.policyArns,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.FederatedUser.FederatedUserId', props);
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
          Name: this.__input.name,
          Policy: this.__input.policy,
          PolicyArns: this.__input.policyArns,
          DurationSeconds: this.__input.durationSeconds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFederationToken.FederatedUser.Arn', props);
    return resource.getResponseField('FederatedUser.Arn') as unknown as string;
  }

}

export class STSResponsesFetchSessionToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsGetSessionTokenRequest) {
  }

  public get credentials(): STSResponsesFetchSessionTokenCredentials {
    return new STSResponsesFetchSessionTokenCredentials(this.__scope, this.__resources, this.__input);
  }

}

export class STSResponsesFetchSessionTokenCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StsGetSessionTokenRequest) {
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
          DurationSeconds: this.__input.durationSeconds,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSessionToken.Credentials.AccessKeyId', props);
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
          DurationSeconds: this.__input.durationSeconds,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSessionToken.Credentials.SecretAccessKey', props);
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
          DurationSeconds: this.__input.durationSeconds,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSessionToken.Credentials.SessionToken', props);
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
          DurationSeconds: this.__input.durationSeconds,
          SerialNumber: this.__input.serialNumber,
          TokenCode: this.__input.tokenCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSessionToken.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

