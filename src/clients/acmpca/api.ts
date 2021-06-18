import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AcmpcaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCertificateAuthority(input: shapes.AcmpcaCreateCertificateAuthorityRequest): ACMPCACreateCertificateAuthority {
    return new ACMPCACreateCertificateAuthority(this, 'CreateCertificateAuthority', this.__resources, input);
  }

  public createCertificateAuthorityAuditReport(input: shapes.AcmpcaCreateCertificateAuthorityAuditReportRequest): ACMPCACreateCertificateAuthorityAuditReport {
    return new ACMPCACreateCertificateAuthorityAuditReport(this, 'CreateCertificateAuthorityAuditReport', this.__resources, input);
  }

  public createPermission(input: shapes.AcmpcaCreatePermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPermission',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.CreatePermission'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          Principal: input.principal,
          SourceAccount: input.sourceAccount,
          Actions: input.actions,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreatePermission', props);
  }

  public deleteCertificateAuthority(input: shapes.AcmpcaDeleteCertificateAuthorityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DeleteCertificateAuthority'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          PermanentDeletionTimeInDays: input.permanentDeletionTimeInDays,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCertificateAuthority', props);
  }

  public deletePermission(input: shapes.AcmpcaDeletePermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePermission',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DeletePermission'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          Principal: input.principal,
          SourceAccount: input.sourceAccount,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePermission', props);
  }

  public deletePolicy(input: shapes.AcmpcaDeletePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicy',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DeletePolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicy', props);
  }

  public describeCertificateAuthority(input: shapes.AcmpcaDescribeCertificateAuthorityRequest): ACMPCADescribeCertificateAuthority {
    return new ACMPCADescribeCertificateAuthority(this, 'DescribeCertificateAuthority', this.__resources, input);
  }

  public describeCertificateAuthorityAuditReport(input: shapes.AcmpcaDescribeCertificateAuthorityAuditReportRequest): ACMPCADescribeCertificateAuthorityAuditReport {
    return new ACMPCADescribeCertificateAuthorityAuditReport(this, 'DescribeCertificateAuthorityAuditReport', this.__resources, input);
  }

  public fetchCertificate(input: shapes.AcmpcaGetCertificateRequest): ACMPCAFetchCertificate {
    return new ACMPCAFetchCertificate(this, 'FetchCertificate', this.__resources, input);
  }

  public fetchCertificateAuthorityCertificate(input: shapes.AcmpcaGetCertificateAuthorityCertificateRequest): ACMPCAFetchCertificateAuthorityCertificate {
    return new ACMPCAFetchCertificateAuthorityCertificate(this, 'FetchCertificateAuthorityCertificate', this.__resources, input);
  }

  public fetchCertificateAuthorityCsr(input: shapes.AcmpcaGetCertificateAuthorityCsrRequest): ACMPCAFetchCertificateAuthorityCsr {
    return new ACMPCAFetchCertificateAuthorityCsr(this, 'FetchCertificateAuthorityCsr', this.__resources, input);
  }

  public fetchPolicy(input: shapes.AcmpcaGetPolicyRequest): ACMPCAFetchPolicy {
    return new ACMPCAFetchPolicy(this, 'FetchPolicy', this.__resources, input);
  }

  public importCertificateAuthorityCertificate(input: shapes.AcmpcaImportCertificateAuthorityCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importCertificateAuthorityCertificate',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.ImportCertificateAuthorityCertificate'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          Certificate: {
          },
          CertificateChain: {
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ImportCertificateAuthorityCertificate', props);
  }

  public issueCertificate(input: shapes.AcmpcaIssueCertificateRequest): ACMPCAIssueCertificate {
    return new ACMPCAIssueCertificate(this, 'IssueCertificate', this.__resources, input);
  }

  public listCertificateAuthorities(input: shapes.AcmpcaListCertificateAuthoritiesRequest): ACMPCAListCertificateAuthorities {
    return new ACMPCAListCertificateAuthorities(this, 'ListCertificateAuthorities', this.__resources, input);
  }

  public listPermissions(input: shapes.AcmpcaListPermissionsRequest): ACMPCAListPermissions {
    return new ACMPCAListPermissions(this, 'ListPermissions', this.__resources, input);
  }

  public listTags(input: shapes.AcmpcaListTagsRequest): ACMPCAListTags {
    return new ACMPCAListTags(this, 'ListTags', this.__resources, input);
  }

  public putPolicy(input: shapes.AcmpcaPutPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPolicy',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.PutPolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutPolicy', props);
  }

  public restoreCertificateAuthority(input: shapes.AcmpcaRestoreCertificateAuthorityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.RestoreCertificateAuthority'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RestoreCertificateAuthority', props);
  }

  public revokeCertificate(input: shapes.AcmpcaRevokeCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeCertificate',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.RevokeCertificate'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          CertificateSerial: input.certificateSerial,
          RevocationReason: input.revocationReason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokeCertificate', props);
  }

  public tagCertificateAuthority(input: shapes.AcmpcaTagCertificateAuthorityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.TagCertificateAuthority'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagCertificateAuthority', props);
  }

  public untagCertificateAuthority(input: shapes.AcmpcaUntagCertificateAuthorityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.UntagCertificateAuthority'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagCertificateAuthority', props);
  }

  public updateCertificateAuthority(input: shapes.AcmpcaUpdateCertificateAuthorityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.UpdateCertificateAuthority'),
        parameters: {
          CertificateAuthorityArn: input.certificateAuthorityArn,
          RevocationConfiguration: {
            CrlConfiguration: {
              Enabled: input.revocationConfiguration?.crlConfiguration?.enabled,
              ExpirationInDays: input.revocationConfiguration?.crlConfiguration?.expirationInDays,
              CustomCname: input.revocationConfiguration?.crlConfiguration?.customCname,
              S3BucketName: input.revocationConfiguration?.crlConfiguration?.s3BucketName,
            },
          },
          Status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCertificateAuthority', props);
  }

}

export class ACMPCACreateCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaCreateCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get certificateAuthorityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.CreateCertificateAuthority.CertificateAuthorityArn'),
        outputPath: 'CertificateAuthorityArn',
        parameters: {
          CertificateAuthorityConfiguration: {
            KeyAlgorithm: this.input.certificateAuthorityConfiguration.keyAlgorithm,
            SigningAlgorithm: this.input.certificateAuthorityConfiguration.signingAlgorithm,
            Subject: {
              Country: this.input.certificateAuthorityConfiguration.subject.country,
              Organization: this.input.certificateAuthorityConfiguration.subject.organization,
              OrganizationalUnit: this.input.certificateAuthorityConfiguration.subject.organizationalUnit,
              DistinguishedNameQualifier: this.input.certificateAuthorityConfiguration.subject.distinguishedNameQualifier,
              State: this.input.certificateAuthorityConfiguration.subject.state,
              CommonName: this.input.certificateAuthorityConfiguration.subject.commonName,
              SerialNumber: this.input.certificateAuthorityConfiguration.subject.serialNumber,
              Locality: this.input.certificateAuthorityConfiguration.subject.locality,
              Title: this.input.certificateAuthorityConfiguration.subject.title,
              Surname: this.input.certificateAuthorityConfiguration.subject.surname,
              GivenName: this.input.certificateAuthorityConfiguration.subject.givenName,
              Initials: this.input.certificateAuthorityConfiguration.subject.initials,
              Pseudonym: this.input.certificateAuthorityConfiguration.subject.pseudonym,
              GenerationQualifier: this.input.certificateAuthorityConfiguration.subject.generationQualifier,
            },
          },
          RevocationConfiguration: {
            CrlConfiguration: {
              Enabled: this.input.revocationConfiguration?.crlConfiguration?.enabled,
              ExpirationInDays: this.input.revocationConfiguration?.crlConfiguration?.expirationInDays,
              CustomCname: this.input.revocationConfiguration?.crlConfiguration?.customCname,
              S3BucketName: this.input.revocationConfiguration?.crlConfiguration?.s3BucketName,
            },
          },
          CertificateAuthorityType: this.input.certificateAuthorityType,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificateAuthority.CertificateAuthorityArn', props);
    return resource.getResponseField('CertificateAuthorityArn') as unknown as string;
  }

}

export class ACMPCACreateCertificateAuthorityAuditReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaCreateCertificateAuthorityAuditReportRequest) {
    super(scope, id);
  }

  public get auditReportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificateAuthorityAuditReport',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.CreateCertificateAuthorityAuditReport.AuditReportId'),
        outputPath: 'AuditReportId',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          S3BucketName: this.input.s3BucketName,
          AuditReportResponseFormat: this.input.auditReportResponseFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificateAuthorityAuditReport.AuditReportId', props);
    return resource.getResponseField('AuditReportId') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificateAuthorityAuditReport',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.CreateCertificateAuthorityAuditReport.S3Key'),
        outputPath: 'S3Key',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          S3BucketName: this.input.s3BucketName,
          AuditReportResponseFormat: this.input.auditReportResponseFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificateAuthorityAuditReport.S3Key', props);
    return resource.getResponseField('S3Key') as unknown as string;
  }

}

export class ACMPCADescribeCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaDescribeCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get certificateAuthority(): ACMPCADescribeCertificateAuthorityCertificateAuthority {
    return new ACMPCADescribeCertificateAuthorityCertificateAuthority(this, 'CertificateAuthority', this.__resources, this.input);
  }

}

export class ACMPCADescribeCertificateAuthorityCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaDescribeCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.Arn'),
        outputPath: 'CertificateAuthority.Arn',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.Arn', props);
    return resource.getResponseField('CertificateAuthority.Arn') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.OwnerAccount'),
        outputPath: 'CertificateAuthority.OwnerAccount',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.OwnerAccount', props);
    return resource.getResponseField('CertificateAuthority.OwnerAccount') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CreatedAt'),
        outputPath: 'CertificateAuthority.CreatedAt',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CreatedAt', props);
    return resource.getResponseField('CertificateAuthority.CreatedAt') as unknown as string;
  }

  public get lastStateChangeAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.LastStateChangeAt'),
        outputPath: 'CertificateAuthority.LastStateChangeAt',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.LastStateChangeAt', props);
    return resource.getResponseField('CertificateAuthority.LastStateChangeAt') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.Type'),
        outputPath: 'CertificateAuthority.Type',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.Type', props);
    return resource.getResponseField('CertificateAuthority.Type') as unknown as string;
  }

  public get serial(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.Serial'),
        outputPath: 'CertificateAuthority.Serial',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.Serial', props);
    return resource.getResponseField('CertificateAuthority.Serial') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.Status'),
        outputPath: 'CertificateAuthority.Status',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.Status', props);
    return resource.getResponseField('CertificateAuthority.Status') as unknown as string;
  }

  public get notBefore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.NotBefore'),
        outputPath: 'CertificateAuthority.NotBefore',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.NotBefore', props);
    return resource.getResponseField('CertificateAuthority.NotBefore') as unknown as string;
  }

  public get notAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.NotAfter'),
        outputPath: 'CertificateAuthority.NotAfter',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.NotAfter', props);
    return resource.getResponseField('CertificateAuthority.NotAfter') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.FailureReason'),
        outputPath: 'CertificateAuthority.FailureReason',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.FailureReason', props);
    return resource.getResponseField('CertificateAuthority.FailureReason') as unknown as string;
  }

  public get certificateAuthorityConfiguration(): ACMPCADescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration {
    return new ACMPCADescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration(this, 'CertificateAuthorityConfiguration', this.__resources, this.input);
  }

  public get revocationConfiguration(): ACMPCADescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration {
    return new ACMPCADescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration(this, 'RevocationConfiguration', this.__resources, this.input);
  }

  public get restorableUntil(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.RestorableUntil'),
        outputPath: 'CertificateAuthority.RestorableUntil',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.RestorableUntil', props);
    return resource.getResponseField('CertificateAuthority.RestorableUntil') as unknown as string;
  }

}

export class ACMPCADescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaDescribeCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get keyAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.KeyAlgorithm'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.KeyAlgorithm',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.KeyAlgorithm', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.KeyAlgorithm') as unknown as string;
  }

  public get signingAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.SigningAlgorithm'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.SigningAlgorithm',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.SigningAlgorithm', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.SigningAlgorithm') as unknown as string;
  }

  public get subject(): ACMPCADescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject {
    return new ACMPCADescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject(this, 'Subject', this.__resources, this.input);
  }

}

export class ACMPCADescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaDescribeCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get country(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Country'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.Country',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Country', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.Country') as unknown as string;
  }

  public get organization(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Organization'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.Organization',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Organization', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.Organization') as unknown as string;
  }

  public get organizationalUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.OrganizationalUnit'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.OrganizationalUnit',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.OrganizationalUnit', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.OrganizationalUnit') as unknown as string;
  }

  public get distinguishedNameQualifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.DistinguishedNameQualifier'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.DistinguishedNameQualifier',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.DistinguishedNameQualifier', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.DistinguishedNameQualifier') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.State'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.State',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.State', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.State') as unknown as string;
  }

  public get commonName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.CommonName'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.CommonName',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.CommonName', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.CommonName') as unknown as string;
  }

  public get serialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.SerialNumber'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.SerialNumber',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.SerialNumber', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.SerialNumber') as unknown as string;
  }

  public get locality(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Locality'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.Locality',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Locality', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.Locality') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Title'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.Title',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Title', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.Title') as unknown as string;
  }

  public get surname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Surname'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.Surname',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Surname', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.Surname') as unknown as string;
  }

  public get givenName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.GivenName'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.GivenName',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.GivenName', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.GivenName') as unknown as string;
  }

  public get initials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Initials'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.Initials',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Initials', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.Initials') as unknown as string;
  }

  public get pseudonym(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Pseudonym'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.Pseudonym',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.Pseudonym', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.Pseudonym') as unknown as string;
  }

  public get generationQualifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.GenerationQualifier'),
        outputPath: 'CertificateAuthority.CertificateAuthorityConfiguration.Subject.GenerationQualifier',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.CertificateAuthorityConfiguration.Subject.GenerationQualifier', props);
    return resource.getResponseField('CertificateAuthority.CertificateAuthorityConfiguration.Subject.GenerationQualifier') as unknown as string;
  }

}

export class ACMPCADescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaDescribeCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get crlConfiguration(): ACMPCADescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration {
    return new ACMPCADescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration(this, 'CrlConfiguration', this.__resources, this.input);
  }

}

export class ACMPCADescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaDescribeCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.Enabled'),
        outputPath: 'CertificateAuthority.RevocationConfiguration.CrlConfiguration.Enabled',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.Enabled', props);
    return resource.getResponseField('CertificateAuthority.RevocationConfiguration.CrlConfiguration.Enabled') as unknown as boolean;
  }

  public get expirationInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.ExpirationInDays'),
        outputPath: 'CertificateAuthority.RevocationConfiguration.CrlConfiguration.ExpirationInDays',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.ExpirationInDays', props);
    return resource.getResponseField('CertificateAuthority.RevocationConfiguration.CrlConfiguration.ExpirationInDays') as unknown as number;
  }

  public get customCname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.CustomCname'),
        outputPath: 'CertificateAuthority.RevocationConfiguration.CrlConfiguration.CustomCname',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.CustomCname', props);
    return resource.getResponseField('CertificateAuthority.RevocationConfiguration.CrlConfiguration.CustomCname') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthority',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.S3BucketName'),
        outputPath: 'CertificateAuthority.RevocationConfiguration.CrlConfiguration.S3BucketName',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthority.CertificateAuthority.RevocationConfiguration.CrlConfiguration.S3BucketName', props);
    return resource.getResponseField('CertificateAuthority.RevocationConfiguration.CrlConfiguration.S3BucketName') as unknown as string;
  }

}

export class ACMPCADescribeCertificateAuthorityAuditReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaDescribeCertificateAuthorityAuditReportRequest) {
    super(scope, id);
  }

  public get auditReportStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthorityAuditReport',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthorityAuditReport.AuditReportStatus'),
        outputPath: 'AuditReportStatus',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          AuditReportId: this.input.auditReportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthorityAuditReport.AuditReportStatus', props);
    return resource.getResponseField('AuditReportStatus') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthorityAuditReport',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthorityAuditReport.S3BucketName'),
        outputPath: 'S3BucketName',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          AuditReportId: this.input.auditReportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthorityAuditReport.S3BucketName', props);
    return resource.getResponseField('S3BucketName') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthorityAuditReport',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthorityAuditReport.S3Key'),
        outputPath: 'S3Key',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          AuditReportId: this.input.auditReportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthorityAuditReport.S3Key', props);
    return resource.getResponseField('S3Key') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificateAuthorityAuditReport',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.DescribeCertificateAuthorityAuditReport.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          AuditReportId: this.input.auditReportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificateAuthorityAuditReport.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

}

export class ACMPCAFetchCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaGetCertificateRequest) {
    super(scope, id);
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificate',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.GetCertificate.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificate.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get certificateChain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificate',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.GetCertificate.CertificateChain'),
        outputPath: 'CertificateChain',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificate.CertificateChain', props);
    return resource.getResponseField('CertificateChain') as unknown as string;
  }

}

export class ACMPCAFetchCertificateAuthorityCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaGetCertificateAuthorityCertificateRequest) {
    super(scope, id);
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificateAuthorityCertificate',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.GetCertificateAuthorityCertificate.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificateAuthorityCertificate.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get certificateChain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificateAuthorityCertificate',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.GetCertificateAuthorityCertificate.CertificateChain'),
        outputPath: 'CertificateChain',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificateAuthorityCertificate.CertificateChain', props);
    return resource.getResponseField('CertificateChain') as unknown as string;
  }

}

export class ACMPCAFetchCertificateAuthorityCsr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaGetCertificateAuthorityCsrRequest) {
    super(scope, id);
  }

  public get csr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificateAuthorityCsr',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.GetCertificateAuthorityCsr.Csr'),
        outputPath: 'Csr',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificateAuthorityCsr.Csr', props);
    return resource.getResponseField('Csr') as unknown as string;
  }

}

export class ACMPCAFetchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaGetPolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.GetPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class ACMPCAIssueCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaIssueCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'issueCertificate',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.IssueCertificate.CertificateArn'),
        outputPath: 'CertificateArn',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          Csr: {
          },
          SigningAlgorithm: this.input.signingAlgorithm,
          TemplateArn: this.input.templateArn,
          Validity: {
            Value: this.input.validity.value,
            Type: this.input.validity.type,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IssueCertificate.CertificateArn', props);
    return resource.getResponseField('CertificateArn') as unknown as string;
  }

}

export class ACMPCAListCertificateAuthorities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaListCertificateAuthoritiesRequest) {
    super(scope, id);
  }

  public get certificateAuthorities(): shapes.AcmpcaCertificateAuthority[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificateAuthorities',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.ListCertificateAuthorities.CertificateAuthorities'),
        outputPath: 'CertificateAuthorities',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ResourceOwner: this.input.resourceOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificateAuthorities.CertificateAuthorities', props);
    return resource.getResponseField('CertificateAuthorities') as unknown as shapes.AcmpcaCertificateAuthority[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificateAuthorities',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.ListCertificateAuthorities.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ResourceOwner: this.input.resourceOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificateAuthorities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ACMPCAListPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaListPermissionsRequest) {
    super(scope, id);
  }

  public get permissions(): shapes.AcmpcaPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.ListPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.AcmpcaPermission[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.ListPermissions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ACMPCAListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmpcaListTagsRequest) {
    super(scope, id);
  }

  public get tags(): shapes.AcmpcaTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.AcmpcaTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'ACMPCA',
        physicalResourceId: cr.PhysicalResourceId.of('ACMPCA.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

