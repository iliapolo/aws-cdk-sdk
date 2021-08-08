import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AcmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToCertificate(input: shapes.AcmAddTagsToCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.AddTagsToCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTagsToCertificate', props);
  }

  public deleteCertificate(input: shapes.AcmDeleteCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DeleteCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCertificate', props);
  }

  public describeCertificate(input: shapes.AcmDescribeCertificateRequest): ACMResponsesDescribeCertificate {
    return new ACMResponsesDescribeCertificate(this, this.__resources, input);
  }

  public exportCertificate(input: shapes.AcmExportCertificateRequest): ACMResponsesExportCertificate {
    return new ACMResponsesExportCertificate(this, this.__resources, input);
  }

  public fetchAccountConfiguration(): ACMResponsesFetchAccountConfiguration {
    return new ACMResponsesFetchAccountConfiguration(this, this.__resources);
  }

  public fetchCertificate(input: shapes.AcmGetCertificateRequest): ACMResponsesFetchCertificate {
    return new ACMResponsesFetchCertificate(this, this.__resources, input);
  }

  public importCertificate(input: shapes.AcmImportCertificateRequest): ACMResponsesImportCertificate {
    return new ACMResponsesImportCertificate(this, this.__resources, input);
  }

  public listCertificates(input: shapes.AcmListCertificatesRequest): ACMResponsesListCertificates {
    return new ACMResponsesListCertificates(this, this.__resources, input);
  }

  public listTagsForCertificate(input: shapes.AcmListTagsForCertificateRequest): ACMResponsesListTagsForCertificate {
    return new ACMResponsesListTagsForCertificate(this, this.__resources, input);
  }

  public putAccountConfiguration(input: shapes.AcmPutAccountConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountConfiguration',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.PutAccountConfiguration'),
        parameters: {
          ExpiryEvents: {
            DaysBeforeExpiry: input.expiryEvents?.daysBeforeExpiry,
          },
          IdempotencyToken: input.idempotencyToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccountConfiguration', props);
  }

  public removeTagsFromCertificate(input: shapes.AcmRemoveTagsFromCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.RemoveTagsFromCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTagsFromCertificate', props);
  }

  public renewCertificate(input: shapes.AcmRenewCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.RenewCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RenewCertificate', props);
  }

  public requestCertificate(input: shapes.AcmRequestCertificateRequest): ACMResponsesRequestCertificate {
    return new ACMResponsesRequestCertificate(this, this.__resources, input);
  }

  public resendValidationEmail(input: shapes.AcmResendValidationEmailRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resendValidationEmail',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ResendValidationEmail'),
        parameters: {
          CertificateArn: input.certificateArn,
          Domain: input.domain,
          ValidationDomain: input.validationDomain,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResendValidationEmail', props);
  }

  public updateCertificateOptions(input: shapes.AcmUpdateCertificateOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCertificateOptions',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.UpdateCertificateOptions'),
        parameters: {
          CertificateArn: input.certificateArn,
          Options: {
            CertificateTransparencyLoggingPreference: input.options.certificateTransparencyLoggingPreference,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCertificateOptions', props);
  }

}

export class ACMResponsesDescribeCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmDescribeCertificateRequest) {
  }

  public get certificate(): ACMResponsesDescribeCertificateCertificate {
    return new ACMResponsesDescribeCertificateCertificate(this.__scope, this.__resources, this.__input);
  }

}

export class ACMResponsesDescribeCertificateCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmDescribeCertificateRequest) {
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.CertificateArn'),
        outputPath: 'Certificate.CertificateArn',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.CertificateArn', props);
    return resource.getResponseField('Certificate.CertificateArn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.DomainName'),
        outputPath: 'Certificate.DomainName',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.DomainName', props);
    return resource.getResponseField('Certificate.DomainName') as unknown as string;
  }

  public get subjectAlternativeNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.SubjectAlternativeNames'),
        outputPath: 'Certificate.SubjectAlternativeNames',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.SubjectAlternativeNames', props);
    return resource.getResponseField('Certificate.SubjectAlternativeNames') as unknown as string[];
  }

  public get domainValidationOptions(): shapes.AcmDomainValidation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.DomainValidationOptions'),
        outputPath: 'Certificate.DomainValidationOptions',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.DomainValidationOptions', props);
    return resource.getResponseField('Certificate.DomainValidationOptions') as unknown as shapes.AcmDomainValidation[];
  }

  public get serial(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Serial'),
        outputPath: 'Certificate.Serial',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.Serial', props);
    return resource.getResponseField('Certificate.Serial') as unknown as string;
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Subject'),
        outputPath: 'Certificate.Subject',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.Subject', props);
    return resource.getResponseField('Certificate.Subject') as unknown as string;
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Issuer'),
        outputPath: 'Certificate.Issuer',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.Issuer', props);
    return resource.getResponseField('Certificate.Issuer') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.CreatedAt'),
        outputPath: 'Certificate.CreatedAt',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.CreatedAt', props);
    return resource.getResponseField('Certificate.CreatedAt') as unknown as string;
  }

  public get issuedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.IssuedAt'),
        outputPath: 'Certificate.IssuedAt',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.IssuedAt', props);
    return resource.getResponseField('Certificate.IssuedAt') as unknown as string;
  }

  public get importedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.ImportedAt'),
        outputPath: 'Certificate.ImportedAt',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.ImportedAt', props);
    return resource.getResponseField('Certificate.ImportedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Status'),
        outputPath: 'Certificate.Status',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.Status', props);
    return resource.getResponseField('Certificate.Status') as unknown as string;
  }

  public get revokedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RevokedAt'),
        outputPath: 'Certificate.RevokedAt',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.RevokedAt', props);
    return resource.getResponseField('Certificate.RevokedAt') as unknown as string;
  }

  public get revocationReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RevocationReason'),
        outputPath: 'Certificate.RevocationReason',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.RevocationReason', props);
    return resource.getResponseField('Certificate.RevocationReason') as unknown as string;
  }

  public get notBefore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.NotBefore'),
        outputPath: 'Certificate.NotBefore',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.NotBefore', props);
    return resource.getResponseField('Certificate.NotBefore') as unknown as string;
  }

  public get notAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.NotAfter'),
        outputPath: 'Certificate.NotAfter',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.NotAfter', props);
    return resource.getResponseField('Certificate.NotAfter') as unknown as string;
  }

  public get keyAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.KeyAlgorithm'),
        outputPath: 'Certificate.KeyAlgorithm',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.KeyAlgorithm', props);
    return resource.getResponseField('Certificate.KeyAlgorithm') as unknown as string;
  }

  public get signatureAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.SignatureAlgorithm'),
        outputPath: 'Certificate.SignatureAlgorithm',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.SignatureAlgorithm', props);
    return resource.getResponseField('Certificate.SignatureAlgorithm') as unknown as string;
  }

  public get inUseBy(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.InUseBy'),
        outputPath: 'Certificate.InUseBy',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.InUseBy', props);
    return resource.getResponseField('Certificate.InUseBy') as unknown as string[];
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.FailureReason'),
        outputPath: 'Certificate.FailureReason',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.FailureReason', props);
    return resource.getResponseField('Certificate.FailureReason') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Type'),
        outputPath: 'Certificate.Type',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.Type', props);
    return resource.getResponseField('Certificate.Type') as unknown as string;
  }

  public get renewalSummary(): ACMResponsesDescribeCertificateCertificateRenewalSummary {
    return new ACMResponsesDescribeCertificateCertificateRenewalSummary(this.__scope, this.__resources, this.__input);
  }

  public get keyUsages(): shapes.AcmKeyUsage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.KeyUsages'),
        outputPath: 'Certificate.KeyUsages',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.KeyUsages', props);
    return resource.getResponseField('Certificate.KeyUsages') as unknown as shapes.AcmKeyUsage[];
  }

  public get extendedKeyUsages(): shapes.AcmExtendedKeyUsage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.ExtendedKeyUsages'),
        outputPath: 'Certificate.ExtendedKeyUsages',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.ExtendedKeyUsages', props);
    return resource.getResponseField('Certificate.ExtendedKeyUsages') as unknown as shapes.AcmExtendedKeyUsage[];
  }

  public get certificateAuthorityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.CertificateAuthorityArn'),
        outputPath: 'Certificate.CertificateAuthorityArn',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.CertificateAuthorityArn', props);
    return resource.getResponseField('Certificate.CertificateAuthorityArn') as unknown as string;
  }

  public get renewalEligibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalEligibility'),
        outputPath: 'Certificate.RenewalEligibility',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.RenewalEligibility', props);
    return resource.getResponseField('Certificate.RenewalEligibility') as unknown as string;
  }

  public get options(): ACMResponsesDescribeCertificateCertificateOptions {
    return new ACMResponsesDescribeCertificateCertificateOptions(this.__scope, this.__resources, this.__input);
  }

}

export class ACMResponsesDescribeCertificateCertificateRenewalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmDescribeCertificateRequest) {
  }

  public get renewalStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.RenewalStatus'),
        outputPath: 'Certificate.RenewalSummary.RenewalStatus',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.RenewalSummary.RenewalStatus', props);
    return resource.getResponseField('Certificate.RenewalSummary.RenewalStatus') as unknown as string;
  }

  public get domainValidationOptions(): shapes.AcmDomainValidation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.DomainValidationOptions'),
        outputPath: 'Certificate.RenewalSummary.DomainValidationOptions',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.RenewalSummary.DomainValidationOptions', props);
    return resource.getResponseField('Certificate.RenewalSummary.DomainValidationOptions') as unknown as shapes.AcmDomainValidation[];
  }

  public get renewalStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.RenewalStatusReason'),
        outputPath: 'Certificate.RenewalSummary.RenewalStatusReason',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.RenewalSummary.RenewalStatusReason', props);
    return resource.getResponseField('Certificate.RenewalSummary.RenewalStatusReason') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.UpdatedAt'),
        outputPath: 'Certificate.RenewalSummary.UpdatedAt',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.RenewalSummary.UpdatedAt', props);
    return resource.getResponseField('Certificate.RenewalSummary.UpdatedAt') as unknown as string;
  }

}

export class ACMResponsesDescribeCertificateCertificateOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmDescribeCertificateRequest) {
  }

  public get certificateTransparencyLoggingPreference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Options.CertificateTransparencyLoggingPreference'),
        outputPath: 'Certificate.Options.CertificateTransparencyLoggingPreference',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.Certificate.Options.CertificateTransparencyLoggingPreference', props);
    return resource.getResponseField('Certificate.Options.CertificateTransparencyLoggingPreference') as unknown as string;
  }

}

export class ACMResponsesExportCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmExportCertificateRequest) {
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ExportCertificate.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          CertificateArn: this.__input.certificateArn,
          Passphrase: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportCertificate.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get certificateChain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ExportCertificate.CertificateChain'),
        outputPath: 'CertificateChain',
        parameters: {
          CertificateArn: this.__input.certificateArn,
          Passphrase: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportCertificate.CertificateChain', props);
    return resource.getResponseField('CertificateChain') as unknown as string;
  }

  public get privateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ExportCertificate.PrivateKey'),
        outputPath: 'PrivateKey',
        parameters: {
          CertificateArn: this.__input.certificateArn,
          Passphrase: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportCertificate.PrivateKey', props);
    return resource.getResponseField('PrivateKey') as unknown as string;
  }

}

export class ACMResponsesFetchAccountConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get expiryEvents(): ACMResponsesFetchAccountConfigurationExpiryEvents {
    return new ACMResponsesFetchAccountConfigurationExpiryEvents(this.__scope, this.__resources);
  }

}

export class ACMResponsesFetchAccountConfigurationExpiryEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get daysBeforeExpiry(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountConfiguration',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.GetAccountConfiguration.ExpiryEvents.DaysBeforeExpiry'),
        outputPath: 'ExpiryEvents.DaysBeforeExpiry',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountConfiguration.ExpiryEvents.DaysBeforeExpiry', props);
    return resource.getResponseField('ExpiryEvents.DaysBeforeExpiry') as unknown as number;
  }

}

export class ACMResponsesFetchCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmGetCertificateRequest) {
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.GetCertificate.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCertificate.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get certificateChain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.GetCertificate.CertificateChain'),
        outputPath: 'CertificateChain',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCertificate.CertificateChain', props);
    return resource.getResponseField('CertificateChain') as unknown as string;
  }

}

export class ACMResponsesImportCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmImportCertificateRequest) {
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ImportCertificate.CertificateArn'),
        outputPath: 'CertificateArn',
        parameters: {
          CertificateArn: this.__input.certificateArn,
          Certificate: {
          },
          PrivateKey: {
          },
          CertificateChain: {
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportCertificate.CertificateArn', props);
    return resource.getResponseField('CertificateArn') as unknown as string;
  }

}

export class ACMResponsesListCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmListCertificatesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificates',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ListCertificates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CertificateStatuses: this.__input.certificateStatuses,
          Includes: {
            extendedKeyUsage: this.__input.includes?.extendedKeyUsage,
            keyUsage: this.__input.includes?.keyUsage,
            keyTypes: this.__input.includes?.keyTypes,
          },
          NextToken: this.__input.nextToken,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCertificates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get certificateSummaryList(): shapes.AcmCertificateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificates',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ListCertificates.CertificateSummaryList'),
        outputPath: 'CertificateSummaryList',
        parameters: {
          CertificateStatuses: this.__input.certificateStatuses,
          Includes: {
            extendedKeyUsage: this.__input.includes?.extendedKeyUsage,
            keyUsage: this.__input.includes?.keyUsage,
            keyTypes: this.__input.includes?.keyTypes,
          },
          NextToken: this.__input.nextToken,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCertificates.CertificateSummaryList', props);
    return resource.getResponseField('CertificateSummaryList') as unknown as shapes.AcmCertificateSummary[];
  }

}

export class ACMResponsesListTagsForCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmListTagsForCertificateRequest) {
  }

  public get tags(): shapes.AcmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ListTagsForCertificate.Tags'),
        outputPath: 'Tags',
        parameters: {
          CertificateArn: this.__input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForCertificate.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.AcmTag[];
  }

}

export class ACMResponsesRequestCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AcmRequestCertificateRequest) {
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.RequestCertificate.CertificateArn'),
        outputPath: 'CertificateArn',
        parameters: {
          DomainName: this.__input.domainName,
          ValidationMethod: this.__input.validationMethod,
          SubjectAlternativeNames: this.__input.subjectAlternativeNames,
          IdempotencyToken: this.__input.idempotencyToken,
          DomainValidationOptions: this.__input.domainValidationOptions,
          Options: {
            CertificateTransparencyLoggingPreference: this.__input.options?.certificateTransparencyLoggingPreference,
          },
          CertificateAuthorityArn: this.__input.certificateAuthorityArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestCertificate.CertificateArn', props);
    return resource.getResponseField('CertificateArn') as unknown as string;
  }

}

